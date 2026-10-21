const buttonid = document.getElementById("css-button")
const textforbuttonid = document.getElementById("textforcssbutton")
// chocolate cherry cake
console.log("CHOCOLATE CHERRY CAKE HAHAHAHA")
const date = new Date()
const month = date.getMonth()+1
const day = date.getDate()
const hapybirfdaytxt = document.getElementById("hapy-birfday-txtid")
const hapybirfdayimg = document.getElementById("hapy-birfday-imgid")
let spambutton = 0
buttonid.addEventListener("click", function() {
    spambutton = spambutton+1
    textforbuttonid.textContent = `u clicked button didnt u - js spam:${spambutton}`;
});
if (month === 10 && day === 26) {
    console.log("mi birthday hahahaah    ------------------------------------------abdur")
    hapybirfdaytxt.textContent = "HAPY BIRFDAY IT OCTOBER 26 HAHAHA IT ABDURZ BIRTHDAY ok fine ima stfu but now 12"
    hapybirfdayimg.display = "block"
}
