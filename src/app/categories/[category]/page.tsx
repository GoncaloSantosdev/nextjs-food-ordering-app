// Components
import { Banner, ProductCard, Title } from "@/components";
// Types
import { ProductType } from "@/types/types";

type Props = {
  params: { category: string };
};

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CategoryPage = async ({ params }: Props) => {
  const data: ProductType[] = await getData(params.category);

  return (
    <>
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0">
          <Title
            subtitle={params.category}
            title={"Enjoy every bit of our food!"}
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {data.map((item: any) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Banner />
    </>
  );
};

export default CategoryPage;
