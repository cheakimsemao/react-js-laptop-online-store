import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function DisplayTest(match) {
  
  const [data, setData] = useState({})
  console.log(match)
  useEffect(()=>{
      axios.get(`http://localhost:3000/products/${match.match.params.id}`)
      .then(res=>
          { 
                  setData(res.data)                
          }
      )
  },[])
  
  return (
    <div>
        <Link to={`/Brands${data.url}`}>Back</Link>
        <br></br>
        <img height="200px" width="300px" src={data.imageURL} alt="pic"></img>
        <h1>Name: {data.name}</h1>
        <h1>Description: {data.description}</h1>
        <h1>Price: {data.price}</h1>
    </div>
  );

}
export default DisplayTest;



        // {
        //     "id": "Dell-XPS-13",
        //     "imageURL": "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/13_9380/global_spi/notebook-xps-13-9380-whl-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400",
        //     "brandId": "Dell",
        //     "name": "Samsung-Galaxy-S5",
        //     "url": "/Samsung",
        //     "description": "Description Samsung 5",
        //     "price": "$2198.00"
        // },
        // {
        //     "id": "Dell-XPS-14",
        //     "imageURL": "https://brain-images-ssl.cdn.dixons.com/6/6/10203566/u_10203566.jpg",
        //     "brandId": "Dell",
        //     "name": "Samsung-Galaxy-S5",
        //     "url": "/Samsung",
        //     "description": "Description Samsung 5",
        //     "price": "$2198.00"
        // },
        // {
        //     "id": "Dell-XPS-15",
        //     "imageURL": "https://assets.pcmag.com/media/images/569925-tried-and-true-design.jpg",
        //     "brandId": "Dell",
        //     "name": "Samsung-Galaxy-S5",
        //     "url": "/Samsung",
        //     "description": "Description Samsung 5",
        //     "price": "$2198.00"
        // },
        // {
        //     "id": "Dell-XPS-16",
        //     "imageURL": "https://sm.pcmag.com/t/pcmag_uk/review/d/dell-xps-1/dell-xps-13-7390_r1f5.1200.jpg",
        //     "brandId": "Dell",
        //     "name": "Samsung-Galaxy-S5",
        //     "url": "/Samsung",
        //     "description": "Description Samsung 5",
        //     "price": "$2198.00"
        // },
        // {
        //     "id": "Dell-XPS-17",
        //     "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCm17XlVfqfp5xawTXCoBHKwDB1lYkCtP5Xw&usqp=CAU",
        //     "brandId": "Dell",
        //     "name": "Samsung-Galaxy-S5",
        //     "url": "/Samsung",
        //     "description": "Description Samsung 5",
        //     "price": "$2198.00"
        // },