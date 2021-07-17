const setSharingAverageLevel = (pass, test) => {
	return (pass.result.percentScored > test.stat.report.average)
	? {
		imageName: `essentialism-average.jpg`,
		imageNameTw: `essentialism-average-tw.jpg`,
		hashtag: `#essentialism`
	}
	: {};
};

text = String(setSharingAverageLevel).replace(/\r\n|\r|\n/g,"").replace(/\s+/g,'');


console.log(text);