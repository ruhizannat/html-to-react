import React from 'react'
import Venobox from 'venobox'
import { useEffect } from 'react';

export default function MenuItems({items}) {
  useEffect(() =>{
    new Venobox({
 
      spinner: 'wave',
      width : '500px',                            
      height: '400px',                            
                           
       
      
  });
  }, [])
  
  return (
    <>
       <div className="container-fluid">
      
      <div className="row">
        {items.map((elm) =>{
          const {id, img, img1} = elm
          return(
                
              
                <div key={id} className="col-lg-2 col-md-3 col-sm-6 col-6 p-0" >
                <div className="project-img ">
                
                  <a className="venobox"   data-gall='gallery01' href={img1}>
                    
                    <img
                      src={img}
                    
                      alt="image not found"
                      className="img-fluid"
                    />
                    </a>
                  </div>
                </div>

                
              
                   
                  )

                })}



                
      
      </div>

        
     
      <div className="row">
        <div className="col-lg-12">
          <div className="project-btn text-center ">
            {/* <a href="#" className='me-2'>ALL</a>
            <a href="#" className='me-2'>TEAMS</a>
            <a href="#" className='me-2'>Features Teams</a> */}
            <a href="#">LOAD MORE</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
