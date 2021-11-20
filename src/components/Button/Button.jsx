import PropTypes from 'prop-types';
import Style from "./Button.module.css";


function Button(props) {
  return (
    <button type="button" onClick={props.onClick} className={Style.Button}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;