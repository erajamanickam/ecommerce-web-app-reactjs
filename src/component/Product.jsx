import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-6" style={{marginBottom:30}}>
                    <Skeleton height={350} />
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={20} width={100}/>
                    <Skeleton height={40} width={400}/>
                    <Skeleton height={20} width={100}/>
                    <Skeleton height={20} width={100}/>
                    <Skeleton height={80} width={600}/>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
            <div className='product-detail'>
                <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className='product_img_box'>
                            <img src={product.image} alt={product.title} height='350px' width='350px' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-description">
                            <a className='text-black-50 pro-category'>{product.category}</a>
                            <h5>{product.title}</h5>
                            <p className='price'>$ {product.price}</p>
                            <p className='rating'>Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i></p>
                            <p>{product.description}</p>
                            <p><strong>{product.count}</strong></p>
                            <hr />
                            <div className='product-btn'>
                                <NavLink to='' className='btn btn-primary'><i className="fas fa-cart-plus"></i> Add to cart</NavLink>
                                <NavLink to="" className='btn btn-success ms-2 px-3 py-2'><i className="fas fa-heart"></i> Wishlist</NavLink>
                            </div>
                            <div className="product_share">
                                <span>Share: </span>
                                <ul class="social_icons">
                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }
  return (
    <div>
      <div className='breadcrumb_section page-title-mini'>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="page-title"><h1>Product Details</h1></div>
            </div>
            <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li className="breadcrumb-item"><NavLink to="/products">Product Lists</NavLink></li>
                    <li className="breadcrumb-item active">Product Detail</li>
                </ol>
            </div>
        </div>
      </div>
      </div>
      <div className="container">
        <div className="row">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product;