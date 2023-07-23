# namaste react🚀

- There are two type of dependencies
- dev and normal
- dev mean required in develpoment phase
- normal is used in production
- we use parcel package for bundling(if our project is skeleton the -parcel is muscles)
- In dependencies section we ~symbol is used for minor update and ^ -is used for major dependencies updates

# what is package-log.json

- it keeps the exact version of package we had intalled into our project
- why it is useful
- package.json keeps approx verison of packages
- where as package-lock.json keeps exact accurate version of pacakge

# Integerity into package-log.json??

- it keeps the track of file check exact tarck of all these dependencies

# what are node module?

- all the code fetched from npm
- its huge file
- transtitve dependencies
- if we have package lock we can re generate node module

# difference between npm ans npx?

- npx mean executing
- npm mean dowmloading package

# cdn link is not prefered way to import React it is expensive operation

# parcel

- dev build
- local server
- HMR =hot module replacement written in c++
- faster builds because of cache
- image optimization
- minification
- bundling
- compress
- consistent hashing
- code splitting
- differential bundling to support older browsers
- Diagnostics
- HTTPS
- tree shaking algorithm remove unused code for me
- Different built for dev and production bundles
- ⭐ remove main form package json to solve conflict with parsel

# npm start is equivalent to npm run start

# npm run build is mandatory for production application

# Myth regarding JSX

- JSX is not HTML in javascript
- JSX is HTML like syntax
- XML like syntax
- React element is object
- JSX is just an syntax
- JSX is different and React is Different
- JSX is transpile before bundling

# Transpile is done by Parcel

# If parcel is beast Babel is mosnter

- BABEL help us to convert JSX element into pure JavaScript
- React.createElement =>ReactElement-JS Object=> HTMLELEMENT(render)
- JSX=>React.createElement=>ReactElement-JS Object=>HTMLELEMENT(render)
- in JSX element Attribute in jsx is camelCase
- if JSX element has muntiple line wrap it inside (JSX MUNTIPLE LINE CODE)
- with out () is only if single line

# React components

- There are two types of component class Based and Function Based
- class Based -old way
- functional way -new way
- components are always starts with Capital letter
- components should be inside < AnyComponentName />
- functional component is just a normal javaScript functions
- component inside component is called component composotion
- if we use {} this in JSX component we can write any JavaScript inside it
- 😏anything {literally any thing inside this}
- JSX can escape Cross-site scripting attack
- JSX can also be called inside { JSXConponent()} this braces
- stylesheet is in JS object we can inject it using curly braces {} int JSX code
- props are just normal argument to function
- passing a prop to a componet is equivalent to passing argument to a function
- props are object
- in destructing ? is called optional chaning

# config driven UI

- data driven ui
- data base drive the nature of Ui
- different for other locations

# Always give a key to map function in JS

- if we do not mention the react will re render stuff
- this cause huge performance hit

# REACT offical doc says that never use indexes for key

- not using key(not acceptable) <<<<< index as a key <<<<<<<<<< unique id

# Never ever keep hardcoded data into component folder

-named Exports are imported into curry braces {import} like this

# two types of default Import/Export

- export default Component;
  import Component from "path;"
- named Export/Import
  export const Component;
  import {Component} from "Path";

# HOOKS in REACT 😎

- Normal JS utility functions
- useState()
- useEffect()
- useEffect only calls when component is render

# Reconciliation Algorithm (React fiber)

- react does not touch actual DOM
- it compare old and new virtual dom to get output result
- react can find efficiently find the difference virtuall dom and update the ui

# Microservices

- single responsiblity princiapl
- seperaion of concern

# whenever state variable updates, react triggers a reconciliation cycle (re-render the component)

# useEffect hook
- if no dependency array =>useEffect is called on every render
- if dependency array is empty =[]=> useEffect is called on inital render (just once)
- if dependency array has [anything] called every thime when there is updation and updated
# 2 type of routing 
- Client side routing
- server side routing
- createBrowerrouter
- userouterprovide
- link
- errorpage
- userouter hook

# never update state variable directly


# use of componentdid mount in Class Based component
 - use effect and component are similar 

# why do we componentWillUnmount 
- react spa will reapeat countiously