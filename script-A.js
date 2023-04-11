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

function reloadId(){
    document.querySelectorAll('.menu__page-block').forEach(function (item) {
		
        item.addEventListener('click', function () {
            AddHtmlinJs(this.id, this,)
			
        })
    });
}
AddHtmlinJs('main', document.getElementById('main'))
document.querySelector('.profile-info-a').addEventListener('click', () => {
	AddHtmlinJs('profile', document.getElementById('profile'))
})
function AddHtmlinJs(a, b  ) {
    // AJAX-запрос на получение HTML-блока
    const xhr = new XMLHttpRequest();
    xhr.open("GET", a + ".html");
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
				b.querySelector('.menu__page-img-text').style.color = "#fff"
				b.classList.add('active-a')
            

            // Вставка блока на страницу
            document.querySelector(".menu__right").innerHTML = xhr.responseText;
			
			var dateBirthday = document.getElementById("dateBirthday-a");
			if (dateBirthday) {
				new AirDatepicker('#dateBirthday-a', {
					autoClose: true,
				})
			}
			dataTables()
			ValidatePhone()
			ValidateInputs()
	    }
	};
	xhr.send();
}

reloadId()



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
			"responsive": true,
			
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
			columnDefs: [
				{ width: '20%', targets: 0 },
				{ width: '10%', targets: 1 },
				{ width: '100%', targets: 2 },
				{ width: '100%', targets: 3 },
				{ width: '100%', targets: 4 },
				{ width: '100%', targets: 5 },
			],
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
			"scrollX": "200px",
			
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