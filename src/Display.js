import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function DisplayTest(match) {
  
  const [data, setData] = useState({})
  console.log(match)
  useEffect(()=>{
      axios.get(`http://localhost:3000/lists/${match.match.params.id}`)
      .then(res=>
          { 
                  setData(res.data)                
          }
      )
  },[])
  
  return (
    <div>
        <Link to={data.url}>Back</Link>
        <br></br>
        <img height="200px" width="300px" src={data.imageURL} alt="pic"></img>
        <h1>Name: {data.name}</h1>
        <h1>Description: {data.description}</h1>
        <h1>Price: {data.price}</h1>
    </div>
  );

}
export default DisplayTest;
