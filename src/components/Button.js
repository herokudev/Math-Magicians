import PropTypes from 'prop-types';

const Button = ({
  action, label, cssClass, cssStyle,
}) => (
  <button type="button" style={cssStyle} onClick={action} className={cssClass}>{label}</button>
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
  cssStyle: PropTypes.shape({
    gridArea: PropTypes.string,
  }).isRequired,
};

export default Button;
