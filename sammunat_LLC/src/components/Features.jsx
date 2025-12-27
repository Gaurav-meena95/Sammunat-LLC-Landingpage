const features = [
  {
    title: "Fast Development",
    desc: "Reusable components speed up development time.",
  },
  {
    title: "Responsive Design",
    desc: "Looks perfect on all screen sizes.",
  },
  {
    title: "Scalable Architecture",
    desc: "Easy to extend and integrate with APIs.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-10  bg-linear-to-r from-blue-500 to-indigo-500">
      <h2 className="text-3xl text-slate-100 font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
