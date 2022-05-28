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

2. mapStateToProps

### Routing and Navigation
1. react-router -- determines which React component to display based on URL
2. npm install react-router-dom@4.3.1 --save
3. npm install --save history@4.7.2

### adding new tasks
1. Saga -- runs in backgorund by redux
2. Generators 
3. Full length course on /Redux-Saga

## CREATE saga to generate random Task ID, create task dispatch action containing details
1. mapDispatchtoprops
2. npm install --save redux-logger@3.0.6 redux-saga@0.16.2
3. npm install --save uuid


### Creating Storage with Node and MongoDB
1. npm install --save dev mongodb@3.1.10
2. npm install --save dev express@4.16.3 cors@2.8.4 body-parser@1.18.3

### Integration of Front-end with Backend
1. npm install --save dev concurrently@4.0.1
2. axios,jquery, fetch use for HTTP requests.
3. npm install axios@0.18.0


### Aunthentication
1. Build a "Route guard"
2. npm install react-router
## Login Page and Login saga
1. npm install md5 
2. yield ?




### Questiond'
1. Relation b/w Saga / Express --> where is axios coming in picture 
    --> where is actual post happening ?
2. what does "put" in redux-saga effect do?
