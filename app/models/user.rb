class User < ApplicationRecord
  validates :email, :username, :password_digest, :session_token,
  :first_name, :last_name, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  attr_reader :password
  
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    self.session_token = SecureRandom.urlsafe_base64

    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end