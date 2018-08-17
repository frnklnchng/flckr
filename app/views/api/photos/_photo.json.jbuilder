json.extract! photo, :id, :title, :description, :user_id, :created_at
json.user photo.user
json.file url_for(photo.file)
