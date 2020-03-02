var current = 0,
    slides = document.querySelectorAll('.bubble__slide');

setInterval(function() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('bubble__slide_active');
    }
    current = (current !== slides.length - 1) ? current + 1 : 0;
    slides[current].classList.add('bubble__slide_active');
}, 2000);

/*
Вообще, тут вариативность, кончно, огромная.
Мне показалось нецелесообразным подключать jquery и еще какую-то сторонюю библиотеку для такой маленькой задачи.
Из библиотек мне нравится uikit потому, что она на чистом js и там много всякого разного.
Когда я стану фронтенд-разработчиком к концу года, постараюсь вообще не использовать jquery.
Возьмите меня на работу, пожалуйста. Я буду очень стараться!
*/
