Webcam.set({
    width:350,
    height:300,
    imagem_format:'png',
    png_quality:90,
})

camera=document.getElementById("camera");

Webcam.attach('#camera')

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
    })
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/URZRRpozx/model.json',modelLoaded)

function modelLoaded(){
    console.log('model Loaded')
}

function check(){
    img=document.getElementById('captured')
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("nameOfObject").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}








