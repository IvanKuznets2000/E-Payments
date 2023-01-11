
$('.head__btn').click(function(e) {
    e.preventDefault();
    $('.login-form').fadeIn();

    $('.login-form').click(function() {
        $('.login-form').fadeOut();
    });

    $('.object-close').click(function() {
        $('.login-form').fadeOut();
    });

    $('.login-form').children().click(function(e) {
        e.stopPropagation();
    });
});

$('.wrapp-offer__btn').click(function(e) {
    e.preventDefault();
    $('.start-form').fadeIn();

    $('.start-form').click(function() {
        $('.start-form').fadeOut();
    });

    $('.start-close').click(function() {
        $('.start-form').fadeOut();
    });

    $('.start-form').children().click(function(e) {
        e.stopPropagation();
    });
})
$('.withdraws-btn').click(function(e) {
    e.preventDefault();
    $('.withdraw-form').fadeIn();

    $('.withdraw-form').click(function() {
        $('.withdraw-form').fadeOut();
    });

    $('.start-close').click(function() {
        $('.withdraw-form').fadeOut();
    });

    $('.withdraw-form').children().click(function(e) {
        e.stopPropagation();
    });
})
$('.transaction-btn').click(function(e) {
    e.preventDefault();
    $('.payout-form').fadeIn();

    $('.payout-form').click(function() {
        $('.payout-form').fadeOut();
    });

    $('.start-close').click(function() {
        $('.payout-form').fadeOut();
    });

    $('.payout-form').children().click(function(e) {
        e.stopPropagation();
    });
})
//Если все хорошо
$('.modal-success').click(function() {
    $('.modal-success').fadeOut();
});

$('.modal-success__close').click(function() {
    $('.modal-success').fadeOut();
});

$('.modal-success').children().click(function(e) {
    e.stopPropagation();
});
//Если что-то пошло не так
$('.modal-fail').click(function() {
    $('modal-fail').fadeOut();
});

$('.modal-fail__close').click(function() {
    $('.modal-fail').fadeOut();
});

$('.modal-fail').children().click(function(e) {
    e.stopPropagation();
});

$('.object-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    }).done(function() {
        $('.login-form').fadeOut();

        $('.modal-success').fadeIn();
    }).fail(function() {
        $('.login-form').fadeOut();

        $('.modal-fail').fadeIn();
    });
});
$('.starting-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    }).done(function() {
        $('.start-form').fadeOut();

        $('.modal-success').fadeIn();
    }).fail(function() {
        $('.start-form').fadeOut();

        $('.modal-fail').fadeIn();
    });
});
$('.support-form__form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    })
    .done(function() {
        $('.modal-success').fadeIn();
    }).fail(function() {

        $('.modal-fail').fadeIn();
    });
});

$('.login-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    }).done(function() {
        $('.login-form').fadeOut();
        $('.modal-success').fadeIn();
        setTimeout(function(){
       let url = "log-in.html";
        $(location).attr('href',url);
    }, 2000);
        
    }).fail(function() {
        $('.login-form').fadeOut();

        $('.modal-fail').fadeIn();
    });
});



// Hamburger menu
$(function() {
    $('.menu-open').click(function() {
        $('.head__list').toggleClass('show-menu')
    })
    $('.hamb-close').click(function() {
        $('.head__list').removeClass('show-menu')
    })
    $('.menu-open').click(function() {
        $('.head__btn').addClass('mar')
    })
    $('.hamb-close').click(function() {
        $('.head__btn').removeClass('mar')
    })
});

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

