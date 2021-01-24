init()
function init(){
	draw()
	bindEvent()
	function draw(){
		const ctx = document.querySelector('#my-canvas').getContext('2d')
		drawBackground(ctx)
		drawStar(ctx,Math.floor(Math.random()*4)+2);
		function drawStar(ctx,r){
			ctx.save();
			ctx.beginPath()
			ctx.moveTo(r,0);
			for (let i=0;i<9;i++){
				ctx.rotate(Math.PI/5);
				if(i%2 === 0) {
					ctx.lineTo((r/0.525731)*0.200811,0);
				} else {
					ctx.lineTo(r,0);
				}
			}
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
		function drawBackground(ctx){
			ctx.fillRect(0,0,150,150);
			ctx.translate(75,75);
			// Create a circular clipping path
			ctx.beginPath();
			ctx.arc(0,0,60,0,Math.PI*2,true);
			ctx.clip();

			// draw background
			let lingrad = ctx.createLinearGradient(0,-75,0,75);
			lingrad.addColorStop(0, '#232256');
			lingrad.addColorStop(1, '#143778');
			ctx.fillStyle = lingrad;
			ctx.fillRect(-75,-75,150,150);
			// draw stars
			for (let j=1;j<50;j++){
				ctx.save();
				ctx.fillStyle = '#fff';
				ctx.translate(75-Math.floor(Math.random()*150),
					75-Math.floor(Math.random()*150));
				ctx.restore();
			}
		}
	}
	function bindEvent(){
		document.querySelector('.download-button').addEventListener('click',function(){
			const downloadCanvas = (canvasId,fileName)=>{
				let canvas = document.getElementById(canvasId)
				let imgUrl = canvas.toDataURL('image/png')
				let dlLink = document.createElement('a');
				dlLink.download = fileName;
				dlLink.href = imgUrl
				document.body.appendChild(dlLink);
				debugger
				dlLink.click();
				document.body.removeChild(dlLink);
			}
			downloadCanvas('my-canvas','mmm')
		})

	}

}


