function getSalary(id){
    const salaryByEmployee = [
        { userId: 1, salary: 100 },
        { userId: 2, salary: 150 },
        { userId: 3, salary: 200 }
    ]
    return [ ...salaryByEmployee.filter(el => el.userId === id)];
}

module.exports = { getSalary };