var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    //speakcomputer()
    if(content == "Take my selfie.")
    {
        console.log("yes doing so")
        speakcomputer();
    }
}

function speakcomputer()
{
    var synth = window.speechSynthesis
    //var speak_data = document.getElementById("textbox").value;
    speak_data = "Taking yer selfie in 3 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this)
    Webcam.attach(camera);

    setTimeout(function() {
    take_snapshot()
    save()
     } , 3000)

}

var camera = document.getElementById("camera");
Webcam.set ({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
})

function take_snapshot()
{
    Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri+ "'>";
})};

function save()
{
    atag = document.getElementById("link");
    image = document.getElementById("selfie_image").src
    atag.href = image;
    atag.click();
}