interface TitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const Title = ({ title, subtitle, center }: TitleProps) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} w-full`}>
      <h6 className="text-red-500 tracking-wider uppercase font-semibold text-lg">
        {subtitle}
      </h6>
      <h3 className="text-4xl font-bold mt-4 md:w-[40%] mx-auto leading-normal">
        {title}
      </h3>
    </div>
  );
};

export default Title;
