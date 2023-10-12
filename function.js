
const spellName = $(".spell-name")
const spellUse = $(".spell-use")
const url = "https://harry-potter-api-en.onrender.com/spells/"
const button = $(".button-section button")

button.click(() => {
    button.text("New Spell")
    randomId = Math.floor(Math.random() * 72) + 1;
    fetch(url + randomId)
        .then((response) => response.json())
        .then((data) => {
            spellName.fadeIn("slow", () => {
                spellName.text(data.spell)
            })
            spellUse.fadeIn("slow", () => {
                spellUse.text(`"${data.use}"`)
            })
        })
})
