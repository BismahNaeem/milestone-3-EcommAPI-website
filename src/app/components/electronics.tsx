import Link from "next/link";
import Image from "next/image";

export default async function ElectronicsPage() {
  const response = await fetch("https://fakestoreapi.com/products/category/electronics");
  const products = await response.json();

  interface Product{
    title:string;
    image: string;
    price : number ;
    id : number;

  }
  return (
    <>
     <h1 className="text-4xl font-bold text-black   lg:mt-4 mb-12 lg:ml-[29rem]">electronics</h1>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {products.map((product: Product) => (
        <div key={product.id} className="border rounded-lg p-4">
          {/* Wrap the product content and link inside a single parent div */}
          <Link href={`/products/${product.id}`}>
            <div className="block"> {/* Ensure the link wraps the whole content */}
              <Image
                src={product.image}
                alt={product.title}
                height={500} width={500}
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        </div>
        
      ))}
    </div>
    </>
  );
}