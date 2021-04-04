const mongoose = require(`mongoose`);

mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(() => {
    console.log(`MongoDB Connected`)
})
.catch(err => console.log(err.message))

mongoose.connection.on(`Connected`, () => {
    console.log(`Mongoose connected to DB`)
})

mongoose.connection.on(`error`, (err) => {
    console.log(err.message)
})

mongoose.connection.on(`disconnected`, () => {
    console.log(`Mongoose connection is disconnected`)
})

process.on(`SIGINT`, async () => {
    await mongoose.connection.close()
    process.exit(0)
})

