'use client'

import { addToCartAction } from "@/app/actions"

const AddToCartBtn = ({id}: {id: number}) => {

    const handleClick =() => {
        addToCartAction(id)
    } 
  return (
    <button onClick={handleClick}>AddToCartBtn</button>
  )
}

export default AddToCartBtn

