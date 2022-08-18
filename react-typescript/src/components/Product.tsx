import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const btnClassName = showDetails ? 'bg-blue-400' : 'bg-yellow-400';
  const btnClasses = `py-2 px-4 border ${btnClassName}`;

  return (
    <div className='border py-2 px-4 rounded flex flex-col mb-2 items-center'>
      <img src={product.image} className='w-1/6' alt={product.title} />
      <p>{product.title}</p>
      <span className='font-bold'>${product.price}</span>
      <button
        className={btnClasses}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
      {showDetails && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate: <span className='font-bold'>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
