class DepartmentsController < ApplicationController
    before_action :all_departments


    def index
        render component: "Departments", props:{departments: Department.all}
    end

    def show
        @department = Department.find(params[:id])

        @items = @department.items.all

        render component: "Department", props:{department: @department,items: @items}
    end 

    private

    def all_departments
        @departments = Department.all
    end 

end
