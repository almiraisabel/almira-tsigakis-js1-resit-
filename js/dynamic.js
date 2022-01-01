const resetBtn = document.querySelector('#resetBtn');
const inputField = document.querySelector('#value-control');

resetBtn.addEventListener("click", function() {
    document.getElementById("dynamic-divs").innerHTML = "";
    document.getElementById("value-control").value = "";
});

inputField.addEventListener("change", function() {
    document.getElementById("dynamic-divs").innerHTML = "";

    var amount = this.value;
    var displayNumber = 0;

    if(amount > 0) {
        for(var i = 0; i < amount; i++) {
            displayNumber++;
            document.getElementById("dynamic-divs").innerHTML += '<div class="container content dynamic"> Number '+displayNumber+'</div>';
        }
    } else {
        document.getElementById("dynamic-divs").innerHTML = "";
        document.getElementById("value-control").value = "";
    }
});

 function removeElement(e) {
    var thisClass = e.className;

    if(e.classList.contains('removeBtn')) {
        e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

        var amount = document.querySelectorAll('.dynamic-col').length;
        document.getElementById("value-control").value = amount;

        var counter = 0;
        document.querySelectorAll('.dynamic-col').forEach(function(e) {
            counter++;
            e.innerHTML = counter;
        });
     }
 }