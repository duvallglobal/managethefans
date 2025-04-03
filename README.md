# ManageTheFans Website

## URL Rewriting for Client-side Routing

This project uses React Router for client-side routing. For proper direct URL access, server-side URL rewriting has been implemented for various deployment platforms:

### Deployment Options

#### Netlify
- A `_redirects` file in the `public` directory handles routing
- A `netlify.toml` configuration file is included in the root directory

#### Vercel
- A `vercel.json` configuration file is included in the root directory

#### Apache Server
- An `.htaccess` file will be automatically created in the `dist` directory during build
- The Vite configuration includes a plugin to ensure this file is created

#### Firebase Hosting
- A `firebase.json` configuration file is included with the proper rewrites

#### Custom Express Server
- A Node.js Express server is included in `src/server.js`
- Run it with `npm start` after building the project

### Development

```
npm install
npm run dev
```

### Production Build

```
npm run build
```

### Running in Production

```
npm start
```

This will run the Express server which handles URL rewriting automatically.
