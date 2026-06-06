document.addEventListener('DOMContentLoaded', async () => {

    const container = document.querySelector('.contents');

    try {

        const response = await fetch('./data/data.json');

        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }

        const projetos = await response.json();

        container.innerHTML = '';

        projetos.forEach(projeto => {

            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" class="btn" target="_blank">
                    Acessar
                </a>
            `;

            container.appendChild(card);

        });

    } catch (erro) {

        console.error(erro);

        container.innerHTML = `
            <p>Não foi possível carregar os projetos.</p>
        `;

    }

});