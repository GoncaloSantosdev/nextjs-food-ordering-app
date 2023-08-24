// Components
import { ProductCard, Title } from ".";
import { featuredProducts } from "@/data";

const FeaturedProducts = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto px-4 md:px-0">
        <Title
          subtitle={"Most Requested Meals"}
          title={"Menu That Always Makes You Fall In Love"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredProducts.map((item) => (
            <div key={item.id} className="">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
