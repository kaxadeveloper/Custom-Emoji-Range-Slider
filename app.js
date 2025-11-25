const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slideIcon = document.querySelector(".slide-icon");
const body = document.body;

slider.oninput = () => {
    let value = slider.value;

    // thumb + bar movement
    thumb.style.left = value + '%';
    bar.style.width = value + '%';

    // ============================
    //  1) 0 - 19%
    // ============================
    if (value < 20) {
        slideIcon.style.marginTop = "0px";
        body.style.background = "linear-gradient(#ED4D4E, #724042)";
        bar.style.background = "linear-gradient(45deg, #ED4D4E, #724042)";
    }

    // ============================
    //  2) 20 - 39%
    // ============================
    if (value >= 20 && value < 40) {
        slideIcon.style.marginTop = "-150px";
        body.style.background = "linear-gradient(#FEA954, #DA7315)";
        bar.style.background = "linear-gradient(45deg, #FEA954, #DA7315)";
    }

    // ============================
    //  3) 40 - 59%
    // ============================
    if (value >= 40 && value < 60) {
        slideIcon.style.marginTop = "-300px";
        body.style.background = "linear-gradient(#FEA954, #DA7315)";
        bar.style.background = "linear-gradient(45deg, #FEA954, #DA7315)";
    }

    // ============================
    //  4) 60 - 79%
    // ============================
    if (value >= 60 && value < 80) {
        slideIcon.style.marginTop = "-450px";
        body.style.background = "linear-gradient(#FED151, #DE981F)";
        bar.style.background = "linear-gradient(45deg, #FED151, #DE981F)";
    }

    // ============================
    //  5) ≥ 80%
    // ============================
    if (value >= 80) {
        slideIcon.style.marginTop = "-600px";
        body.style.background = "linear-gradient(#FED151, #DE981F)";
        bar.style.background = "linear-gradient(45deg, #FED151, #DE981F)";
    }
};
