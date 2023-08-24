import { ImageSwiper } from ".";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col lg:flex-row lg:items-center">
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
          Our job is to filling your tummy with delicious food and with fast and
          free delivery!
        </p>

        <div className="mt-8 space-x-4">
          <button className="btn-primary">Get Started</button>
          <button>Watch Video</button>
        </div>
      </div>
      {/* Swiper */}
      <ImageSwiper />
    </div>
  );
};

export default Hero;
