export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) {
        //super this. etməkdən bizi xilas edər. Useri çalışdırar.
        super(id, firstName, lastName, city, age);
        this.salary = salary;
    }

}