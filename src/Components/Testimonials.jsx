import { testimonials } from "../staticData";
import { testimonialImg } from "../assets";

const Testimonials = () => {
  return (
    <div className="bg-slate-50 py-20 select-none" id="testimonials">
      <div className="text-center max-w-[1280px] mx-auto relative">
        <p className="text-blue-800 font-semibold z-10">What People Say</p>
        <h3 className="text-5xl font-bold w-[10ch] mx-auto z-10">
          Trusted by Clients.
        </h3>
        <img
          src={testimonialImg}
          alt="rocket launching with building beside it"
          className="absolute top-1/2 -translate-y-1/2 w-[250px] left-1/2 z-[1] opacity-15 -translate-x-[50%]"
        />
      </div>
      <div className="mt-20 max-w-[1280px] mx-auto">
        <ul className="px-4 md:px-8 md:columns-2 lg:columns-3 gap-x-5">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard {...testimonial} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function TestimonialCard({ review, src, name, position, style }) {
  return (
    <div
      className={`py-5 px-2 md:p-5 ${style} hover:shadow-2xl transition-all ease-in-out w-full break-inside-avoid flex flex-col gap-5 border-2 border-solid border-gray-400 rounded-lg shadow-md mb-3`}
    >
      <p>{review}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={src} alt={name} className="w-full h-full" />
        </div>
        <div>
          <h5 className="font-semibold">{name}</h5>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
