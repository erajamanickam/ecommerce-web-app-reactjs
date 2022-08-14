import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
    getProducts();
}, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
            <div className="justify-content-center pb-2">
                <ul className='justify-content-center cat-tab'>
                    <li className='category-tab' onClick={()=>setFilter(data)}><i className='fa fa-dot-circle'></i> All</li>
                    <li className='category-tab' onClick={()=>filterProduct("men's clothing")}><i className='fa fa-dot-circle'></i> Men's</li>
                    <li className='category-tab' onClick={()=>filterProduct("women's clothing")}><i className='fa fa-dot-circle'></i> Women's</li>
                    <li className='category-tab' onClick={()=>filterProduct("jewelery")}><i className='fa fa-dot-circle'></i> Jewelery</li>
                    <li className='category-tab' onClick={()=>filterProduct("electronics")}><i className='fa fa-dot-circle'></i> Electronics</li>
                </ul>
            </div>
            {filter.map((product) => {
                return (
                    <div className="col-lg-3 col-md-4 col-12">
                        <div className="product">
                            <span class="star-rating"><i className='fa fa-star'></i> {product.rating && product.rating.rate} </span>
                            <div className="product-img">
                                <NavLink to={`/products/${product.id}`}>
                                    <img src={product.image} alt={product.title} />
                                </NavLink>
                            </div>
                            <div className="product-info">
                                <h5>{product.title.substring(0,12)}...</h5>
                                <p>$ {product.price}</p>
                                <NavLink to={`/products/${product.id}`} className='btn btn-primary'>Add to cart</NavLink>
                            </div>
                        </div>
                    </div>
                );
            })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h3 className='fw-bolder text-center'>Latest Products</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Products;

