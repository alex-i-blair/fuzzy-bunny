

export function renderBunny(bunny) {
    const name = document.createElement('h4');
    name.textContent = bunny.name;
    name.classList.add('bunny');
    return name;
}
