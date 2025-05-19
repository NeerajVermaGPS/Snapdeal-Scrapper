import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card row full-w">
      <img src={product["Image Link"] ? product["Image Link"] : "/images/def_prod.png"} alt={product.Title} className="product-card-img"/>
      <div className="product-card-body column">
        <div className="full-w column">
            <h3 className="text-overflow" title={product.Title}>
            {product.Title}
            </h3>
            <div className="product-card-body-row2 row">
                <p>Price: ₹{product.Price}</p>
                <p>Rating: {product.Rating}</p>
            </div>
        </div>
        <div className="center" style={{justifyContent: "end"}}>
            <a href={product.Link} target="_blank" rel="noopener noreferrer">
            <button className="help-btn center">Visit Product <img src="/icons/rightarrow.svg" alt="visit" style={{width: "18px", marginLeft: "5px"}} /></button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
