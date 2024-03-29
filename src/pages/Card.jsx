import React from 'react'
import "./BlogCSS/Card.css"

function Card(props) {
    return (
        <div className='container mt-5'>
            
                
                <div class="card">
        <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
                    <h5 class="card-title">{ props.title}</h5>
                    <p class="card-text">{props.p }</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>


            


      </div>
  
  )
}

export default Card