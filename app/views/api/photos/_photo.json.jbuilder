json.extract! photo, :id, :title, :description, :user_id
json.user photo.user
json.file url_for(photo.file)
