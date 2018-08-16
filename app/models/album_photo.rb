# == Schema Information
#
# Table name: album_photos
#
#  id         :bigint(8)        not null, primary key
#  album_id   :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AlbumPhoto < ApplicationRecord
  validates :album_id, :photo_id, presence: true

  belongs_to :album
  belongs_to :photo
end
