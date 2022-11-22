import React from "react";
import "./Card.css"





  const Card = ({Title,Year,Poster,Type})=>{







    return (
    
<> { <div className="card wrapper">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={Poster}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}</span>
      <p>{Type}</p>
      <p  className="right">{Year}</p>
    </div>
  
  </div>   }
    

  </>

    )
}

export {Card}