/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу
  public name: string;
  static department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    Employee.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${Employee.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor() {
    super("Manager", "Finance", 1000)
  }
  // Реалізуйте конструктор та збільшіть salary на 10000
}


export {};