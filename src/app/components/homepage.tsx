// app/page.tsx

import Link from 'next/link';
import Image from 'next/image';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

async function fetchProducts() {
  const apiUrl =   "https://fakestoreapi.com/products/";
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.slice(0, 20); // Fetch 20 products
}

export default async function Home() {
  const products = await fetchProducts();

  return (
   
    <>
   
   
    <div className="max-w-7xl mx-auto px-4 py-0 ">
      <h1 className="text-4xl font-bold text-black   lg:mt-4 mb-12 lg:ml-[29rem]">explore categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: Product) => (
          <div key={product.id} className="border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            {product.image ? (
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-contain rounded-t-lg"
                  //height={500} width={500}
                />
              </Link>
            ) : (
               <div className="w-full h-60 bg-gray-300 flex items-center justify-center rounded-t-lg">
                 <span className="text-white">No Image Available</span>
               </div>
            )}
 
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-lg text-gray-800 mt-3">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}