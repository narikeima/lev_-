import axios from "axios";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';

// カレンダーを表示させたいタグのidを取得
const calendarEl = document.getElementById("calendar");

// new Calender(カレンダーを表示させたいタグのid, {各種カレンダーの設定});
// "calendar"というidがないbladeファイルではエラーが出てしまうので、if文で除外。
if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
        // プラグインの導入
        plugins: [dayGridPlugin, timeGridPlugin],
        
         // カレンダー表示
        initialView: "dayGridMonth", 
        headerToolbar: { //ヘッダーの設定
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek",
        },
        height: "auto",
    });
    
     // カレンダーのレンダリング
    calendar.render();
}