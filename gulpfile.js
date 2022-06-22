const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('scss/nova.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

function watchTask() {
  watch(['scss/nova.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
