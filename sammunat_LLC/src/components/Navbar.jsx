import { useState } from "react";
import { Menu, X } from "lucide-react"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-10 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Sammunat LLC</h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="cursor-pointer hover:text-blue-400 transition">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Features</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Pricing</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Contact</li>
        </ul>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pt-5 text-sm animate-fadeIn">
          <li className="cursor-pointer hover:text-blue-400 border-b border-slate-800 pb-2">Home</li>
          <li className="cursor-pointer hover:text-blue-400 border-b border-slate-800 pb-2">Features</li>
          <li className="cursor-pointer hover:text-blue-400 border-b border-slate-800 pb-2">Pricing</li>
          <li className="cursor-pointer hover:text-blue-400 pb-2">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;