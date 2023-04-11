// настройка Barba.js
barba.init({
    transitions: [{
        name: 'fade-in',
        async leave(data) {
            const done = this.async();

            // анимация выхода страницы
            gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.5,
                onComplete: done
            });
        },
        async enter(data) {
            // анимация входа страницы
            gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.5
            });
        }
    }]
});
