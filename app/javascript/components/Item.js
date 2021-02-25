import React from 'react'

const Item = (props) => {
    const {name, body, price, department_id} = props.item
    return(
       <>
         <h1>{name}</h1>
         <p>{body}</p>
         <p>{price}</p>
         <a href={`/Departments/${department_id}`}>Return</a>
       </>
    )
}

export default Item