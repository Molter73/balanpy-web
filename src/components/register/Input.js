import PropTypes from 'prop-types';
import { slate } from 'tailwindcss/colors';

export const Input = ({ id, placeholder, type = 'text' , styles}) => {
    return(
            <input
                id={id}
                type={type}
                className={`block w-full px-2 py-2 font-poppins font-normal border rounded-lg text-[14px] text-balanpy-900 shadow-sm placeholder-gray mt-1
                focus:outline-none focus:border-balanpy focus:ring-1 focus:ring-slate-200 ${styles}`}
                placeholder={placeholder}
            />
    );
}
Input.defaultProps = {
    styles : "bg-transparent border-slate-300"
  }

Input.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
}

export default Input;