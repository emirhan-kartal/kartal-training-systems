const Card = ({ children, title ,className}) => {
    return (
        <div className="self-center w-full">
            <h3 className="text-2xl text-black mt-2 mb-4 ml-4">{title} </h3>

            <div
                className={`h-20 w-11/12 bg-gray-special mx-auto p-5
     rounded-3xl flex justify-between items-center shadow-xl ` + className}
            >
                {children}
            </div>
        </div>
    );
};
export default Card;
