const Gulp = {
    gulp        : null,
    browserSync : null,
    sass        : null,
    init: () => {
        Gulp.gulp        = require('gulp');
        Gulp.browserSync = require('browser-sync').create();
        Gulp.sass        = require('gulp-sass');
        Gulp.setTasks();
    },
    setTasks: () => {
        Gulp.gulp.task('sass', () => {
			return Gulp.gulp.src(['./assets/scss/*.scss'])
				.pipe(Gulp.sass())
				.pipe(Gulp.gulp.dest('./assets/css'))
				.pipe(Gulp.browserSync.stream())
		})

		Gulp.gulp.task('js', () => {
			return Gulp.gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
				.pipe(Gulp.gulp.dest('./js'))
				.pipe(Gulp.browserSync.stream())
		})

		Gulp.gulp.task('serve', () => {
			Gulp.browserSync.init({
				server: './'
			})
			Gulp.gulp.watch('./assets/scss/*.scss', ['sass'])
			Gulp.gulp.watch('./*.html').on('change', Gulp.browserSync.reload)
		})

		Gulp.gulp.task('default', ['js', 'serve'])
    }
}

Gulp.init();