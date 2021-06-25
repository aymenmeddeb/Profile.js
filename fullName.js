import React from 'react'

function FullName(props) {
  const handleClick=(e)=>{
    e.preventDefault(e);
    alert(props.name);
    alert(props.profession);
  }
  return (
      <div >
    <h1 style={{backgroundColor:'blue',height:"100px",width:'500px',margin:'30px auto'}}>{props.name}</h1>
    <h2 style={{backgroundColor:'blue',height:"100px",width:'500px',margin:'30px auto'}}>{props.profession}</h2>
    <h3 style={{backgroundColor:'blue',height:"200px",width:'500px',margin:'30px auto'}}>{props.bio}</h3>
   <button> <a href="/" onClick={handleClick}>
     Click me </a></button>
     <input type="text" value=""/>
     
    </div>
    
  )
}

export default FullName;
