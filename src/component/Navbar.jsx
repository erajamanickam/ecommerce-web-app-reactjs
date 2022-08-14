import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show">
        <div className="container">
            <p>Shop our new arrivals from established brands <NavLink to='/products'>Shop Now</NavLink></p>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        </div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">⚛️ Shopping</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/"><i className="fas fa-login"></i>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Offers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Contact Us</NavLink>
        </li>
      </ul>
      <div className="buttons">
        <NavLink to="/" className="btn-blk"><i className="fa fa-sign-in me-1"></i> Login</NavLink>
        <NavLink to="/" className="btn-blk ms-4"><i className="fas fa-cart-plus"></i> Cart (0)</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;