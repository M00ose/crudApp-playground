import Link from "next/link";
import { useState } from "react";

import Person2 from "@mui/icons-material/Person2";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

const Navbar = () => {
  const [isLightMode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!isLightMode);
  };

  const [accountModal, setAccountModal] = useState(false);

  const toggleModal = () => {
    setAccountModal(!accountModal);
  };

  return (
    <nav className="navbar w-fit bg-white rounded-xl shadow-lg ring-2 ring-gray-200 ml-auto py-1 px-4 sticky top-0 font-bold">
      <div className="flex flex-row items-center justify-center space-x-4">
        <div>
          <button className="focus:outline-none" onClick={handleMode}>
            {isLightMode ? (
              <LightMode className="text-primary h-8 w-8" />
            ) : (
              <DarkMode className="text-primary h-8 w-8" />
            )}
          </button>
        </div>
        <div className="focus:outline-none cursor-pointer">
          <div className="w-full rounded-full shadow-xl border-[1px] border-primary">
            <Person2 className="text-primary h-8 w-8" onClick={toggleModal} />
            {accountModal && (
              <div className="absolute top-10 right-5 bg-white h-fit w-fit p-2 rounded-lg shadow-lg">
                <ul className="flex flex-col gap-2 font-normal font-sans">
                  <Link
                    href="/Team"
                    className="w-full text-end pl-8 pr-2 rounded-lg hover:bg-offWhite focus:bg-OffWhite focus:outline-none cursor-pointer"
                  >
                    Team
                  </Link>
                  <Link
                    href="/Settings"
                    className="w-full text-end pl-8 pr-2 rounded-lg hover:bg-offWhite focus:bg-OffWhite focus:outline-none cursor-pointer"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/Logout"
                    className="w-full text-end pl-8 pr-2 rounded-lg hover:bg-offWhite focus:bg-OffWhite focus:outline-none cursor-pointer"
                  >
                    Logout
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
