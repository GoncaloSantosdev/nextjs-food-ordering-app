import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
}

const ProductCard = ({ item }: { item: Product }) => {
  return (
    <div>
      <Link href={`/product/${item.id}`}>
        <Image
          src={item.img}
          alt={item.title}
          width={400}
          height={400}
          className="w-full h-[400px] object-cover rounded"
        />
      </Link>
      <div className="text-black flex flex-col text-center mt-4">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-xl font-bold">${item.price}</p>
        <div className="mt-2">
          <button className="btn-primary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
