function formatCalData(calendarId, targetYear, targetMonth){
    // 定数・変数の定義：カレンダーIDは安全のためハードコーディングせずスクリプトプロパティに載せておく
    calendarId = PropertiesService.getScriptProperties().getProperty("calendar-01");
    targetMonth -= 1;

    // カレンダーデータの取得
    const allEvents = getAnyCalendarDate(calendarId, 2024, 12);

    // カレンダーデータからタイトルと開始日、終了日を取得
    let allEventInfo = [];
    let allWorkDayInfo = [];
    let calendarInformation = {
        "allEventLength" : null,
        "allEventDetails" : {},
        "workInfoLength": null,
        "workInfoDetails": {},
    };
    for( const event of allEvents){
        let title = event.getTitle();
        let startTime = Utilities.formatDate(event.getStartTime(), "JST", "yyyy/MM/dd HH:mm:ss");
        let endTime = Utilities.formatDate(event.getEndTime(), "JST", "yyyy/MM/dd HH:mm:ss");
        if(title.toString().match(IGNORE_WORDS) === null && title.toString().match(CANCEL_WORDS) === null){
            allEventInfo.push([title, startTime, endTime]);
        } else if(title.toString().match(MATCH_WORDS) !== null && (title.toString().match(IGNORE_WORDS) === null || title.toString().match(CANCEL_WORDS) === null)){
            allWorkDayInfo.push([title, startTime, endTime]);
        }
    }
    calendarInformation.allEventLength = allEventInfo.length;
    calendarInformation.allEventDatails = allEventInfo;
    calendarInformation.workInfoLength = allWorkDayInfo.length;
    calendarInformation.workInfoDetails = allWorkDayInfo;

    console.log(calendarInformation)

}
