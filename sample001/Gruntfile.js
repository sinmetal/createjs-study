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
	    },
	    ts: {
            options: {
                compile: true,                 // perform compilation. [true (default) | false]
                comments: false,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 (default) | es5]
                // module: 'amd',                 // target javascript module style. [amd (default) | commonjs]
                noImplicitAny: true,
                sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
                sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
                mapRoot: '',                   // where to locate .map.js files. [(default) '' == generated js location.]
                declaration: false             // generate a declaration .d.ts file for every output js file. [true | false (default)]
            },
            main: {
                src: ['src/main/typescript/app/main.ts'],
                out: 'script/main.js'
            }
        }
	});
	grunt.registerTask('setup', ['tsd', 'bower']);
	grunt.registerTask('default', ['ts:main']);
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
}