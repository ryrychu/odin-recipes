
const specialRecipes = [
    {
        imageSrc: "resources/BeefMechado.jpg",
        id: "Mechado",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice",
        link: "recipes/mechado.html",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    },
    {
        imageSrc: "resources/Adobo.jpg",
        id: "Adobo",
        duration: "45 minutes",
        origin: "Philippines",
        foodDesc: "The savory, umami combination of soy sauce, vinegar, and garlic breathes life into the classic dish we know as adobo",
        link: "recipes/adobo.html",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    },
    {
        imageSrc: "resources/Bibingka.jpg",
        id: "Bibingka",
        duration: "45 minutes",
        origin: "Philippines",
        foodDesc: "Bibingka is a type of rice cake native to the Philippines.",
        link: "recipes/Bibingka.html",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    },
    {
        imageSrc: "resources/Lumpia.jpg",
        id: "Lumpia",
        duration: "25 minutes",
        origin: "Philippines",
        foodDesc: "Lumpia or Lumpiang Shanghai is a type of Filipino egg roll.",
        link: "recipes/lumpia.html",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    }

];



const recipeContainer = document.getElementById("recipeContainer");

specialRecipes.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    recipeContainer.append(recipeCard);
});

function createRecipeCard(recipe){
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("specialRecipeCard");

    const recipeImageContainer = createImageContainer(recipe);
    const recipeButton = createButton(recipe);
    const recipeDetail = createRecipeDetail(recipe);
    const recipeDesc = createRecipeDesc(recipe);

    recipeCard.appendChild(recipeImageContainer);
    recipeCard.appendChild(recipeButton);
    recipeCard.appendChild(recipeDetail);
    recipeCard.appendChild(recipeDesc);

    return recipeCard;
}

function createImageContainer(recipe) {
    const recipeImageContainer = document.createElement("div");
    recipeImageContainer.classList.add("imageRecipe");

    const recipeImage = document.createElement("img");
    recipeImage.setAttribute("src", recipe.imageSrc);

    recipeImageContainer.appendChild(recipeImage);
    return recipeImageContainer;
}

function createButton(recipe) {
    const recipeButton = document.createElement("a");
    recipeButton.textContent = recipe.id;
    recipeButton.setAttribute("href", recipe.link);
    return recipeButton;
}

function createRecipeDetail(recipe) {
    const recipeDetail = document.createElement("div");
    recipeDetail.classList.add("specialRecipeText");

    const durationContainer = createRecipeDetailContainer(recipe, recipe.duration, recipe.durationLogo);
    const originContainer = createRecipeDetailContainer(recipe, recipe.origin, recipe.originLogo);

    recipeDetail.appendChild(durationContainer);
    recipeDetail.appendChild(originContainer);
    return recipeDetail;
}

function createRecipeDetailContainer(recipe, text, imageUrl) {
    const detailContainer = document.createElement("div");
    detailContainer.classList.add("detailContainer");

    const detailImage = document.createElement("img");
    detailImage.setAttribute("src", imageUrl);

    const detailText = document.createElement("p");
    detailText.textContent = text;

    detailContainer.appendChild(detailImage);
    detailContainer.appendChild(detailText);

    return detailContainer;
}

function createRecipeDesc (recipe){
    const recipeDesc = document.createElement("h4");
    recipeDesc.textContent = recipe.foodDesc;

    return recipeDesc;
}



