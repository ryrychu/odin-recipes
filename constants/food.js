// Define your recipe amounts in an object
const recipeAmounts = {
  mechado:   
  [
    [3, 'cloves garlic crushed'],
    [1, 'piece large onion sliced'],
    [2, 'lbs beef chuck cubed'],
    [8, 'ounces tomato sauce'],
    [1, 'cup water'],
    [3, 'tbsp cooking oil'],
    [1, 'slice lemon with rind'],
    [1, 'piece large potato sliced'],
    [1/4, 'cup soy sauce'],
    [1/2, 'tsp. ground black pepper'],
    [2, 'pieces bay leaves laurel'],
    ['', 'salt to taste']
  ],
  adobo:
  [
    [2, 'lbs. chicken cut into serving pieces'],
    [1, 'Knorr Chicken Cube'],
    [5, 'eggs medium size'],
    [1/4, 'cup soy sauce'],
    [1/4, 'cup vinegar'],
    [1, 'cup water'],
    [3, 'bay leaves'],
    [2, 'teaspoons whole peppercorn'],
    [8, 'cloves garlic crushed'],
    [1, 'teaspoon sugar'],
    [3, 'tablespoons cooking oil']
  ],
  bibingka: [
    [1, 'cup rice flour'],
    [1/8, 'teaspoon salt'],
    [2.5, 'teaspoons baking powder'],
    [3, 'tablespoons butter'],
    [1/2, 'cup granulated sugar'],
    [1, 'cup coconut milk'],
    [1/4, 'cup fresh milk'],
    [1, 'piece salted duck egg sliced'],
    [1/2, 'cup grated cheese'],
    [3, 'pieces raw eggs'],
    [1/4, 'cup grated coconut'],
    ['Pre-cut banana leaf']
  ],
  lumpia: [
    [50, 'pieces lumpia wrapper'],
    [3, 'cups cooking oil'],
    [1.5, 'lbs ground pork'],
    [2, 'pieces onion minced'],
    [2, 'pieces carrots minced'],
    [1.5, 'teaspoons garlic powder'],
    [0.5, 'teaspoon ground black pepper'],
    [0.5, 'cup parsley chopped'],
    [1.5, 'teaspoons salt'],
    [1, 'tablespoon sesame oil'],
    [2, 'eggs'],
  ]

};
const recipeInstruction = {
  mechado: [
    "Heat cooking oil in a pan then saute the garlic and onion.", 
    "Put-in the beef and saute for about 3 minutes or until color turns light brown",
    "Add the tomato sauce and water then simmer until the meat is tender.",
    "Add water as needed. Note this can take 60 to 120 minutes depending on the quality of the beef.", 
    "Add the soy sauce, ground black pepper, lemon rind, laurel leaves, and salt then simmer until excess liquid evaporates", 
    "Put-in the potatoes and cook until the potatoes are soft", "Place in a serving plate then serve hot with rice. Share and Enjoy!"],
  adobo:  [
      'Combine chicken, soy sauce, vinegar, and 5 cloves garlic. Mix well until all ingredients are well incorporated. Marinate for 30 minutes.',
      'Meanwhile, boil the eggs for 10 minutes. Let the eggs cool down afterwards and peel off the shell.',
      'Heat oil in a pan. Sauté the remaining garlic until it starts to turn brown.',
      'Add the marinated chicken (do not include the marinade yet). Cook for 3 minutes.',
      'Pour the remaining marinade into the pan and add water. Let boil.',
      'Add bay leaves, whole peppercorn, and Knorr Chicken Cube. Stir. Cover the pan and continue cooking using low to medium heat for 15 to 20 minutes.',
      'Add the sugar and put the eggs into the pan. Gently stir. Cook for 2 minutes.',
      'Transfer to a serving plate and serve along with a huge bowl of newly cooked rice.',
      'Share and enjoy!'
    ],
    bibingka: [
      'Preheat oven to 375 degrees Fahrenheit.',
      'Combine rice flour, baking powder, and salt then mix well. Set aside.',
      'Cream butter then gradually put-in sugar while whisking.',
      'Add the eggs then whisk until every ingredient is well incorporated.',
      'Gradually add the rice flour, salt, and baking powder mixture then continue mixing.',
      'Pour-in coconut milk and fresh milk then whisk some more for 1 to 2 minutes.',
      'Arrange the pre-cut banana leaf on a cake pan or baking pan.',
      'Pour the mixture on the pan.',
      'Bake for 15 minutes.',
      'Remove from the oven then top with sliced salted egg and grated cheese (do not turn the oven off).',
      'Put back in the oven and bake for 15 to 20 minutes or until the color of the top turns medium brown.',
      'Remove from the oven and let cool.',
      'Brush with butter and top with grated coconut.',
      'Serve. Share and enjoy!'
    ],
    lumpia: [
      'Combine all filling ingredients in a bowl. Mix well.',
      'Scoop around 1 to 1 1/2 tablespoons of filling and place over a piece of lumpia wrapper. Spread the filling and then fold both sides of the wrapper. Fold the bottom. Brush beaten egg mixture on the top end of the wrapper. Roll-up until completely wrapped. Perform the same step until all mixture is consumed.',
      'Heat oil in a cooking pot. Deep fry lumpia in medium heat until it floats.',
      'Remove from the pot. Let excess oil drip. Serve. Share and enjoy!'
    ]
}
// Get references to HTML elements
const recipeElement = document.getElementById('recipeList');
const instructionElement = document.getElementById('instructionList');
const buttonContainer = document.querySelector('.buttonContainer');
const numberOfPeople = document.createElement('p');
numberOfPeople.classList.add('numOfPeople');
const addButton = createButton('+');
const minusButton = createButton('-');


// Initialize increment
let increment = 1;

// Initial setup
updateDisplay();

// Event listeners
addButton.addEventListener('click', () => {
  increment++;
  updateDisplay();
});

minusButton.addEventListener('click', () => {
  if (increment > 1) {
    increment--;
    updateDisplay();
  }
});

// Function to create a button element
function createButton(text) {
  const button = document.createElement('button');
  button.classList.add('numberButton');
  button.textContent = text;
  return button;
}

// Function to update the display based on increment
function updateDisplay() {

  
  
  numberOfPeople.innerHTML = `Number of people <span>${increment}<span>`;
  minusButton.disabled = increment === 1;

  // Get the recipe amount for the current recipe title
  const recipeTitle = document.title.toLowerCase();
  const recipeAmount = recipeAmounts[recipeTitle] || [];
  const recipeStep = recipeInstruction[recipeTitle] || [];


  // Generate the list items
  const listItems = recipeAmount.map(([quantity, ingredient]) => {
    const quantityForPeople = quantity * increment;
    if (quantityForPeople === 0){
      return `<li>${ingredient}</li>`
    } else{
      return `<li>${quantityForPeople} ${ingredient}</li>`;
    }
    
  });

  const listSteps = recipeStep.map((steps) => {
    return `<li>${steps}</li>`
  });

  recipeElement.innerHTML = listItems.join('');
  instructionElement.innerHTML = listSteps.join('');
}

// Append elements to the buttonContainer
buttonContainer.appendChild(minusButton);
buttonContainer.appendChild(numberOfPeople);
buttonContainer.appendChild(addButton);

