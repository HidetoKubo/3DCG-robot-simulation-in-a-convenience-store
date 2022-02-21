const volTestBtn = document.getElementById('volumeTestButton');
const volTestMsg = document.getElementById('volumeTestMessage');
const volText = document.getElementById('volumeText');
const vtm2 = document.getElementById('vtm2');
const pracBtn = document.getElementById('practiceButton');
const volumeMedia = document.getElementById('sampleVoice');
const vpPrac = document.getElementById("videoPractice");


const brackBack = document.getElementById('brackBackground');
const pracEndMsg = document.getElementById('practiceEndMessage');




function volumeTestStart () {
    volTestBtn.style.display = "none";
    volTestMsg.style.display = "inline";
    volumeMedia.play();
    volumeMedia.volume = 0.15;
    volumeMedia.addEventListener('ended', function(){
        vtm2.style.display = 'inline';
        pracBtn.style.display = "inline";
        volumeMedia.play();
    });
}

function practiceStart () {
    volumeMedia.pause();
    volText.style.display = "none";
    vtm2.style.display = 'none';
    volTestMsg.style.display = "none";
    pracBtn.style.display = "none";
    vpPrac.style.display = "block";
    pracEndMsg.style.display = "none";
    brackBack.style.display = "none";
    //ビデオを再生
    vpPrac.play();
    vpPrac.addEventListener('ended', function () {
        showEndMessage();
    });
}



function showEndMessage () {
    pracEndMsg.style.display = "inline";
    pracBtn.style.display = "inline";
    vpPrac.style.display = "none";
    brackBack.style.display = "block";
    pracBtn.value = "もう一度再生";
    document.getElementById('endMovieMessage').style.display = 'block';
    //document.getElementById('checkbox').disabled = false;
    //document.getElementById('finalCheckBoxs').style.display = 'block';
    target.style.opacity = 1.0;
    flag = true;

}
