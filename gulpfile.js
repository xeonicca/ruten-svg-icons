const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')

const config = {
  mode: {
    symbol: {
      example: {
        dest: '../demo.html'
      },
      sprite: '../sprite.svg'
    },
  },
  shape: {
    dimension: { // Dimension related options
      maxWidth: 200, // Max. shape width
      maxHeight: 200, // Max. shape height
      precision: 2, // Floating point precision
      attributes: false, // Width and height attributes on embedded shapes
    },
    spacing: { // Add padding
      padding: 10
    },
    transform: [{
      svgo: {
        plugins: [
          {transformsWithOnePath: true},
          {inlineStyles: {onlyMatchedOnce: false} },
        ]
      }
    }]
  },
  dest: '.'
}

const compressAndMakeSprite = (platform) => {
  return () => {
    return gulp.src(`icons/${platform}/*.svg`)
      .pipe(svgSprite(config))
      .on('error', (err) => {
        console.log(err);
      })
      .pipe(gulp.dest(`./dist/${platform}`));
    }
}

gulp.task('mobile-icons', compressAndMakeSprite('m'))
gulp.task('desktop-icons', compressAndMakeSprite('d'))
gulp.task('default', gulp.parallel('mobile-icons', 'desktop-icons'))
