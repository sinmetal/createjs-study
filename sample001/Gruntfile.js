module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),
		bower: {
	        install: {
	            options: {
	                targetDir: 'bower-task',
	                layout: 'byType', // exportsOverride の左辺に従って分類
	                install: true,
	                verbose: true, // ログの詳細を出すかどうか
	                cleanTargetDir: true,
	                cleanBowerDir: false
	            }
	        }
	    },
	    tsd: {
	        client: {
	            options: {
	                // execute a command
	                command: 'reinstall',

	                //optional: always get from HEAD
	                latest: false,

	                // optional: specify config file
	                config: './tsd.json'
	            }
	        }
	    }
	});
	grunt.registerTask('setup', ['tsd', 'bower']);
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
}