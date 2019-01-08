var gulp = require("gulp");
var grunt = require("grunt");
var winInstaller = require('electron-windows-installer');

grunt.task.init = function () { };

// Gruntfile.jsっぽいこと
grunt.initConfig({
    // タスク設定...
    'create-windows-installer': {
        x64: {
            appDirectory: './release/build/study-electron-win32-x64/',
            outputDirectory: './windows_installer64',
            description: 'my study app',
            authors: 'kmdkuk',
            exe: 'study-electron.exe',
            asar: true
        },
        ia32: {
            appDirectory: './release/build/study-electron-win32-x64',
            outputDirectory: './windows_installer32',
            description: 'my study app',
            authors: 'kmdkuk',
            exe: 'study-electron.exe'
        }
    }
});

grunt.loadNpmTasks('grunt-electron-installer')

gulp.task("win-pack", function (done) {
    grunt.tasks(["create-windows-installer"], {}, done);
});
