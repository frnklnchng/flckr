class Api::AlbumsController < ApplicationController
  def index
    @albums = params[:user_id] ? Album.where(user_id: params[:user_id]) : Album.all
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    photos = JSON.parse(params[:photos])

    if @album.save
      unless photos.empty?
        id = @album.id
        photos.each {|photo| AlbumPhoto.create(album_id: id, photo_id: photo)}
      end

      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])

    if @album
      render :show
    else
      render json: ["How did you get here? That album doesn't exist!"], status: 404
    end
  end

  def update
    @album = current_user.albums.find(params[:id])
    photos = JSON.parse(params[:photos])

    if @album.update(album_params)
      unless photos.empty?
        @album.album_photos.destroy_all
        
        id = @album.id
        photos.each {|photo| AlbumPhoto.create(album_id: id, photo_id: photo)}
      end

      @album.album_photos

      render :show
    else
      render json: ["How did you get here? That album doesn't exist!"], status: 404
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id])
    @album.destroy
    render :show
  end

  private

  def album_params
    params.require(:album).permit(:title, :description, :user_id)
  end
end
