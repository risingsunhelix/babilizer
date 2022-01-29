function TextTypingAnime() {
  $('.TextTyping').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
function load () {
//spanタグを追加する
var element = $(".TextTyping");
element.each(function () {
var text = $(this).html();
var textbox = "";
text.split('').forEach(function (t) {
  if (t !== " ") {
    textbox += '<span>' + t + '</span>';
  } else {
    textbox += t;
  }
});
$(this).html(textbox);

});

TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
};

function readAloudJapToBabi() {
  // テキストを取得
  let textInput = document.getElementById("js-text").value;
  let rate = document.getElementById("js-rate").value;
  let pitch = document.getElementById("js-pitch").value;
  function converter(textOriginal){
    switch (textOriginal) {
      case "あ":
      case "か":
      case "さ":
      case "た":
      case "な":
      case "は":
      case "ま":
      case "や":
      case "ら":
      case "わ":
      case "が":
      case "ざ":
      case "だ":
      case "ば":
      case "ぱ":


      return textOriginal + "ば";
        break;

        case "ア":
        case "カ":
        case "サ":
        case "タ":
        case "ナ":
        case "ハ":
        case "マ":
        case "ヤ":
        case "ラ":
        case "ワ":
        case "ガ":
        case "ザ":
        case "ダ":
        case "バ":
        case "パ":
        return textOriginal + "バ";
          break;

        case "い":
        case "き":
        case "し":
        case "ち":
        case "に":
        case "ひ":
        case "み":
        case "り":
        case "ぎ":
        case "じ":
        case "ぢ":
        case "び":
        case "ぴ":
        return textOriginal + "び";
          break;

          case "イ":
          case "キ":
          case "シ":
          case "チ":
          case "ニ":
          case "ヒ":
          case "ミ":
          case "リ":
          case "ギ":
          case "ジ":
          case "ヂ":
          case "ビ":
          case "ピ":
          return textOriginal + "ビ";
            break;

          case "う":
          case "く":
          case "す":
          case "つ":
          case "ぬ":
          case "ふ":
          case "む":
          case "ゆ":
          case "る":
          case "ぐ":
          case "ず":
          case "づ":
          case "ぶ":
          case "ぷ":
          case "ん":
          return textOriginal + "ぶ";
            break;
            case "ウ":
            case "ク":
            case "ス":
            case "ツ":
            case "ヌ":
            case "フ":
            case "ム":
            case "ユ":
            case "ル":
            case "グ":
            case "ズ":
            case "ヅ":
            case "ブ":
            case "プ":
            case "ン":
            return textOriginal + "ブ";
              break;
            case "え":
            case "け":
            case "せ":
            case "て":
            case "ね":
            case "へ":
            case "め":
            case "れ":
            case "げ":
            case "ぜ":
            case "で":
            case "べ":
            case "ぺ":

            return textOriginal + "べ";
              break;
              case "エ":
              case "ケ":
              case "セ":
              case "テ":
              case "ネ":
              case "ヘ":
              case "メ":
              case "レ":
              case "ゲ":
              case "ゼ":
              case "デ":
              case "ベ":
              case "ペ":
              return textOriginal + "べ";
                break;
              case "お":
              case "を":
              case "こ":
              case "そ":
              case "と":
              case "の":
              case "ほ":
              case "も":
              case "よ":
              case "ろ":
              case "ご":
              case "ぞ":
              case "ど":
              case "ぼ":
              case "ぽ":
              return textOriginal + "ぼ";
                break;

                case "オ":
                case "ヲ":
                case "コ":
                case "ソ":
                case "ト":
                case "ノ":
                case "ホ":
                case "モ":
                case "ヨ":
                case "ロ":
                case "ゴ":
                case "ゾ":
                case "ド":
                case "ボ":
                case "ポ":
                return textOriginal + "ボ";
                  break;

                case "っ":
                case "ぁ":
                case "ぃ":
                case "ぅ":
                case "ぇ":
                case "ぉ":
                case "ゃ":
                case "ゅ":
                case "ょ":

                case "ッ":
                case "ァ":
                case "ィ":
                case "ゥ":
                case "ェ":
                case "ォ":
                case "ャ":
                case "ュ":
                case "ョ":

                case "ー":
                case "-":
                case "。":
                case "、":
                return textOriginal;
                  break;
      default:
    }
  }
  function getTextOutputBabi(){
    let textOriginal = [textInput.charAt(0)]
    let textModified = [converter(textOriginal[0])];
    var textOutput = textModified[0];
    for (var i = 1; i < textInput.length; i++) {
        textOriginal.push(textInput.charAt(i));
        textModified.push(converter(textOriginal[i]))
        textOutput = textOutput + textModified[i];
    }
    return textOutput;
  }

  // ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {

    // 発言を設定
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = getTextOutputBabi();
    uttr.lang = "ja-JP";
    uttr.pitch = pitch;
    uttr.rate = rate;


    // 発言を再生
    window.speechSynthesis.speak(uttr);
    $(".c-output").text(getTextOutputBabi());
    load();

  } else {
    alert('大変申し訳ありません。このブラウザは音声合成に対応していません。');
  }
}
function readAloudBabiToJap() {
  // テキストを取得
  let textInput = document.getElementById("js-text").value;
  let rate = document.getElementById("js-rate").value;
  let pitch = document.getElementById("js-pitch").value;

  function remover(textOriginal){

    let textModified = textOriginal.replace('ッ','');

    while (textModified.indexOf('っ') != -1){
      textModified = textModified.replace('っ','');
    }
    while (textModified.indexOf('ぁ') != -1){
      textModified = textModified.replace('ぁ','');
    }
    while (textModified.indexOf('ぃ') != -1){
      textModified = textModified.replace('ぃ','');
    }
    while (textModified.indexOf('ぅ') != -1){
      textModified = textModified.replace('ぅ','');
    }
    while (textModified.indexOf('ぇ') != -1){
      textModified = textModified.replace('ぇ','');
    }
    while (textModified.indexOf('ぉ') != -1){
      textModified = textModified.replace('ぉ','');
    }
    while (textModified.indexOf('ゃ') != -1){
      textModified = textModified.replace('ゃ','');
    }
    while (textModified.indexOf('ゅ') != -1){
      textModified = textModified.replace('ゅ','');
    }
    while (textModified.indexOf('ょ') != -1){
      textModified = textModified.replace('ょ','');
    }

    while (textModified.indexOf('ッ') != -1){
      textModified = textModified.replace('ッ','');
    }
    while (textModified.indexOf('ァ') != -1){
      textModified = textModified.replace('ァ','');
    }
    while (textModified.indexOf('ィ') != -1){
      textModified = textModified.replace('ィ','');
    }
    while (textModified.indexOf('ゥ') != -1){
      textModified = textModified.replace('ゥ','');
    }
    while (textModified.indexOf('ェ') != -1){
      textModified = textModified.replace('ェ','');
    }
    while (textModified.indexOf('ォ') != -1){
      textModified = textModified.replace('ォ','');
    }
    while (textModified.indexOf('ャ') != -1){
      textModified = textModified.replace('ャ','');
    }
    while (textModified.indexOf('ュ') != -1){
      textModified = textModified.replace('ュ','');
    }
    while (textModified.indexOf('ョ') != -1){
      textModified = textModified.replace('ョ','');
    }

    while (textModified.indexOf('-') != -1){
      textModified = textModified.replace('-','');
    }
    while (textModified.indexOf('ー') != -1){
      textModified = textModified.replace('ー','');
    }
    while (textModified.indexOf('。') != -1){
      textModified = textModified.replace('。','');
    }
    while (textModified.indexOf('、') != -1){
      textModified = textModified.replace('、','');
    }

    return textModified;
  }
  function getTextOutputJap(){
    let textModified = remover(textInput);

    var textOutputJap = textModified.charAt(0);

    for (let i = 2; i < textModified.length-1 ; i += 2) {
        textOutputJap = textOutputJap + textModified.charAt(i);



    }
        return textOutputJap;

  }
  // ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {

    // 発言を設定
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = getTextOutputJap();
    uttr.lang = "ja-JP";
    uttr.pitch = pitch;
    uttr.rate = rate;

    // 発言を再生
    window.speechSynthesis.speak(uttr);
    $(".c-output").text(getTextOutputJap());
    load();

  } else {
    alert('大変申し訳ありません。このブラウザは音声合成に対応していません。');
  }




}
document.getElementById("js-button--japToBabi").addEventListener("click", readAloudJapToBabi);
document.getElementById("js-button--babiToJap").addEventListener("click", readAloudBabiToJap);
