function setup() {
	// define artboard size
	createCanvas(900,600);
	// Set here the values that are not changing all over the sketch

	noStroke();

}

function draw() {
	background(245, 222, 222);
	fill(244, 184, 185);
	translate(450, 300);
	noStroke();
	rect(-450, 100, 900, 200);

	//Head
	fill(206, 179, 184); //grey
	noFill()
	strokeWeight(5);
	stroke(206, 179, 184)
	arc(0,-200, 120, 120, 0, PI, OPEN);
	noStroke();
	fill(238, 153, 29); //yellow
	ellipse(-60, -200, 10);
	ellipse(60, -200, 10);
	fill(206, 179, 184); //grey
	rect(-60, -100, 120, 50);
	arc(0, -100, 120, 120, -PI, 0, CHORD);
	rect(-10, -50, 20, 5);
	rect(-10, -42, 20, 5);
	rect(-10, -34, 20, 5);
	//Eye
	fill(145,109,115) //dark brown
	arc(0, -100, 80, 40, -PI, 0, OPEN);
	arc(0, -100, 80, 40, 0, PI, OPEN);
	fill(252, 252, 252);
	arc(0, -100, 30, 30, -PI, 0, OPEN);
	arc(0, -100, 30, 30, 0, PI, OPEN);
	fill(0,0,0);
	ellipse(0,-100,10);
	fill(206, 179, 184)


	//Body
	rect(-70, -30, 140, 100);
	rect(-50, 70, 100, 15)
	arc(0, 85, 100, 100, 0, PI, CHORD);
	fill(252, 252, 252);
	//Papillon
	fill(145,109,115) //dark brown
	triangle(-20, -20, -20, 0, 0, -10);
	triangle(20, -20, 20, 0, 0, -10);

	ellipse(0,50,60);
	fill(238, 153, 29);
	arc(0, 50, 50, 50, 0, PI/2);
	arc(0, 50, 50, 50, PI, - PI/2);

	//Arms
	fill(206, 179, 184); //grey
	rect(-100, -25, 15, 70);
	rect(85, -25, 15, 70);
	rect(-100, 60, 15, 40);
	rect(85, 60, 15, 40);
	rect(-98,100, 10, 30);
	rect(88,100, 10, 30 );
	fill(238, 153, 29); //yellow
	rect(-90, -28, 20, 25);
	rect(70, -28, 20, 25);
	rect(-108, 120, 30, 10);
	rect(78, 120, 30, 10);
	rect(-118, 120, 10, 20);
	rect(-78, 120, 10, 20);
	rect(108, 120, 10, 20);
	rect(68, 120, 10, 20);
	fill(145,109,115) //dark brown
	ellipse(-93, 50, 30);
	ellipse(93, 50, 30);
	ellipse(-93, 100, 20);
	ellipse(93, 100, 20);
	//Legs
	fill(206, 179, 184); //grey
	rect(-45,100,20,90);
	rect(25,100,20,90);
	rect(-43,190,15,70);
	rect(28,190,15,70);
	rect(-60,260,50,20);
	rect(10,260,50,20);
	fill(145,109,115) //dark brown
	ellipse(-35,190,20);
	ellipse(35,190,20);



}
