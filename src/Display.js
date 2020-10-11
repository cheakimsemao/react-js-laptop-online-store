import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

function Display(name) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({ loading: true });
  console.log(name);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?productName=${name.name}`)
      .then((res) => {
        // console.log(res);
        setData(res.data);
        setLoading({ loading: false });
      })
      .catch((err) => {
        if (err.response) {
          setLoading({ loading: false });
        }
      });
  }, []);

    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            {data.length>0? (
                data.map((data)=>(
                <div>
                    <Link to={`/Brands${data.url}`}>Back</Link>
                    <br></br>
                    <img height='200px' width='300px' src={data.imageURL} alt='pic'></img>
                    <h1>Name: {data.name}</h1>
                    <h1>Description: {data.description}</h1>
                    <h1>Price: {data.price}</h1>
                </div>
            ))) : (
                <>
                    <ClipLoader size={150} color={'#123abc'} loading={loading.loading} />
                    {loading.loading === false ? (
                        <>
                            <Link onClick={goBack}>Go Back</Link>
                            <br></br>
                            Sorry, no data available
                        </>
                    ) : (
                        ''
                    )}
                </>
            )}
        </>
    );
}

export default Display;
