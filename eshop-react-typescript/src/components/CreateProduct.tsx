import React, { useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter valid title');
      return;
    }
    productData.title = value;
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    );
    onCreate(response.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full outline-none'
        placeholder='Enter product title...'
        value={value}
        onChange={handleChange}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type='submit'
        className='py-2 px-4 border bg-yellow-400 hover:bg-yellow-500'
      >
        Create
      </button>
    </form>
  );
};
