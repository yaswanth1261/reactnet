import React from 'react'
import Myimg from './Assets/moneyheist2.jpg'
import { Mdata } from './Data/Moviesdata'
import { Link } from 'react-router-dom'




function Content() {
  const Mdata1 = Mdata.slice(0,4)
  return (
    <div className='containerfluid'>
      <div className=' d-flex f-wrap '>
           <div className='matter '>
      
            <h4> <span className='n'>N  </span>series</h4>
            <h1 className='mheist'>MONEY <span className='heist'>HEIST</span> </h1>
            <p className='part'>P A R T - 4</p>
            <p><span className='imdb'>IMDB</span>8.8/10</p>
            <p><span className='2b'style={{color:'red'}}>2b+</span> Streams</p>
            <button className='pbutton'>play</button>
            <button className='tbutton'>watch later </button>


            </div>     
      <div className='moneyheist d-flex f-wrap '>
        <img src={Myimg} alt="" />
       </div>
       </div>
       <h1 className='rweda'style={{fontsize:'15px',fontWeight:'900',color:'white'}}>Popular Movies</h1>
      <div className=' movies1'>
      
            {
              Mdata1.map((e)=>{
                  return(
                      <div>
                          {/* <p>{e.Id}</p> */}
                          <img src={e.Image} alt="" style={{width:'300px', height:'350px'}}/>
                          <p>{e.Name}</p>
                      
                      </div>
                  )
              })
            }
          
          </div>
          <Link to='/movies'><button>viewall</button></Link>
    </div>

  )
}

export default Content
