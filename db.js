const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/kalviumDb'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Mongodb is running successfully")
})
.catch(err => {
    console.log(err)
})