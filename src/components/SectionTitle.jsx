function SectionTitle({ title }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

export default SectionTitle;