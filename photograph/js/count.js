let s = document.getElementById('startbtn');

let p = document.getElementById('stopbtn');
let r = document.getElementById('resetbtn');
            let x=0;
            s=addEventListener("click",function(){
                
                this.setInterval(()=>{
                    x=x+1;
                    document.getElementById('op').innerHTML=x;
                    this.document.getElementById('op').disabled="true";
                },1000);
                
            });
            p.addEventListener("click",function(){
                
            });
            r.addEventListener("click",function(){
                x=0;
                document.getElementById('op').innerHTML=x;
            });
            

            
              
  