import React from 'react'

export default (props) => {

    const {departments} =  props

    const renderDepartments = () => {
        return departments.map(department => {
            return(
                <div className = 'departments-container'>
                    <h1>{department.title}</h1>
                    <a className='button'href={`http://localhost:3000/departments/${department.id}`}>Shop Now</a>
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

//= require jquery
//= require bootstrap-sprockets