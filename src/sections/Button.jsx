import React, { useState } from 'react'
import { imgItem } from '../imgData'




export default function Button({filterItem, setItems}) {
  const [activeBtn, setActiveBtn] = useState(false)

  const handelClick = () =>{
    // setActiveBtn(activeBtn => !activeBtn)
  }
  
  // const toggleActiveClass = activeBtn ? 'active' : ''
  return (
   <>
        
            <div className= "controls mb-3 ms-5 filter-btn"  onClick={handelClick} >
           
            <label>Filter:</label>
            
            <a className="filter  me-2 " data-filter="all"onClick={() =>setItems(imgItem)} >All</a>
            <a className="filter me-2" data-filter="category-1" onClick={() =>filterItem('categoryOne')}>Category 1</a>
            <a className="filter me-2" data-filter="category-2" onClick={() =>filterItem('categoryTwo')}>Category 2</a>
           </div>
        
          
      
   </>
  )
}
