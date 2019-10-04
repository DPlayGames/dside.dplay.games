DSideDownload.MAIN = METHOD({

	run : () => {
		
		MSG.loadCSV('/DSideDownload/R/text.csv', () => {
			
			DSideDownload.MATCH_VIEW({
				uri : '',
				target : DSideDownload.Home
			});
		});
	}
});
