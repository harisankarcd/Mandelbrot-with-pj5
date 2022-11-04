function setup() {
  createCanvas(360,360);
  pixelDensity(1);
 

  minSlider=createSlider(-15,0,-2.5,0.01);
  maxSlider=createSlider(0,15,2.5,0.01);
  
}

function draw() {
   loadPixels();
  var iter=150;
  for (var x=0;x<width;x++){
    for(var y=0;y<height;y++)
      {
        var a=map(x,0,width,minSlider.value(),maxSlider.value());
      
        var b=map(y,0,height,minSlider.value(),maxSlider.value());
        var n=0;
        var z=0;
        var ca=a;
        var cb=b;
        while(n<iter){
          var aa=a*a-b*b;
          var bb=2*a*b;
          a=aa+ca;
          b=bb+cb;
         
           if((a+b)>16){
            break;
          }
           n++;
           }
          
         
          var bright=map(n,0,iter,0,1);
          bright=map(sqrt(bright),0,1,0,255);
          if(n==iter)
            {
              bright=0;
            }
       
        
        
        
        
        var pix=(x+y*width)*4;
        pixels[pix+0]=bright; 
        
        pixels[pix+1]=120;
        pixels[pix+2]=75;
        pixels[pix+3]=255;
        
      }
  }
updatePixels();  
  
}
