import { deleteBunny, displayFamilies } from '../fetch-utils.js';

export function renderBunny(families) {
    for (let family of families) {
        // create three elements for each family, one for the whole family, one to hold the name, and one to hold the bunnies
        const familyDiv = document.createElement('div');
        const nameP = document.createElement('p');
        const bunnyDiv = document.createElement('div');

        // add the bunnies css class to the bunnies el, and family css class to the family el
        bunnyDiv.classList.add('bunnies');
        familyDiv.classList.add('family');

        // put the family name in the name element
        nameP.textContent = family.name;
        familyDiv.append(nameP, bunnyDiv);
        // for each of this family's bunnies
        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = document.createElement('p');
            bunnyEl.classList.add('bunny');
            bunnyEl.textContent = bunny.name;
            bunnyEl.addEventListener('click', async() => {
                await deleteBunny(bunny.id);
                displayFamilies();
            });

            bunnyDiv.append(bunnyEl);


        }

        // make an element with the css class 'bunny', and put the bunny's name in the text content
        // add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        // append this bunnyEl to the bunniesEl
        return familyDiv;
    }
}