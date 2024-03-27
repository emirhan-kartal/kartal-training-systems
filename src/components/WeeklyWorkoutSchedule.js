const WeeklyWorkoutSchedule = () => {
    const currentDate = new Date();
    const dateArray = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        const formattedDate = `${date.getDate()}`;
        dateArray.push(formattedDate);
    }
    return (
        <div className="flex justify-between p-5 gap-x-1">
            {dateArray.map((date, index) => {
                const isToday = date == currentDate.getDate();
                return (
                    <div
                        key={date}
                        className={
                            "bg-gray-200 p-1 rounded-lg h-auto w-12 text-center " +
                            (isToday && " bg-blue-300 ")
                        }
                    >
                        <p
                            className={
                                "text-lg font-bold text-gray-400 " +
                                (isToday && " text-white")
                            }
                        >
                            {date}
                        </p>
                        <p
                            className={
                                "text-sm text-gray-400 " +
                                (isToday && " text-white ")
                            }
                        >
                            Push
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default WeeklyWorkoutSchedule;
