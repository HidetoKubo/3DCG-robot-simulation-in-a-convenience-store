const vp = document.getElementById("video");
//const vpThank = document.getElementById('videoThank');
//const vpSad = document.getElementById('videoSad');

const gameBGI = document.getElementById('videoBackground');
const yesBtn = document.getElementById('yesButton');
const noBtn = document.getElementById('noButton');
const firstMsg = document.getElementById('firstMessage');

//const cbox = document.getElementById('checkbox');
//const cboxLabel = document.getElementById('checkboxlabel');
const nextBtn = document.getElementById('next-btn');

const radioQ1_1 = document.getElementsByClassName('Q1-1');
const textQ1_2 = document.getElementById('Q1-2');
const radioQ2_1 = document.getElementsByClassName('Q2-1');
const radioQ2_2 = document.getElementsByClassName('Q2-2');
const radioQ2_3 = document.getElementsByClassName('Q2-3');
/*
const exp1 = document.getElementById('exp-1');
const exp2 = document.getElementById('exp-2');
const exp3 = document.getElementById('exp-3');
const exp4 = document.getElementById('exp-4');
*/

var selectedChoice = document.getElementById('choice');

vp.setAttribute('preload','auto');
//vpThank.setAttribute('preload','auto');
//vpSad.setAttribute('preload','auto');



/*
起動：開始ボタンクリック
動作: ビデオの再生，再生後メッセージ表示，選択肢表示
*/
function movieControl () {
    document.getElementById('startButton').style.display = "none";
    /*
    exp1.style.display = "block";
    setTimeout(function () {
        exp1.style.display = 'none';
        exp2.style.display = 'block';
        setTimeout(function () {
            exp2.style.display = 'none';
            exp3.style.display = 'block';
            setTimeout(function () {
                exp3.style.display = 'none';
                exp4.style.display = 'block';
                setTimeout(function () {
                    exp4.style.display = 'none';
                    vp.play();
                },2000);//show exp4
            },5000);//shox exp3
        },5000);//show exp2
    },3000);//shoe exp1
*/
vp.play();
    vp.addEventListener('ended',function () {
//        selectMessage.style = "block";
        yesBtn.style = "inline";
        noBtn.style = "inline";
    });
}
/*
起動：「はい」が選択されたとき
動作: 選択肢画面消去，thsnkの再生，再生後endVideoControl()，
*/
function yesSelect () {
    //select = "yes";
    document.getElementById('yesBuy').setAttribute('checked', 'checked');
    selectedChoice.innerHTML = '「販売する」';
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
//    selectMessage.style.display = 'none';
    /*
    vp.style.display = "none";
    vpThank.style.display = "block";
    vpThank.play();
    vpThank.addEventListener('ended',function () {
        endVideoControl()
    });
    */
   endVideoControl();
}
/*
起動：選択肢が no のとき実行．
動作: 選択肢消去，パターン毎のvideoSadを再生．動画再生後endVideoControl()
*/
function noSelect () {
    //select = "no";
    document.getElementById('notBuy').setAttribute('checked', 'checked');
    selectedChoice.innerHTML = '「販売しない」';
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
//    selectMessage.style.display = 'none';
    /*
    vp.style.display = "none";
    vpSad.style.display = "block";
    vpSad.play();
    vpSad.addEventListener('ended',function () {
        endVideoControl();
    });
    */
   endVideoControl();
}
/*
起動：ビデオ終了後
動作: ビデオ画面にエンドメッセージ，アンケート表示
*/
function endVideoControl () {
    vp.style.display = "none";
    gameBGI.style.display = "block";
    document.getElementById('endMessage').style.display = "block";
    document.getElementById('endMoiveArea').style.display = "block";
}
/*
起動：onclick
動作: すべての回答がされているか確認
*/
var elementList;
var element;
var elements;
function checkRadioButton () {
    elementList = [];
    for (var j = 0; j < nameList.length; j++) {
        elements = document.getElementsByName(nameList[j]);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                element = elements[i].value;
                elementList.push(element);
            }
        }
    }
    //すべてが選択されていないとfalse
    if (elementList.length != 4) {
        return false;
    }
    else {
        return true;
    }
}

/*
起動：ラジオボタンの変更
動作: すべてのラジオボタンがチェックされていると，最終チェックボックスが使用可能．
*/
var alertMessage = "ゲーム終了後，すべての質問に回答してください．";
var flag = false;

$(radioQ1_1).change(function () {
    if (checkRadioButton() && textQ1_2.value != "") {
        flag = true;
        nextBtn.style.opacity = 1.0;
        nextBtn.setAttribute('title', 'クリックして次へ進んでください');
    }
});

$(textQ1_2).on('change keydown',function () {
    if (checkRadioButton() && textQ1_2.value != "") {
        flag = true;
        nextBtn.style.opacity = 1.0;
        nextBtn.setAttribute('title', 'クリックして次へ進んでください');
    }
});

$(radioQ2_1).change(function () {
    if (checkRadioButton() && textQ1_2.value != "") {
        flag = true;
        nextBtn.style.opacity = 1.0;
        nextBtn.setAttribute('title', 'クリックして次へ進んでください');
    }
});

$(radioQ2_2).change(function () {
    if (checkRadioButton() && textQ1_2.value != "") {
        flag = true;
        nextBtn.style.opacity = 1.0;
        nextBtn.setAttribute('title', 'クリックして次へ進んでください');
    }
});

$(radioQ2_3).change(function () {
    if (checkRadioButton() && textQ1_2.value != "") {
        flag = true;
        nextBtn.style.opacity = 1.0;
        nextBtn.setAttribute('title', 'クリックして次へ進んでください');
    }
});

nextBtn.style.opacity = 0.25;
nextBtn.setAttribute("title", 'ゲーム終了後，すべての質問に回答してください．');

//document.getElementById('endMoiveArea').style.display = "block";