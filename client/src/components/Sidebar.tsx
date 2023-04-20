import Link from "next/link";
import { useState } from "react";

import { Home, Person, Mail } from "@mui/icons-material";

const Sidebar = () => {
  const [active, setActive] = useState("");

  const links = [
    {
      href: "/",
      icon: <Home className="text-primary h-8 w-8" />,
      label: "Home",
    },
    {
      href: "/About",
      icon: <Person className="text-secondary h-8 w-8" />,
      label: "About",
    },
    {
      href: "/Contact",
      icon: <Mail className="text-tertiary h-8 w-8" />,
      label: "Contact",
    },
  ];

  const handleClick = (label) => {
    setActive(label);
  };

  return (
    <aside className="sidebar w-16 bg-white rounded-xl shadow-lg ring-2 ring-gray-200 p-1 my-4 sticky top-0">
      <div className="flex flex-col items-center justify-center space-y-4">
        {links.map((link) => (
          <div
            key={link.href}
            className="flex flex-row items-center"
            onClick={() => handleClick(link.label)}
          >
            {active === link.label && (
              <div className="identifier bg-offGrey h-3 w-1 rounded-full shadow-lg"></div>
            )}
            <Link
              href={link.href}
              className="hover:text-primary focus:text-primary focus:outline-none cursor-pointer relative ml-1"
            >
              <span className="sr-only">{link.label}</span>
              {link.icon}
              <span className="tooltip absolute -right-20 top-0 bg-offGrey text-white text-[12px] px-2 py-1 rounded-lg hidden">
                {link.label}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
