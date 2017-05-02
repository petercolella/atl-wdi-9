class Api::NotesController < ApplicationController
  # GET /api/notes
  def index
    @notes = Note.all

    render json: @notes
  end
end