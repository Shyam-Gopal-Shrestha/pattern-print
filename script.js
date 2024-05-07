// Right half Pyramid
function right_half_pyramid(n){
    let pattern = document.getElementById('pattern1');
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            pattern.innerHTML = pattern.innerHTML + "*";
        }
        pattern.innerHTML = pattern.innerHTML + "<br>";
    }
}
right_half_pyramid(5);

// Reverse right half Pyramid
function reverse_right_half_pyramid(n){
    let pattern = document.getElementById('pattern2');
    for(let i = n; i >= 1; i--){
        for(let j = 1; j <= i; j++){
            pattern.innerHTML = pattern.innerHTML + "*";
        }
        pattern.innerHTML = pattern.innerHTML + "<br>"
    }
}
reverse_right_half_pyramid(5);

// Left half Pyramid
function left_half_pyramid(n){
    let pattern = document.getElementById('pattern3');
    for(let i = 1; i <= n; i++){
        for(let j = i; j < n; j++){
            pattern.innerHTML = pattern.innerHTML + "&nbsp&nbsp";
        }
        for(let k = 1; k <= i; k++){
            pattern.innerHTML = pattern.innerHTML + "*"
        }
        pattern.innerHTML = pattern.innerHTML + "<br>"
    }
}
left_half_pyramid(5);


// Reverse Left half Pyramid
function reverse_left_half_pyramid(n){
    let pattern = document.getElementById('pattern4');
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            pattern.innerHTML = pattern.innerHTML + "&nbsp&nbsp";
        }
        for(let k = i; k <= n; k++){
            pattern.innerHTML = pattern.innerHTML + "*"
        }
        pattern.innerHTML = pattern.innerHTML + "<br>"
    }
}
reverse_left_half_pyramid(5);

// Triangle Star pattern
function triangle_star(n){
    let pattern = document.getElementById('pattern5');
    // Loop for number of rows
    for(let i = 1; i <= n; i++){
        // Loop for printing spaces
        for(let j = 1; j  <= n-i; j++){
            pattern.innerHTML = pattern.innerHTML + "&nbsp&nbsp"
        }
        // Loop for printing star
        for(let k = 1; k <= (2*i-1); k++){
            pattern.innerHTML = pattern.innerHTML +"*"
        }
        // moving to new line
        pattern.innerHTML = pattern.innerHTML + "<br>"
    }
}
triangle_star(5);

// Square Fill Pattern

function square_fill(n){
    let pattern = document.getElementById('pattern6');
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            pattern.innerHTML = pattern.innerHTML + "*";
        }
        pattern.innerHTML = pattern.innerHTML + "<br>";
    }
}
square_fill(5);

