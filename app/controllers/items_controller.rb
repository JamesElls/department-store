class ItemsController < ApplicationController
    before_action :set_department
    before_action :set_item, only: [:show, :edit, :update, :destroy]
    private
  
    def set_department
      @Department = Department.find(params[:sub_id])
    end
    
    def set_item
      @item = Item.find(params[:id])
    end
    
    def item_params
      params.require(:item).permit(:title, :price, :description)
    end
  end
end
