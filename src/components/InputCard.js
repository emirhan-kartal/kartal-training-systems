import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";

const InputCard = ({icon,type,onChange,value,placeholder}) => {
    return (
        <div className="flex items-center gap-x-3 w-11/12">
            <FontAwesomeIcon icon={icon} className="text-2xl w-10" />
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="!rounded-3xl h-12 shadow-2xl"
            />
        </div>
    );
};

export default InputCard;