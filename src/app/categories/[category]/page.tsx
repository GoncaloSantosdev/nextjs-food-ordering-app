// Components
import { ProductCard, Title } from "@/components";
// Data
import { pizzas } from "@/data";

const CategoryPage = () => {
  return (
    <main>
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0">
          <Title
            subtitle={"Our Pizzas! 🍕"}
            title={"Enjoy every bit of our pizza!"}
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {pizzas.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
