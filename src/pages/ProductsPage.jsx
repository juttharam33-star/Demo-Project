import { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid.jsx';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext';

const categories = ['All objects', 'Ceramics', 'Textiles', 'Objects'];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState('All objects');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('Featured');

  const visibleProducts = useMemo(() => {
    let result = products.filter(
      (item) => category === 'All objects' || item.category === category
    );
    if (sort === 'Price: low to high') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'Price: high to low') result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [category, query, sort]);

  return (
    <main className="mx-auto min-h-[65vh] max-w-[1440px] px-5 pb-20 pt-10 sm:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 border-b pb-4">
        {/* Pass addToCart to your existing ProductGrid component */}
        {visibleProducts.length ? (
          <ProductGrid items={visibleProducts} onAdd={addToCart} />
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}