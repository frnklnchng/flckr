class Api::PhotosController < ApplicationController
  def index
    @photos = params[:user_id] ? Photo.where(user_id: params[:user_id]) : Photo.all
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])

    if @photo
      render :show
    else
      render json: ["How did you get here? That photo doesn't exist!"], status: 404
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])

    if @photo.update(photo_params)
      render :show
    else
      render json: ["How did you get here? That photo doesn't exist!"], status: 404
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :user_id, :file)
  end
end
