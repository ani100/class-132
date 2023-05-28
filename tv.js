model_status = 0;
bed_x = 0;
bed_y= 0;
bed_width = 0;
bed_height = 0;

function preload() {

    img = loadImage("Tv and Ac.jpg");

}

function setup() {

    canvas = createCanvas(700,450);
    canvas.position(420,270);
    object = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status_ans_bedroom").innerHTML = "Detecting Objects";
    object.detect(img,getresults);
    
}

function modelloaded() {
    console.log("The cocossd model is successfully initialised");
}

function draw() {

background("black");
image(img , 10 , 10 , 680 , 430 );
///stroke("red");
//strokeWeight(1);
//noFill();
//text("bed",bed_x,bed_y);
//strokeWeight(5);
//rect(bed_x,bed_y,bed_width,bed_height);

}

function getresults(error,results) {

    if(error) {

        console.error(error);
    
    }

    else {

        console.log(results);
        bed_x = results[0].x;
        bed_y = results[0].y;
        bed_width = results[0].width;
        bed_height = results[0].height;

    }

}
