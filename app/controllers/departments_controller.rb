class DepartmentsController < ApplicationController
    #Var for a department based on :id
    


    #Var for all departments
    @departments = Department.all



    def index
        render component: "Departments", props:{departments: Department.all}
    end

    def show
        #Var for a department based on the id
        @department = Department.find(params[:id])

        #Var for items  
        @items = @department.items.all

        render component: "Department", props:{department: @department,items: @items}


    end 

end
