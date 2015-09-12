module.exports = function(grunt) {

	"use strict";

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jasmine: {
			all: {
				src: 'src/**/*.js',
				options: {
					specs: 'tests/**/*.spec.js',
					junit: {
						path: "./",
						consolidate: true
					}
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'source/**/*.js', 'tests/**/*.js']
		}
	});

	grunt.registerTask("default", ["test"]);

	grunt.registerTask("test", ["jshint", "jasmine:all"]);

};