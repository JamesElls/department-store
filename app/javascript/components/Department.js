import React from 'react'

export default (props) => {
    const {department, items} = props

    const renderItems = () => {
        return items.map(item => {
            return(
                <div className = 'Item-container'>
                    <h1>{item.name}</h1>
                    <h3>{item.price}</h3>
                    <h3>{item.body}</h3>
                </div>
            )
        })
    }
    return(
        <div>
            <h1>{department.title}</h1>
            {renderItems()}
        </div>
    )
}