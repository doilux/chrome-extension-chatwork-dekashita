module.exports = function(grunt) {
  // 読み込むプラグインの設定
  var taskName;
  var pkg = grunt.file.readJSON('package.json');
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  //Gruntの設定
  grunt.initConfig({
    pkg: pkg,

    // copy ファイルのコピー
    copy: {
      images: {
        expand: true,
        cwd: 'app/images/',
        src: ['*'],
        dest: 'app/dist/img/'
      },
      js: {
        expand: true,
        cwd: 'app/scripts.babel/',
        src: ['*.js'],
        dest: 'app/dist/js/'
      }
    }
  });

  //defaultタスクの定義
  grunt.registerTask('default', ['copy']);

};
