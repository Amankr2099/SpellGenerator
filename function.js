
const spellName = $(".spell-name")
const spellUse = $(".spell-use")
const url = "https://harry-potter-api-en.onrender.com/spells/"
const button = $(".button-section button")


const handleClick = async () => {
    randomId = Math.floor(Math.random() * 72) + 1;
    try {
        const response = await fetch(url + randomId)
        const data = await response.json()
        spellName.fadeOut('slow', () => {
            spellName.text(data.spell)
            spellName.fadeIn('slow')
           
        })
        spellUse.fadeOut('slow', () => {
            spellUse.text(data.use)
            spellUse.fadeIn('slow')
        })
    } catch (error) {
        console.log(error);
    }

}

button.click(() => {
    button.text("New Spell")
    handleClick()
})


