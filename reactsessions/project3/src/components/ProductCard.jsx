import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
    <div className="card h-100 shadow-sm">
      {/* Image with responsive handling */}
      <div className="d-flex justify-content-center align-items-center p-3 bg-light" style={{ height: "200px" }}>
        <img
          src={product.image}
          className="img-fluid rounded"
          alt={product.title}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <div className="mt-auto">
          <p className="text-muted">Category: {product.category}</p>
          <p className="fw-bold">Price: ${product.price}</p>
          <p className="text-warning">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button className="btn btn-primary w-100">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard