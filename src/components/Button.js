import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonStyle = {
    icon: "",
    "submit-workout-feedback":
        "bg-red-special h-16 w-24 rounded-2xl text-white shadow-lg text-xl",
    "admin-icon":
        "bg-white h-10 !w-11/12 rounded-2xl text-red-special shadow-lg text-xl",
};

const Button = ({ styles, className, icon, text, chosen, onClick, type }) => {
    const button = (
        <>
            <button
                className={ButtonStyle[styles] + " " + className}
                icon={icon}
                onClick={onClick}
            >
                {icon ? (
                    <FontAwesomeIcon
                        icon={icon}
                        className={
                            "text-3xl " + (chosen && type !== "admin-panel-icon" && " text-red-special")
                        }
                    />
                ) : (
                    text
                )}
            </button>
        </>
    );
    return type === "admin-panel-icon" ? (
        <div className="flex  items-center text-[#7C859F] group w-full cursor-pointer" onClick={()=>onClick(text)}>
            <div className={"admin-panel-button min-w-12  justify-center "+ (chosen && "bg-[#49C087] text-white")}>
                {button}
            </div>
            <div className={"admin-panel-button pl-2 w-full "+ (chosen && "bg-[#49C087] text-white")}>
                {text}
            </div>
        </div>
    ) : (
        button
    );
};

export default Button;
