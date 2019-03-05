class TaxlotsController < ApplicationController

  def index
    @taxlots = Taxlot.all
    render json: Security.all

  end

  def show
    @taxlot = Taxlot.all.find(params[:id])
  end


  private

  def strong_params
    params.permit(:taxlot).require(
      :account_id,
      :security_id,
      :quantity,
      :price
    )
  end
end


# t.integer :account_id
# t.integer :security_id
# t.integer :quantity
# t.integer :price
