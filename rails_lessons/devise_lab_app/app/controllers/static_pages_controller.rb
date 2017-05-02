class StaticPagesController < ApplicationController
	before_action :authenticate_user!, only: [:support, :configure]
	before_action :redirect_unless_admin, only: [:configure]
  def home
  end

  def welcome
  end

  def support
  end

  def configure
  end
end
