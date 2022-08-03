const express = require('express')
const routes = require('./routes')
const sequelize = require('./config/connection')
const path = require('path')
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'sick art',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})