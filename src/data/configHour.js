export const getHourNow = () => {
    const current = new Date();
    const hourNow = current.getHours();
    return hourNow;
}
export const getHourlyList = data => {
    let resultList = [];
    if (data) {
        resultList = data.filter(item => {
            const itemDateTime = item.time;
            const itemDateTimeList = itemDateTime.split(" ");
            const itemTimeList = itemDateTimeList[1].split(":");
            const itemHour = itemTimeList[0];
            const hour = parseInt(itemHour);
            return hour >= getHourNow();
        })
    }
    return resultList;
}
