import { useState } from "react";
import React from "react";
import passwordContext from "./PasswordContext";
import SunCalc from "suncalc";

export default function DeatailState(props) {
  // const host = "https://tkdchatserver.herokuapp.com";
  // const [country, setcountry] = React.useState([]);
  // const getcountry = async () => {
  //   const response = await fetch(`${host}/api/country`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
  //   const json = await response.json();
  //   setcountry(json);
  // }
  // const sleep = (e) => { return new Promise((n => setTimeout(n, e))) }
  // const getRndInteger = (a, o) => { return Math.floor(Math.random() * (o - a + 1)) + a; }
  // const arrayRemove = (r, n) => { return r.filter(function (r) { return r !== n; }); };
  // const playaudio = (src) => { const obj = document.createElement('audio'); obj.src = src; obj.play(); }
  // const clipboardcode = (a) => { if (!a) { return; } const textarea = document.createElement("textarea"); textarea.value = a; document.body.appendChild(textarea); textarea.select(); document.execCommand("copy"); textarea.remove(); window.prompt('copied!', a); }
  // const download = (e, t) => { var n = document.createElement("a"); n.setAttribute("href", "data:text/plain;charset=utf-8, " + encodeURIComponent(t)); n.setAttribute("download", e); document.body.appendChild(n); n.click(); document.body.removeChild(n); }
  // const capitalize = (str) => { return str === "" ? "" : str[0].toUpperCase() + str.slice(1); }
  // const formatDate = (date, format, utc) => {
  //   console.log(date);
  //   console.log(format);
  //   console.log(utc);
  //   var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  //   var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   function ii(i, len) {
  //     var s = i + "";
  //     len = len || 2;
  //     while (s.length < len) s = "0" + s;
  //     return s;
  //   }
  //   var y = utc ? date.getUTCFullYear() : date.getFullYear();
  //   format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
  //   format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
  //   format = format.replace(/(^|[^\\])y/g, "$1" + y);
  //   var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  //   format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
  //   format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
  //   format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
  //   format = format.replace(/(^|[^\\])M/g, "$1" + M);
  //   var d = utc ? date.getUTCDate() : date.getDate();
  //   format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
  //   format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
  //   format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
  //   format = format.replace(/(^|[^\\])d/g, "$1" + d);
  //   var H = utc ? date.getUTCHours() : date.getHours();
  //   format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
  //   format = format.replace(/(^|[^\\])H/g, "$1" + H);
  //   var h = H > 12 ? H - 12 : H === 0 ? 12 : H;
  //   format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
  //   format = format.replace(/(^|[^\\])h/g, "$1" + h);
  //   var m = utc ? date.getUTCMinutes() : date.getMinutes();
  //   format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
  //   format = format.replace(/(^|[^\\])m/g, "$1" + m);
  //   var s = utc ? date.getUTCSeconds() : date.getSeconds();
  //   format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
  //   format = format.replace(/(^|[^\\])s/g, "$1" + s);
  //   var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
  //   format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
  //   f = Math.round(f / 10);
  //   format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
  //   f = Math.round(f / 10);
  //   format = format.replace(/(^|[^\\])f/g, "$1" + f);
  //   var T = H < 12 ? "AM" : "PM";
  //   format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
  //   format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
  //   var t = T.toLowerCase();
  //   format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
  //   format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
  //   var tz = -date.getTimezoneOffset();
  //   var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
  //   if (!utc) {
  //     tz = Math.abs(tz);
  //     var tzHrs = Math.floor(tz / 60);
  //     var tzMin = tz % 60;
  //     K += ii(tzHrs) + ":" + ii(tzMin);
  //   }
  //   format = format.replace(/(^|[^\\])K/g, "$1" + K);
  //   var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
  //   format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
  //   format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
  //   format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
  //   format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
  //   format = format.replace(/\\(.)/g, "$1");
  //   return format;
  // }
  const csslistjson = [
    { topcsslist: 70, leftcsslist: -10, rotatecsslist: 315 },
    { topcsslist: 60, leftcsslist: -1, rotatecsslist: 322.5 },
    { topcsslist: 50, leftcsslist: 8.2, rotatecsslist: 330 },
    { topcsslist: 40, leftcsslist: 17.3, rotatecsslist: 337.5 },
    { topcsslist: 30, leftcsslist: 26.4, rotatecsslist: 345 },
    { topcsslist: 20, leftcsslist: 35.5, rotatecsslist: 352.5 },
    { topcsslist: 10, leftcsslist: 44.6, rotatecsslist: 360 },
    { topcsslist: 20, leftcsslist: 53.7, rotatecsslist: 7.5 },
    { topcsslist: 30, leftcsslist: 62.8, rotatecsslist: 15 },
    { topcsslist: 40, leftcsslist: 71.9, rotatecsslist: 22.5 },
    { topcsslist: 50, leftcsslist: 81, rotatecsslist: 30 },
    { topcsslist: 60, leftcsslist: 90.1, rotatecsslist: 37.5 },
  ];
  const [cssposition, setcssposition] = useState(0);
  const [daynight, setdaynight] = useState(false);
  const [lsborderradius, setlsborderradius] = useState("");
  const changedaynight = (t) => {
    setdaynight(t);
    var className = t ? "bodydark" : "";
    document.body.className = className;
    if (t) {
      moonPhase(new Date());
    }
  };
  const handleOnChange = () => {
    changedaynight(!daynight);
  };
  const positionsunmoon = () => {
    var e = new Date().getHours(),
      t = true;
    if (e <= 5) {
      e += 6;
    } else if (e >= 6 && e <= 17) {
      t = false;
      e -= 6;
    } else {
      e -= 18;
    }
    changedaynight(t);
    setcssposition(e);
  };
  const moonPhase = (e) => {
    var t = SunCalc.getMoonIllumination(e);
    var n = t.fraction;
    var shadowRadius = Math.abs(50 - 100 * n);
    setlsborderradius(shadowRadius + "%/50%");
  };
  setTimeout(() => {
    positionsunmoon();
  }, 6e4);
  return (
    <passwordContext.Provider value={{
      // country: country,
      // getcountry: getcountry,
      // sleep: sleep,
      // clipboardcode: clipboardcode,
      // download: download,
      // capitalize: capitalize,
      // getRndInteger: getRndInteger,
      // arrayRemove: arrayRemove,
      // playaudio: playaudio,
      // formatDate: formatDate,
      csslistjson: csslistjson,
      cssposition: cssposition,
      lsborderradius: lsborderradius,
      handleOnChange: handleOnChange,
      positionsunmoon: positionsunmoon,
      daynight: daynight,
    }}>{props.children}</passwordContext.Provider>
  )
}
