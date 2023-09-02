import React,{ useState } from 'react';
import {PRODUCTS} from '../shared/products';
import ShowProduct from './ShowProduct';
import { Link } from "react-router-dom";

function SearchList({ filteredProducts }) {
    const filtered = filteredProducts.map(product =><ShowProduct id = {product.id} title = {product.title} subtitle = {product.subtitle} image = {product.image} price = {product.price} description = {product.description} />
    ); 
    return (
      <div className = "row mb-5">
        {filtered}
      </div>
    );
  }
const Scroll = (props) => {
    return( 
      <div>
        {props.children}
      </div>	
    );
  }
function Search({ details }) {
    const [searchField, setSearchField] = useState("");
  
    const filteredProducts = details.filter(
      product => {
        return (
          product
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase()) 
        );
      }
    );
  
    const handleChange = e => {
      setSearchField(e.target.value);
    };
  
    function searchList() {
      return (
        <Scroll>
          <SearchList filteredProducts={filteredProducts} />
        </Scroll>
      );
    }
  
    return (
      <>
      
      <div className="row ps-3 pe-3">
        <div className= "col me-auto ">
                    <input className="form-control " type="search" placeholder="Search" aria-label="Search" onChange = {handleChange}/>
        </div>
        <div className="col me-auto">
                    <button className="btn btn-secondary rounded " type="submit">Search </button>
        </div>
        <div className="col-auto col-2 mb-2">
                    <Link to = "/checkout">
                    <button className="btn btn-secondary rounded col-12" id = "shoppingCart" >
                        <i className="fa fa-shopping-cart fa-lg"/>
                    </button>
                    </Link>
                    
        </div>
      </div>
      
      {searchList()}
      
      </>
    );
  }
function Product(){
    return(
      <>
        <div class = "row" >
                    <span class ="display-1 text-center">Products</span>
                    <hr class = "mx-auto col-lg-6"/>
        </div>
        <div className="container-fluid border-bottom mt-3 mb-3">
        <Search details = {PRODUCTS}/>
        </div>

        
      </>
    );
    
}

export default Product;