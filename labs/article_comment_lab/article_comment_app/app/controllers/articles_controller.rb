class ArticlesController < ApplicationController
  def index
  	@message = "Articles says Hello"

  	@articles = Article.all
  end
end
