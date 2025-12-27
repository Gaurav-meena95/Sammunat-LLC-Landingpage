const Hero = () => {
  return (
    <section className="h-[90vh] flex items-center justify-center bg-linear-to-r from-blue-400 to-indigo-600 text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build Modern Apps with React
        </h1>
        <p className="text-lg mb-8 text-slate-200">
          A scalable, responsive landing page built using React and Tailwind CSS.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-slate-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
