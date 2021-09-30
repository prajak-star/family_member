function preload(){
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k6nLkgkgy/model.json",indent);
}

function indent(){
    console.log("model loaded");
}

function draw(){
    image(video,0,0,600,400);
   classifier.classify(video,getresult);
}

function getresult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }

    document.getElementById("typ").innerHTML="family member :- " + result[0].label;
    document.getElementById("acu").innerHTML= " Accuracy " + result[0].confidence.toFixed(3);
}