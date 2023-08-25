import Image from "next/image";
import Link from "next/link";
// Data
import { categories } from "@/data";

const CategoriesPage = () => {
  return (
    <main>
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0 flex flex-col gap-4 md:flex-row">
          {categories.map((category) => (
            <div className="relative w-full h-[50vh]" key={category.id}>
              <Image
                src={category.img}
                alt={category.title}
                fill={true}
                objectFit="cover"
                className="brightness-50 shadow-md rounded w-full"
              />

              <div className="absolute text-white flex flex-col h-full w-full items-center justify-center text-center">
                <h3 className="text-3xl font-bold lobster">{category.title}</h3>
                <p className="my-6 px-4">{category.desc}</p>
                <div>
                  <Link
                    href={`categories/${category.slug}`}
                    className="btn-primary"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
