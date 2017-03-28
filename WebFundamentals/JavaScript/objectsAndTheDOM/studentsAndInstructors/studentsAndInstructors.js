var students = [
    {first_name: "Michael", last_name: "Jordan"},
    {first_name: "John", last_name: "Rosales"},
    {first_name: "Mark", last_name: "Guillen"},
    {first_name: "KB", last_name: "Tonel"},
]

var instructors = [
    {first_name: "Michael", last_name: "Choi"},
    {first_name: "Martin", last_name: "Puryear"},
]

function studentsAndInstructors(arr, arrTwo) {
    arr = students;
    arrTwo = instructors;
    console.log("Students");
    for(var i = 0; i < arr.length; i++) {
        console.log((i + 1) + " - " + arr[i].first_name + " " + arr[i].last_name + " - " + (arr[i].first_name.length + arr[i].last_name.length));
    }
    console.log("Instructors");
    for(var i = 0; i < arrTwo.length; i++) {
        console.log((i + 1) + " - " + arrTwo[i].first_name + " " + arrTwo[i].last_name + " - " + (arrTwo[i].first_name.length + arrTwo[i].last_name.length));
    }
}