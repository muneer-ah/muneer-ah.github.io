// let amount = document.getElementById("amount");
// let discount = document.getElementById("discount");
// let discountAmount = document.getElementById("discount-amount");
// let finalAmount = document.getElementById("final-amount");

document.addEventListener('submit', function (e) {
    let amount = document.getElementById("amount").value;
    let discount = document.getElementById("discount").value;
    let discountAmount = document.getElementById("discount-amount");
    let finalAmount = document.getElementById("final-amount");
    discountAmount.value = eval((amount * discount) / 100);
    finalAmount.value = amount - discountAmount.value;
    e.preventDefault();
}
)

