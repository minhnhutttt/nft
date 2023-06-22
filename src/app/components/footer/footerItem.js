import Link from 'next/link';
import PropTypes from 'prop-types';

export default function FooterItem({ link, children }) {
  return (
    <li>
        <Link className="flex items-center text-white md:text-sm before:content-[''] before:block before:w-1 before:h-1 before:bg-white before:mr-2.5 text-xs" href={link}>{children}</Link>
    </li>
  );
}
FooterItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
