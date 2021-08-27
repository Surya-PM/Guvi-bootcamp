//Do the below programs in anonymous function & IIFE

//Print odd numbers in an array
(function(arr){
    console.log(arr.filter(elem => elem%2!=0));
}([1,2,3,4,5,6,7,8,9,10]));

//output:
[1,3,5, 7, 9]

//Convert all the strings to title caps in a string array

(function(arr){
    let j=[];
    for(let i of arr){
        //j.push(i[0].toUpperCase() + i.substring(1));
        j.push(i.replace(i[0],i[0].toUpperCase()));
    }
console.log(j);
}(["dhoni","raina","gambhir","kohli","rohit"]));

//output:
["Dhoni","Raina","Gambhir","Kohli", "Rohit"]


// Sum of all numbers in an array

(function(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
console.log(sum);
}([1,2,3,4,5,6]));

//output:
21


//Return all the prime numbers in an array

(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1 || arr[i] ===2) continue;
        else{
            for(let j=2;j<arr[i];j++)
                if(arr[i] % j === 0)
                    arr.splice(i,1);
        }
}
console.log(arr);
}([1,2,3,4,5,6,7,8,9,10]));


//output:
[1, 2, 3, 5, 7]

//Return all the palindromes in an array

(function(arr){
    let palindrome=[];
    for(let j of arr){
        let reverse="";
        for(let i=j.length-1;i>=0;i--){
            reverse+=j[i];
        }
        if (reverse===j)
            palindrome.push(j);
    }
console.log(palindrome);
}(["malayalam","english","tamil","mom","madam"]));

//output:

[ "malayalam","mom","madam" ]


//Remove duplicates from an array

(function(arr){
    let uniques=[];
    for(let i of arr){
        if(!uniques.includes(i))
            uniques.push(i);
    }
console.log(uniques);
}([1,2,3,1,4,2,3,1,5,3,4,5,6,1,5]));


//output:
[1,2,3, 4, 5,6]


//ARROW FUNCTIONS:

// Print odd numbers in an array

((arr)=>{
    console.log(arr.filter(elem => elem%2!=0));
})([1,2,3,4,5,6,7,8,9,10]);


//output:
[1, 3, 5, 7, 9]

// Convert all the strings to title caps in a string array

((arr)=>{
    let j=[];
    for(let i of arr)
        j.push(i.replace(i[0],i[0].toUpperCase()));
console.log(j);
})(["dhoni","raina","gambhir","kohli","rohit"]);


//output:
["Dhoni","Raina","Gambhir","Kohli", "Rohit"]


// Sum of all numbers in an array

((arr)=>{ let sum=0;
    for(let i of arr)
        sum+=i;
console.log(sum);
})([1,2,3,4,5,6]);

//output:
21


// Return all the prime numbers in an array

( (arr) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1 || arr[i] ===2) continue;
        else
            for(let j=2;j<arr[i];j++)
                if(arr[i] % j === 0)
                    arr.splice(i,1);
}
console.log(arr);
})([1,2,3,4,5,6,7,8,9,10]);


//output:
[1, 2, 3, 5, 7]



// Return all the palindromes in an array

((arr)=>{
    let palindrome=[];
    for(let j of arr){
        let reverse="";
        for(let i=j.length-1;i>=0;i--)
            reverse+=j[i];
        if (reverse===j) palindrome.push(j);
    }
console.log(palindrome);
})(["malayalam","english","tamil","mom","madam"]);


//output:

[ "malayalam","mom","madam" ]

