
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite ::
    Check Daten ::
    Btn. Trigger ::
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: 
*/
// Trigger - BtnClick 
const btn = document.getElementById("trigBtn");
btn.addEventListener("click", actOnClick);
// output(btn);

// Trigger - Input
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input", isInputValid);
// output(field);

//Ablaufsteuerung
function controller() {
    output(updateImg(checkAge(getInput())));
}

function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
        output("Input nicht korrekt!");
    }
}

function isInputValid() {
    let inputStr = field.value;
    let patt = /^[0-9]{1,3}$/g

    let cond = patt.test(inputStr);

    if (!cond) {
        field.value ="";
        updateImg(data.default.bev)
    }
    return cond;
}

function getInput() {
    return parseInt(field.value);
}


//Business-Logic
// output(checkAge(2));
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
            return data.default.bev;
    }
}


// Bild aktualisieren
// output(updateImg("milch")); //Test
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}



//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}
