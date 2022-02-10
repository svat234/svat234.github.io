function Animation(){
    var base = document.getElementById('base');
    var pagecounter = document.getElementById('page-counter');
    base.style.transform = 'rotateY('+String(Number(base.style.transform.slice(8, -4))+180)+'deg)';
    pagecounter.style.transform = 'rotateY('+String(Number(base.style.transform.slice(8, -4))*-1)+'deg)'
}
function ChangePage(pageId){
    var content = document.getElementById('content');
    Animation();
    setTimeout(() => {
        content.getElementsByClassName('page active')[0].classList.remove('active');
        document.getElementById(pageId).classList.add('active');
    }, 250);
}
function ActivateButton(buttonId){
    document.getElementById(buttonId).classList.remove('disabled');
}
