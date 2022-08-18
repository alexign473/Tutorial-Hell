import React, { useState } from 'react';

import { useProducts } from './hooks/useProducts';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Product } from './components/Product';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { IProduct } from './models';

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const [showModal, setShowModal] = useState(true);

  const handleCreate = (product: IProduct) => {
    setShowModal(false);
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {showModal && (
        <Modal title='Create New Product' onClose={() => setShowModal(false)}>
          <CreateProduct onCreate={handleCreate} />
        </Modal>
      )}

      <button
        className='fixed bottom-5 right-5 rounded-full
       bg-red-700 text-white text-2xl px-4 py-2'
        onClick={() => setShowModal(true)}
      >
        +
      </button>
    </div>
  );
}

export default App;
