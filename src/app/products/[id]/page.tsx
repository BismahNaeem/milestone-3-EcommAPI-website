

import { FaStar } from "react-icons/fa";
export default async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch product details based on the dynamic ID
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json(); // Parse the JSON data
 
   
  
  
   
    
   
      
     
      
       
          
        
  


  return (
    <>
    
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg mt-20">
      <div className="flex gap-8">
        {/* Left: Product Image */}
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain rounded-md "
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 space-y-4 lg:mt-20">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          {/* Ratings and Stars */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600 text-sm">(4.5/5 based on 120 reviews)</p>
          </div>

          {/* Description */}
          <p className="text-gray-700">{product.description}</p>

          {/* Price */}
          <p className="text-xl font-bold text-gray-800">Price: ${product.price}</p>

          {/* Category */}
          <p className="text-sm text-gray-500">Category: {product.category}</p>

         

            
           

       
           
          </div>
        </div>
      </div>
    
    </>
  );
}