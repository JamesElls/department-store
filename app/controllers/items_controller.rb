class ItemsController < ApplicationController
  def show
  
    puts @item
    render component: "Item", props:{item: @item, department: @department}
  end
end
