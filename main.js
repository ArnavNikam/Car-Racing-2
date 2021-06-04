canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carWidth = 200;
carHeight = 180;
car_1_X = 250;
car_1_Y = 350;
car_2_X = 250;
car_2_Y = 250;
backroundImg = "Canvas_Bg.jpg";
carImg_1 = "Car_1.png";
carImg_2 = "Car_2.png";

function add() {
    backroundImg_tag = new Image();
    backroundImg_tag.onload = uplodeBackround;
    backroundImg_tag.src = backroundImg;

    car_1_Img_tag = new Image();
    car_1_Img_tag.onload = uplodeCar_1;
    car_1_Img_tag.src = carImg_1;

    car_2_Img_tag = new Image();
    car_2_Img_tag.onload = uplodeCar_2;
    car_2_Img_tag.src = carImg_2;
}

function uplodeBackround() {
    ctx.drawImage(backroundImg_tag, 0, 0, canvas.width, canvas.height);
}

function uplodeCar_1() {
    ctx.drawImage(car_1_Img_tag, car_1_X, car_1_Y, carWidth, carHeight);
}

function uplodeCar_2() {
    ctx.drawImage(car_2_Img_tag, car_2_X, car_2_Y, carWidth, carHeight);
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    console.log(car_1_X);
    console.log(car_2_X);
    if(keyPressed == 37) {
        Car1Left();
    }

    if(keyPressed == 40) {
        Car1Down();
    }
    
    if(car_1_X >= 650) {
        console.log("Car 1 has won");
        document.getElementById("GameStatus").innerHTML = "Car 1 Won !!";
    } else if(car_2_X >= 650) {
        console.log("Car 2 has won");
        document.getElementById("GameStatus").innerHTML = "Car 2 Won !!";
    }

    if(keyPressed == 39) {
        Car1Right();
    }

    if(keyPressed == 38) {
        Car1Up();
    }

    if(keyPressed == 65) {
        Car2Left();
    }

    if(keyPressed == 83) {
        Car2Down();
    }

    if(keyPressed == 68) {
        Car2Right();
    }

    if(keyPressed == 87) {
        Car2Up();
        
    }
}


// Start of coding for Car 1 //

function Car1Left() {
    if (car_1_X > 0) {
        car_1_X = car_1_X - 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

function Car1Right() {
    if (car_1_X < 650) {
        car_1_X = car_1_X + 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

function Car1Down() {
    if (car_1_Y < 450) {
        car_1_Y = car_1_Y + 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

function Car1Up() {
    if (car_1_Y > 0) {
        car_1_Y = car_1_Y - 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

// End of coding for Car 1 //


// Start of coding for Car 2 //

function Car2Left() {
    if (car_2_X > 0) {
        car_2_X = car_2_X - 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

function Car2Right() {
    if (car_2_X < 700) {
        car_2_X = car_2_X + 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

function Car2Down() {
    if (car_2_Y < 500) {
        car_2_Y = car_2_Y + 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

function Car2Up() {
    if (car_2_Y > 0) {
        car_2_Y = car_2_Y - 10;
        uplodeBackround();
        uplodeCar_1();
        uplodeCar_2();
    }
}

// End of coding for Car 2 //