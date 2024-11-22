{
  "version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "src/index.js"  // Ensure that API routes go to the server file
    },
    {
      "src": "/(.*)",
      "dest": "/public/$1"  // Route static assets to the 'public' folder
    }
  ]
}
