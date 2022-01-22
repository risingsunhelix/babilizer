

function readAloud() {
  // テキストを取得
  var textInput = document.getElementById("js-text").value;
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

              case "お":
              case "こ":
              case "そ":
              case "と":
              case "の":
              case "ほ":
              case "も":
              case "よ":
              case "ろ":
              case "を":
              case "ご":
              case "ぞ":
              case "ど":
              case "ぼ":
              case "ぽ":
              return textOriginal + "ぼ";
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
                return textOriginal;
                  break;
      default:
    }
  }
  function getTextOutput(){
    let textOriginal = [textInput.charAt(0)]
    let textModified = [converter(textOriginal[0])];
    var textOutput = textModified[0];
    for (var i = 1; i < textInput.length; i++) {
        textOriginal.push(textInput.charAt(i));
        textModified.push(converter(textOriginal[i]))
        var textOutput = textOutput + textModified[i];
    }
    return textOutput;
  }

  // ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {

    // 発言を設定
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = getTextOutput();
    uttr.lang = "ja-JP";
    uttr.pitch = pitch;
    uttr.rate = rate;


    // 発言を再生
    window.speechSynthesis.speak(uttr);

  } else {
    alert('大変申し訳ありません。このブラウザは音声合成に対応していません。');
  }
}


document.getElementById("js-button").addEventListener("click", readAloud);
