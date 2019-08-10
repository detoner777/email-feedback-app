const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRouthes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT); 
