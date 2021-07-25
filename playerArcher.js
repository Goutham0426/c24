class PlayerArcher {
    
    constructor(x, y, width, height) {

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/playerArcher.png");
        Matter.Body.setAngle(this.body, -PI/2);
        this.angle = this.body.angle;
        this.arrowShot = false;
    }

    display() {

        var pos = this.body.position;

        if (keyIsDown(UP_ARROW)) {
            if (this.angle > -2.07) {
                this.angle -= 0.1;
            }
            else {
                this.angle += 0.1;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.angle < -1.07) {
                this.angle += 0.1;
            }
            else {
                this.angle -= 0.1;
            }
        }
      
        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      
    }

   
}