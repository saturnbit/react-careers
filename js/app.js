$(function() {

	function renderJobs(jobs) {
		var $main = $('.main');

		console.log(jobs);

		$main.hide();
		jobs.forEach(function(job){
			if(job.Active == 1) {
				var tpl = $('#job-template').html(),
					$tpl = $(tpl);

				$tpl.find('.job_title').text(job['Job Title']);
				$tpl.find('.job_company').text(job['Company']);
				$tpl.find('.job_type').text(job['Job Type']);
				$tpl.find('.job_location').text(job['Location']);
				$tpl.find('.job_url').html('<a href="' + job['URL'] + '" target="_blank">View Job -></a>');
				$tpl.find('.job_description').text(job['Job Description']);

				$tpl.on('click', function (e) {
					$tpl.find('.job_url').toggle();
					$tpl.find('.job_description').toggle();
				});

				$('.main').append($tpl);
			}
		});
		$main.fadeIn(300);
	}

    function getSheetData() {
    	Tabletop.init({
	  		key: '19V7q55P8V-PmaCdAFg5ls1JTyYJabFf8Zl0B8Fp-fqI',
	    	callback: function(data, tabletop) {
	    		renderJobs(data);
	    	},
	        simpleSheet: true
	    });
    }

	function init() {
		getSheetData();
	}

	init();
});
