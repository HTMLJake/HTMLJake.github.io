const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("default", () => {
	browserSync.init({
		server: {
			baseDir: "./",
			index: "./app/index.html",
			routes: {
				"/graphic-design": "/app/"
			}
		}
	});

	gulp.watch("./**/*.html").on("change", () => browserSync.reload());
	gulp.watch("./Dist/dev/js/*.js").on("change", () => browserSync.reload());

	gulp.watch("./Dist/dev/sass/**/*.scss", gulp.parallel(["sass"]));
});

gulp.task("sass", function () {
	return gulp.src("./Dist/dev/sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
		}))
		.pipe(gulp.dest("./Dist/dev/css"))
		.pipe(browserSync.stream());
});
