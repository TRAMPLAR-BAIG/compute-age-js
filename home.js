let btn_compute_age = document.getElementById('btn_compute_age');
let in_date_of_birth = document.getElementById('in_date_of_birth')
let out_age = document.getElementById('out_age');
btn_compute_age.addEventListener('click', compute_age);



function compute_age(){
    var value = in_date_of_birth.value;
    let date_of_birth = value.split('-');
    const this_date = new Date(Date.now());

    if( value === ""){
        window.alert("Error: Invalid Date of Birth");
    }else{
        let age = this_date.getFullYear() - date_of_birth[0];
        out_age.innerText = "You are '" + age + "' years old.";
        console.log("You are '" + age + "' years old.");
    }
}