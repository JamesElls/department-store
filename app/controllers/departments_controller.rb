class DepartmentsController < ApplicationController
    def index
        render component: "Departments", props:{departments:Department.all}
    end

    def show
        render component: "Department", props:{department: Department.find(params[:id])}
    end 

end
