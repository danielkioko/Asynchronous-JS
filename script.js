const second = () => {
    setTimeout(() => {
        console.log('Async Hey There!');
    }, 2000);
}

const first = () => {
    console.log('Hey there!');
    second();
    console.log('The End');
}

//first();

// function getRecipe() {

//     setTimeout(() => {
//         const recipeID = [637, 832, 838, 389, 922];
//         console.log(recipeID);

//         setTimeout(id => {
//             const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//             console.log(`${id}: ${recipe.title}`);

//             setTimeout(() => {
//                 const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
//                 console.log(recipe);
//             }, 1500, recipe.publisher);

//         }, 1500, recipeID[2]);

//     }, 1500);
// }

//getRecipe();

//PROMISE 
/**
 * Keeps track on certain events, checking if they happened or not
 * Determines what happens when the events occur
 * Implements the concept of a future value that we are expecting
 */

 const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([637, 832, 838, 389, 922]);
    }, 1500);
 });

const getRecipe = recID => {
    return new Promise((resolve, reject) => {

        setTimeout(ID => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);

    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', 
        publisher: 'James'};
        resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

 getIDs
 .then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
 })

 .then(recipe => {
    console.log(recipe);
    return getRelated("Jonas");
 })

 .then(recipe => {
     console.log(recipe);
 })

 .catch(error => {
    console.log('Error!');
 });
 
 function runCode() {
    
    var a = 2437;
    var b = 875;

    var x = a;
    var y = b;


    if (x > y) {
        x = x - y;
    } else if (x < y ) {
        y = y - x;
    } else if (x == y) {
        console.log("RESULTS ARE: x = " + x + "  & y = " + y);
    }

 }

 runCode();