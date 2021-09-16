// Click button ex 1
const btn1 = document.querySelector('.btn-1');
const box1 = document.querySelector('.box-1');
btn1.onclick = function() {

    if (box1.style.display !== 'none') {
        box1.style.display = 'none';
        console.log('hide');
    } else {
        box1.style.display = 'block';
        console.log('show');
    }
}

// Click button ex 2
const btn2 = document.querySelector('.btn-2');
const box2 = document.querySelector('.box-2');

btn2.onclick = function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box2.style.backgroundColor = "#" + randomColor;
}

// Click button ex 3
const btn3 = document.querySelector('.btn-3');
const box3a = document.querySelector('.box-3a');
const box3b = document.querySelector('.box-3b');

btn3.onclick = function() {
    let content = box3a.innerText;
    box3a.innerText = box3b.innerText;
    box3b.innerText = content;
}

// Click button ex 4
const btn4 = document.querySelector('.btn-4');

function increaseFontSize(id, increaseFactor){
    const box4 = document.querySelector(id);
    style = window.getComputedStyle(box4, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    box4.style.fontSize = (currentSize + increaseFactor) + 'px';
}

btn4.onclick = function() {
    increaseFontSize('.box-4', 1);
}
