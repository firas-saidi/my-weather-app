import React from 'react'

 const Form =(props)=>{
  
    return (
      <div className="card2 col-lg-4 col-md-5">
                <div className="row px-3">
                   
                    
              <form onSubmit={props.getweather}>
             <input type="text" name ="city"placeholder='Name of the City...' className="mb-5" required/>
             <input type="text" name="country"placeholder='Name of the Country...' className="mb-5" required/>
            
             <button>Get Weather </button>
             </form>
                </div>
      </div>
        
    )
  }


export default Form