import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

function DisplayTest(match) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState({ loading: true });

    useEffect(() => {
        axios
            .get(`http://localhost:3000/products/${match.match.params.id}`)
            .then((res) => {
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
            {data.id ? (
                <div>
                    <Link to={`/Brands${data.url}`}>Back</Link>
                    <br></br>
                    <img height='200px' width='300px' src={data.imageURL} alt='pic'></img>
                    <h1>Name: {data.name}</h1>
                    <h1>Description: {data.description}</h1>
                    <h1>Price: {data.price}</h1>
                </div>
            ) : (
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

export default DisplayTest;
