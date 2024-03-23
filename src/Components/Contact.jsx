import SectionTitle from "./SectionTitle";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-slate-50 py-20 relative z-10 overflow-hidden" id="contact">
      <div className="bg-white w-[90vw] max-w-[1000px] mx-auto py-10 px-5 md:p-16 rounded-lg">
        <div className="relative w-full flex justify-center md:justify-between items-center gap-3">
          <div className="">
            <SectionTitle title="Say Hello 👋" />
            <h3 className="text-3xl md:text-6xl font-bold md:w-[9ch] my-5 md:my-10">
              Let's Work Together
            </h3>
            <p className="md:text-lg font-semibold w-[30ch]">
              I'd love to meet with you to discuss your venture, and potential
              collaborations
            </p>
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1751559032849186816/cdCsBKvJ_400x400.jpg"
            alt="Anukiran Ghosh"
            className="hidden md:inline-block md:w-[250px] aspect-auto lg:w-[300px]"
          />
        </div>

        <div className="mt-10 flex flex-col-reverse md:flex-row gap-5 justify-between">
          <div className="flex md:flex-col flex-wrap gap-3">
            <a
              className="flex gap-4 items-center cursor-pointer"
              href="mailto:testing@example.com"
            >
              <span>
                <MdOutlineMailOutline className="text-blue-800 w-5 h-5" />
              </span>
              <p>testing@gmail.com</p>
            </a>
            <div className="flex gap-4 items-center">
              <span>
                <FiHome className="text-blue-800 w-5 h-5" />
              </span>
              <p className="w-[25ch]">
                Van vihar colony no. 2, dehradun, India
              </p>
            </div>
            <a
              className="flex gap-4 items-center cursor-pointer"
              href="tel:888234323"
            >
              <span>
                <CiPhone className="text-blue-800 w-5 h-5 font-bold" />
              </span>
              <p>+888234323</p>
            </a>
          </div>
          <form
            action=""
            className="flex flex-col gap-4 w-full mx-auto max-w-[450px]"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="border focus-visible:outline-none focus-visible:shadow-lg focus-visible:bg-slate-50 border-gray-50 shadow-sm px-3 py-2 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="border focus-visible:outline-none focus-visible:shadow-lg focus-visible:bg-slate-50 border-gray-50 shadow-sm px-3 py-2 rounded-md w-full"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              placeholder="message"
              className="border focus-visible:outline-none focus-visible:shadow-lg focus-visible:bg-slate-50 border-gray-50 shadow-sm px-3 py-2 rounded-md w-full"
              required
            />
            <button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 w-fit md:text-lg rounded-lg font-bold">
              Let's talk
              <HiArrowLongRight />
            </button>
          </form>
        </div>
        <div className="mt-10 flex">
          <a
            className="hover:border shadow-sm hover:shadow-xl border-solid border-gray-200 w-fit px-5 py-3 flex gap-2 items-center text-lg font-semibold text-gray-500 hover:rounded-md transition-all ease-in cursor-pointer"
            href="https://linkedin.com/in/tester"
          >
            <CiLinkedin className="scale-125" />
            LinkedIn
          </a>
          <a className="hover:border shadow-sm hover:shadow-xl border-solid border-gray-200 w-fit px-5 py-3 flex gap-2 items-center text-lg font-semibold text-gray-500 hover:rounded-md transition-all ease-in cursor-pointer">
            <FaXTwitter className="" />
            Twitter
          </a>
        </div>
      </div>
      <div className="absolute slant-container bg-[#0a1a46] w-full h-[500px] bottom-0 -z-[1]"></div>
    </div>
  );
};

export default Contact;
