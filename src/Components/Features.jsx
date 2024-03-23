import { featureClickImg, featureHandImg, featureSolImg } from "../assets";

const data = [
  {
    src: featureClickImg,
    title: "User Interface",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi reprehenderit odit ipsam, quibusdam",
  },
  {
    src: featureHandImg,
    title: "No Code Website",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi reprehenderit odit ipsam, quibusdam",
  },
  {
    src: featureSolImg,
    title: "Marketing Solution",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi reprehenderit odit ipsam, quibusdam",
  },
];

const Features = () => {
  return (
    <div className="px-6 md:pb-20 md:px-12 lg:px-20" id="features">
      <div className="max-w-[1600px] mx-auto">
        <ul className="flex flex-wrap justify-center gap-10 w-full">
          {data.map((card, idx) => (
            <FeatureCard
              key={idx}
              src={card.src}
              title={card.title}
              text={card.text}
            />
          ))}
        </ul>
        <a href="#contact">
          <button className="mt-7 text-right block ml-auto text-blue-700 font-semibold">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

const FeatureCard = ({ src, title, text }) => {
  return (
    <li className="border feature-card border-solid border-slate-100 hover:shadow-2xl transition-all ease-in-out text-center px-8 shadow-md pb-16 pt-10 rounded-xl max-w-[400px] flex-1">
      <div
        className={`feature-image w-40 h-40 lg:w-60 lg:h-60 rounded-full p-8 mx-auto mb-6`}
      >
        <img src={src} alt="feature card image" className="w-full h-full" />
      </div>
      <h3 className="font-bold text-lg mb-8">{title}</h3>
      <p className="">{text}</p>
    </li>
  );
};

export default Features;
