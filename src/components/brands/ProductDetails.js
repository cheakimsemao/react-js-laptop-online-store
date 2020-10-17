import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { GrLocation } from 'react-icons/gr';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { BsFillEnvelopeFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { MdTitle, MdMessage } from 'react-icons/md';

import Macbook1 from '../../assets/images/others/laptops/Macbook-1.png';
import Macbook2 from '../../assets/images/others/laptops/Macbook-2.png';
import Macbook3 from '../../assets/images/others/laptops/Macbook-3.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    },
}));

const ProductDetails = (name) => {
    const classes = useStyles();

    const initialCount = 1;
    const [count, setCount] = useState(initialCount);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({ loading: true });
    const [spec, setSpec] = useState({})
    useEffect(() => {
        axios
            .get(`http://localhost:3000/products?productName=${name.name}`)
            .then((res) => {
                setData(res.data);  
                setSpec(res.data[0].specification)             
                setLoading({ loading: false });
            })
            .catch((err) => {
                if (err.response) {
                    setLoading({ loading: false });
                }
            });
    }, []);


//    function specification(spec){
//     for (const [key, value] of Object.entries(spec)) {  
//         return(       
//         <>
//             {key}: {value}
//         </>
//         )
//    };
// }
// Object.keys(spec).map(function(key, index) {
//     return(
//     <>
//    { spec[key] }
//     </>
//     )
//   });
const specification = Object.keys(spec).map(function(key, index) {
    return(
    <>
    {key}  : 
   { spec[key] } 
        <br></br>
    </>
    )
  });

    const goBack = () => window.history.back();
    
    return (
        <>
        {/* {JSON.stringify(data)} */}
        {/* {JSON.stringify(spec)} */}
{/* {specification(spec)}
 */}
 
{specification} 
            </>
    )
};

export default ProductDetails;
