
function createElements(){
    CanvasArea.start();

    sayac=new componenttext("0",0,0);
    
    second=new componenttext("0"+0,290+20,100);
    minute=new componenttext("0"+0+":",180+10,100);
    hour=new componenttext("0"+0+":",70,100);
    
    sayac2=new componenttext("0",0,0);
    second2=new componenttext("0"+0,320+350+20,100);
    minute2=new componenttext("0"+0+":",210+350+10,100);
    hour2=new componenttext("0"+0+":",100+350,100);
}

var CanvasArea={
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth/1;
        this.canvas.height = window.innerHeight/2;
        this.canvas.position="absolute";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval=setInterval(updateArea,60);
    }, 
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      } ,
      stop : function() {
        clearInterval(this.interval);
        
    }
}
function componenttext(text, x, y) {
    this.count=0;
    this.count2=0;
    this.text=text;
    this.x=x;
    this.y=y;
    this.work= function(){
        this.count+=this.count2;
    }
    this.update = function() {
        ctx = CanvasArea.context;
        ctx.font = "bold 80px Segoe UI";
        ctx.fillStyle = "white";
        ctx.fillText(this.text, this.x, this.y);
  }  

  }

function updateArea(){
    CanvasArea.clear();
    kronometer(sayac,second,minute,hour);
    kronometer(sayac2,second2,minute2,hour2);
}



function kronometer(sayac,sec,min,hr){
    sayac.work();
    if(sayac.count==15){
        sec.count++;
        sayac.count=0;
    }

    if(sec.count>9){
        sec.text=sec.count;
    }
    else{
        sec.text="0"+sec.count;
    }
    if(min.count>9){
        min.text=min.count;
    }
    else{
        min.text="0"+min.count+":";
    }
    if(hr.count>9){
        hr.text=hr.count;
    }
    else{
        hr.text="0"+hr.count+":";
    }

    if(sec.count>59){
        sec.count=0;
        min.count++;
    }
    if(min.count>59){
        min.count=0;
        hr.count++;
    }
    
    min.update();
    sec.update();
    hr.update();

}

function Study(){
    sayac.count2=1;
    sayac2.count2=0;
}
function Break(){
    sayac.count2=0;
    sayac2.count2=1;
}
function Reset(){
    second.count=0;
    minute.count=0;
    hour.count=0;
    second2.count=0;
    minute2.count=0;
    hour2.count=0;
    sayac.count=0;
    sayac2.count=0;
    sayac.count2=0;
    sayac2.count2=0;
}