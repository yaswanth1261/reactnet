import React from 'react'
import { Mdata } from '../Data/Moviesdata'
import Sidenav from '../Sidenav'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Movies() {
  return (
    <div className='container-fluid movies' style={{backgroundColor:'black'}}>
      <Row>
        <Col md={2}>
        <Sidenav/>
        </Col>
        <Col md={10}> 
    < div className='container-fluid movies2'>
      {
        Mdata.map((e)=>{
            return(
              <Link to={`/movies/${e.Id}`}>
                <div>
                    <p>{e.Id}</p>
                    <img src={e.Image} alt="" style={{width:'200px',borderRadius:'5px'}}/>
                    <p>{e.Name}</p>
                  
                </div></Link>
            )
        })
      }
    </div></Col>
      </Row>
      
    </div>
  )
}

export default Movies
