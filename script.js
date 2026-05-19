// Intercasa - interacciones del cliente

document.addEventListener('DOMContentLoaded', function () {
    // Sync del texto del dropdown al elegir opción
    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.addEventListener('click', function (e) {
            if (e.target.classList.contains('dropdown-item')) {
                e.preventDefault();
                var btn = menu.parentElement.querySelector('button.dropdown-toggle');
                if (btn) {
                    btn.firstChild.nodeValue = e.target.textContent + ' ';
                }
            }
        });
    });

    // Rotación del carrusel de frases del hero
    var frases = document.querySelectorAll('.carousel-frase');
    if (frases.length === 3) {
        var positions = ['top', 'mid', 'bot'];
        var idx = 0;
        setInterval(function () {
            idx = (idx + 1) % 3;
            frases.forEach(function (el, i) {
                el.classList.remove('top', 'mid', 'bot');
                el.classList.add(positions[(i - idx + 3) % 3]);
            });
        }, 3500);
    }

    // Submit del formulario de contacto (demo)
    var form = document.querySelector('#form-contacto');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            var original = btn.textContent;
            btn.textContent = 'Mensaje enviado';
            btn.disabled = true;
            setTimeout(function () {
                btn.textContent = original;
                btn.disabled = false;
                form.reset();
            }, 2200);
        });
    }
});
