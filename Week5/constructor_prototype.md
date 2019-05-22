function Adult() {}
=> undefined
adult = new Adult()
=> Adult {}
function Adult(age) { this.age = age; }
=> undefined
adult = new Adult()
=> Adult {age: undefined}age: undefined__proto__: Object
adultTwo = new Adult(30)
=> Adult {age: 30}age: 30__proto__: Objectconstructor: ƒ
 => Adult(age)__proto__: Objectconstructor: ƒ

Adult.prototype.increaseAge = function() {
    this.age += 10;
}
=> ƒ () {
    this.age += 10;
}

adultTwo.increaseAge()
=> undefined
adult.age
=> undefined
adultTwo.age
=> 40

Adult.prototype.increaseAge = function() {
    return this.age += 10;
}
=> ƒ () {
    return this.age += 10;
}
adultTwo.increaseAge()
=> 50
