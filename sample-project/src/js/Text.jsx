import PropTypes from "prop-types";

function Text({ value }) {
  return <p>{value}</p>;
}

Text.propTypes = {
  value: PropTypes.string,
};

export { Text };
