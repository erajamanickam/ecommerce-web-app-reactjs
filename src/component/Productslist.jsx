import React from 'react'
import Products from './Products'
import { NavLink } from "react-router-dom";
const Productlist = () => {
  return (
    <div>
     <div className='breadcrumb_section page-title-mini'>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="page-title"><h1>Product Lists</h1></div>
            </div>
            <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li className="breadcrumb-item active">Product Lists</li>
                </ol>
            </div>
        </div>
      </div>
      </div>
      <Products />
    </div>  
  )
}

export default Productlist;