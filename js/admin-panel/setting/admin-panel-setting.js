
$('#logo-image-edit-button').on('click', () => {
    let logoImageInput = document.getElementById('logo-image-edit-input')
    logoImageInput.click()
    logoImageInput.onchange = (e) => {
        let logoImage = document.getElementById('logo-image-element')
        file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => {
            logoImage.src = e.target.result
        }
    }
})

$('#background-image-edit-button').on('click', () => {
    let backgroundImageInput = document.getElementById('background-image-edit-input')
    backgroundImageInput.click()
    backgroundImageInput.onchange = (e) => {
        let backgroundImage = document.getElementById('background-image-element')
        file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => {
            backgroundImage.src = e.target.result
        }
    }
})





function print(object) {
    console.log(object)
}