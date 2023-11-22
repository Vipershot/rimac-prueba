import { PropsButton } from "../../interface/button";

const Button = ({onClick, text, style="default", disabled}:PropsButton) => {
	return <button disabled={disabled} type="submit" className={`button-main__${style}`} onClick={onClick}>{text}</button>;
};

export default Button;
