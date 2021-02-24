const myForm = document.querySelector('#my-form');
const sidebar = document.querySelector('#sidebar');
const radios= document.querySelectorAll('input[name="codingLang"]');
const lang= document.querySelector('#lang');
const btn= document.querySelector('.submit');
const fName= document.querySelector('#fName');
const lName= document.querySelector('#lName');
const userList = document.querySelector('#users');

//get ip
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => console.log(data.ip));


let data = {storyTitle: "Car crash in Uxbridge", storyLink: "www.bbc.co.uk", source: "Sauce"};
  //post
fetch('http://localhost:8080/news', {
    method : 'POST',
    headers :{ 'Content-Type' : 'application/json'},
    body : JSON.stringify(data)
}).then(response => response.json())
  .then(data => {
    if(data === 'success'){
            this.props.onRouteChange('home');
    }
})


//get
fetch('http://localhost:8080/news')
  .then(response => response.json())
  .then(data => console.log(data));

async function updateQuote() 
{
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) 
    {
        // Update DOM elements
        if(document.querySelector('#para')==null)
        {
            const p1 = document.createElement('p' );
            p1.setAttribute("id", "para");
            p1.appendChild(document.createTextNode(data.content));
            sidebar.appendChild(p1);    
        }
        else
        {
            document.getElementById("para").outerHTML = "";
            const p1 = document.createElement('p' );
            p1.setAttribute("id", "para");
            p1.appendChild(document.createTextNode(data.content));
            sidebar.appendChild(p1);
        }
        document.getElementById("para").style.paddingLeft = "10%";
    }
    else 
    {
        quote.textContent = "An error occured";
        console.log(data);
    }
}
document.querySelector(".quote").addEventListener("click", function(e) {
    e.preventDefault();
    updateQuote();
});

sidebar.addEventListener('submit', onSubmit1);
function onSubmit1(e){
}

myForm.addEventListener('input', inputHandler);
function inputHandler(e){
    btn.disabled = false;
}
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    for (let i = 0; i < radios.length; i++)
    {
        if (radios[i].checked) 
            {
                rate_value = radios[i].value;
            }
    }
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    const p = document.createElement('p');//creates eleement(list item li tag)
    p.appendChild(document.createTextNode(`${fName.value} ${lName.value} codes in ${lang.value} on ${rate_value}`));// adds input to the li element
    userList.appendChild(p);// ads li to userList


    fName.value = '';//clears the fields
    lName.value = '';// clear the fields
    lang.value = '';// clear the fields
    radios.value= '';
}