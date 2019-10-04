DSideDownload.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE(MSG('TITLE'));
		
		let message = MSG('GET_D_MESSAGE');
		let messages = [];
		
		let dIndex = message.indexOf('<b>d</b>');
		if (dIndex !== -1) {
			messages.push(message.substring(0, dIndex));
			messages.push(SPAN({
				style : {
					color : '#980100',
					fontWeight : 'bold'
				},
				c : 'd'
			}));
			messages.push(message.substring(dIndex + 8));
		} else {
			messages.push(message);
		}
		
		let wrapper = UUI.PANEL({
			
			style : {
				position : 'absolute',
				left : 0,
				top : 0,
				width : '100%',
				minHeight : '100%',
				backgroundImage : '/DSideDownload/R/background.jpg'
			},
			
			contentStyle : {
				padding : 20,
				fontSize : 16,
				color : '#979b9b'
			},
			
			c : [
			H1({
				style : {
					fontSize : 35,
					marginBottom : 5,
					color : '#fff'
				},
				c : MSG('TITLE')
			}),
			
			P({
				c : messages
			}),
			
			P({
				style : {
					marginTop : 20,
					fontStyle : 'italic'
				},
				c : MSG('IN_DEV_MESSAGE')
			})]
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});