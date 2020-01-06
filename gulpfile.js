const { src, dest, series, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const sass = require('gulp-sass');

function clean(cb) {
  cb();
}

function fileIsHtml(file) {
  return file.extname === '.html';
}

function buildPublic(cb) {
  cb();
  const dateString = new Date().getTime();
  return src('public/*')
    .pipe(replace('.css"', '.css?v=' + dateString + '"'))
    .pipe(replace('.js"', '.js?v=' + dateString + '"'))
    .pipe(gulpif(fileIsHtml, htmlmin({ collapseWhitespace: true })))
    .pipe(dest('dist/'));
}

function buildCss(cb) {
  cb();
  return src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest('dist/'));
}

function buildJs(cb) {
  cb();
  return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/'));
}

function buildImages(cb) {
  cb();
  return src('src/assets/*')
    .pipe(imagemin())
    .pipe(dest('dist/assets/'));
}

function buildFontAwesome(cb) {
  cb();
  return src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(dest('dist/assets/webfonts'));
}

function watchBuild(cb) {
  watch('public/*', buildPublic);
  watch('src/scss/*.scss', buildCss);
  watch('src/js/*.js', buildJs);
}

exports.watchBuild = watchBuild;

exports.default = series(clean, buildPublic, buildCss, buildJs, buildImages, buildFontAwesome);
