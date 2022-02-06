Webcam.attach( '#camera' );
camera = document.getElementById("camera");
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function takesnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Initialize the Image Classifier method with MobileNet
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/10QrFky_b/model.json',modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    document.getElementById('result_object_name').innerHTML=results[0].label;
    document.getElementById('result_object_accuracy').innerHTML=results[0].confidence.toFixed(3)*100+"%";
  }
}
