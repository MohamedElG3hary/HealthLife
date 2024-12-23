function calculateCalories() {
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    
    let bmr = 10 * weight + 6.25 * (weight / 2.2) - 5 * age + 5;
    let result;

    if (document.getElementById('sedentary').checked) {
        result = bmr * 1.2;
    } else if (document.getElementById('light').checked) {
        result = bmr * 1.375;
    } else if (document.getElementById('moderate').checked) {
        result = bmr * 1.55;
    } else if (document.getElementById('active').checked) {
        result = bmr * 1.725;
    } else if (document.getElementById('veryActive').checked) {
        result = bmr * 1.9;
    } else {
        alert("Please select an activity level.");
        return;
    }

    document.getElementById('resalt').value = result.toFixed(2);
}