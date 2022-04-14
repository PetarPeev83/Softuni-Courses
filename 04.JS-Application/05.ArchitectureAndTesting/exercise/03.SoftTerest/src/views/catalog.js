import { getAllIdeas } from '../api/data.js';
import { e } from '../dom.js';

const section = document.getElementById('dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);
let context = null;

export async function showCatalogPage(contextTarget) {
    context = contextTarget;
    context.showSection(section);
    loadIdeas();
};

async function loadIdeas() {
    const ideas = await getAllIdeas();

    if (ideas.length == 0) {
        section.replaceChildren(e('h1', {}, ' No ideas yet! Be the first one :)'));
    } else {
        const fragment = document.createDocumentFragment();

        ideas.map(createIdeaCard).forEach(x => fragment.appendChild(x));

        section.replaceChildren(fragment);
    };
};

function createIdeaCard(idea) {
    const element = e('div', { className: "card overflow-hidden current-card details" });
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `<div class="card-body">
<p class="card-text">${idea.title}</p>
</div>
<img class="card-image" src="${idea.img}" alt="Card image cap">
<a data-id="${idea._id}" class="btn" href="">Details</a>`;

    return element;

    /*
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
                    <div class="card-body">
                        <p class="card-text">Dinner Recipe</p>
                    </div>
                    <img class="card-image" src="./images/dinner.jpg" alt="Card image cap">
                    <a class="btn" href="">Details</a>
                </div>
    */
};

function onDetails(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        const id = event.target.dataset.id;
        context.goTo('details', id);
    };
};