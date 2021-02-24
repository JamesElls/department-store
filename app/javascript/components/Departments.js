import React from 'react'

export default (props) => {

    const {departments} =  props
    console.log (departments)

    const renderDepartments = () => {
        return departments.map(department => {
            return(
                <div className = 'Department-container'>
                    <h1>{department.title}</h1>
                    <a href={`http://localhost:3000/departments/${department.id}`}>shop now</a>
                </div>
            )
        })
    }

    return(
        <div>
            {renderDepartments()}
        </div>
    )
}