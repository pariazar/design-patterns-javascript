function Developer(name) {
    this.name = name;
    this.type = "developer";
}

function Tester(name) {
    this.name = name;
    this.type = "tester";
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}

function getEmployeesList(employees) {
    console.log(employees);
}

const employeeFactory = new EmployeeFactory();
const employees = [];


employees.push(employeeFactory.create("Hamed",1));
employees.push(employeeFactory.create("Amir",1));
employees.push(employeeFactory.create("Sara",1));
employees.push(employeeFactory.create("Ali",2));
employees.push(employeeFactory.create("Mina",1));
employees.push(employeeFactory.create("Hossein",2));
employees.push(employeeFactory.create("Sajad",2));

getEmployeesList(employees)