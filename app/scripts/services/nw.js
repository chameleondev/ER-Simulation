'use strict';

angular.module('ersimulationToolApp').service('Nw', function(){
	var fs = require('fs');
	var pdf = require('pdfkit');
	var gui = require('nw.gui');
	var win = gui.Window.get();
	

	return {
		createPdf:function(firstName,reference,appCase){
			var doc = new pdf({
				size : 'a4'
			});

			doc.pipe(fs.createWriteStream('../ER_Certificate_'+appCase+'_'+firstName+'.pdf'));

			window.mypdf = doc;

			//blue border top
			doc.rect(0,0,800,10)
				.fill("#4689c8")
				.stroke();

			//grey header
			doc.rect(0,10,800,180)
				.fill("#e0e0e0")
				.stroke();

			doc.moveDown(21);
			doc.fontSize(28)
				.fillColor('#000')
				.text(firstName +' : '+reference, {
					width : 451,
					align : 'center'
			});

			// doc.image('pdfImage/logo.png', 0, 15, {
			//   width: 300
			// });

			doc.image('pdfImage/logo-hifi.jpg',500,20,{
				width : 55,
				height : 55
			});

			doc.fontSize(42)
				.font('fonts/SourceSansPro-Light-webfont.ttf')
				.fillColor('#4689c8')
				.text('Certificate of Completion', 85, 125);

			// doc.fontSize(42)
			// 	.font('fonts/SourceSansPro-Light-webfont.ttf')
			// 	.fillColor('#4689c8')
			// 	.text('Certificate of Completion',{
			// 		width : doc.page.width,
			// 		align : 'center'
			// });
				

			doc.fontSize(28)
				.fillColor('#000')
				.text('This is to certify that', 190, 250);

			


			doc.fontSize(28)
				.fillColor('#000')
				.text('has completed '+appCase+' of the', 150, 450);

			doc.fontSize(42)
				.fillColor("#4689c8")
				.font('fonts/SourceSansPro-Regular-webfont.ttf')
				.text('ER Simulation Tool:', 135, 500);

			switch (appCase){
				case 'Case1':
				doc.text('deep vein thrombosis', 120, 550);
				break;

				case 'Case2':
				doc.text('pulmonary embolism', 120, 550);
				break;
			}

			// name underline
			doc.moveTo(100, 400)                              
   			.lineTo(500, 400)
   			.stroke()
   			.strokeColor('#e0e0e0');

   			doc.rect(0,815,800,30)
				.fill("#404143")
				.stroke();


			doc.end();
		},
		toggleFullscreen : function(){
			win.toggleFullscreen();
		},
		shutdown : function () {
			win.close();
		}
	}
})


