function getAnyCalendarDate(calendarId, targetYear, targetMonth){
    // カレンダーIDは安全のためハードコーディングせずスクリプトプロパティに載せておく
    calendarId = PropertiesService.getScriptProperties().getProperty("calendar-01");

    const targetCalendar = CalendarApp.getCalendarById(calendarId);

    // イベント取得のための開始日と終了日を設定する
    const today = new Date();
    targetYear = today.getFullYear();
    targetMonth = today.getMonth();
    let startDate = new Date(targetYear,targetMonth,1,0,0,0);
    let lastDay = 31;
    if( targetMonth === 3 | targetMonth === 5 | targetMonth == 8 | targetMonth == 10){
        lastDay = 30;
    } else if(targetMonth == 1){
        lastDay = 28;
    }
    const endDate = new Date(targetYear,targetMonth,lastDay, 23,59, 59);

    const allEvents = targetCalendar.getEvents(startDate, endDate);

    console.log(allEvents.length);
    return allEvents
}