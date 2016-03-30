const path = require( 'path' );

var gulp   = require('gulp');
var gutil  = require('gulp-util');
var uglify = require('gulp-uglify');
var less   = require('gulp-less');
var watch  = require('gulp-watch');
	
gulp.task('js', function() {
    
    return gulp
            .src(['www/js/**/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build/js'));
			      
});

gulp.task('less', function () {
	
	const bower = path.resolve( 'bower_components' );
	return gulp
			.src(['www/less/**/*.less', 'www/**/*.less'])
			.pipe(less({
				paths: [ path.join( bower, 'lesshat/build' ) ]
			}))
			.pipe(gulp.dest('build/css'));
	
});

gulp.task('html', function() {
  
	return gulp
			.src('www/**/*.html')
			.pipe(gulp.dest('build/'));
  
});

gulp.task('assets', function() {
  
	return gulp
			.src('www/assets/**/*')
			.pipe(gulp.dest('build/assets'));
  
});

gulp.task( 'vendor', function( ) {
	
	return gulp
			.src('bower_components/**/*')
			.pipe(gulp.dest('build/vendor'));
  
});

gulp.task('watch', function() {
	
	gulp.watch('www/**/*.less', function() {
		gulp.run('less');
	});
	
	gulp.watch('www/**/*.js', function() {
		gulp.run('js');
	});
	
	gulp.watch('www/**/*.html', function() {
		gulp.run('html');
	});
	
	gulp.watch('www/assets/**/*', function() {
		gulp.run('assets');
	});
	
	gulp.watch('bower_components/**/*', function() {
		gulp.run('vendor');
	});
	
});

gulp.task('default', ['less', 'js', 'html', 'assets', 'vendor']);