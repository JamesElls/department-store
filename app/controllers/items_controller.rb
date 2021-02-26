class ItemsController < ApplicationController
  before_action :get_department
  before_action :get_item, only: [:show]
  
  def show

    
    puts @item
    render component: "Item", props:{item: @item, department: @department}
  end



  private
    
  def get_department
    @department = Department.find(params[:department_id])
  end
 
  def get_item
    @item = @department.items.find(params[:id]) 
  end


end
