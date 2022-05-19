const gulp      = require('gulp');
const del       = require('del');
const { spawn } = require('child_process');

function clean () {
    return del('lib');
}

function build () {
    return spawn('npx tsc -p tsconfig.json', { stdio: 'inherit', shell: true });
}

function lint () {
    const eslint = require('gulp-eslint');

    return gulp
        .src([
            'src/**/*.js',
            'src/**/*.ts',
            'test/**/*.js',
            'Gulpfile.js',
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

exports['fast-build'] = gulp.series(clean, build);
exports.build         = gulp.parallel(exports['fast-build'], lint);
exports.lint          = lint;
exports.default       = gulp.parallel(lint, gulp.series(clean, build));
