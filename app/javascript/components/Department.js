import React from 'react'

export default (props) => {
    const {department} = props
    return(
        <div>
            <h1>{department.title}</h1>
            
        </div>
    )
}