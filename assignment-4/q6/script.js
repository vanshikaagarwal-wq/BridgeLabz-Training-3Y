// Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus to monthly salary
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Create five employee objects
const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Priya", "HR", 35000),
    new Employee(3, "Rahul", "Finance", 45000),
    new Employee(4, "Neha", "Marketing", 30000),
    new Employee(5, "Rohit", "IT", 50000)
];

// Apply a 10% bonus to the first employee
employees[0].applyBonus(10);

// Display employee salary details
const employeeDetails = employees.map(employee => ({
    ID: employee.id,
    Name: employee.name,
    Department: employee.department,
    "Monthly Salary": employee.salary.toFixed(2),
    "Annual Salary": employee.getAnnualSalary().toFixed(2)
}));

console.table(employeeDetails);

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(
    "Total Annual Payout: ₹" + totalAnnualPayout.toFixed(2)
);