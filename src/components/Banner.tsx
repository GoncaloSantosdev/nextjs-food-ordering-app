import Image from "next/image";
// Components
import { Timer } from ".";
// Images
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <section className="mt-20">
      <div className="relative w-full h-[50vh]">
        <Image
          src={banner}
          alt="american burger"
          fill={true}
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute top-0 text-white w-full h-full flex flex-col justify-center text-center">
          <h3 className="text-3xl font-bold">Big Promotion!</h3>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            rerum.
          </p>
          <div className="mt-4">
            <Timer />
          </div>
          <div className="mt-4">
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
