import React from "react";

const AdditionalStyles = {
    "workout-card":
        "bg-red-special p-4 text-white h-24 rounded-3xl text-balance tracking-wider font-semibold shadow-sm flex flex-col justify-center ",
};
AdditionalStyles["workout-details"] = AdditionalStyles["workout-card"];

const ContentCard = ({
    title,
    content,
    className,
    type,
    isCompleted,
    children,
    split = true,
}) => {
    return (
        <div
            className={
                "info-card bg-red-special p-4 text-white h-32 rounded-3xl text-balance tracking-wider font-semibold shadow-sm flex flex-col justify-center " +
                AdditionalStyles[type] +
                " " +
                className
            }
        >
            {isCompleted && type === "workout-card" && (
                <div
                    className="absolute right-10 text-xl font-bold text-white bg-red-special shadow-2xl rounded-3xl w-16 text-center
            "
                >
                    Done
                </div>
            )}

            <h2 className="text-4xl">{title}</h2>
            {children ? (
                children
            ) : (
                <p>
                    {(split ? content.split(";") : content).map((item, key) => {
                        return (
                            <span
                                key={key}
                                className={
                                    type === "workout-details" && " text-sm"
                                }
                            >
                                {item}
                                <br />
                            </span>
                        );
                    })}
                </p>
            )}
        </div>
    );
};

export default ContentCard;
