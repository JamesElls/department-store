import React from 'react'

export default (props) => {
    const { items } = props

    const renderItems = () => {
        return items.map(item => {
            return(
                <div className = 'items-container'>
                    <h1>{item.name}</h1>
                    <h3>{item.price}</h3>
                    <h3>{item.body}</h3>
                </div>
            )
        })
    }
    return(
        <div>
            {renderItems()}
        </div>
    )
}



