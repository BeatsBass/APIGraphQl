import mongoose from 'mongoose'

mongoose
    .connect(process.env.URI2, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));
