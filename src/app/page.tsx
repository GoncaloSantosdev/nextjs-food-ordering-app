import Image from "next/image";
// Components
import { Banner, ImageSwiper, ProductCard, Title } from "@/components";
// Images
import feature1 from "../../public/features-1.svg";
import feature2 from "../../public/features-2.svg";
import feature3 from "../../public/features-3.svg";
// Data
import { featuredProducts } from "@/data";

const features = [
  {
    image: feature1,
    title: "Easy To Order",
    desc: "You only need a few steps in ordering food!",
  },
  {
    image: feature2,
    title: "Fastest Delivery",
    desc: "Delivery that is always ontime even faster!",
  },
  {
    image: feature3,
    title: "Best Quality",
    desc: "Not only fast for us quality is also number one!",
  },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0 flex flex-col lg:flex-row lg:items-center">
          {/* content */}
          <div className="">
            <span className="bg-red-500 text-white px-4 py-3 rounded">
              More than faster
            </span>
            <h2 className="text-6xl font-bold mt-8 w-full lg:w-[80%]">
              Claim Best Offer on Fast{" "}
              <span className="text-red-500 lobster">Food</span> &{" "}
              <span className="text-red-500 lobster">Restaurants</span>
            </h2>
            <p className="mt-8 text-lg lg:w-[80%]">
              Our job is to filling your tummy with delicious food and with fast
              and free delivery!
            </p>

            <div className="mt-8 space-x-4">
              <button className="btn-primary">Get Started</button>
              <button>Watch Video</button>
            </div>
          </div>
          {/* Swiper */}
          <ImageSwiper />
        </div>
      </section>

      {/* Features */}
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0">
          <Title
            subtitle={"What We Serve"}
            title={"Your Favourite Food Delivery Partner"}
            center
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center md:justify-between md:space-x-4"
              >
                <div>
                  <Image src={feature.image} alt={feature.title} />
                </div>
                <h4 className="mt-4 font-semibold text-xl">{feature.title}</h4>
                <p className="mt-2 md:w-[250px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals */}
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

      <Banner />
    </main>
  );
};

export default HomePage;
