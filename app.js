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
