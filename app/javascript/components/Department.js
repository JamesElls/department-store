import React from 'react'

export default (props) => {
    const {department, items} = props

    const renderItems = () => {
        return items.map(item => {
            return(
                <div className ='Item-container'>
                
                    <h1>{item.name}</h1>
                    <h3>${item.price}</h3>
                    <h3>{item.body}</h3>
                    <a className='button'href = {`/departments/${department.id}/items/${item.id}`}>Buy Now</a>
                </div>
            )
        })
    }

    return(
        <div>
 
        <div className = 'department-container'>
            <h1 className='department-title'>{department.title}</h1>
            <a className='button'href = {`/departments`}>Return</a>
            {renderItems()}
            </div>
        </div>
    )
}