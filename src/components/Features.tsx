// Components
import Image from "next/image";
import { Title } from ".";
// Images
import feature1 from "../../public/features-1.svg";
import feature2 from "../../public/features-2.svg";
import feature3 from "../../public/features-3.svg";

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

const Features = () => {
  return (
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
  );
};

export default Features;
