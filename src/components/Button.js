import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonStyle = {
    icon: "",
    "submit-workout-feedback": "bg-red-special h-16 w-24 rounded-2xl text-white shadow-lg text-xl",
};

const Button = ({ style, className, icon, text, chosen }) => {
    return (
        <button className={ButtonStyle[style] + " " + className} icon={icon}>
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className={"text-3xl " + (chosen && " text-red-special")}
                />
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
