import PropTypes from 'prop-types';
export default function Title({ children }) {
  return (
    <div className="text-2xl font-black tracking-widest md:text-4xl">
      {children}
    </div>
  );
}
Title.propTypes = {
  children: PropTypes.node.isRequired,
};
