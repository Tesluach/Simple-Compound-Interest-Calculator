//---------hiding the display of the second form---------------
var compoundForm = document.getElementById('compoundInterest');
compoundForm.style.display = 'none';

// -----------Selecting the specific inputs---------------------
var principal = document.getElementById('prin');
var rate = document.getElementById('rating');
var time = document.getElementById('timing');


// -------The simple Interest submit button selected------------
var submitting = document.querySelector('input[type="submit"]');

submitting.addEventListener('click', calculationInterest);

function calculationInterest(e) {
    e.preventDefault();
    var result = parseFloat((principal.value * rate.value * time.value) / 100);

    var resultInput = document.getElementById('result');
    resultInput.value = result;
}
//------------------------------------------------------------


// -------------selecting the anchor of the first form-----------
var compound = document.querySelector('#simpleInterest a');
// clicking on the link to display the output and hide the other
compound.addEventListener('click', compoundFunc);

function compoundFunc(e) {
    e.preventDefault();
    var firstForm = document.getElementById('simpleInterest');
    firstForm.style.display = 'none';

    // displaying the second form
    compoundForm.style.display = 'block';
    //adding the second form to the container
    var secondForm = document.querySelector('.container');
    secondForm.appendChild(compoundForm);

    secondForm.style.backgroundColor = '#11af9a';
}
//------------------------------------------------------------


// ---------selecting the compound interest button-----------------
var compoundCalc = document.querySelector('#compoundInterest input[type="submit"]');
compoundCalc.addEventListener('click', calculatingCompound);

// calculating the compound interest using a function
function calculatingCompound(e) {
    e.preventDefault();
    //getting the values of the inputs
    var principal = parseFloat(document.querySelector('#compoundInterest #prin').value);
    var rate = parseFloat(document.querySelector('#compoundInterest #rating').value);
    var time = parseFloat(document.querySelector('#compoundInterest #timing').value);

    // the compound interest formula
    var first = (1 + (rate / 100));
    var second = Math.pow(first, time);
    var result = parseFloat(principal * second);

    //displaying the output in the compound input
    var resultInput = document.querySelector('#compoundResult');
    resultInput.value = result;
}
//-------------------------------------------------------------------


// ----------selecting the first form by id to display it----------
var interest = document.querySelector('#compoundInterest a');
interest.addEventListener('click', function(e) {
    e.preventDefault();
    var firstForm = document.getElementById('simpleInterest');
    firstForm.style.display = 'block';
    //hiding the second form
    compoundForm.style.display = 'none';

    var secondForm = document.querySelector('.container');
    secondForm.style.backgroundColor = '#ccc';
});
//----------------------------------------------------------

// ------------Selecting the clear link-------------------
var link = document.querySelector('#simpleInterest #clear');
link.addEventListener('click', (e) => {
    e.preventDefault();
    var principal = document.getElementById('prin');
    var rate = document.getElementById('rating');
    var time = document.getElementById('timing');
    var resultInput = document.getElementById('result')

    principal.value = "";
    rate.value = "";
    time.value = "";
    resultInput.value = "";

});
//---------------------------------------------------------

// --------------selecting the clear link for compound-------
var link = document.querySelector('#compoundInterest #clear');
link.addEventListener('click', (e) => {
    e.preventDefault();
    var principal = document.querySelector('#compoundInterest #prin');
    var rate = document.querySelector('#compoundInterest #rating');
    var time = document.querySelector('#compoundInterest #timing');
    var resultInput = document.querySelector('#compoundResult');

    principal.value = "";
    rate.value = "";
    time.value = "";
    resultInput.value = "";
});