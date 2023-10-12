
const specialRecipes = [
    {
        imageSrc: "resources/BeefMechado.jpg",
        id: "Mechado",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice",
        link: "youtube.com",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    },
    {
        imageSrc: "resources/BeefMechado.webp",
        id: "Adobo",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice",
        link: "youtube.com",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    },
    {
        imageSrc: "resources/BeefMechado.webp",
        id: "Adobo",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice",
        link: "youtube.com",
        durationLogo: "resources/timer.svg",
        originLogo: "resources/phflag.svg",
    },
    {
        imageSrc: "resources/BeefMechado.webp",
        id: "Adobo",
        duration: "50 minutes",
        origin: "Philippines",
        foodDesc: "Beef Mechado is a delicious tomato-based stew that pairs perfectly with a warm cup of rice",
        link: "youtube.com",
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

/*specialRecipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("specialRecipeCard");

    const recipeImageContainer = document.createElement("div");
    recipeImageContainer.classList.add("imageRecipe");

    const recipeImage = document.createElement("img");
    recipeImage.setAttribute("src", recipe.imageSrc);

    const recipeButton = document.createElement("a");
    recipeButton.textContent = recipe.id;
    recipeButton.setAttribute("href", recipe.link);

    const recipeDetail = document.createElement("div");
    recipeDetail.classList.add("specialRecipeText");

    const durationContainer = document.createElement("div");
    durationContainer.classList.add("durationContainer");

    const recipeDuration = document.createElement("p");
    recipeDuration.textContent = recipe.duration;

    const durationLogo = document.createElement("img");
    durationLogo.setAttribute("href", recipe.durationLogo);
    
    const originContainer = document.createElement("div");
    durationContainer.classList.add("originContainer");

    const originLogo = document.createElement("img");
    durationLogo.setAttribute("href", recipe.originLogo);

    const recipeOrigin = document.createElement("p");
    recipeOrigin.textContent = recipe.origin;

    const recipeDesc = document.createElement("h4");
    recipeDesc.textContent = recipe.foodDesc;


});*/


