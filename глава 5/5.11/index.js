let date = new Date(2012, 1, 20, 3, 12);
alert(date);



let date = new Date(2012, 0, 3);
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
alert(getWeekDay(date));



let date = new Date(2012, 0, 3);
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day
}
alert(getLocalDay(date));




let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)





function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1))





function getSecondsToday() {
    let date = new Date();
    let nowDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let diff = date - nowDate;
    return Math.round(diff / 1000);
}
console.log(getSecondsToday())






function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let diff = tomorrow - date;
    return Math.round(diff / 1000);
}
console.log(getSecondsToTomorrow())





function formatDate(date) {
    function formatDate(date) {
        let diff = new Date() - date;

        if (diff < 1000) {
            return 'прямо сейчас';
        }

        let sec = Math.floor(diff / 1000);

        if (sec < 60) {
            return sec + ' сек. назад';
        }

        let min = Math.floor(diff / 60000);
        if (min < 60) {
            return min + ' мин. назад';
        }

        let d = date;
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2));

        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }

    alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

    alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

    alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

    // вчерашняя дата вроде 31.12.2016, 20:00
    alert(formatDate(new Date(new Date - 86400 * 1000)));
}