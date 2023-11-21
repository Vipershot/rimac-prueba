import { PropsButton } from "../../interface/button";

const Button = ({onClick, text, style="default"}:PropsButton) => {
	return <button type="submit" className={`button-main__${style}`} onClick={onClick}>{text}</button>;
};

export default Button;
