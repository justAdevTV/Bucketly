const express = require('express');
const app = express();

const passport = require('passport');

require('./services/passport');

// Routes
require('./routes/authRoutes')(app);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT);