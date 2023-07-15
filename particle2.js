const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
const effect = new Effect(canvas.width,canvas.height)

function animate(){
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.font = effect.fontsize + 'px monospace';
effect.symbols.forEach((symbol) =>{
    symbol.draw(ctx)
})
requestAnimationFrame(animate)
}
animate();
})

class Symbol{
    constructor(x,y,fontsize,canvasHeight){
         this.charactor = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         this.x = x;
         this.y = y;
         this.fontsize = fontsize;
         this.canvasHeight = canvasHeight;
         console.log(this.y)
    }
    draw(context){
         this.text = this.charactor.charAt(Math.floor(Math.random()*this.charactor.length));
         context.fillStyle = "#0aff0a";
         context.fillText(this.text,this.x*this.fontsize,this.y*this.fontsize)
        //  console.log(this.x*this.fontsize+" "+this.y*this.fontsize)
         if(this.y*this.fontsize>this.canvasHeight && Math.random()>0.98){
            this.y = 0;
         }
         else{
            this.y+=1;
         }
    }
}

class Effect{
    constructor(canvasWidth,canvasHeigth){
     this.canvasWidth = canvasWidth;
     this.canvasHeight = canvasHeigth;
     this.fontsize = 25;
     this.columns = this.canvasWidth/this.fontsize;
     this.symbols = [];
     this.#initialize();

    }
    #initialize(){ 
        for(let i=0; i<this.columns; i++){
            this.symbols[i] = new Symbol(i,0,this.fontsize,this.canvasHeight);
            
        }
    }
}

const effect = new Effect(canvas.width,canvas.height)

function animate(){
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.font = effect.fontsize + 'px monospace';
effect.symbols.forEach((symbol) =>{
    symbol.draw(ctx)
})
requestAnimationFrame(animate)
}
animate();