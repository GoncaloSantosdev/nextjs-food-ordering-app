import { pizzas } from "@/data";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <>
      <section className="container mx-auto px-4 md:px-0">
        {pizzas.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id}></Link>
        ))}
      </section>
    </>
  );
};

export default CategoryPage;
