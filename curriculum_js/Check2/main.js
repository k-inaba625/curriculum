// 初期表示は全表示
document.querySelector('.jpnText').style.display = "block";
document.querySelector('.enText').style.display = "block";

function changeLang(){
    let languages = document.querySelector('#selectLanguages').value;
    // 「日本語」選択の場合、日本語の文字だけ表示
    if(languages == 'jpn'){
        document.querySelector('.jpnText').style.display = "block";
        document.querySelector('.enText').style.display = "none";
    // 「英語」選択の場合、英語の文字だけ表示
    } else if(languages == 'en') {
        document.querySelector('.jpnText').style.display = "none";
        document.querySelector('.enText').style.display = "block";
    // 「全て表示」選択の場合、日本語と英語どちらも表示
    } else if(languages == 'all'){
        document.querySelector('.jpnText').style.display = "block";
        document.querySelector('.enText').style.display = "block";
    }
}