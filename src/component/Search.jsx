import React from "react";



const Search = ({isSearch ,searchChange,post, isRadio})=>{

  



    return (
        
       <div>
        
<div className="row">
<div className="input-field col s6" >

  <input  htmlFor='radio' type="text" value={isSearch} onChange={searchChange}    className="validate" />
  <label htmlFor='radio' className="active" for="first_name2">Search</label> 
<button onClick={()=> post(isSearch, isRadio)}>post</button>
</div>
</div>
       </div> 
  
        
    )
}

export {Search}






