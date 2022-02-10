function Animation(){
    var base = document.getElementById('base')
    base.style.transform = 'rotateY('+String(Number(base.style.transform.slice(8, -4))+360)+'deg)'
}
function ChangePage(pageId){
    var content = document.getElementById('content')
    Animation();
    setTimeout(() => {
        content.getElementsByClassName('page active')[0].className = 'page';
        document.getElementById(pageId).className = 'page active'
    }, 500);
}
function ActivateButton(buttonId){
    document.getElementById(buttonId).className = 'button';
}