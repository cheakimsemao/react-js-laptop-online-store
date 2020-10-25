import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Pagination from 'react-bootstrap/Pagination';
import { Link, useLocation } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Macbook1 from '../../assets/images/others/laptops/Macbook.png';
import ClipLoader from 'react-spinners/ClipLoader';
import ProductDetails from './ProductDetails';

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

const ProductList = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({ loading: true });

    useEffect(() => {
        fetchData();
    }, [props.match.params.name]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/laptops?brand=${props.match.params.name}`);
        setLoading({ loading: false });
        setData(response.data);
    };

    const products = data.map((item) => (
        <div key={item.id} className={'product-items index'}>
            <Link to={`/brands/${item.brand}?name=${item.productName}`}>
                <img src={item.imageURL} alt={item.productName} width='300px' height='200px' />
            </Link>
            <p class='product-items-title'>{item.productName}</p>
            <div className={classes.root}>
                <Box component='fieldset' mt={1} mb={1} borderColor='transparent'>
                    <Rating name='read-only' value={5} size='small' readOnly />
                </Box>
            </div>
            <p class='price'>${item.price}</p>
        </div>
    ));

    const goBack = () => window.history.back();

    const useQuery = () => new URLSearchParams(useLocation().search);

    let query = useQuery();
    let name = query.get('name');

    const productBrand = data.slice(0, 1).map((item) => <>{item.brand}</>);

    return (
        <>
            {name ? (
                <ProductDetails name={name} />
            ) : data.length > 0 || loading.loading === 'false' ? (
                <div>
                    <div className='breadcrumbs'>
                        <p>
                            Home / Brands / <span>{productBrand}</span>
                        </p>
                    </div>
                    <Carousel id='carousel'>
                        <Carousel.Item>
                            <img className='d-block w-100' src={Macbook1} alt='First slide' />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='d-block w-100' src={Macbook1} alt='Second slide' />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='d-block w-100' src={Macbook1} alt='Third slide' />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div id='products'>
                        <div className='review-title'>
                            <span> {productBrand} Products</span>
                            <hr />
                        </div>
                        <div className='sorted-by'>
                            <FormControl style={{ width: '150px', marginRight: '30px' }}>
                                <NativeSelect
                                    defaultValue='newest'
                                    style={{ fontSize: '12px', color: '#ff6600' }}>
                                    <option value='newest'>NEWEST</option>
                                    <option value='oldest'>OLDEST</option>
                                </NativeSelect>
                                <FormHelperText style={{ fontSize: '9px' }}>SORTED BY</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <div className='grid-container'>{products}</div>
                    <Pagination>
                        {/* <Pagination.First /> */}
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        {/* <Pagination.Last /> */}
                    </Pagination>
                </div>
            ) : (
                <>
                    <ClipLoader size={150} color={'#123abc'} loading={loading.loading} />
                    {loading.loading === false && (
                        <>
                            <Link onClick={goBack}>Go Back</Link>
                            <br></br>
                            Sorry, no data available
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default ProductList;
