
module.exports = function (grunt) {

	grunt.initConfig({

		less: {
		  production: {
		  	options: {
				paths: [""]
			},
		    files: {
		      "assets/css/style.css": "assets/css/style.less",
		    }
		  }
		},

		cssmin: {
		  target: {
		    files: {
		      "assets/css/style.min.css": "assets/css/style.css",
		    }
		  }
		},

		clean: {
		   css: ["assets/css/**/*.css", "!assets/css/**/*.min.css"]
		},

		watch: {
		  scripts: {
		    files: ['assets/css/*.less'],
		    tasks: ['less','cssmin', 'clean'],
		    options: {
		      spawn: false,
		    },
		  }
		}


	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default',['less']);
};