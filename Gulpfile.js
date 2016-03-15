var gulp = require('gulp');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('build:clean', function() {
    var del = require('del');
    return del(['build/*']);
});

gulp.task('build:bundle', function(){
    var jspm = require('gulp-jspm-build');
    jspm({
        bundles: [
            { src: 'src/index', dst: 'app.js' }
        ],
        bundleOptions: {
            minify: true,
            mangle: false
        },
        config:'config.js',
        bundleSfx: true
    })
    .pipe(gulp.dest('build'));
});

gulp.task('build:copy-index', function() {
    return gulp.src('index.html')
        .pipe(replace(/\s*<script dev-only[\s\S]*?script>[\n\r]*/g,''))
        .pipe(replace(/<\/body>/g,'<script src="app.js"></script></body>'))
        //.pipe(rename("index.html"))
        .pipe(gulp.dest('build/'));
});

gulp.task('build', function(cb) {
    return runSequence('build:clean',
        ['build:copy-index','build:bundle'],
        cb
    );
});

gulp.task('serve', function() {
    var server = require('gulp-server-livereload');
    return gulp.src('.')
        .pipe(server({
            livereload: {
                enable:true,
                filter: (filePath,cb) => { cb( !/\.idea/.test(filePath)) }
            },
            open: true,
            proxy: [{source:'/config.js'}]
        }));
});
