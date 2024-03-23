const SectionTitle = ({ title, textClasses, spanClasses }) => (
  <div className="flex gap-3 items-center">
    <span className={`w-16 h-1 bg-blue-300 ${spanClasses}`} />{" "}
    <p className={`text-blue-300 font-semibold text-lg ${textClasses}`}>
      {title}
    </p>
  </div>
);

export default SectionTitle;
