import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <div>
      <section className="card">
        <picture>
          <source srcSet="/images/shoe-amz-720-pad.webp" type="image/webp" />
          <img
            className="product-img"
            src="/images/shoe-amz-720-pad.jpg"
            alt="Shoe"
            loading="lazy"
            decoding="async"
            width="360"
            height="360"
          />
        </picture>
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
