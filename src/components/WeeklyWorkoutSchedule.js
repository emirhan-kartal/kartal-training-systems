const WeeklyWorkoutSchedule = ({ dateJsonArray=[0] }) => {
    const day = new Date().getDate();
    return (
        <div className="flex justify-between p-5 gap-x-1">
            
            {dateJsonArray.map((temp, index) => {
                console.log(temp.date + "=date");
                console.log(day + "=currentDate");
                const isToday = temp.date == day;
                return (
                    <div
                        key={temp.date}
                        className={
                            "bg-gray-200 p-1 rounded-lg h-auto w-12 text-center " +
                            (isToday && " bg-blue-500 ")
                        }
                    >
                        <p
                            className={
                                "text-lg font-bold text-gray-400 " +
                                (isToday && " text-red-special")
                            }
                        >
                            {temp.date}
                        </p>
                        <p
                            className={
                                "text-sm text-gray-400 " +
                                (isToday && " text-red-special ")
                            }
                        >
                            {temp.workout_title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default WeeklyWorkoutSchedule;
