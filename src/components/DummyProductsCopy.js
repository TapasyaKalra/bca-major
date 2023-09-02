import React,{ useState } from 'react';
import {PRODUCTS} from '../shared/products';
import { Card, CardImg, CardText, CardBody, CardTitle,CardSubtitle, CardHeader } from 'reactstrap';

function ShowCard({product}){
    return(
        <div className = "col-12 col-md-4 mb-2">
            <Card key={product.id} className = "h-100">
            <CardImg src = {product.image}/>
            <CardHeader className = "bg-primary text-light">{product.title}</CardHeader>
            <CardBody>
                <CardSubtitle className = "text-muted ">{product.subtitle}</CardSubtitle>
                <CardText>{product.description}</CardText>
                <div className = "buy d-flex justify-content-between align-items-center" >
                    <div class="price text-success"><h5 class="mt-4">₹{product.price}</h5></div>
                    
                </div>
                </CardBody>
        </Card>
        </div>
    );
}
function SearchList({ filteredProducts }) {
    const filtered = filteredProducts.map(product =>  <ShowCard product={product} />); 
    return (
      <div>
        {filtered}
      </div>
    );
  }
const Scroll = (props) => {
    return( 
      <div style={{overflowY: 'scroll', height:'70vh'}}>
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
      <section className="">
        <div className="">
          <h2 className="">Search your course</h2>
        </div>
        <div className="pa2">
          <input 
            className=""
            type = "search" 
            placeholder = "" 
            onChange = {handleChange}
          />
        </div>
        {searchList()}
      </section>
    );
  }
function DummyProductCopy(){
    return(
        <Search details = {PRODUCTS}/>
    );
    
}

export default DummyProductCopy;