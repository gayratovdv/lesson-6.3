const myInput = document.querySelector("#myInput");
const myBtn = document.querySelector("#sendBtn");
const myAccept = document.querySelector(".acceptBox");
const myForm = document.querySelector("#myForm");


document.addEventListener('DOMContentLoaded', (event) => {
    const savedName = localStorage.getItem('name');
    
    if (savedName) {
        myAccept.textContent = savedName;
    }

    function saveName() {
        const currentName = myInput.value;
        myAccept.textContent = currentName;
        localStorage.setItem('name', currentName);
    }

    myInput.addEventListener('blur', saveName);
    myInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            saveName();
            myInput.blur();
        }
    });

    myInput.value = "";
});