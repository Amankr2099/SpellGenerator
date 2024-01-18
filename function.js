
const spellName = $(".spell-name")
const spellUse = $(".spell-use")
const url = "https://harry-potter-api-en.onrender.com/spells/"
const button = $(".button-section button")


const handleClick = async () => {
    randomId = Math.floor(Math.random() * 72) + 1;
    try {
        const response = await fetch(url + randomId)
        const data = await response.json()
        spellName.fadeIn("slow", () => {
            spellName.text(data.spell)
        })
        spellUse.fadeIn("slow", () => {
            spellUse.text(`"${data.use}"`)
        })
    } catch (error) {
        console.log(error);
    }

}

button.click(() => {
    button.text("New Spell")
    handleClick()
})

// button.click(() => {
//     button.text("New Spell")
//     randomId = Math.floor(Math.random() * 72) + 1;
//     fetch(url + randomId)
//         .then((response) => response.json())
//         .then((data) => {
//             spellName.fadeIn("slow", () => {
//                 spellName.text(data.spell)
//             })
//             spellUse.fadeIn("slow", () => {
//                 spellUse.text(`"${data.use}"`)
//             })
//         })
// })
