console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='NEW VALUE';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
   // img.style.marginLeft='100px';
};