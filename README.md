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

### Component Isolation with React-Router
With React-Router, each component needs to be designed to work in isolation (fetch its own data).
https://github.com/trieungochai/stream_client/commit/545420eff24cc0ba0d61c3a3c0b03b2d5086b415

### RTMP NodeMediaServer is not a constructor error fix
We will install the Node Media Server package and create our RTMP server.
Our index.js needs a slight modification to the import for v.2.1.0
https://github.com/illuspas/Node-Media-Server#npm-version-recommended

Instead of:
`const { NodeMediaServer } = require('node-media-server');`
We need to change the import to this:
`const NodeMediaServer = require('node-media-server');`
