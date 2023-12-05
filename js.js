//SCROLL
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: "center"
        });
    });
};



//drop-area

const drop = document.getElementById("drop-area");

function $id(id) {
    return document.getElementById(id);
}

/* вывод сообщений */
function Output(msg) {
    let m = $id("messages");
    m.innerHTML = msg + m.innerHTML;
}


// Файл над нужной областью
function FileDragHover(e){
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

// выбор файла
function FileSelectHandler(e){
    FileDragHover(e);

    // проходимся по объекту FileList
    let files = e.target.files || e.dataTransfer.files;

    // парсим все объекты типа File
    for (let i = 0, f; f = files[i]; i++){
        ParseFile(f);
    }
}

function ParseFile(file) {
    Output(
        "<p>File information: <strong>" + file.name +
        "</strong> type: <strong>" + file.type +
        "</strong> size: <strong>" + file.size +
        "</strong> bytes</p>"
    );
}



//HOVER GIVE LIST 1

let g1 = document.getElementById("g1");
g1g = document.getElementById("g1g");
g1g1 = document.getElementById("g1g_2");

g1.addEventListener("mouseover", func, false);
g1.addEventListener("mouseout", func1, false);
function func() {
    g1g.setAttribute("style", "display: none");
    g1g1.style.display = "flex";
    g1g1.style.height = "125px";
}

function func1()
{
    g1g.setAttribute("style", "height: 191px")
    g1g.style.transition = "0.7s ease";
    g1g1.style.display = "none";
    g1g1.style.height = "125px";
}

//2
let g2 = document.getElementById("g2");
g2g = document.getElementById("g2g");
g2span = document.getElementById('g2span');
g2g2 = document.getElementById("g2g_2");

g2.addEventListener("mouseover", func2, false);
g2.addEventListener("mouseout", func3, false);
function func2() {
    g2g.setAttribute("style", "display: none");
    g2g2.style.display = "flex";
    g2g2.style.height = "125px";
    g2span.style.display = "flex";
    g2g.style.transition = "0.7s ease";

}

function func3()
{
    g2g.setAttribute("style", "height: 191px")
    g2g.style.transition = "0.7s ease";
    g2span.style.display = "none";
    g2g2.style.display = "none";
    g2g2.style.height = "125px";
}

//3

let g3 = document.getElementById("g3");
g3g = document.getElementById("g3g");
g3span = document.getElementById('g3span');
g3g3 = document.getElementById("g3g_2");

g3.addEventListener("mouseover", func4, false);
g3.addEventListener("mouseout", func5, false);
function func4() {
    g3g.setAttribute("style", "display: none");
    g3g.style.transition = "0.8s ease";
    g3span.style.display = "flex";
    g3g3.style.display = "flex";
    g3g3.style.height = "125px";
}

function func5()
{
    g3g.setAttribute("style", "height: 191px")
    g3g.style.transition = "0.7s ease";
    g3span.style.display = "none";
    g3g3.style.display = "none";
    g3g3.style.height = "125px";
}

//4

let g4 = document.getElementById("g4");
g4g = document.getElementById("g4g");
g4span = document.getElementById('g4span');
g4g4 = document.getElementById("g4g_2");

g4.addEventListener("mouseover", func6, false);
g4.addEventListener("mouseout", func7, false);
function func6() {
    g4g.setAttribute("style", "display: none");
    g4g.style.transition = "0.8s ease";
    g4span.style.display = "flex";
    g4g4.style.display = "flex";
    g4g4.style.height = "125px";
}

function func7()
{
    g4g.setAttribute("style", "height: 191px")
    g4g.style.transition = "0.7s ease";
    g4span.style.display = "none";
    g4g4.style.display = "none";
    g4g4.style.height = "125px";
}



//more
let box = document.getElementById('box-group');
let more = document.getElementById('more');

more.addEventListener('click', function () {
    box.style.display = "flex";
    more.style.display = "none"
})




//dots

let dot1 = document.getElementById('dot1');
let feed1 = document.getElementById('feed1');

dot1.addEventListener('click', function () {
    feed1.style.display = "flex";
    feed2.style.display = "none";
    feed3.style.display = "none";
    dot1.style.background = "#9C1212";
    dot2.style.background = "#FFFFFF";
    dot3.style.background = "#FFFFFF";
})

let dot2 = document.getElementById('dot2');
let feed2 = document.getElementById('feed2');

dot2.addEventListener('click', function () {
    feed1.style.display = "none";
    feed2.style.display = "flex";
    feed3.style.display = "none";
    dot2.style.background = "#9C1212";
    dot1.style.background = "#FFFFFF";
    dot3.style.background = "#FFFFFF";
})


let dot3 = document.getElementById('dot3');
let feed3 = document.getElementById('feed3');

dot3.addEventListener('click', function () {
    feed1.style.display = "none";
    feed2.style.display = "none";
    feed3.style.display = "flex";
    dot3.style.background = "#9C1212";
    dot1.style.background = "#FFFFFF";
    dot2.style.background = "#FFFFFF";

})



//FORM


const form = document.forms["form"];
const submit = form.elements["button"];
const formBlock = document.getElementById("block");

const inputArr = Array.from(form);
const validInputArr = [];
const inputBox = document.querySelector('.input-box');
const addSv = document.getElementById('sv');



inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", 0);
        validInputArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);


function inputHandler({target}) {
    if(target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.borderBottom = "1px solid #2D70DE";
        submit.style.background = "#990000";
        el.setAttribute("is-valid", 1);
    } else {
        el.style.borderBottom = "1px solid rgb(255, 0, 0)";
        submit.style.background = "#B7B6BE";
        el.setAttribute("is-valid", 0);
    }
}

function formCheck(e) {
    e.preventDefault();
    const isAllValid = [];
    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        return;
    }
    formSubmit();
}
async function formSubmit() {
    const data = serializeForm(form);
    const response = await sendData(data);
    addSv.style.display = 'flex';
    formBlock.style.display = 'flex';

    addSv.addEventListener('click', function () {
        addSv.style.display = 'none';
    })
}

function serializeForm(formNode) {
    return new FormData(form);
}
async function sendData(data) {
    return await fetch("", {
        method: "POST",
        body: data,
    });
}




//SWIPE

let f1 = document.getElementById("feed1");
let f2 = document.getElementById("feed2");
let f3 = document.getElementById("feed3");


f1.addEventListener("touchstart", startTouch, false);
f1.addEventListener("touchmove", moveTouch, false);

let eventTriggeredFlag = false;
function waitForDOM(){
    gBrowser.addEventListener('touchmove',pageLoaded,true);
    setTimeout(function(){
        if (!eventTriggeredFlag) {
            // time's up without the event: do something
        }
    }, 5000);
}
function pageLoaded(aEvent) {
    eventTriggeredFlag = true;
    // whatever else you want to do here...
}

// Swipe Up / Down / Left / Right
let initialX = null;
let initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
};

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    let diffX = initialX - currentX;
    let diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 4) {
            // swiped left
            f1.style.display = "none";
            f2.style.display = "flex";
            dot1.style.background = "#FFFFFF";
            dot2.style.background = "#9C1212";
            dot3.style.background = "#FFFFFF";


            console.log("swiped left");
        } else {
            // swiped right
            f1.style.display = "flex";

            dot1.style.background = "#9C1212";
            dot2.style.background = "#FFFFFF";
            dot3.style.background = "#FFFFFF";

            console.log("swiped right");
        }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}



    f2.addEventListener("touchstart", startTouch, false);
    f2.addEventListener("touchmove", moveTouch2, false);

    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    };

    function moveTouch2(e) {
        if (initialX === null) {
            return;
        }

        if (initialY === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;

        let diffX = initialX - currentX;
        let diffY = initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                f2.style.display = "none";
                f3.style.display = "flex";

                dot1.style.background = "#FFFFFF";
                dot2.style.background = "#FFFFFF";
                dot3.style.background = "#9C1212";
                console.log("swiped left");
            } else {
                // swiped right
                f2.style.display = "none";
                f1.style.display = "flex";

                dot1.style.background = "#9C1212";
                dot2.style.background = "#FFFFFF";
                dot3.style.background = "#FFFFFF";

                console.log("swiped right");
            }
        }

        initialX = null;
        initialY = null;

        e.preventDefault();
    }



    f3.addEventListener("touchstart", startTouch, false);
    f3.addEventListener("touchmove", moveTouch3, false);

    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    };

        function moveTouch3(e) {
            if (initialX === null) {
                return;
            }

            if (initialY === null) {
                return;
            }

            let currentX = e.touches[0].clientX;
            let currentY = e.touches[0].clientY;

            let diffX = initialX - currentX;
            let diffY = initialY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                // sliding horizontally
                if (diffX > 0) {
                    // swiped left
                    f3.style.display = "flex";
                    console.log("swiped left");
                } else {
                    // swiped right
                    f3.style.display = "none";
                    f2.style.display = "flex";

                    dot1.style.background = "#FFFFFF";
                    dot2.style.background = "#9C1212";
                    dot3.style.background = "#FFFFFF";


                    console.log("swiped right");
                }
            }

            initialX = null;
            initialY = null;

            e.preventDefault();
};


