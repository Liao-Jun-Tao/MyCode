const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // 使用 call 方法
  console.log(person.fullName.call(person1)); // 输出 "John Doe"
  
  // 使用 apply 方法
  console.log(person.fullName.apply(person2)); // 输出 "Mary Doe"