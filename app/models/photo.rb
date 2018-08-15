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

  has_one_attached :file
  belongs_to :user
end
