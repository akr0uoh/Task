let username;
let userresult;

＃名前を入力してもらう
username = prompt("お名前を教えて下さい。");

＃名前が未入力の場合、”名無し”と表示する。
if (username == ""){
    document.getElementById("name").innerHTML = "名無し";
}

＃名前が入力された場合、その名前を用いる。
else
document.getElementById("name").innerHTML = username;


＃０～５までの数字をランダムに出力する変数randを定義する。
let rand = Math.floor( Math.random() * 5) ;

＃０～５までの数字に、大吉、中吉、小吉、吉、凶を割り振る。
if (rand == 0) {
    userresult = "大吉";
  }
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}

＃大吉、中吉、小吉、吉、凶をランダムに１つ出力する。
document.getElementById("result").innerHTML = userresult;
