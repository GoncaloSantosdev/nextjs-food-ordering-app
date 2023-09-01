import Image from "next/image";
// Data
import { Banner, DeleteButton, Options } from "@/components";
import { ProductType } from "@/types/types";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const data: ProductType = await getData(params.id);

  return (
    <>
      <section className="container mx-auto px-4 md:px-0 flex flex-col items-center mt-20 md:flex-row md:justify-around md:space-x-4">
        <div className="">
          <Image src={data.img} alt={data.title} width={400} height={400} />
        </div>
        <div className="text-left mt-12 md:mt-0 md:w-[50%]">
          <h2 className="font-semibold text-3xl lobster">{data.title}</h2>
          <p className="mt-4 text-gray-800 leading-8">{data.desc}</p>
          <Options product={data} />
          <div className="mt-4 flex justify-center md:justify-start">
            <DeleteButton id={data.id} />
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
};

export default SingleProductPage;
