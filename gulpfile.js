const 
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  browserSync = require('browser-sync').create()

gulp.task('pug', () => {
	gulp.src('./dev/views/*.pug')
		.pipe(pug({
			pretty : true
		}))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('pug-watch', () => {
	gulp.watch('./dev/views/**/*.pug', ['pug']);
});

gulp.task('sass', () => {
	gulp.src('./dev/sass/main.sass')
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		// .pipe(concat('all.css'))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.stream());
})

gulp.task('js', () => {
	gulp.src('dev/js/**/*.js')
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('fonts', () => {
	gulp.src('dev/fonts/**/*')
		.pipe(gulp.dest('dist/fonts/'))
})

gulp.task('php', () => {
	gulp.src('dev/php/**/*.php')
		.pipe(gulp.dest('dist/php/'));
});

gulp.task('jquery', () => {
	gulp.src('./node_modules/jquery/dist/**/*')
		.pipe(gulp.dest('./dist/libs/jquery/'))
})

gulp.task('bootstrap', () => {
	gulp.src('./node_modules/bootstrap/dist/**/*')
		.pipe(gulp.dest('./dist/libs/bootstrap/'))
})

gulp.task('deploy', ['pug', 'sass', 'fonts', 'js', 'php'])

gulp.task('import', ['jquery', 'bootstrap'])

gulp.task('server', ['pug', 'sass', 'js'], () => {
	browserSync.init({
		server: './dist/',
		open: false
	});

	gulp.watch('./dev/views/**/*.pug', ['pug']);
	gulp.watch('./dev/sass/**/*.sass', ['sass']);
	gulp.watch('./dev/js/**/*.js', ['js']);
	gulp.watch('./dev/php/**/*.php', ['php']);
	gulp.watch('./dist/*.html').on('change', browserSync.reload);
})