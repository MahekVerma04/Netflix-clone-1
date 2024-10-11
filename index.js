// const start1 = document.querySelector(".started");

const start = document.querySelector(".sec");

// start1.addEventListener('click',()=>{
//     alert("heyyyy")
// })
start.addEventListener('click',()=>{
    alert("helloooooo")
})




// const btn=document.querySelectorAll('.q2');

const button = document.querySelectorAll('.q2');

// Add a click event listener to the button
button.forEach(button => {
    button.addEventListener('click', function() {
        alert('Button clicked!'); // Replace this with your desired action
        
    });
});

const s=document.getElementsByClassName("signin");

// s.getElementsByClassName("click", function(){
//     alert("oye click kr dittaaa!")
// })