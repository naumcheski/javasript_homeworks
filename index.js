let fruits = ['Apple', 'Banana', 'Orange'];
let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];

// Loop through the arrays and print the elements.

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  console.log('for ended');
 
 
  /* Loop through the students array and print:
 a. the properties of the objects. */
 let numbers = [2, 4, 6, 8];
for (let value of students) {
    for (let prop in value) {
        console.log(prop);
    }
}
 
 // b.the values of the properties in the objects.

 let i = 0;
 while (i < students.length) {
     console.log(students[i]);
     i++;
 }

 // Create a loop and print the first 10 numbers.

 for (var j = 0; j < 11; j++) {
    console.log(j);
 }

//Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
//a. starting from 0 && using a conditional statement (increase the counter for 1)
 for (var n = 0; n < 11; n+=2) {
    if (n === 11) {
        break;
    }
    console.log('Brojot e paren ' + n);
}

/* 5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
    a. starting from 0 && using a conditional statement (increase the counter for 1) */
    for (var k = 1; k < 10; k+=2) {
        if (k === 11) {
            break;
        }
        console.log('Brojot e neparen ' + k);
    }

//
