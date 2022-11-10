 import React from 'react'

 const  Weather= (props) => {


    return (
     
      
     <div className='card2 col-lg-4 col-md-5 bo'>
      <div class="row px-3 ">
      <div className='mr-5'>
      
                    <div className="row px-3">
                      
                        <p>  { props.tempreature && <p >  tempreature :<span>{ props.tempreature}</span> </p>}</p>
                    </div>
                    <div className="row px-3">
                        
                        <p className="ml-auto"> {props.city  && (<p   > city :<span>{ props.city}</span></p>)} </p>
                    </div>
                    <div className="row px-3">
                 
                        <p className="ml-auto">  {  props.country && <p  >  country :<span>{ props.country}</span> </p> } </p>
                    </div>
                    <div className="row px-3">
                        
                        <p className="ml-auto">  {  props.humidity && <p  > Humidity :<span>{ props.humidity}</span> </p> } </p>
                    </div>
                    <div className="row px-3">
             
                        <p className="ml-auto">  {  props.description && <p  >  Description : <span>{ props.description}</span> </p> }
                         </p>
                    </div>
                   
            
            

          
       
          

      </div>
     </div>
     </div>
    )
  }


export default Weather