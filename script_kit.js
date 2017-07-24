/* script_kit.js */
function locate(url,status) {
	//status가 [1]이거니 [true]이면 url을 새 창에서 연결함.
	//status가 [0]이거나 [false]이면 url을 원레 창에서 연결함.
	if(status==1||status===true) {
		open(url);
	}else if(status==0||status===false) {
		location.href=url;
	}else{
		wrong_script('locate();');
	}
}

function locked(txt,key,status,url,warning_message) {
	//txt가 key랑 같으면 url로 연결됨.
	//status는 locate();를 참고하면 이해가 쉬움.
	//비밀번호가 틀리면 warning_message를 경고창으로 띄움.
	if(txt==key) {
		locate(url,status);
	}else if(txt!=key) {
		alert(warning_message);
	}
}

function alram(message,status) {
	//status가 0이면 alert(message);를 실행.
	//status가 1이면 confirm(message);를 실행.
	//status가 2이면 promtf(message);를 실행.
	//status가 0~2의 범위를 초과했을 때 에러 매세지를 띄움.
	var plutiki;
	if(status==0) {
		plutiki=alert(message);
		return plutiki;
	}else if(status==1) {
		plutiki=confirm(message);
		return plutiki;
	}else if(status==2) {
		plutiki==prompt(message);
		return plutiki
	}else{
		wrong_script('alram();');;
	}
}

function wrong_script(name){alram(name+'\n 잘못된 스크립트',0);}