let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "Кнопка Cкрытия/Открытия";
tg.MainButton.setText = "Кнопка поменяла значение Кнопка Cкрытия/Открытия";
tg.MainButton.textColor ="#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "143F6B"});

btn.addEventListener('click', function(){
	if (tg.MainButton.isVisible){
		tg.MainButton.hide()
	}
	else{
		tg.MainButton.show()
	}
});

let btnED = document.getElementById("btnED");
btnED.addEventListener('click', function(){
	if (tg.MainButton.asActive){
		tg.MainButton.setParams({"color": "#222222"});
		tg.MainButton.disable()
	}
	else{
		tg.MainButton.setParams({"color": "#143F6B"});
		tg.MainButton.enable()
	}
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string");
});


let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем
