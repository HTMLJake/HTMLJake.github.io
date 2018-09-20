const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("default", () => {
	browserSync.init({
		server: "./",
	});

	gulp.watch("./*.html").on("change", () => browserSync.reload());
	gulp.watch("./js/*.js").on("change", () => browserSync.reload());

	gulp.watch("./sass/**/*.scss", gulp.parallel(["sass"]));
});

gulp.task("sass", function () {
	return gulp.src("sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
		}))
		.pipe(gulp.dest("./css"))
		.pipe(browserSync.stream());
});
