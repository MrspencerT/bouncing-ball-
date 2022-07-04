let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


canvas.style.background= '#f85';

class Circle {
    constructor(xpos, ypos, radius, color,speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius; 
        this.color = color;
        this.speed = speed;

        this.dx = 1 * this.speed; //direction scale
        this.dy = 1 * this.speed;
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos,this.radius,0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 12;
        ctx.stroke();   
    }
   
    update(){
        
        this.draw(ctx);
        this.xpos += this.dx; //update x 
        this.ypos += this.dy;

        if((this.ypos + this.radius) > height){
            this.dy = -this.dy;
        }
        if((this.ypos - this.radius) < 0){
            this.dy = -this.dy;
        }
        if((this.xpos + this.radius) > width){
            this.dx = -this.dx;
        }
        if((this.xpos - this.radius) < 0){
            this.dx = -this.dx;
        }

    }
}



let all_circles = [];

let randomNumber = function(min, max){
    let result = Math.random() * (max - min) + min;
    return result;
}

for(let i = 0; i < 10;i++){
    let speed = randomNumber(3,8)
    let radius = 34;
    let random_x =  randomNumber(radius,(width - radius));
    let random_y =  randomNumber(radius, (height - radius));
    
    let my_circle = new Circle(random_x,random_y,radius,"#fff",speed);
    all_circles.push(my_circle); 
}

let animate = function(){
    requestAnimationFrame(animate)
    ctx.clearRect(0 , 0, width, height);
    all_circles.forEach(element=>element.update())

}
animate()

/* for(let i = 0; i < 10;i++){
    let random_x =  Math.random() * width;
    let random_y =  Math.random() * height;
    let my_circle = new Circle(random_x,random_y,56,"#fff",1);
    all_circles.push(my_circle);
    createCircle(all_circles[i]);
}
 */