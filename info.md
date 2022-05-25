### Setting up Webpack to compile our application
## Webpack/Babel configure for bunddling and transpilation : 
1. npm init --yes (package.json)
2. npm install --save-dev webpack@4.17.2
3. npm install --save-dev webpack-cli@3.1.2 webpack-dev-server@3.1.7
4. npm install --save-dev @babel/core@7.0.0 (ES6 --> JS)
5. npm install --save-dev @babel/node@7.0.0 @babel/preset-env@7.0.0 @babel/preset-react@7.0.0 @babel/register@7.0.0
6. npm install --save-dev babel-loader@8.0.2

## Create .babelrc file to define how .jsx and ES6 should be handled
{
    "presets": [
        ["@babel/preset-env",{
            "targets":{
                "node":"current"
            }
        }],
        "@babel/preset-react"
    ]
}

## webpack.config.js to describle how our app should be bundled


### Redux to app
## Create default application state as JSON file for development
## Create basic Redux store to provide state to application as necessary
1. npm install --save redux@4.0.0

### Creating dashboard in react
1. npm install --save react@16.4.2 react-dom@16.5.0 react-redux@5.0.7
