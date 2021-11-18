const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/class')

const departmentSchema = mongoose.Schema({
    name: String
});

const Department = mongoose.model("department", departmentSchema);

const getDepartment = async () => {
    const value = await Department.aggregate().sample(1).exec();
    return value[0].name;
}

module.exports = {
    getDepartment
}