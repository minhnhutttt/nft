'use client';
import Link from 'next/link';
import { useState } from 'react';
import MenuItems from './menuItems';
import PropTypes from 'prop-types';
import MenuHome from './menuHome';
export default function Menu({isHome}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`flex h-full duration-150 max-xl:pointer-events-none max-xl:fixed max-xl:inset-0 max-xl:z-[90] max-xl:w-full max-xl:bg-[#c7e8ff] max-xl:opacity-0 xl:items-end xl:justify-end ${
          open ? 'max-xl:pointer-events-auto max-xl:opacity-100' : ''
        }`}
      >
        <nav className="flex items-end max-xl:mx-auto max-xl:my-0 max-xl:w-full max-xl:max-w-[400px] max-xl:flex-col max-xl:items-center max-xl:justify-center max-md:max-w-[300px] xl:h-full">
          {isHome ?
            <MenuHome />
            :
            <MenuItems />
          }
          <Link
            href="#"
            className="flex h-[60px] w-[70px] items-center justify-center bg-black max-xl:w-full md:h-[70px]"
          >
            <img src="/ic-search.png" alt="" />
          </Link>
        </nav>
      </div>
      <div className="flex h-[70px] w-[100px] items-center justify-center xl:hidden">
        <button
          className={`group relative block h-[22px] w-10 cursor-pointer border-[none] p-0 max-xl:z-[99] max-xl:[&.active]:fixed ${
            open ? 'active' : ''
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
          <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
        </button>
      </div>
    </>
  );
}
Menu.propTypes = {
  isHome: PropTypes.bool,
};
