function getElement(value) {
    var a = document.querySelector(value);
    return a;
}

function createElement(name, father, className) {
    var a = document.createElement(name);
    a.className = className;
    father.appendChild(a);
    return a;
}

function sort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j].letter > array[j + 1].letter) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}


function cancelBubble(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}
