class CommentsController < ApplicationController
  def index
  	@message2 = "Comments says Hello"

  	@article = Article.find(params[:article_id])
  	@comments = @article.comments
  end
end
