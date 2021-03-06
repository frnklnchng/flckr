# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, :user_id, presence: true
  validate :ensure_file

  has_one_attached :file
  belongs_to :user
  has_many :album_photos, dependent: :destroy, inverse_of: :photo

  def ensure_file
    errors[:file] << "Image required." unless self.file.attached?
  end
end
