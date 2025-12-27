const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-slate-900 text-white">
      <h1 className="text-xl font-bold">Sammunat LLC</h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li className="cursor-pointer hover:text-blue-400">Home</li>
        <li className="cursor-pointer hover:text-blue-400">Features</li>
        <li className="cursor-pointer hover:text-blue-400">Pricing</li>
        <li className="cursor-pointer hover:text-blue-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
