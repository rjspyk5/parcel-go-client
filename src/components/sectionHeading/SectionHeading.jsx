export const SectionHeading = ({ heading, subheading }) => {
  return (
    <div className="mt-9 mb-9">
      <div className="flex items-center justify-center">
        <div className="border-t border-1 opacity-70 border-gray-700 flex-grow"></div>
        <span className="mx-4  text-2xl md:text-3xl font-bold ">{heading}</span>
        <div className="border-t border-1 opacity-70  border-gray-700 flex-grow"></div>
      </div>
      <p className="text-center opacity-60 py-2">{subheading}</p>
    </div>
  );
};
