const buttonid = document.getElementById("css-button")
const textforbuttonid = document.getElementById("textforcssbutton")
let spambutton = 0
buttonid.addEventListener("click", function() {
    spambutton = spambutton+1
    textforbuttonid.textContent = `u clicked button didnt u - js spam:${spambutton}`;
});