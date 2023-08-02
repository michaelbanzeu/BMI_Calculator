// Le BMI(IMC en français) se calcule en divisant la masse corporelle en kilogramme(kg)
// par la taille en mètres(m) au carré. Sa valeur s'exprime en kg/m²

const btnCalc = document.getElementById('btn');

btnCalc.addEventListener('click', calculateBMI)

function calculateBMI() {
    const h = document.getElementById('height').value;
    const w = document.getElementById('weight').value;
    const warn = document.getElementById('info');
    const res = document.getElementById('result');
    let bmi, bmio = 0;

    warn.innerHTML = "";
    res.innerHTML = "";
    if (h == 0 || h < 1) {
        warn.innerHTML = "Enter a correct height!";
    } else if (w == 0 || w < 1) {
        warn.innerHTML = "Enter a correct weight!";
    } else {
        if (h > 3) {
            bmi = w / (h / 100 * h / 100);
        } else {
            bmi = w / (h * h);
        }
        bmio = (bmi.toFixed(2));
        res.innerHTML = "Your BMI is " + bmio + " kg/m²";
    }
}

