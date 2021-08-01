## App Challenges
- Need to be able to navigate around to seperate pages in our app.
- Need to allow a user to login/logout.
- Need to handle forms in Redux.
- Need to master CRUD operations in React/Redux.
- Errors will likely occur! Need good error handling.

## Steps for Setting Up OAuth
- Create a new project at console.developers.google.com/
- Set up an OAuth confirmation screen.
- Generate an OAuth Client ID.
- Install Google's API library, initialize it with the OAuth Client ID.
- Make sure the lib gets called any time the use clicks on the 'Login with Google' button.

### Important Note about Redux Form Installation
We will be installing Redux Form into our application.
If you're using the latest Node v15 and npm v7 releases, this will fail with the following error:

`code ERESOLVE`
`npm ERR! ERESOLVE unable to resolve dependency tree`

This is caused by some fairly significant breaking changes NPM is making, which can read about here:
https://blog.npmjs.org/post/626173315965468672/npm-v7-series-beta-release-and-semver-majory

If you are using NPM, you'll need to run this command instead:
`npm install redux-form --legacy-peer-deps`

If you are using Yarn, no further changes will be needed and you can install as you would typically:
`yarn add redux-form`

Note - Do not mix the use of yarn and npm in the same project, this will cause some serious dependency conflicts.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
