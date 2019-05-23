function clock() {
    var now = new Date();
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();
    var ms = now.getMilliseconds();
    
    if (h < 10) h = "0" + h;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;
    if (ms < 10) ms = "00" + ms;
    else if (ms < 100) ms = "0" + ms;

    //　HTML: <span id="clock_time">(ココの時刻文字列を書き換え)</span>
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s + ":" + ms;
    //　HTML: <div id="clock_frame"> の内部要素のフォントサイズをウインドウサイズの10分の1ピクセルに設定
    document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 10);
