var gulp = require("gulp");
var grunt = require("grunt");
var winInstaller = require('electron-windows-installer');

<<<<<<< HEAD
grunt.task.init = function() {};
=======
grunt.task.init = function () { };
>>>>>>> fe1ccdf37a80cb9b28282f22af2a3ed34c327238

// Gruntfile.jsっぽいこと
grunt.initConfig({
    // タスク設定...
    'create-windows-installer': {
        x64: {
<<<<<<< HEAD
            appDirectory: './build/study-electron-win32-x64',
            outputDirectory: './windows_installer64',
            authors: 'kmdkuk',
            exe: 'study-electron.exe'
        },
        ia32: {
            appDirectory: './build/study-electron-win32-x64',
            outputDirectory: './windows_installer32',
            authors: 'kmdkuk',
            exe: 'study-electron.exe'
        }
      }
});

grunt.loadNpmTasks('grunt-electron-installer')
  
gulp.task("win-pack", function (done) {
    grunt.tasks(["create-windows-installer"], {}, done);
});
=======
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
>>>>>>> fe1ccdf37a80cb9b28282f22af2a3ed34c327238
