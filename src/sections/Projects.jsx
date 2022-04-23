import React, {  useState } from 'react'
import { imgItem } from '../imgData'
import MenuItems from '../MenuItems';
import Button from './Button';


export default function Projects() {
 
  const [items, setItems] = useState(imgItem);
  const filterItem = (category) =>{
    const updateItems = imgItem.filter((curElm) =>{
      return curElm.category === category ;
    })
    setItems(updateItems)

  }
  return (
    
    <section id="project" name='project'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <div className="project-part-left">
            <h3>OUR WORKS</h3>
          </div>
         
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <div className="project-part-right">
            <p>
              See All Project in dribbble<i className="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
     <Button filterItem={filterItem} setItems={setItems} />
    <MenuItems items={items}/>
  </section>
  )
}
