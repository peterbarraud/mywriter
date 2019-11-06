# Browserify with Budo & Browserify CSS & React & React-Bootstrap
So going one step on from my intro template ([browserify-budo](https://github.com/peterbarraud/rapo-browserify-budo)), let's use [browserify-css](https://github.com/cheton/browserify-css) to include external CSS libs in our browserify+budo setup

## What's in this project
* Browserify
* Budo
* React
* [React Bootstrap](https://react-bootstrap.github.io)
* **index.js**: Has the references to all your external libs (**CSS** and **JS**). These are the require statements that are browserify'd. The CSS libs are commented out so you'll need to uncomment a lib that you want to use. Of course, you'll also have to `npm install` that lib.
* **./src**: This holds your JS and CSS source files. These are also referenced in `index.js`
* **package.json**: This has a `start` script that runs the localhost. See the `index.js` file that has commented out `require` statements for samples. If a lib that you include does not work with a simple require statement, you might have to require upto the `.css` reference in given in the lib's `package.json`. If you're including external CSS libs, you're going to have to change the browserify-css `-t` flag to `-g (global)`.

## Get going
1. Clone this repo
2. `cd` into the resultant dir
3. Run `npm install` to get the dependencies
4. Run `npm start` to launch the project in your default browser running on a local (`Node`-based) web server with `livereload` - all setup.

That's it.

## Building the project for deployment
This is split into two parts
* `build.js`: Builds the `JS` and `CSS` outputs
* `html-dist.config`: Uses [html-dist](https://www.npmjs.com/package/html-dist) to inject the CSS into the HTML

Then generate build:
```
npm run build
```
### Testing the build
If you want to check the build - Just to make sure:
```
npm run testbuild
```
This runs `budo` on the build