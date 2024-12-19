function getAnyCalendarDate(calendarId, targetYear, targetMonth){
    const targetCalendar = CalendarApp.getCalendarById(calendarId);
    targetMonth -= 1; 


    let startDate = new Date(targetYear,targetMonth,1,0,0,0);
    let lastDay = 31;
    if( targetMonth === 3 | targetMonth === 5 | targetMonth == 8 | targetMonth == 10){
        lastDay = 30;
    } else if(targetMonth == 1){
        lastDay = 28;
    }
    const endDate = new Date(targetYear,targetMonth,lastDay, 23,59, 59);

    const allEvents = targetCalendar.getEvents(startDate, endDate);
    return allEvents
}