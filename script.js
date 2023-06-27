function repeatEternal(str, time){
    time = time*1000 || 200;
    var position = 0
       ,rdiv = document.querySelector('#demo')
       ,l2r = true;

    return eternal(str);

    function eternal(s){
        rdiv.textContent = l2r ? rdiv.textContent + s[0] : s.slice(0, -1);
        l2r = s.length === 1 ? !l2r : l2r;
        s = s.length < 2 ? str : !l2r ? s.slice(0,-1) : s.slice(1);
        setTimeout( function(){ eternal(s); }, time);
    }
}
// usage
repeatEternal('Full Stack Software Developer - Building Cross-Functional Applications with End-to-End Capabilities', 0);
const names=document.getElementById("#name");
let x=0,y=0;
window.addEventListener("mousemove",function(e){
    
    let clientX=this.window.innerHeight/2;
    console.log(clientX)
    
    names.style.transform=`translateX(44)`
})