const calendarData = 
[
    [
        { count: 1, date: '2023-10-9' },
        { count: 4, date: '2023-10-12' },
        { count: 4, date: '2023-10-13' }
    ],
    [
        { count: 0, date: '2023-10-15' },
        { count: 4, date: '2023-10-20' },
        { count: 4, date: '2023-10-21' }
    ],
    [
        { count: 4, date: '2023-10-125' },
        { count: 1, date: '2023-10-29' },
        { count: 0, date: '2023-10-30' }
    ],
]


    const flattenedData = calendarData;

    let start = 0;
    while (start <= flattenedData.length - consecutiveDays) {
        let streak = true;

        for (let i = 0; i < consecutiveDays; i++) {
            if (flattenedData[start + i].count === 0) {
                streak = false;
                break;
            }
        }

        if (streak) {
            const startDate = flattenedData[start].date;
            const endDate = flattenedData[start + consecutiveDays - 1].date;
            results.push({ startDate, endDate });
        }

        start++;
    }








[
    { date: '2023-10-9' },
    { count: 1},
    { date: '2023-10-12' },
    { count: 4 },
    { date: '2023-10-13' },
    { count: 4 },
    { date: '2023-10-15' },
    { count: 0 }
]
  