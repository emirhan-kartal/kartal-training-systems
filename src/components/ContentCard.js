import React from "react";

const AdditionalStyles = {
    "workout-card":
        "bg-red-special p-4 text-white h-24 rounded-3xl text-balance tracking-wider font-semibold shadow-sm flex flex-col justify-center ",
};
AdditionalStyles["workout-details"] = AdditionalStyles["workout-card"];

const ContentCard = ({ title, content, className, type, isCompleted }) => {
    return (
        <div
            className={
                "info-card bg-red-special p-4 text-white h-32 rounded-3xl text-balance tracking-wider font-semibold shadow-sm flex flex-col justify-center " +
                AdditionalStyles[type] +
                className
            }
        >
            {isCompleted && type==="workout-card" && (
                <div
                    className="absolute right-5 text-xl font-bold text-red-special bg-white shadow-xl rounded-3xl w-24 text-center
            "
                >
                    Done
                </div>
            )}

            <h2 className="text-4xl">{title}</h2>
            <p>
                {content.split(";").map((item, key) => {
                    return (
                        <span key={key}>
                            {item}
                            <br />
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default ContentCard;
