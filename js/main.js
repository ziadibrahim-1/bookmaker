var bookmarkInput =document.getElementById('bookmark');
var websiteInput = document.getElementById('website');
var SubmitBtn = document.getElementById('SubmitBtn');
var errorURL = document.getElementById('errorURL');
var errorSite = document.getElementById('errorSite');
var urlArr =[];
if(localStorage.getItem('urls')!==null){
    urlArr = JSON.parse(localStorage.getItem('urls'));
    displayUlr();
}

function addUrl() {
    if(validationCheck() && validationCheck2()){
        var arr={
            name : bookmarkInput.value,
            url : websiteInput.value
        }
        urlArr.push(arr);
        claerForm();
        localStorage.setItem('urls',JSON.stringify(urlArr))
        displayUlr();
    }
    else{
        alert("please fill all inputs")      
    }
    
    



}


function claerForm() {
    bookmarkInput.value='';
    websiteInput.value ='';
    websiteInput.classList.remove("is-valid");
    bookmarkInput.classList.remove("is-valid");
}
function displayUlr() {
    var cartona =``;
    for (let i = 0; i < urlArr.length; i++) {
        cartona+=` <tr>
                    <td>${i+1}</td>
                    <td>${urlArr[i].name}</td>
                    <td><button onclick="visitUrl(${i})" class="btn btn-success"><i class="fa-solid fa-eye"></i>Visit</button></td>
                    <td><button class="btn btn-danger" onclick="deleteUrl(${i})"><i class="fa-solid fa-trash"></i>Delete</button></td>
                </tr>`
    }
    document.getElementById('tablecontent').innerHTML= cartona;
}

function deleteUrl(index){
    urlArr.splice(index,1);
    displayUlr();
    localStorage.setItem("urls",JSON.stringify(urlArr));
}


var bookmarkRegex=/^[A-Za-z]{3,}$/
var urlRegex=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/


function  isInput1Valid(){
    if(bookmarkRegex.test(bookmarkInput.value)){
        return true;
    }
    else{
        return false;
    }
}
function isInput2valid() {
    if(urlRegex.test(websiteInput.value)) {
        return true;
    }
    else{
        return false;
    }
}

function validationCheck(){
    if(isInput1Valid()){
        
        bookmarkInput.classList.remove("is-invalid")
        bookmarkInput.classList.add("is-valid")
        errorSite.classList.add("d-none")
        return true
    }
    else{
        bookmarkInput.classList.remove("is-valid")
        bookmarkInput.classList.add("is-invalid")
        errorSite.classList.remove("d-none")
        
        return false;
    }
}
function validationCheck2(){
    if(isInput2valid()){
        
        websiteInput.classList.remove("is-invalid")
        websiteInput.classList.add("is-valid")
        errorURL.classList.add("d-none")
        return true
    }
    else{
        websiteInput.classList.remove("is-valid")
        websiteInput.classList.add("is-invalid")
        errorURL.classList.remove("d-none")
        return false
        

    }
}

function visitUrl(indexUrl) {
    window.open(urlArr[indexUrl].url,"_blank")
}


 