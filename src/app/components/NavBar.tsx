"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className=" flex justify-end ">
        <nav className=" border border-gray-600 rounded-bl-3xl rounded-tr-3xl rounded-sm   bg-1  lg:w-[50%] w-full ">
          <div className="flex "></div>
          <div className="" id="navbar-sticky">
            <ul className="flex p-4  font-medium items-center justify-around flex-row">
              <li>
                <Link
                  href={"/about"}
                  className="  text-white  "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/portfolio"} className="  text-white">
                  About
                </Link>
              </li>
              <li>
                <a href={"/resume"} className="  text-white  ">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="  text-white ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
