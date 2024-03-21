function addFields() {
    var availableFieldsSelect = document.getElementById("availableFields");
    var selectedOptions = availableFieldsSelect.selectedOptions;
    var displayedFieldsSelect = document.getElementById("displayedFields");

    for (var i = 0; i < selectedOptions.length; i++) {
        var option = selectedOptions[i];
        displayedFieldsSelect.appendChild(option);
    }
}

function removeFields() {
    var displayedFieldsSelect = document.getElementById("displayedFields");
    var selectedOptions = displayedFieldsSelect.selectedOptions;
    var availableFieldsSelect = document.getElementById("availableFields");

    for (var i = 0; i < selectedOptions.length; i++) {
        var option = selectedOptions[i];
        availableFieldsSelect.appendChild(option);
    }
}
 function read(){
    var file = document.getElementById("filetoupload").files[0];
    return new Promise((resolve,reject) => {
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                resolve(JSON.parse(evt.target.result));
            }
            
        }else 
            reject('error');
    })
}
let tableData = [];
function createOptionField(field){
    let x = document.createElement('option');
    x.setAttribute('value',field);
    x.innerText = field;
    return x;
}
function loadFeildsToUI(data){
    console.log(data);
    let x = document.getElementById('availableFields');
    data.forEach(element => {
        x.appendChild(createOptionField(element));
    });
}
function extractAndStore(data){
    for(key in data){
        let item = data[key];
        tableData.push(item);
    }
    tableData.sort((a,b) => {
        if(parseInt(a.popularity) > parseInt(b.popularity))
            return -1;
        else 
            return 1;
    });
    loadFeildsToUI(Object.keys(tableData[0]))
    
}
function myRead() {
    read().then(data => {
        // console.log(data);
        extractAndStore(data.products);

        // console.log(data.products);
    })
}
// function createRow(title,price){
//     let row = document.createElement('tr');
//     let titleNode = document.createElement('td');
//     let priceNode = document.createElement('td');
//     titleNode.innerText = title;
//     priceNode.innerText = price;
//     row.appendChild(titleNode);
//     row.appendChild(priceNode);
//     return row;
// }
// function addDataToUI(){
//     let tableNode = document.getElementById('displayedFields');
//     tableData.forEach(obj => {
//         tableNode.appendChild(createRow(obj.title,obj.price));
//     });
// }
// let columns = [];
// function submit(){
//     columns = document.getElementById('displayedFields').nodeValue;
//     cons
//     tableData.forEach(element => {
            
//     });
// }
