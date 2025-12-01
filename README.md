<<<<<<< HEAD
# SimbaPix

A full-stack SimbaPix app where you can create, share, update and delete albums, and also upload images in albums.

Built with React frontend, Express/Node backend, MongoDB database, and Google authentication.

---

## Demo Link

[Live Demo](https://simba-pix-ui.vercel.app)
 
 ---

## Login

Login with Google Auth

---

## Quick Start
```
git clone https://github.com/PoojaGujwar/simbaPix_UI.git
cd <your repo>
npm install
npm start # or `npm run dev`
```

---

## Technologies

- React JS
- Node.js
- Express
- MongoDB
- Cloudinary 
- React Router

---

## Demo Video
[Demo video](https://drive.google.com/file/d/1e0J7E4jZnVcZkykzbk0GsukfyDCat0IR/view?usp=sharing)

## Features
**Home**
  - Display a list of all albums
  - Add a new album via form
  - Update, delete and share albums
  - Logout button
  
**Share Album**
  - Display a list of cards shared by others
  - Double tap on a card to show images

**Image**
  - Display a list of images
  - Delete images
  - Upload images

 **Login**
   - Login via Google Auth

---

## API Reference

### **GET /albums** <br>
List all albums<br>

Sample Response: <br>
```
[{_id, name, description, ownerId, sharedUser},...]
```
### **GET /images**<br>
List all images<br>
Sample Response: <br>
```
[{_id,imageId, albumId, imageUrl, name, tags, person, isFavorite, comments, size, uploadedAt}]
```

### **GET /v1/users**<br>
List all users<br>
Sample Response: <br>
```
[{_id, userId, name, email}]
```

### **GET /v1/shareData**<br>
List all albums <br>
Sample Response: <br>
```
[{sender, receiver, album}]
```
### **POST /albums** <br>
Create a new album<br>

Sample Response: <br>
```
{ name, description, ownerId, sharedUser}
```

### **POST /albums/:id** <br>
Update an album <br>

Sample Response: <br>
```
{ name, description, ownerId, sharedUser}
```

### **POST /images** <br>
Add a new image <br>

Sample Response: <br>
```
{ message, newImage}
```

### **DELETE /albums/:id** <br>
Delete an album<br>

Sample Response: <br>
```
{ message, album}
```

### **DELETE /images/:id** <br>
Delete an Image<br>

Sample Response: <br>
```
{ message, images}
```

### **DELETE /v1/shareData/:id** <br>
Delete shared album data<br>

Sample Response: <br>
```
{ message, data}
```

---

## Contact
For bugs or feature requests, please reach out to gujwarpooja@gmail.com
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 563016f0013d7b37c56339e3ab1508023d394a6d
