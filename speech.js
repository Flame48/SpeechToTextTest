const output = document.getElementById("output");
const startStop = document.getElementById("StartStop");
const startStopLabel = document.getElementById("StartStopLabel");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if(SpeechRecognition) {
    output.innerHTML = "Supports speech recognition.";

    const recog = new SpeechRecognition();
    recog.continuous = true;

    var transcript = "";

    startStop.addEventListener("click", ()=>{
        if(startStop.checked) {
            startStopLabel.innerHTML = "C";
            recog.start();
            return;
        }
        startStopLabel.innerHTML = "";
        recog.stop();
    });
    
    recog.onstart = ()=>{
        console.log("Recog Active");
    };

    recog.onend = ()=>{
        console.log("Recog Inactive");
    };

    recog.onresult = (e)=>{
        console.log(e);
        transcript = transcript.concat(' ', e.results[e.resultIndex][0].transcript);
        output.innerHTML = transcript;
    };
} else {
    output.innerHTML = "Does not support speech recognition";
}

