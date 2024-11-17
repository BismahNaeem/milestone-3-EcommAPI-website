import React from "react";
import Image from "next/image"

export default function Lipstick() {
  return (
    <div className="cards-container">
      <div className="card">
        <Image src="/images/img5.jpg" alt="Product 1" height={500}  width={500}/>
        <h3>Product Name 1</h3>
        <p className="price">$25.00</p>
        <div className="rating">
          <span>★★★★☆</span>
        </div>
      </div>
      <div className="card">
        <img src="/images/img6.webp" alt="Product 2" height={500}  width={500}/>
        <h3>Product Name 2</h3>
        <p className="price">$30.00</p>
        <div className="rating">
          <span>★★★★☆</span>
        </div>
      </div>
      <div className="card">
        <img src="/images/img7.jpeg" alt="Product 3" height={500}  width={500} />
        <h3>Product Name 3</h3>
        <p className="price">$20.00</p>
        <div className="rating">
          <span>★★★★☆</span>
        </div>
      </div>
      <div className="card">
        <img src="/images/img8.webp" alt="Product 4" height={500}  width={500} />
        <h3>Product Name 4</h3>
        <p className="price">$40.00</p>
        <div className="rating">
          <span>★★★★☆</span>
        </div>
     
      </div>
    </div>
  );
}

