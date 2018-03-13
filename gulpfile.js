const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const config = {
    root: './assets/',
    html: {
        src: 'index.html'
    },
    sass: {
        watch: 'sass/**/*.sass',
        src: 'sass/**/*.sass',
        dest: 'sass'
    },
    css: {
        watch: 'css/*.css',
        src: 'css/*.css',
        srcMin: 'css/*.min.css',
        dest: 'css'
    }
};


gulp.task('build', function () {
    return gulp.src(config.root + config.sass.src)
        .pipe(sass().on('error', notify.onError({
            message: "<%= error.message %>",
            title: "Sass Error!"
        })))
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['> 0.1%']
        }))
        .pipe(gulp.dest(config.root + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('minimize', ['build'], function () {
    return gulp.src([config.root + config.css.src, '!' + config.root + config.css.srcMin])
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest(config.root + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.root + config.sass.watch, ['minimize']);
    gulp.watch(config.html.src, browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            basedir: config.root
        }
    })
});

const smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
let settings = {
    filename: '_smart-grid',
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '15px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px'//,
            //fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

gulp.task('grid', function () {
    smartgrid(config.root+config.sass.dest, settings)
})
