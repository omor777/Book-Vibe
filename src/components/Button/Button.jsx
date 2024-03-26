import PropTypes from "prop-types";

const Button = ({ children, bgColor }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
      }}
      className="btn text-white px-7 text-lg font-semibold font-work-sans"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
