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


//cloudinary code

cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {

  // Use the uploaded file's name as the asset's public ID and 
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
const getAssetInfo = async (publicId) => {

  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
      // Get details about the asset
      const result = await cloudinary.api.resource(publicId, options);
      console.log(result);
      return result.colors;
      } catch (error) {
      console.error(error);
  }
};

//////////////////
//
// Main function
//
//////////////////
(async () => {

  // Set the image to upload
  const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

  // Upload the image
  const publicId = await uploadImage(imagePath);

  // Get the colors in the image
  const colors = await getAssetInfo(publicId);

  // Create an image tag, using two of the colors in a transformation
  const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

  // Log the image tag to the console
  console.log(imageTag);

})();
