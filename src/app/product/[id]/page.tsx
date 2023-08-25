import Image from "next/image";
// Data
import { singleProduct } from "@/data";
import { Banner, Options } from "@/components";

const SingleProductPage = () => {
  return (
    <main>
      <section className="container mx-auto px-4 md:px-0 flex flex-col items-center mt-20 md:flex-row md:justify-around md:space-x-4">
        <div className="">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            width={400}
            height={400}
          />
        </div>
        <div className="text-left mt-12 md:mt-0 md:w-[50%]">
          <h2 className="font-semibold text-3xl lobster">
            {singleProduct.title}
          </h2>
          <p className="mt-4 text-gray-800 leading-8">{singleProduct.desc}</p>
          <Options singleProduct={singleProduct} />
        </div>
      </section>

      <Banner />
    </main>
  );
};

export default SingleProductPage;
