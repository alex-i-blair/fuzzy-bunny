
export function renderBunny(family) {
    const bunnyEl = document.createElement('p');
    for (let bunny of family.fuzzy_bunnies) {
        bunnyEl.classList.add('bunny');
        bunnyEl.textContent = bunny.name;
        
    }
    return bunnyEl;
}