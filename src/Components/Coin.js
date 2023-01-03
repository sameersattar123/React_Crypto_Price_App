import React from "react";


const Coin = ({ name, title, price, img, symbol , url }) => {
  return (
   
          <div className="card text-center m-3 shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
            <h2>Name : {name}</h2>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text font-weight-light">Price : {price}</h6>
              <h5 className="card-title">{title}</h5>
              <h6 className="card-text">Symbol : {symbol}</h6>
              <a href={url} class="card-link" target="_blank">
              <button className="btn btn-dark">Read more</button>
              </a>
            </div>
          </div>
  );
};

export default Coin;
