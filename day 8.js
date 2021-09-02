// 3.Write a “person” class to hold all the details.
class Person{
    constructor(name,age,emp_id){
        this.name=name;
        this.age=age;
        this.emp_id=emp_id;
    }
    print_details(){
        console.log(`
        Name       : ${this.name}
        Age        : ${this.age}
        EmployeeId : ${this.emp_id}
        `);
    }
}
let person1=new Person("Surya",24,95005);
person1.print_details();

//output:

        Name       : Surya
        Age        : 24
        EmployeeId : 95005

// 4.write a class to calculate uber price.
class Uber{
    constructor(distance){
        this.distance=distance;
    }
    static pricePerKm=14.7;
    static baseFare=47.5;
    totalPrice(){
        return `Total price for the ride : RS.${Uber.baseFare+(this.distance*Uber.pricePerKm)}`;
    }
}

let newRide = new Uber(17);
console.log(newRide.totalPrice());


//output:
Total price for the ride : RS.297.4
