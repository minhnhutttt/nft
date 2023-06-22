import PropTypes from 'prop-types';
export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[440px] px-5 md:max-w-[1600px]">
      {children}
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
