
	function countTimes(leftTime,id1,id2,id3,eavls) {
		var dinshi = '';
		var d, h, m, s, ms;
		dinshi = setInterval(function () {
			if (leftTime >= 0) {
				h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
				m = Math.floor(leftTime / 1000 / 60 % 60);
				s = Math.floor(leftTime / 1000 % 60);
				ms = Math.floor(leftTime % 1000);
				if (ms < 100) {
					ms = "0" + ms;
				}
				if (s < 10) {
					s = "0" + s;
				}
				if (m < 10) {
					m = "0" + m;
				}
				if (h < 10) {
					h = "0" + h;
				}
				leftTime -= 1000; // 1000  1秒
				//将倒计时赋值到div中
				if(id1){
					id1.html(h);
				}
				if(id2){
					id2.html(m);
				}
				if(id3){
					id3.html(s);
				}
			} else {
				clearInterval(dinshi);
				if(eavls){
					eval(eavls);
				}
			}
		}, 1000)
	}

	function countTimes45(leftTime, speed, id1, id2, id3, id4, id5, eavls) {
		console.log('xxx')
		var dinshi = ''
		var d, h, m, s, ms
		dinshi = setInterval(function() {
			if (leftTime >= 0) {
				d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
				h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
				m = Math.floor((leftTime / 1000 / 60) % 60)
				s = Math.floor((leftTime / 1000) % 60)
				ms = Math.floor(leftTime % 1000)
				if (ms < 100) {
					ms = '0' + ms
				}
				if (s < 10) {
					s = '0' + s
				}
				if (m < 10) {
					m = '0' + m
				}
				if (h < 10) {
					h = '0' + h
				}
				if (d < 10) {
					d = '0' + d
				}
				leftTime -= speed
				// 1000  1秒
				//将倒计时赋值到div中
				if (id1) {
					$(id1).html(d)
				}
				if (id2) {
					$(id2).html(h)
				}
				if (id3) {
					$(id3).html(m)
				}
				if (id4) {
					$(id4).html(s)
				}
				if (id5) {
					$(id5).html(ms)
				}
			} else {
				$(id5).html('000')
				clearInterval(dinshi)
				if (eavls) {
					eval(eavls)
				}
			}
		}, speed)
	}
	countTimes45( '78136000',89,false,$('.springtime-h'), $('.springtime-m'), $('.springtime-s'), $('.springtime-ms'), "$('.springtime-pop70,.springtime-pop70_2,.springtime-floatLink70,.winpopbg').hide()");