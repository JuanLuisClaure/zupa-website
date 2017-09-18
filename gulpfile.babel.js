'use strict'
import gulp from 'gulp'
import babel from 'gulp-babel'
import del from 'del'
import nodemon from 'gulp-nodemon'
import riot from 'gulp-riot'
import sass from 'gulp-sass'
import webpack from 'webpack-stream'
import webpack2 from 'webpack'
import webpackConfig from './webpack.config.babel'
import { paths } from './src/config.paths'



gulp.task('clean',() => {
  del([
    paths.wwwBundle,
  ])
})

gulp.task('yes', () => {

  gulp.src([
    paths.wpIcon,
    paths.favicon,
    paths.manifest,
    paths.webapp,
    paths.config
  ])
  .pipe(gulp.dest(paths.wwwStart))

  gulp.src([
    paths.template
  ])
  .pipe(gulp.dest(paths.tmpltDir))

  gulp.src([
    paths.assets,
  ])
  .pipe(gulp.dest(paths.assetsDir))


})

gulp.task('riot', ['yes'] ,() =>{
  gulp.src([paths.pgnsTag])
  .pipe(riot())
  .pipe(gulp.dest(paths.pgnsDir))

  gulp.src([paths.cmpntsTag])
  .pipe(riot())
  .pipe(gulp.dest(paths.cmpntsDir))
})

gulp.task('css',['yes'],  ()=>{
  gulp.src([paths.themeScss])
  .pipe(sass())
  .pipe(gulp.dest(paths.themeCss))
})

gulp.task('build-server', () => {
  gulp.src([
    paths.srv,
  ])
  .pipe(babel())
  .pipe(gulp.dest(paths.srvrDir))
})

gulp.task('build-client',['css', 'riot'], () => {
  gulp.src(paths.entry)
  .pipe(webpack(webpackConfig, webpack2))
  .pipe(gulp.dest(paths.clntDir))
})

gulp.task('sync',['build-client', 'build-server'], () => {
  gulp.src([
    paths.srcStart
  ])
  .pipe(babel())
  .pipe(gulp.dest(paths.wwwStart))

})


gulp.task('server',['sync'],  () => {

  nodemon({
    script: paths.initFile
  })
  .on('restart', function () {
  console.log('=======================REINICIANDO==========================================');
  })
  .on('start', function () {
  console.log('=======================COMENZANDO==========================================');
  })

})


gulp.task('default', ['server'], ()=> {

  gulp.watch('./build/**/*.scss', ['build-client'])
  gulp.watch('./build/**/*.tag',  ['build-client'] )
  gulp.watch('./src/client/app/*.js',  ['build-client'] )
  gulp.watch('./src/server/**/*.js',  ['build-server'] )
  gulp.watch('./src/*.js',  ['sync'] )




})
