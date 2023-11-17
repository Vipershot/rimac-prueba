import { PropsButton } from "../../interface/button";

const Button = ({onClick, text}:PropsButton) => {
	return <button type="submit" className='button-main' onClick={onClick}>{text}</button>;
};

export default Button;
