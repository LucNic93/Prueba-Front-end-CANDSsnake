let velocity= 80;
let size = 10;

class object{
    constructor(){
        this.size = size ;

    }
    golpe(obj){
        
        let difx = Math.abs(this.x - obs.x);
        let dify = Math.abs(this.y - obs.y);
        if (difx >= 0 && difx < size && dify >= 0 && dify < size) {
            return true;
        } else {
            return false;
        }
    

    }

}
// comida y avance 
class vivora extends object {   

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.next = null;  
    }
    draw(ctx) { 
        if (this.next != null){ 
            this.next.draw(ctx)

        ctx.fillStyle = "#F00000";
        ctx.fillRect(this.x, this.y, this.size, this.size);

        }
    }
    setxy(x, y){
        if (this.next != null){ 
            this.next.setxy(this.x, this.y);
            
        }
         this.x = x;
         this.y = y;
    }
    avansar () {
        if(this.next == null){
            this.next = new snake(this.x, this.y);
        }else {
            this.next.avansar();

        }
    }
    verSiguiente(){
        return this.next;
    }
}
// punto de contacto (cabeza de la vivora)

let head = new vivora (20, 20);
let comida = new comida
let ex = true
let ey = true
let xdir = 0;
let ydir = 0;  

function move(){
    
    let nx = head.x + xdir;
    let ny = head.y + ydir;
    head.sextsy(nx, ny);



}
function control(event){
    let code = event.keyCode;
    if (ex) {
        if (code == 38){
            ydir = -size;
            xdir = 0;
            ex = false;
            ey = true;
            
        }
        }
        if (code == 40){
            ydir = -size;
            xdir = 0;
            ex = false;
            ey = true;
    }
    if (ey) { 

        if (code == 37){
            ydir = -size;
            xdir = 0;
            ex = false;
            ey = true;
        }
    
    if (code == 39){
        ydir = -size;
        xdir = 0;
        ex = false;
        ey = true;
        }
    }

    function GameOver() {
        xdir = 0;
        ydir = 0;
        ex = true;
        ey = true;
        head = new vivora(20, 20);
        comida = new comida();
        alert("GAME OVER");}

     function choquepared() {
            if (head.x < 0 || head.x > 590 || head.y < 0 || head.y > 590) {
                GameOver();
            }
        }
        function choquecuerpo() {
            var temp = null;
            try {
                temp = head.verSiguiente().verSiguiente();
            } catch (err) {
                temp = null;
            }
            while (temp != null) {
                if (head.golpe(temp)) {
                    
                    GameOver();
                } else {
                    temp = temp.verSiguiente();
                }
            }
        }

class comida extends object {
    
    constructor() {
        super();
        this.x = generate();
        this.y = generate();
     }
     generate(){
         let num = (Math.floor(Math.random() * 59) * 10) ;
         return num; 

     }
     colocar(){
        this.x = generate();
        this.y = generate();

     }
     draw(ctx) {
         ctx.fillStyle = "#FF0000" ;
         ctx.fillRect(this.x, this.y, this.size, this.size);
        
     }
}

    // control del entorno 

function dibujar() {

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    head.draw(ctx); 
    comida.draw(ctx);
}

function main(){
    choquecuerpo();
    choquepared();
    dibujar();
    move();

    if (head.golpe(comida))
    comida.colocar;
    head.avansar();
   }
}
setInterval("main()" , velocity);
