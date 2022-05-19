const gulp      = require('gulp');
const del       = require('del');
const { spawn } = require('child_process');

function clean () {
    return del('lib');
}

function build () {
    return spawn('npx tsc -p tsconfig.json', { stdio: 'inherit', shell: true });
}

function lint (options) {
    const eslint = require('gulp-eslint');

    return gulp
        .src([
            'src/**/*.js',
            'src/**/*.ts',
            'test/**/*.js',
            'Gulpfile.js',
        ])
        .pipe(eslint(options))
        .pipe(eslint.format())
        .pipe(options && options.fix ? gulp.dest(file => file.base) : eslint.failAfterError())
        .pipe(eslint.failAfterError());
}

function lintFix () {
    return lint({ fix: true });
}

function testMocha () {
    const mochaOpts = [
        'test/**/*test.js',
    ];

    return spawn(`npx mocha ${mochaOpts.join(' ')}`, { stdio: 'inherit', shell: true });
}

exports['fast-build'] = gulp.series(clean, build);
exports.build         = gulp.parallel(gulp.series(clean, build), lint);
exports.lint          = lint;
exports['lint-fix']   = lintFix;
exports.test          = gulp.series(exports.build, testMocha);
exports.default       = exports.build;
