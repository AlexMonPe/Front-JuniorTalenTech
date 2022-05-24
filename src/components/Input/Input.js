import { Fragment } from "react";

const Input = (props) => {

    const {type, className, id, placeholder, pattern, name, maxLength, minLength, style } = props;

return(<Fragment>
    <input
    type={type}
    className={className}
    id={id}
    placeholder={placeholder}
    pattern={pattern}
    name={name}
    maxLength={maxLength}
    minLength={minLength}
    style={style}
    required />
  </Fragment>)
}

export default Input;