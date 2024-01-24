const listeners = [];
const inputshow = document.getElementById('input')
// btns
const btns = [
    document.getElementById('clean'),
    document.getElementById('cos'),
    document.getElementById('sin'),
    document.getElementById('log'),
    document.getElementById('power'),
    document.getElementById('remainder'),
    document.getElementById('radical'),
    document.getElementById('add'),
    document.getElementById('n7'),
    document.getElementById('n8'),
    document.getElementById('n9'),
    document.getElementById('subtract'),
    document.getElementById('n4'),
    document.getElementById('n5'),
    document.getElementById('n6'),
    document.getElementById('multiply'),
    document.getElementById('n1'),
    document.getElementById('n2'),
    document.getElementById('n3'),
    document.getElementById('divide'),
    document.getElementById('n0'),
    document.getElementById('dot'),
    document.getElementById('equal'),
]
const buttonBehaviors = {
    clean: () => {
        inputshow.innerText = '';
        operationshow.innerText = '';
    },
    cos: () => {
        inputshow.innerText = Math.cos(inputshow.innerText);

    },
    sin: () => {
        inputshow.innerText = Math.sin(inputshow.innerText);
    },
    log: () => {
        inputshow.innerText = Math.log(inputshow.innerText);
    },
    power: () => {
        inputshow.innerText += '**';
    },
    remainder: () => {
        inputshow.innerText += '%';
    },
    radical: () => {
        inputshow.innerText = Math.sqrt(inputshow.innerText);
    },
    add: () => {
        inputshow.innerText += '+';
    },
    n7: () => {
        inputshow.innerText += 7;
    },
    n8: () => {
        inputshow.innerText += 8;
    },
    n9: () => {
        inputshow.innerText += 9;
    },
    subtract: () => {
        inputshow.innerText += '-'
    },
    n4: () => {
        inputshow.innerText += 4;
    },
    n5: () => {
        inputshow.innerText += 5;
    },
    n6: () => {
        inputshow.innerText += 6;
    },
    multiply: () => {
        inputshow.innerText += '*'
    },
    n1: () => {
        inputshow.innerText += 1;
    },
    n2: () => {
        inputshow.innerText += 2;
    },
    n3: () => {
        inputshow.innerText += 3;
    },
    divide: () => {
        inputshow.innerText += "/";
    },
    n0: () => {
        inputshow.innerText += 0;
    },
    dot: () => {
        inputshow.innerText += '.';
    },
    equal: () => {
        inputshow.innerText = eval(inputshow.innerText);
        console.log(inputshow.innerText)
    },
}

function clickfn(event) {
    console.log('clicked', event.target.id)
    buttonBehaviors[event.target.id]()
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickfn);
    listeners.push(clickfn);
}

function cleanup() {
    for (let i = 0; i < listeners.length; i++) {
        btns[i].removeEventListener('click', listeners[i]);
    }
    window.removeEventListener('beforeunload', cleanup);
}
window.addEventListener('beforeunload', cleanup);
