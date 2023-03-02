const mongoos = require('mongoose')

const Role = new mongoos.Schema({
    type:
    {
        type:String
    }

})
const role = mongoos.model('role' ,Role)
module.exports =role