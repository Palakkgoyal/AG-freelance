const Footer = () => {
  return (
    <div className="bg-[#0a1a46] text-white px-5 md:px-20 pt-20" id="footer">
      <div className="flex flex-col md:flex-row max-w-[900px] mx-auto justify-between">
        <div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl mb-10 font-semibold w-[20ch]">
            You only have one chance to make a first impression.
          </h3>
          <p className="text-pink-400 text-lg">Let's make it amazing</p>
        </div>
        <div>
          <ul className="flex mt-6 md:mt-0 md:flex-col gap-2 text-sm md:text-lg font-semibold">
            <li className="cursor-pointer hover:underline">
              <a href="#hero">About Me</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#contact">Contact</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://twitter.com/" target="_blank">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex justify-between py-8 border-t-2 border-[#152860] border-solid">
        <p>©2024 MIT</p>
        <a href="#hero" className="font-bold">Back to Top</a>
      </div>
    </div>
  );
};

export default Footer;
