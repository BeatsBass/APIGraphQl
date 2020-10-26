import mongoose from 'mongoose'

mongoose
    .connect(process.env.URI3, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));
