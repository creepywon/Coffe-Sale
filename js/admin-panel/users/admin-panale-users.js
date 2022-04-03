$('#image-edit-button').on('click', () => {
    $('#user-image-file-input').click()


    $('#user-image-file-input').on('change', (event) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(event.target.files[0])
        fileReader.onload = (event) => {
            $('#image-element').attr( 'src' , event.target.result  )
        }

    })

})

// user-image-file-input



function print(object) {
    console.log(object)
}
