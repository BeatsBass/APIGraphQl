require('dotenv').config();
import app from './server'

require('./database');

app.listen(app.get('port'),()=>{
    console.log('Server Up on',app.get('port'))
})