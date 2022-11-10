import React from 'react'

 const Form =(props)=>{
  
    return (
      <div class="card2 col-lg-4 col-md-5">
                <div class="row px-3">
                   
                    
              <form onSubmit={props.getweather}>
             <input type="text" name ="city"placeholder='Name of the City...' class="mb-5" required/>
             <input type="text" name="country"placeholder='Name of the Country...' class="mb-5" required/>
            
             <button>Get Weather </button>
             </form>
                </div>
      </div>
        
    )
  }


export default Form