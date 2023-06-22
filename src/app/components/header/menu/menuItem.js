import Link from 'next/link';
import PropTypes from 'prop-types';

export default function MenuItem({ link, children }) {
  return (
    <li className="max-xl:w-full">
      <Link
        href={link}
        className="flex h-[60px] items-center justify-center border-l border-t border-solid border-l-black border-t-[#1C2633] bg-white px-5 py-2.5 text-xl font-extrabold tracking-[0.14em] text-black max-xl:border-r max-xl:border-solid max-xl:border-r-black md:h-[69px] md:px-10 md:py-0 md:text-2xl"
      >
        {children}
      </Link>
    </li>
  );
}
MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
