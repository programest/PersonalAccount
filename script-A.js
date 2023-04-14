window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader-a')
	
	if (preloader) {
		preloader.classList.add('preloader_hidden-a')
	}

})



const menu = document.querySelector('.menu__left')
const menu__btn = document.querySelector('.menu__block-img')
var b = document.querySelector(".menu__block-images");
menu__btn.addEventListener('click', () => {
	menu.classList.toggle('minify')
	if (menu.classList.contains('minify')) {
		b.src = "../img-a/burger.svg";
	} else {
		b.src = "../img-a/cross.svg";
	}

})




let activeElement = null; // Создаем переменную для хранения ссылки на текущий активный элемент

function reloadId(a){
    a.querySelectorAll('.menu__page-block').forEach(function (item) {
        item.addEventListener('click', handleItemClick);
        item.addEventListener('touchstart', handleItemClick);
    });
}

function handleItemClick(event) {
	console.log('asd')
    event.preventDefault();
    AddHtmlinJs(this.id, this);
}

AddHtmlinJs('main', document.getElementById('main'))

document.querySelector('.profile-info-a').addEventListener('click', handleProfileClick);
document.querySelector('.profile-info-a').addEventListener('touchstart', handleProfileClick);

function handleProfileClick(event) {
	console.log('asd')
    event.preventDefault();
    AddHtmlinJs('profile', document.getElementById('profile'));
}

function AddHtmlinJs(a, b) {
    // AJAX-запрос на получение HTML-блока
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "html-a/" + a + ".html");
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Удаляем классы у предыдущего элемента, если такой есть
            if (activeElement && activeElement !== b) {
                activeElement.querySelector('.menu__page-img').style.fill = "#000000";
                activeElement.querySelector('.menu__page-img-text').style.color = "#000000";
                activeElement.classList.remove('active-a');
            }

            // Присваиваем переменной activeElement ссылку на новый активный элемент
            activeElement = b;

            // Добавляем классы для нового активного элемента
            b.querySelector('.menu__page-img').style.fill = "#fff";
            b.querySelector('.menu__page-img-text').style.color = "#fff";
            b.classList.add('active-a');

            // Вставка блока на страницу
            document.querySelector(".menu__right").innerHTML = xhr.responseText;

            var dateBirthday = document.getElementById("dateBirthday-a");
            if (dateBirthday) {
                new AirDatepicker('#dateBirthday-a', {
                    autoClose: true,
                });
            }
            dataTables();
            ValidatePhone();
            ValidateInputs();
        }
    };
    xhr.send();
}

reloadId(document);


/// Form validation
//const fileInput = document.querySelector('.field__file-a');
//const submitButton = document.querySelector('.insurance-upload-a');
//
//submitButton.addEventListener('click', (event) => {
//  event.preventDefault(); // отменяем стандартное поведение формы
//
//  const files = fileInput.files; // получаем список файлов
//
//  if (files.length === 0) {
//	alert('Выберите файл для загрузки!');
//	return;
//  }
//
//  const formData = new FormData(); // создаем объект FormData для отправки файлов
//
//  for (let i = 0; i < files.length; i++) {
//	formData.append(`file-${i}`, files[i]); // добавляем файлы в FormData
//  }
//
//  // отправляем FormData на сервер с помощью XMLHttpRequest
//  const xhr = new XMLHttpRequest();
//  xhr.open('POST', '/upload', true);
//  xhr.onload = () => {
//	if (xhr.status === 200) {
//	  alert('Файлы успешно загружены!');
//	} else {
//	  alert(`Произошла ошибка ${xhr.status}: ${xhr.statusText}`);
//	}
//  };
//  xhr.onerror = () => {
//	alert('Произошла сетевая ошибка');
//  };
//  xhr.send(formData);
//});



function dataTables(){
	$(document).ready(function () {
		$('#myPolicTables-a').DataTable({
			"scrollX": "100px",
			ajax: 'myPolicTables.json',
			"language": {
				"paginate": {
				  "first":      "Первая",
				  "last":       "Последняя",
				  "next":       "Следующая",
				  "previous":   "Предыдущая"
				},
				"search": "Поиск:",
				"lengthMenu": "Показать _MENU_ записей",
				"info": "Показано с _START_ по _END_ из _TOTAL_ записей",
				"infoEmpty": "Нет записей для отображения",
				"infoFiltered": "(отфильтровано из _MAX_ записей)",
				"zeroRecords": "Записи отсутствуют",
				"emptyTable": "Нет данных в таблице",
				"loadingRecords": "Загрузка...",
				"processing":     "Обработка...",
				"paginate": {
					"first":      "Первая",
					"last":       "Последняя",
					"next":       "Следующая",
					"previous":   "Предыдущая"
				},
				"aria": {
					"sortAscending":  ": активировать для сортировки столбца по возрастанию",
					"sortDescending": ": активировать для сортировки столбца по убыванию"
				}
			  },
			  
			"lengthMenu": [ 15, 20, 25, 30,45 ],
			
			columns: [
				{
					data: 'fio',
					
				},
				
				{
					data: 'country',
					
				},
				{
					data: 'sum',
					
				},
				{
					data: 'days',
					
				},
				{
					data: 'target',
					
				},
				{
					data: 'status',
					
				},
			],
		});
	});
	$(document).ready(function () {
		$('#allPolicTables-a').DataTable({
			"scrollX": "100%",
			
			ajax: 'allPolicTables.json',
			"language": {
				"paginate": {
				  "first":      "Первая",
				  "last":       "Последняя",
				  "next":       "Следующая",
				  "previous":   "Предыдущая"
				},
				"search": "Поиск:",
				"lengthMenu": "Показать _MENU_ записей",
				"info": "Показано с _START_ по _END_ из _TOTAL_ записей",
				"infoEmpty": "Нет записей для отображения",
				"infoFiltered": "(отфильтровано из _MAX_ записей)",
				"zeroRecords": "Записи отсутствуют",
				"emptyTable": "Нет данных в таблице",
				"loadingRecords": "Загрузка...",
				"processing":     "Обработка...",
				"paginate": {
					"first":      "Первая",
					"last":       "Последняя",
					"next":       "Следующая",
					"previous":   "Предыдущая"
				},
				"aria": {
					"sortAscending":  ": активировать для сортировки столбца по возрастанию",
					"sortDescending": ": активировать для сортировки столбца по убыванию"
				}
			  },
			  
			"lengthMenu": [ 15, 20, 25, 30,45 ],
			columns: [
				{
					data: 'polic',
				},
				
				{
					data: 'insurance',
				},
				{
					data: 'country',
				},
				
				{
					data: 'target',
				
				},
				{
					data: 'sum-insurance',
				},
				{
					data: 'sum-prem',
				},{
					data: 'itog-sum-insurance',
				
				},
				{
					data: 'itog-sum-prem',
				},
				{
					data: 'sub-insurance',
				
				},
				{
					data: 'false/true',
				},
			],
		});
	});
}

function ValidatePhone(){

		var phoneInputs = document.querySelectorAll("input[data-tel-input]");
		var getInputNumbersValue = function (input) {
			return input.value.replace(/\D/g, "");
		};
		var onPhonePaste = function (e) {
			var input = e.target, inputNumbersValue = getInputNumbersValue(input);
			var pasted = e.clipboardData || window.clipboardData;
			if (pasted) {
				var pastedText = pasted.getData("Text");
				if (/\D/g.test(pastedText)) {
					input.value = inputNumbersValue;
					return;
				}
			}
		};
		var onPhoneInput = function (e) {
			var input = e.target, inputNumbersValue = getInputNumbersValue(input), selectionStart = input.selectionStart, formattedInputValue = "";
			if (!inputNumbersValue) return input.value = "";
			if (input.value.length != selectionStart) {
				if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
				return;
			}
			if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
				if ("9" == inputNumbersValue[0]) inputNumbersValue = "7" + inputNumbersValue;
				var firstSymbols = "8" == inputNumbersValue[0] ? "8" : "+7";
				formattedInputValue = input.value = firstSymbols + " ";
				if (inputNumbersValue.length > 1) formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
				if (inputNumbersValue.length >= 5) formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
				if (inputNumbersValue.length >= 8) formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
				if (inputNumbersValue.length >= 10) formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
			} else formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
			input.value = formattedInputValue;
		};
		var onPhoneKeyDown = function (e) {
			var inputValue = e.target.value.replace(/\D/g, "");
			if (8 == e.keyCode && 1 == inputValue.length) e.target.value = "";
		};
		for (var phoneInput of phoneInputs) {
			phoneInput.addEventListener("keydown", onPhoneKeyDown);
			phoneInput.addEventListener("input", onPhoneInput, false);
			phoneInput.addEventListener("paste", onPhonePaste, false);
		}
	
	
	
}
function ValidateInputs(){
	(function () {
		'use strict'
	
		// Получите ссылку на кнопку
		var button = document.querySelector('.puy-a');
		if (button){
// Добавьте обработчик событий на кнопку
button.addEventListener('click', function (event) {
	// Получите ссылку на форму, связанную с кнопкой
	var item = document.querySelector('.block__insurance-form-a')
	
	// Проверьте форму на валидность

	

		event.preventDefault();
		event.stopPropagation();
		console.log('Не валидно');
	

	// Добавьте класс 'was-validated' к форме
	item.classList.add('was-validated');
}, false);
		}
		
	
	})();
}



//Автоматический перевод


let ru = document.getElementById('ru');
let en = document.getElementById('en');

function coook(a) {
	let cookie = setCookie('lang', a)
}

var changeLocaleService = (function () {
	var locale;

	function loadLocale(defLang) {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", 'lang.json', true);
		xhr.onreadystatechange = saveLocale.bind(this);
		xhr.onerror = function () { console.log("no found page"); };
		xhr.send();
		let cookie = getCookie('lang')

		function saveLocale() {
			if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
				locale = JSON.parse(xhr.responseText);
				console.log("locale loaded");
				if (defLang) changeLocale(defLang);
				if (cookie === 'kz') {
					changeLocale('kz')
					document.querySelector('.nav__dropdown-flag-a').src = 'img-a/kz.png'
					document.querySelector('.nav__dropdown-text-a').innerHTML = 'Қазақша'
				} else if (cookie === 'ru') {
					changeLocale('ru')

				} else if (cookie === 'en') {
					changeLocale('en')
					document.querySelector('.nav__dropdown-flag-a').src = 'img-a/en.png'
					document.querySelector('.nav__dropdown-text-a').innerHTML = 'English'
				} else {
					changeLocale('ru')

				}
			}
		}
	}

	function changeLocale(lang) {
		if (!locale[lang]) return console.log("no found language");
		else changeText('locale', locale[lang]);

		function changeText(name, object, startIndex) {
			for (key in object)
				if (Array.isArray(object[key]) && typeof object[key] != 'string' && typeof object[key][0] == 'string') getArrayText(key, object, name);
				else if (typeof object[key] == "object") {
					if (isNaN(key)) changeText(name + "-" + key, object[key]);
					else changeText(name, object[key], key);
				}
				else getText(key, object, name, startIndex);
		}
		function getText(key, object, name, startIndex) {
			var elementKey = 0;
			if (startIndex) elementKey = startIndex;

			for (; elementKey < document.getElementsByClassName(name + "-" + key).length; elementKey++)
				if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key];

		}
		function getArrayText(key, object, name, startIndex) {
			var elementKey = 0;
			if (startIndex) elementKey = startIndex;

			for (; elementKey < document.getElementsByClassName(name + "-" + key).length; elementKey++)
				if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key][elementKey % object[key].length];
		}

	}

	return {
		loadLocale: loadLocale,
		changeLocale: changeLocale
	}
})();







//Google Translate


const googleTranslateConfig = {
	/* Original language */
	lang: "ru",
	gaTrack: false
	/* The language we translate into on the first visit*/
	/* Язык, на который переводим при первом посещении */
	// langFirstVisit: 'en',
	/* Если скрипт не работает на поддомене, 
	раскомментируйте и
	укажите основной домен в свойстве domain */
	/* domain: "Get-Web.Site" */
};
document.addEventListener("DOMContentLoaded", (event) => {
	/* Подключаем виджет google translate */
	/* Connecting the google translate widget */
	let script = document.createElement("script");
	script.src = `//translate.google.com/translate_a/element.js?cb=TranslateWidgetIsLoaded`;
	document.getElementsByTagName("head")[0].appendChild(script);
});

function TranslateWidgetIsLoaded() {
	TranslateInit(googleTranslateConfig);
}
function TranslateInit() {

	if (googleTranslateConfig.langFirstVisit && !Cookies.get('googtrans')) {
		// Если установлен язык перевода для первого посещения и куки не назначены
		TranslateCookieHandler("/auto/" + googleTranslateConfig.langFirstVisit);
	}

	let code = TranslateGetCode();
	// Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
	if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
		document.querySelector('[data-google-lang="' + code + '"]').classList.add('language__img_active');
	}

	if (code == googleTranslateConfig.lang) {
		// Если язык по умолчанию, совпадает с языком на который переводим
		// То очищаем куки
		TranslateCookieHandler(null, googleTranslateConfig.domain);
	}

	// Инициализируем виджет с языком по умолчанию
	new google.translate.TranslateElement({
		pageLanguage: googleTranslateConfig.lang,
	});
	// Вешаем событие  клик на флаги
	TranslateEventHandler('click', '[data-google-lang]', function (e) {
		TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), googleTranslateConfig.domain);
		// Перезагружаем страницу
		window.location.reload();
	});
}

function TranslateGetCode() {
	// Если куки нет, то передаем дефолтный язык
	let lang = (Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != "null") ? Cookies.get('googtrans') : googleTranslateConfig.lang;
	return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
	// Записываем куки /язык_который_переводим/язык_на_который_переводим
	Cookies.set('googtrans', val);
	Cookies.set("googtrans", val, {
		domain: "." + document.domain,
	});

	if (domain == "undefined") return;
	// записываем куки для домена, если он назначен в конфиге
	Cookies.set("googtrans", val, {
		domain: domain,
	});

	Cookies.set("googtrans", val, {
		domain: "." + domain,
	});
}

function TranslateEventHandler(event, selector, handler) {
	document.addEventListener(event, function (e) {
		let el = e.target.closest(selector);
		if (el) handler(el);
	});
}









// var nv = getCookie('enjoyhintShown');

// // если куки нет или ее значение равно "false"
// if (nv === null || nv === 'false') {
//   // создаем экземпляр enjoyhint
//   var enjoyhint_instance = new EnjoyHint({
// 	onStart:function(){
// 		console.log('start');
// 	  },
//     showNext: true,
//     nextButton: {className: "myNext", text: "Конечно!"},
//     skipButton: {className: "mySkip", text: "Обойдусь"}
//   });

//   // настраиваем шаги
//   var enjoyhint_script_steps = [
// 	 { 'click #main': 'Тут вы можете узнать ваши активные и завершенные полисы', showNext: true, 'nextButton': {className: "myNext", text: "Далее"}, 'skipButton': {className: "mySkip", text: "Пропустить"}},
//     { 'click #main': 'Тут вы можете узнать ваши активные и завершенные полисы', showNext: true, 'nextButton': {className: "myNext", text: "Далее"}, 'skipButton': {className: "mySkip", text: "Пропустить"}},
//     { 'click #profile': 'Тут вы можете узнать ваши активные и завершенные полисы', showNext: true, 'nextButton': {className: "myNext", text: "Далее"}, 'skipButton': {className: "mySkip", text: "Пропустить"}, 'prevButton': {className: "myPrev", text: "Предыдущий"}},
//     { 'click #contacts': 'Тут вы можете узнать ваши активные и завершенные полисы', showNext: true, 'nextButton': {className: "myNext", text: "Далее"}, 'skipButton': {className: "mySkip", text: "Пропустить"}, 'prevButton': {className: "myPrev", text: "Предыдущий"} },
//   ];

//   // настраиваем экземпляр enjoyhint
//   enjoyhint_instance.set(enjoyhint_script_steps);

//   // запускаем enjoyhint
//   enjoyhint_instance.run();

//   // сохраняем значение куки "enjoyhintShown" равным "true"
//   setCookie('enjoyhintShown', 'false');
// } else {
// 	setCookie('enjoyhintShown', 'false');
//   console.log('enjoyhint уже показывался'); // выводим сообщение в консоль, если enjoyhint уже был показан
// }





// Создаем медиа-запрос для ширины экрана 900px
const mediaQuery = window.matchMedia('(max-width: 900px)');

const parentElement = document.querySelector('.collapse');
const myDiv = document.createElement('div');
const handleMediaQueryChange = (mediaQuery) => {
  if (mediaQuery.matches) {
	
		
	
    
		myDiv.className = 'my-class';
		myDiv.innerHTML= `<div
                    class="menu__page d-flex  align-items-center justify-content-between flex-column  mt-3 mt-lg-5">
                    <div class="menu__page-top-a w-100 ">
                        <div class="align-items-center justify-content-start">
                            <div id="main" class="menu__page-block w-100 d-flex align-items-center ">
                            <?xml version="1.0" encoding="iso-8859-1"?>
                            <svg version="1.1" id="Capa_1" class="menu__page-img" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 486.988 486.988" style="enable-background:new 0 0 486.988 486.988;"
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M16.822,284.968h39.667v158.667c0,9.35,7.65,17,17,17h116.167c9.35,0,17-7.65,17-17V327.468h70.833v116.167
                                            c0,9.35,7.65,17,17,17h110.5c9.35,0,17-7.65,17-17V284.968h48.167c6.8,0,13.033-4.25,15.583-10.483
                                            c2.55-6.233,1.133-13.6-3.683-18.417L260.489,31.385c-6.517-6.517-17.283-6.8-23.8-0.283L5.206,255.785
                                            c-5.1,4.817-6.517,12.183-3.967,18.7C3.789,281.001,10.022,284.968,16.822,284.968z M248.022,67.368l181.333,183.6h-24.367
                                            c-9.35,0-17,7.65-17,17v158.667h-76.5V310.468c0-9.35-7.65-17-17-17H189.656c-9.35,0-17,7.65-17,17v116.167H90.489V267.968
                                            c0-9.35-7.65-17-17-17H58.756L248.022,67.368z" />
                                    </g>
                                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            <p class="menu__page-img-text">Мои полисы </p>
                            </div>
                            <div id="profile" class="menu__page-block d-flex align-items-center mt-3">
                            <?xml version="1.0" ?><svg id="Layer_1" class="menu__page-img"
                                style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128"
                                xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path
                                        d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49   s11.7-26,26-26S90,34.7,90,49z" />
                                    <path
                                        d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z" />
                                </g>
                            </svg>
                            <p class="menu__page-img-text">Профиль</p>
                            </div>
                            <div id="contacts" class="menu__page-block d-flex align-items-center mt-3">
                            <?xml version="1.0" ?><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"  class="menu__page-img"><title/><g data-name="1" id="_1"><path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z"/><path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z"/><path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z"/></g></svg>
                            <p class="menu__page-img-text">Контакты</p>
                            </div>
                            <div  id="faq" class="menu__page-block d-flex align-items-center mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-question-circle menu__page-img"viewBox="0 0 16 16" >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                              </svg>
                            <p class="menu__page-img-text">FAQ</p>
                            </div>
                            <div  id="setting" class="menu__page-block d-flex align-items-center mt-3">
                            <?xml version="1.0" ?><svg id="icon" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" class="menu__page-img"><defs><style>
                                .cls-1 {
                                  fill: none;
                                }
                              </style></defs><title/><path d="M21,24H11a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V26A2,2,0,0,0,21,24Zm0,4H11V26H21Z"/><path d="M28.707,14.293l-12-12a.9994.9994,0,0,0-1.414,0l-12,12A1,1,0,0,0,4,16H9v4a2.0023,2.0023,0,0,0,2,2H21a2.0027,2.0027,0,0,0,2-2V16h5a1,1,0,0,0,.707-1.707ZM21,14v6H11V14H6.4141L16,4.4141,25.5859,14Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
                            <p class="menu__page-img-text">Обновление</p>
                            </div>
                        </div>
						<ul class="">
                    <li class="nav-item-a dropdown me-xxl-5 me-3 mb-lg-0 mb-4">
                        <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/img-a/ru.png" alt="" class="me-2 nav__dropdown-flag-a">
                            <p class="nav__dropdown-text-a me-2 notranslate">Русский</p>

                        </a>
                        <ul class="dropdown-menu p-3">
                            <li class=" mb-3 d-flex align-items-center dropdown-link-a " data-google-lang="ru" id="ru"
                                onclick="coook('ru')"><img src="/img-a/ru.png" alt="" class="dropdown-flag-a">
                                <p class="dropdown-item-a notranslate" href="#">Русский</p></a>
                            </li>
                            <li class=" mb-3 d-flex align-items-center dropdown-link-a " data-google-lang="kk" id="kz"
                                onclick="coook('kz')"><img src="/img-a/kz.png" alt="" class="dropdown-flag-a">
                                <p class="dropdown-item-a notranslate" href="#">Қазақша</p></a>
                            </li>
                            <li class=" mb-3 d-flex align-items-center dropdown-link-a " data-google-lang="en" id="en"
                                onclick="coook('en')"><img src="/img-a/en.png" alt=""
                                    class="dropdown-flag-a notranslate">
                                <p class="dropdown-item-a notranslate" href="#">English</p></a>
                            </li>
                        </ul>
                        
                    </li>
                </ul>
                        <div class="">
                            <div id="exit" class="menu__page-block d-flex align-items-center mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="menu__page-img"  viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                  </svg>
                                <p class="menu__page-img-text">Выйти</p>
                            </div>
                        </div>
                    </div>
                    
    		            </div>`
			
		if (myDiv.length >=1) {
			
		}else{
			parentElement.appendChild(myDiv);
			
			
		}

	reloadId(myDiv);
	// Найти все элементы меню
	var menuItems = myDiv.querySelectorAll('.menu__page-block');

	// Найти кнопку, открывающую меню
	var navbarToggler = document.querySelector('.navbar-toggler');

	// Найти меню, которое нужно закрыть
	var navbarCollapse = document.querySelector('.navbar-collapse');

	// Добавить обработчик события click на каждый элемент меню
	menuItems.forEach(function(item) {
		console.log(item);
	  item.addEventListener('touchstart', function() {
	    // Закрыть меню
	    navbarToggler.click();
	  });
	});
  } else {
    parentElement.removeChild(myDiv);
		
  }

}

// Добавляем обработчик изменения состояния медиа-запроса
mediaQuery.addListener(handleMediaQueryChange);

// Вызываем обработчик для текущего состояния медиа-запроса
handleMediaQueryChange(mediaQuery);





