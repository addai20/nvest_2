class SecuritiesController < ApplicationController
  def index
    render json: Security.all
  end

  def show
    render json: Security.find(params[:id])
  end

  private

  def strong_params

  end
end
