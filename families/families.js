import { 
    checkAuth, 
    deleteBunny, 
    getFamilies, 
    logout,
} from '../fetch-utils.js';
import { renderBunny } from './render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();
    // clear out the familiesEl
    familiesEl.textContent = '';

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
        console.log(nameP);
        familyDiv.append(nameP, bunnyDiv);
        // for each of this family's bunnies
        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = renderBunny(bunny);
            bunnyEl.addEventListener('click', async()=> {
                await deleteBunny(bunny.id);
                displayFamilies();
            
            });
            bunnyEl.textContent = bunny.name;
            bunnyDiv.append(bunnyEl);
        
        // make an element with the css class 'bunny', and put the bunny's name in the text content
        
        // add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        
        
        // append this bunnyEl to the bunniesEl
            familyDiv.append(bunnyEl);
        }
        familiesEl.append(familyDiv);
    // append the bunniesEl and nameEl to the familyEl

    // append the familyEl to the familiesEl
    }
}

window.addEventListener('load', async() => {

    await displayFamilies();
});