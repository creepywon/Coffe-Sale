
// SelectBox Discount
let categoryChildSelectBox = document.getElementById('category-child-select-box');
let categoryChildHiddenInput = document.getElementById('category-child-hidden-input')
let categoryChildAddInput = document.getElementById('category-child-input-add')
let categoryChildHiddenOption = document.getElementById('category-child-options')
let categoryChildAddButton = document.getElementById('category-child-button-add');
let categoryChildRemoveButton = document.getElementById('category-child-button-remove')

setSelectBox(categoryChildSelectBox, categoryChildAddInput, categoryChildRemoveButton, categoryChildAddButton, categoryChildHiddenOption)


let addImageButton = document.getElementById('add-image-button')
let addImageInput = document.getElementById('add-image-input-hidden')
let addImageFiles;
addImageButton.onclick = () => {
    // <input id="add-image-input-plus-hidden" type="file" id="files" name="files" />

    let input = document.createElement('input');
    input.type = 'file'
    input.accept = 'image/*'
    input.id = 'image-add'
    input.name = 'image-add'
    input.click()
    input.onchange = (e) => {
        let img = document.createElement('img')
        img.src = URL.createObjectURL(e.target.files[0])
        $('.input-container').append(input)
        $('.image-container').append(img)

    }

}



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




