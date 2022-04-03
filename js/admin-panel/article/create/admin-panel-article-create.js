//  Form Image 
$('#image-edit-button').on ('click' , () => {
    $('#image-file-input').click ()
    $('#image-file-input').on ('change' , (event) => {
        let fileReader = new FileReader()
        
        fileReader.onload = (event)=> {
            $('#image-input-preview').attr ('src' , event.target.result)
        }

        fileReader.readAsDataURL(event.target.files[0])
        

    })
})