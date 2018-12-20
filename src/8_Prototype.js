function Person(_name, _age){
    this.name = _name;
    this.age = _age;
}
Person.prototype.type = "사람";

function Student(_name, _age){
    this.name = _name;
    this.age = _age;
}
// Student는 Person을 상속
Student.prototype = new Person();
Student.prototype.type = "학생";
Person.prototype.age = 17;

p1 = new Person("per1", 25);

p2 = new Person("per2", 23);
console.log(p1.name + " " + p1.age + " " + p1.type);
console.log();

console.log(p2.name + " " + p2.age + " " + p2.type);
console.log();

s1 = new Student("stu1", 17);
console.log(s1.name + " " + s1.age + " " + s1.type + " " + s1.school);
console.log();

console.log(Student.prototype);