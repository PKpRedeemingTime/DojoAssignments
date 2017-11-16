function challengeI() {
    let students = [
        {name: 'Remy', cohort: 'Jan'},
        {name: 'Genevieve', cohort: 'March'},
        {name: 'Chuck', cohort: 'Jan'},
        {name: 'Osmund', cohort: 'June'},
        {name: 'Nikki', cohort: 'June'},
        {name: 'Boris', cohort: 'June'}
    ];
    for(let student in students) {
        console.log("Name:",students[student].name + ",","Cohort:",students[student].cohort);
    }
}

challengeI();

function challengeII() {
    let users = {
        employees: [
            {first_name:  'Miguel', last_name: 'Jones'},
            {first_name: 'Ernie', last_name: 'Bertson'},
            {first_name: 'Nora', last_name: 'Lu'},
            {first_name: 'Sally', last_name: 'Barkyoumb'}
        ],
        managers: [
           {first_name: 'Lillian', last_name: 'Chambers'},
           {first_name: 'Gordon', last_name: 'Poe'}
        ]
     };
    var employees = users.employees;
    var managers = users.managers;
    var i = 1;
    console.log("EMPLOYEES");
    for(let employee in employees) {
        console.log(i+" - "+employees[employee].last_name.toUpperCase()+",",employees[employee].first_name.toUpperCase(),"-",employees[employee].first_name.length+employees[employee].last_name.length);
        i++;
    }
    i=1;
    console.log("MANAGERS");
    for(let manager in managers) {
        console.log(i+" - "+managers[manager].last_name.toUpperCase()+",",managers[manager].first_name.toUpperCase(),"-",managers[manager].first_name.length+managers[manager].last_name.length);
        i++;
    }
}

challengeII();