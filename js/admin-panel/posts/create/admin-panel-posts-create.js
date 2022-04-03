

// Selectbox size
let sizeSelectBox = document.getElementById('size-select-box');
let sizeHiddenInput = document.getElementById('size-hidden-input')
let sizeAddInput = document.getElementById('size-input-add')
let sizeHiddenOption = document.getElementById('size-options')
let sizeAddButton = document.getElementById('size-button-add');
let sizeRemoveButton = document.getElementById('size-button-remove')

setSelectBox(sizeSelectBox, sizeAddInput, sizeRemoveButton, sizeAddButton, sizeHiddenOption)




// Selectbox Taste
let tasteSelectBox = document.getElementById('taste-select-box');
let tasteHiddenInput = document.getElementById('taste-hidden-input')
let tasteAddInput = document.getElementById('taste-input-add')
let tasteHiddenOption = document.getElementById('taste-options')
let tasteAddButton = document.getElementById('taste-button-add');
let tasteRemoveButton = document.getElementById('taste-button-remove')

setSelectBox(tasteSelectBox, tasteAddInput, tasteRemoveButton, tasteAddButton, tasteHiddenOption)




// Selectbox Weight
let weightSelectBox = document.getElementById('weight-select-box');
let weightHiddenInput = document.getElementById('weight-hidden-input')
let weightAddInput = document.getElementById('weight-input-add')
let weightHiddenOption = document.getElementById('weight-options')
let weightAddButton = document.getElementById('weight-button-add');
let weightRemoveButton = document.getElementById('weight-button-remove')

setSelectBox(weightSelectBox, weightAddInput, weightRemoveButton, weightAddButton, weightHiddenOption)


// SelectBox Mill 
let millSelectBox = document.getElementById('mill-select-box');
let millHiddenInput = document.getElementById('mill-hidden-input')
let millAddInput = document.getElementById('mill-input-add')
let millHiddenOption = document.getElementById('mill-options')
let millAddButton = document.getElementById('mill-button-add');
let millRemoveButton = document.getElementById('mill-button-remove')

setSelectBox(millSelectBox, millAddInput, millRemoveButton, millAddButton, millHiddenOption)



// SelectBox Color 
let colorSelectBox = document.getElementById('color-select-box');
let colorHiddenInput = document.getElementById('color-hidden-input')
let colorAddInput = document.getElementById('color-input-add')
let colorHiddenOption = document.getElementById('color-options')
let colorAddButton = document.getElementById('color-button-add');
let colorRemoveButton = document.getElementById('color-button-remove')


let value = colorSelectBox.value
colorAddInput.value = value
colorSelectBox.onchange = (e) => {
    let value = colorSelectBox.value
    colorAddInput.value = value
    console.log(value)

}
setSelectBox(colorSelectBox, colorAddInput, colorRemoveButton, colorAddButton, colorHiddenOption)





// SelectBox Discount
let discountSelectBox = document.getElementById('discount-select-box');
let discountHiddenInput = document.getElementById('discount-hidden-input')
let discountAddInput = document.getElementById('discount-input-add')
let discountHiddenOption = document.getElementById('discount-options')
let discountAddButton = document.getElementById('discount-button-add');
let discountRemoveButton = document.getElementById('discount-button-remove')

setSelectBox(discountSelectBox, discountAddInput, discountRemoveButton, discountAddButton, discountHiddenOption)




//  Form Image 
$('#image-edit-button').on('click', () => {
    $('#image-file-input').click()
    $('#image-file-input').on('change', (event) => {
        let fileReader = new FileReader()

        fileReader.onload = (event) => {

            $('#image-input-preview').attr('src', event.target.result)
        }

        fileReader.readAsDataURL(event.target.files[0])


    })
})





// add Functionality To Form
function setSelectBox(selectBox, addInput, removeButton, addButton, optionHiddneInput) {

    setValue(selectBox, optionHiddneInput)

    removeButton.onclick = () => {
        $(selectBox).find('option:selected').remove()



        if (selectBox.childElementCount == 0) {
            removeButton.style.display = 'none'
        }

        setValue(selectBox, optionHiddneInput)
    }

    addButton.onclick = () => {
        let option = document.createElement('option')
        if (addInput.value == '') {
            alert('کادر باید حاوی کلمات باشد')
        }
        else {
            option.innerHTML = addInput.value;
            option.value = addInput.value;
            selectBox.append(option);
            selectBox.value = option.value;
            setValue(selectBox, optionHiddneInput);
            removeButton.style.display = 'unset'
        }
    }

}

function setValue(selectBox, optionHiddneInput) {

    let temp;
    for (let option of selectBox.children) {

        if (selectBox.childElementCount == 1) {
            temp = option.innerHTML
        } else temp += ',' + option.innerHTML;
    }

    optionHiddneInput.value = temp;

    // console.log(optionHiddneInput.value)

}

function testElement(test) {
    test.style.display = 'none';
}




