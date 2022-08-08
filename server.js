const express = require('express')
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cloudinary = require('cloudinary').v2;

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

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use(routes);


sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));;
})


//cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});