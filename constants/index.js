
const specialRecipes = [
    {
        imageSrc: "resources/BeefMechado.jpg",
        id: "Mechado",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice"
    },
    {
        imageSrc: "resources/BeefMechado.webp",
        id: "Adobo",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice"
    }

];


const recipeContainer = document.getElementById("recipeContainer");

specialRecipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("specialRecipeCard");

    const recipeImageContainer = document.createElement("div");
    recipeImageContainer.classList.add("imageRecipe");

    const recipeImage = document.createElement("img");
    recipeImage.setAttribute("src", recipe.imageSrc);

    const recipeButton = document.createElement("a");
    recipeButton.textContent = recipe.id;
    recipeButton.setAttribute = ("href", "");

    const recipeDetail = document.createElement("div");
    recipeDetail.classList.add("specialRecipeText");



    recipeCard.appendChild(recipeImageContainer);
    recipeCard.appendChild(recipeButton);
    recipeImageContainer.appendChild(recipeImage);


    recipeContainer.appendChild(recipeCard);
    console.log(recipeImage);
});


