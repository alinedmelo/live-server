## Live Reload with Browsersync

Live reload borwser in development time.

### Requirements

- Node js
- Gulp
- Npm

### Install

clone the repository in the root of your project folder.

```
git clone https://github.com/alinedmelo/live-server.git
```

run the npm install command for install the dependencies

```
npm install
```

### Tasks

Run the `server` task will compile sass files, watch/reload the browser and inject the html and css files on it.

```
gulp server
```

### Paths

You can edit the `src` and `dest` paths in the `gulpfile.js`

##### Project folder
```javascript
browserSync.init({
    server: "./test" // Your project folder path
});
```
##### Source files
```javascript
gulp.watch('yourfolder/*.html') // Watch for html files

gulp.watch('yourfolder/*.css') // Watch for css files

gulp.watch('yourfolder/*.scss') // Watch for sass files
```

##### Compiled files
```javascript
pipe(gulp.dest("test/dist")) // The folder path for compiles files 
```

