// Components
import { Features, Hero } from "@/components";

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0">
        <Hero />
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
