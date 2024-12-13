import React from 'react'
import { Mdata } from '../Data/Moviesdata'
import { useParams } from 'react-router-dom'

function Moviedetails() {
    let { Id } = useParams()
    let Moviedet = Mdata.find((item) => item.Id == Id)
  return (
    <div>
      < div className='container-fluid '>
            
             
                      <div>
                          <p>{Moviedet.Id}</p>
                          <img src={Moviedet.Image} alt="" style={{width:'200px',borderRadius:'5px'}}/>
                          <p>{Moviedet.Name}</p>
                          <p>{Moviedet.duration}</p>
                          <p>{Moviedet.Rating}</p>                        
                      </div>
                
            
        
          </div>
    </div>
  )
}

export default Moviedetails
