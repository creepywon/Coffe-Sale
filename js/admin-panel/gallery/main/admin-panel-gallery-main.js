

$('#add-image-to-form-button').on('click', (event) => {

    const imageInput = document.getElementById('image-add')
    const form = document.getElementById('gallery-image')
    imageInput.click()

    imageInput.onchange = (event) => {
        form.submit()
    }

})





function print(object) {
    console.log(object)
}