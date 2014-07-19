
//平日のバスの時刻表(慶應大学本館前の湘南台駅行き)

//type:"a" 遠藤経由
//type:"b" ツインライナー
//type:"c"　中高専用直行
//時刻表データ: 時刻表Locky
//  http://tt.locky.jp/site/list?pageid=tbl&code=82455
var weekDayBusList = [
    
    { type:"a", hour:15 ,min:16 },
    { type:"b", hour:15 ,min:21 },
    { type:"a", hour:15 ,min:24 },
    { type:"c", hour:15 ,min:28 },
    { type:"c", hour:15 ,min:30 },
    { type:"a", hour:15 ,min:31 },
    { type:"b", hour:15 ,min:38 },
    { type:"a", hour:15 ,min:43 },
    { type:"b", hour:15 ,min:51 },
    { type:"a", hour:15 ,min:56 },

    { type:"b", hour:16, min:3 },
    { type:"a", hour:16, min:8 },
    { type:"a", hour:16, min:13 },
    { type:"b", hour:16, min:20 },
    { type:"a", hour:16, min:25 },
    { type:"b", hour:16, min:33 },
    { type:"a", hour:16, min:38 },
    { type:"b", hour:16, min:45 },
    { type:"a", hour:16, min:50 },
    { type:"b", hour:16, min:58 },

    { type:"b", hour:17, min:5 },
    { type:"a", hour:17, min:10 },
    { type:"b", hour:17, min:18 },
    { type:"a", hour:17, min:23 },
    { type:"b", hour:17, min:30 },
    { type:"a", hour:17, min:35 },
    { type:"b", hour:17, min:43 },
    { type:"a", hour:17, min:48 },
    { type:"a", hour:17, min:55 },

    { type:"b", hour:18, min:3 },
    { type:"a", hour:18, min:8 },
    { type:"c", hour:18, min:11 },
    { type:"b", hour:18, min:16 },
    { type:"a", hour:18, min:20 },
    { type:"b", hour:18, min:28 },
    { type:"b", hour:18, min:35 },
    { type:"a", hour:18, min:40 },
    { type:"c", hour:18, min:42 },
    { type:"a", hour:18, min:47 },
    { type:"b", hour:18, min:55 },

    { type:"b", hour:19, min:1 },
    { type:"a", hour:19, min:7 },
    { type:"b", hour:19, min:15 },
    { type:"a", hour:19, min:20 },
    { type:"a", hour:19, min:30 },
    { type:"a", hour:19, min:40 },
    { type:"a", hour:19, min:50 },

    { type:"a", hour:20, min:0 },
    { type:"a", hour:20, min:10 },
    { type:"a", hour:20, min:20 },
    { type:"a", hour:20, min:30 },
    { type:"a", hour:20, min:40 },
    { type:"a", hour:20, min:50 },

    { type:"a", hour:21, min:0 },
    { type:"a", hour:21, min:15 },
    { type:"a", hour:21, min:30 },
    { type:"a", hour:21, min:50 },

    { type:"a", hour:22, min:10 },
    { type:"a", hour:22, min:30 },
    { type:"a", hour:22, min:50 },

    { type:"a", hour:23, min:15 },

];

//土曜のバスの時刻表(慶應大学本館前の湘南台駅行き)
var saturdayBusList = [

    { type:"b", hour:12, min:48 },
    { type:"b", hour:12, min:55 },

    { type:"a", hour:13, min:0 },
    { type:"b", hour:13, min:7 },
    { type:"b", hour:13, min:15 },
    { type:"a", hour:13, min:20 },
    { type:"b", hour:13, min:28 },
    { type:"b", hour:13, min:36 },
    { type:"a", hour:13, min:41 },
    { type:"b", hour:13, min:50 },

    { type:"b", hour:14, min:0 },
    { type:"a", hour:14, min:10 },
    { type:"a", hour:14, min:20 },
    { type:"a", hour:14, min:30 },
    { type:"b", hour:14, min:40 },
    { type:"a", hour:14, min:50 },

    { type:"a", hour:15, min:0 },
    { type:"a", hour:15, min:10 },
    { type:"a", hour:15, min:20 },
    { type:"a", hour:15, min:30 },
    { type:"a", hour:15, min:40 },
    { type:"a", hour:15, min:50 },

    { type:"a", hour:16, min:0 },
    { type:"a", hour:16, min:10 },
    { type:"a", hour:16, min:20 },
    { type:"a", hour:16, min:30 },
    { type:"a", hour:16, min:40 },
    { type:"a", hour:16, min:50 },

    { type:"b", hour:17, min:0 },
    { type:"a", hour:17, min:10 },
    { type:"a", hour:17, min:20 },
    { type:"a", hour:17, min:30 },
    { type:"a", hour:17, min:40 },
    { type:"b", hour:17, min:50 },

    { type:"a", hour:18, min:0 },
    { type:"b", hour:18, min:10 },
    { type:"a", hour:18, min:20 },
    { type:"a", hour:18, min:30 },
    { type:"b", hour:18, min:40 },
    { type:"a", hour:18, min:50 },

    { type:"b", hour:19, min:0 },
    { type:"a", hour:19, min:10 },
    { type:"a", hour:19, min:20 },
    { type:"a", hour:19, min:30 },
    { type:"a", hour:19, min:40 },
    { type:"a", hour:19, min:50 },

    { type:"a", hour:20, min:0 },
    { type:"a", hour:20, min:10 },
    { type:"a", hour:20, min:30 }

];

var sundayBusList = [
]

//変数busListに暫定的に平日のバス時刻表を代入
var busList = weekDayBusList;

//変数nowに 現在の日時を取得。
//new Date()　で現在の端末の時計のデータを取得
var now = new Date();

//現在時刻のデータに.
//日曜日の時は　now.getDay() は0が返ってくる
//月曜日の時は　now.getDay() は1が返ってくる
//.
//.
//土曜日の時は　now.getDay() は6が返ってくる

if (now.getDay()==0) {
    busList = sundayBusList;
};

if (now.getDay()==6) {
    busList = saturdayBusList;
};

// ↑↑ここまででbusListに当日のバスの時刻表が代入された。


var rewrite = function(){


    //現在時刻のデータをnowに代入

    //現在時刻が14:40,23の場合
    //hour = 14
    //min = 40
    //time = 14*60+40
    //sec = 23
    now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var time = hour*60+min;
    var sec = now.getSeconds();

    //indexに0を代入
    var index = 0;

    //今日のバスの本数分while文を回す
    while(index < busList.length){


        //土曜日の時 busList[0]　が意味しているのは土曜日の１本目のバスのデータ  { type:"b", hour:12, min:48 }
        //busList[0].hour は 12 
        //busList[0].min は 48

        var busTime = busList[index].hour * 60 + busList[index].min;
        if ( busTime > time) {
            break;
        };
        index = index + 1;
    }

    //indexには次のバスが何本目かが入る。

    //timer1_labelに<label id="timer1_label" class="">　</label>を代入
    //document.querySelector("#timer1_label")でid="timer1_label"を探す
    var timer1_label = document.querySelector("#timer1_label");

    //もし次のバスのtypeが"a"の時
    if (busList[index].type == "a") {
        timer1_label.innerHTML = "遠藤経由　"+ busList[index].hour + ":" + ("0" + busList[index].min ).slice(-2) + "発";
        //クラスを変更をすることによって、labelの色を変える
        timer1_label.className = "s23";
    }

    //もし次のバスのtypeが"b"の時
    if (busList[index].type == "b") {
        timer1_label.innerHTML = "ツインライナー　"+ busList[index].hour + ":" + ("0" + busList[index].min ).slice(-2) + "発";
        timer1_label.className = "s25";
    }

    //タイマーの分の表示部分
    var timer1_minutes = document.querySelector("#timer1_minutes");
    //次のバスの時間を分に直し、現在時刻との差を調べる。このとき1分多くなるので、1引く
    timer1_minutes.innerHTML = busList[index].hour * 60 + busList[index].min - time - 1;

    //タイマーの秒の表示部分
    var timer1_seconds = document.querySelector("#timer1_seconds");
    //残りの秒数の表示
    //(60-sec) これだと、0秒の時に残りが60になってしまう。→%60する事で解決
    //どの秒数の時も２桁で表示するために、頭に"0"を追加して、.slce(-2)で後ろから２文字文に短縮
    timer1_seconds.innerHTML = ("0" + (60 - sec)%60).slice(-2);


    var timer2_label = document.querySelector("#timer2_label");

    if (busList[index+1].type == "a") {
        timer2_label.innerHTML = "遠藤経由　"+ busList[index+1].hour + ":" + ("0" + busList[index+1].min ).slice(-2) + "発";
        timer2_label.className = "s23";
    }

    if (busList[index+1].type == "b") {
        timer2_label.innerHTML = "ツインライナー　"+ busList[index+1].hour + ":" + ("0" + busList[index+1].min ).slice(-2) + "発";
        timer2_label.className = "s25";
    }

}


//最初に読み込まれる関数
var initApp = function(){

    //reweite()を実行
    rewrite();
    //以降100ms(0.1秒)ごとにrewrite()がよばれる
    setInterval("rewrite()",100);

};

//initAppを実行
initApp();
