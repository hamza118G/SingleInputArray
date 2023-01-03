var newage = new Array();

function displayData() {
    
    var age = document.getElementById('age').value;
    newage[newage.length] = age
    var content = [];
    content += [...newage];
    document.getElementById('display').innerHTML = content;
    console.log(newage )
}



function compareAge(a, b) {

    return a.age - b.age;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}, newage ];

console.log(students.sort(compareAge));
