import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar w-3/4 bg-white rounded-xl shadow-xl ring-2 ring-gray-200 p-1 sticky top-0 font-bold">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <ul className="space-x-4 text-black">
          <Link
            href="/"
            className="hover:text-primary focus:text-primary focus:outline-none cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-primary focus:text-primary focus:outline-none cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary focus:text-primary focus:outline-none cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
