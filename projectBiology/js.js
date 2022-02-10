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
function PageCounterUpdate(){
    var pagecounter = document.getElementById('page-counter');
    var id = pagecounter.getElementsByClassName('selected')[0].id
    document.getElementById(id).classList.remove('selected');
    document.getElementById('page-counter-element-'+String(Number(id.slice(21))+1)).classList.add('selected')
}
function ActivateButton(buttonId){
    document.getElementById(buttonId).classList.remove('disabled');
}
function ChangeAnswer(pageId,correct){
    var element = document.getElementById(pageId+'_answer')
    if (correct==true){
        element.innerHTML = 'Чудово! Правильна відповідь';
        element.style.color = 'var(--correct-answer)'
    }
    else{
        element.innerHTML = 'Неравильна відповідь';
        element.style.color = 'var(--incorrect-answer)'
    }
}
function Calculate(){
    var element = document.getElementById('test_result');
    var score = Number(document.getElementById('page_1_input_1').checked);
    var score = score + Number(document.getElementById('page_2_input_1').checked);
    var score = score + Number(document.getElementById('page_3_input_2').checked);
    var score = score + Number(document.getElementById('page_4_input_2').checked);
    var score = score + Number(document.getElementById('page_5_input_1').checked);
    var score = score + Number(document.getElementById('page_6_input_1').checked);
    var score = score + Number(document.getElementById('page_7_input_2').checked);
    var score = score + Number(document.getElementById('page_8_input_1').checked);
    var score = score + Number(document.getElementById('page_9_input_1').checked);
    element.innerHTML = 'Вітаю! Ви відповіли на '+String(score)+' з 9 питань вірно.'
}
