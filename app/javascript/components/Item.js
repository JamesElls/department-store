import React from 'react'


const Item = (props) => {
    const {name, body, price, department_id} = props.item
    return(
       <div className = 'item-container'>
         <h1>{name}</h1>
         <p>{body}</p>
         <p>{price}</p>
         <a href={`/departments/${department_id}`}>Return</a>
       </div>
    )
}

export default Item