document.addEventListener('DOMContentLoaded', function () {
    const imagenes = [
        {
            src: 'assets/img/destacado1.jpg',
            categoria: 'renacimiento',
            titulo: 'Napoleón Bonaparte',
            descripcion: 'Escena idealizada de Napoleón cruzando los Alpes.',
            autor: 'Jacques Louis David'
        },
        {
            src: 'assets/img/destacado2.jpg',
            categoria: 'antiguedad',
            titulo: 'Aníbal Barca',
            descripcion: 'Busto de Aníbal Barca, general cartaginés.',
            autor: 'Desconocido'
        },
        {
            src: 'assets/img/destacado3.jpg',
            categoria: 'antiguedad',
            titulo: 'Julio César',
            descripcion: 'Rendición de Vercingétorix ante Julio César.',
            autor: 'Lionel Roger'
        }
    ];

    const galeria = document.getElementById('galeria');
    if (galeria) {
        imagenes.forEach(imagen => {
            const col = document.createElement('div');
            col.classList.add('col-md-4', 'mb-4');
            col.setAttribute('data-categoria', imagen.categoria);

            col.innerHTML = `
                <div class="card">
                    <img src="${imagen.src}" class="card-img-top" alt="${imagen.titulo}" height="200">
                    <div class="card-body">
                        <h5 class="card-title">${imagen.titulo}</h5>
                        <p class="card-text">${imagen.descripcion}</p>
                        <p><strong>Autor:</strong> ${imagen.autor}</p>
                    </div>
                </div>
            `;

            galeria.appendChild(col);
        });

        const filtro = document.getElementById('filtroCategoria');
        if (filtro) {
            filtro.addEventListener('change', function () {
                const categoriaSeleccionada = this.value;

                document.querySelectorAll('#galeria > div').forEach(card => {
                    const categoria = card.getAttribute('data-categoria');

                    if (categoriaSeleccionada === 'all' || categoria === categoriaSeleccionada) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }

    const formulario = document.getElementById('formContacto');
    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, introduce un correo electrónico válido.');
                return;
            }

            alert('¡Formulario enviado correctamente!');
            formulario.reset();
        });
    }
});
