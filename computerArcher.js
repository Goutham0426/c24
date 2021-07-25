class ComputerArcher {

    constructor(x, y, width, height) {

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/computerArcher.png");
        Matter.Body.setAngle(this.body, PI/2);
        this.angle = this.body.angle;
    }

    display() {

        var pos = this.body.position;

      

        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }

    
}