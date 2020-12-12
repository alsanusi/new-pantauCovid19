class Format {
    static FullDate(value) {
        let d = new Date(value),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('/');
    }
    static DayInWeek(value) {
        let selectedDate = new Date(value).toLocaleString('id', {
            weekday: 'long'
        })
        return selectedDate;
    }
    static DateOnly(value) {
        let selectedDate = new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
        }).format(new Date(value))
        return selectedDate;
    }
}

export default Format;