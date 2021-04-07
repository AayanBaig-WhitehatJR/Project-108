camera = document.getElementById("camera")
Webcam.set({
    height:650,
    width:600,
    image_format: 'png',
png_quality:90
});
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id = resultImage src = '" + data_uri + "'>"
    })
}
 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OXhlltz1X/model.json', modelLoaded )
console.log("Latest ml5 is running. Version: ", ml5.version)
function modelLoaded(){
    console.log("Model loaded!")    
}

function identify(){
    img = document.getElementById('resultImage')
    classifier.classify(img, gotResult)
}
function gotResult(error, results){
        if(error){
            console.log(error)
        }
        else{
            console.log(results)
            document.getElementById("gestureDisplay").innerHTML = results[0].label
        }
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance("Your gesture has been identified as: " + results[0].label)
synth.speak(utterThis)
    }