class Tag < ApplicationRecord
  validates :label, :photo_id, presence: true

  belongs_to :photo
end
