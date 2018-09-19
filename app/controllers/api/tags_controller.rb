class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.photo_id = params[:photo_id]

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])

    if @tag.destroy
      render :show
    else
      render json: ["How did you get here? That tag doesn't exist!"], status: 404
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:label, :photo_id)
  end
end
