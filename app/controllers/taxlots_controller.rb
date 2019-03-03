class SecuritiesController < ApplicationController
  def index
    render json: Taxlot.all
  end

  def show
    render json: Taxlot.find(params[:id])
  end
end
