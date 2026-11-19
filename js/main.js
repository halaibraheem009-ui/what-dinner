
var recipes = [{
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        imgCover: "../img/uploads/Creamy Spaghetti Carbonara.jpg",
        prepTime: "15 min",
         cookTime: "20 min",
          totalTime: 35, 
          servings: "4 people",
        difficulty: "Easy",
         category: "Italian",
          ratingsAverage: 4.8, 
          ratingsQuantity: 234,
        ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
        instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.", "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.", "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.", "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"],
        nutrition: { 
            calories: "520 kcal",
             protein: "28g",
              carbs: "62g", 
              fat: "18g", 
              fiber: "3g", 
              sodium: "680mg" 
            },
        tips: ["Use room temperature eggs for a smoother sauce consistency", "Work quickly when mixing eggs with hot pasta to avoid scrambling", "Reserve extra pasta water - it's the secret to perfect creaminess", "Freshly grated cheese makes all the difference in flavor", "Never add cream - authentic carbonara is made with eggs only"]
    }, {
        name: "Honey Garlic Salmon",
        description: "Pan-seared salmon with a sweet and savory glaze",
        imgCover: "../img/uploads/Honey Garlic Salmon.jpg",
        prepTime: "10 min", 
        cookTime: "15 min", 
        totalTime: 25, 
        servings: "2 people",
        difficulty: "Easy", 
        category: "Seafood", 
        ratingsAverage: 4.9, 
        ratingsQuantity: 187,
        ingredients: ["2 salmon fillets (6oz each)", "3 tablespoons honey", "2 tablespoons soy sauce", "4 cloves garlic, minced", "1 tablespoon olive oil", "1 teaspoon fresh ginger, grated", "Sesame seeds for garnish", "Green onions, sliced"],
        instructions: ["Pat salmon fillets dry with paper towels. Season with salt and pepper.", "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.", "Heat olive oil in a large skillet over medium-high heat.", "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.", "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.", "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."],
        nutrition: { calories: "380 kcal", 
            protein: "35g", 
            carbs: "28g", 
            fat: "14g", 
            fiber: "0g", 
            sodium: "720mg"
         },
        tips: ["Don't overcook salmon - it should be slightly pink in the center", "Use wild-caught salmon for best flavor and nutrition", "Let the sauce caramelize slightly for deeper flavor", "Pair with steamed broccoli or asparagus for a complete meal"]
    }, {
        name: "Thai Green Curry",
        description: "Vibrant and aromatic curry with vegetables and coconut milk",
        imgCover: "../img/uploads/Thai Green Curry.jpg",
        prepTime: "15 min", 
        cookTime: "25 min", 
        totalTime: 40, 
        servings: "4 people",
        difficulty: "Intermediate", 
        category: "Asian", 
        ratingsAverage: 4.7, 
        ratingsQuantity: 312,
        ingredients: ["2 tablespoons green curry paste", "400ml coconut milk", "300g chicken breast, sliced", "1 red bell pepper, sliced", "100g green beans", "1 eggplant, cubed", "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Fresh Thai basil leaves"],
        instructions: ["Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.", "Add half the coconut milk and stir to combine with the curry paste.", "Add sliced chicken and cook until no longer pink, about 5 minutes.", "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.", "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.", "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."],
        nutrition: { calories: "420 kcal", 
            protein: "26g", 
            carbs: "22g", 
            fat: "26g", 
            fiber: "5g", 
            sodium: "890mg" 
        },
        tips: ["Adjust spice level by using more or less curry paste", "Add vegetables in stages based on cooking time needed", "Fresh Thai basil is essential for authentic flavor", "Use full-fat coconut milk for richest, creamiest sauce"]
    }, {
        name: "Classic Beef Burger",
        description: "Juicy homemade burger with all the fixings",
        imgCover: "../img/uploads/Classic Beef Burger.jpg",
        prepTime: "15 min", 
        cookTime: "20 min", 
        totalTime: 35, 
        servings: "4 people",
        difficulty: "Easy", 
        category: "American", 
        ratingsAverage: 4.6, 
        ratingsQuantity: 421,
        ingredients: ["500g ground beef (80/20)", "4 burger buns", "4 slices cheddar cheese", "Lettuce leaves", "Tomato slices", "Red onion, sliced", "Pickles", "Burger sauce or condiments"],
        instructions: ["Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.", "Season patties generously with salt and pepper on both sides.", "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.", "Add cheese slices in the last minute of cooking and cover to melt.", "Toast burger buns lightly on the grill or in a pan.", "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."],
        nutrition: { calories: "650 kcal", 
            protein: "38g", 
            carbs: "42g", 
            fat: "35g", 
            fiber: "2g", 
            sodium: "920mg" 
        },
        tips: ["Don't press down on burgers while cooking - keeps them juicy", "Make indent in center to prevent burger from puffing up", "Let patties rest for 2-3 minutes before serving", "Toast buns for better texture and flavor"]
    }, {
        name: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        imgCover: "../img/uploads/Caesar Salad.jpg",
        prepTime: "15 min", 
        cookTime: "0 min", 
        totalTime: 15, 
        servings: "2 people",
        difficulty: "Easy", 
        category: "Mediterranean", 
        ratingsAverage: 4.4, 
        ratingsQuantity: 198,
        ingredients: ["1 large romaine lettuce", "1/2 cup Caesar dressing", "1/2 cup parmesan cheese, shaved", "1 cup croutons", "2 anchovy fillets (optional)", "Lemon wedges", "Black pepper"],
        instructions: ["Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.", "Place lettuce in a large salad bowl.", "Add Caesar dressing and toss until evenly coated.", "Add croutons and half the parmesan cheese. Toss gently.", "Top with remaining parmesan shavings and anchovies if using.", "Serve immediately with lemon wedges and fresh black pepper."],
        nutrition: { calories: "320 kcal", 
            protein: "12g", 
            carbs: "18g", 
            fat: "22g", 
            fiber: "3g", 
            sodium: "680mg" 
        },
        tips: ["Use cold, crisp lettuce for best texture", "Make homemade croutons for better flavor", "Add grilled chicken for a complete meal", "Don't dress salad until ready to serve"]
    },
    {
        name: "Vegetable Curry",
        description: "Hearty vegetarian curry with coconut milk",
        imgCover: "../img/uploads/Vegetable Curry.jpg",
        prepTime: "20 min",
        cookTime: "30 min",
        totalTime: 50,
        servings: "4 people",
        difficulty: "Easy",
        category: "Asian",
        ratingsAverage: 4.6,
        ratingsQuantity: 289,
        ingredients: ["2 potatoes, cubed", "1 cauliflower, florets", "2 carrots, sliced", "1 can chickpeas", "400ml coconut milk", "3 tablespoons curry powder", "1 onion, diced", "3 cloves garlic, minced", "Fresh spinach"],
        instructions: ["Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.", "Add potatoes and carrots, cook for 5 minutes.", "Pour in coconut milk and 1 cup water. Bring to simmer.", "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.", "Stir in fresh spinach and cook until wilted.", "Serve hot over basmati rice or with naan bread."],
        nutrition: {
            calories: "380 kcal",
            protein: "14g",
            carbs: "48g",
            fat: "16g",
            fiber: "12g",
            sodium: "480mg"
        },
        tips: ["Add vegetables in order of cooking time needed", "Adjust curry powder amount to taste", "Use full-fat coconut milk for creamier curry", "Add protein like tofu or paneer if desired"]
    },
    {
        name: "Shrimp Scampi",
        description: "Garlicky shrimp in white wine butter sauce",
        imgCover: "../img/uploads/Shrimp Scampi.jpg",
        prepTime: "10 min",
        cookTime: "15 min",
        totalTime: 25,
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        ratingsAverage: 4.8,
        ratingsQuantity: 356,
        ingredients: ["400g large shrimp, peeled", "300g linguine pasta", "6 cloves garlic, minced", "1/2 cup white wine", "4 tablespoons butter", "2 tablespoons olive oil", "Fresh parsley, chopped", "Lemon juice and zest", "Red pepper flakes"],
        instructions: ["Cook linguine according to package directions. Reserve 1 cup pasta water.", "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.", "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.", "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.", "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.", "Garnish with parsley, lemon zest, and serve immediately."],
        nutrition: {
            calories: "520 kcal",
            protein: "36g",
            carbs: "54g",
            fat: "18g",
            fiber: "3g",
            sodium: "620mg"
        },
        tips: ["Don't overcook shrimp - they cook very quickly", "Use good quality white wine for best flavor", "Toss pasta in sauce for maximum flavor absorption", "Add extra lemon for bright, fresh taste"]
    }, {
        name: "Lasagna Bolognese",
        description: "Layered Italian pasta with rich meat sauce and béchamel",
        imgCover: "../img/uploads/Lasagna Bolognese.jpg",
        prepTime: "30 min",
        cookTime: "90 min",
        totalTime: 120,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Italian",
        ratingsAverage: 4.9,
        ratingsQuantity: 478,
        ingredients: ["12 lasagna sheets", "500g ground beef", "400g canned tomatoes", "1 onion, diced", "2 carrots, diced", "500ml béchamel sauce", "200g mozzarella, grated", "100g parmesan cheese", "Fresh basil"],
        instructions: ["Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.", "Cook lasagna sheets according to package directions. Drain and set aside.", "Preheat oven to 180°C (350°F).", "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.", "Top final layer with béchamel, mozzarella, and parmesan cheese.", "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."],
        nutrition: {
            calories: "680 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "28g",
            fiber: "6g",
            sodium: "920mg"
        },
        tips: ["Make bolognese sauce a day ahead for better flavor", "Don't skip the resting time after baking", "Use fresh pasta sheets for best texture", "Freeze leftovers in individual portions"]
    },{
        name: "French Onion Soup",
        description: "Rich beef broth with caramelized onions and melted cheese",
        imgCover: "../img/uploads/French Onion Soup.jpg",
        prepTime: "15 min",
        cookTime: "60 min",
        totalTime: 75,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Mediterranean",
        ratingsAverage: 4.7,
        ratingsQuantity: 267,
        ingredients: ["4 large onions, thinly sliced", "4 tablespoons butter", "1 liter beef broth", "1/2 cup white wine", "2 bay leaves", "Fresh thyme", "Baguette slices", "200g Gruyère cheese, grated"],
        instructions: ["Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.", "Add white wine and deglaze the pot, scraping up brown bits.", "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.", "Meanwhile, toast baguette slices until golden.", "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.", "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."],
        nutrition: {
            calories: "380 kcal",
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg"
        },
        tips: ["Patience is key - don't rush the onion caramelization", "Use good quality beef broth for best flavor", "Gruyère can be substituted with Swiss cheese", "Watch carefully when broiling to avoid burning"]
    }, {
        name: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "mediterranean quinoa bowl with vegetables and tahini, healthy food, colorful presentation",
        imgCover: "../img/uploads/Mediterranean Quinoa Bowl.jpg",
        prepTime: "20 min",
        cookTime: "35 min",
        totalTime: 55,
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        ratingsAverage: 4.5,
        ratingsQuantity: 156,
        ingredients: ["1 cup quinoa", "Cherry tomatoes, halved", "Cucumber, diced", "Red onion, sliced", "Kalamata olives", "Feta cheese, crumbled", "Fresh parsley", "Tahini dressing"],
        instructions: ["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.", "While quinoa cooks, prepare all vegetables and set aside.", "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.", "Fluff cooked quinoa with a fork and let cool slightly.", "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.", "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."],
        nutrition: {
            calories: "480 kcal",
            protein: "18g",
            carbs: "58g",
            fat: "20g",
            fiber: "10g",
            sodium: "540mg"
        },
        tips: ["Rinse quinoa well to remove bitter coating", "Let quinoa cool before adding fresh ingredients", "Make extra tahini dressing - it keeps well in the fridge", "Add grilled chicken or chickpeas for extra protein"]
    } 

];


var currentIndex = -1;


var nutritionIcons = {
  calories: "fa-fire text-danger",
  protein: "fa-dumbbell text-primary",
  carbs: "fa-wheat-awn text-warning",
  fat: "fa-droplet text-danger",
  fiber: "fa-seedling text-success",
  sodium: "fa-cube text-secondary"
};

function pickRecipe() {
  var index = Math.floor(Math.random() * recipes.length);
  while (index === currentIndex && recipes.length > 1) {
    index = Math.floor(Math.random() * recipes.length);
  }
  currentIndex = index;
  var r = recipes[index];

  document.getElementById("cover").src = r.imgCover;
  document.getElementById("rating").innerHTML = r.ratingsAverage + " (" + r.ratingsQuantity + " reviews)";
  document.getElementById("prep").innerHTML = r.prepTime;
  document.getElementById("cook").innerHTML = r.cookTime;
  document.getElementById("servings").innerHTML = r.servings;
  document.getElementById("difficulty").innerHTML = r.difficulty;
  document.getElementById("category").innerHTML = r.category;
  document.getElementById("title").innerHTML = r.name;
  document.getElementById("description").innerHTML = r.description;


  if (r.totalTime > 45) {
    document.getElementById("warning").classList.remove("d-none");
  } else {
    document.getElementById("warning").classList.add("d-none");
  }

  var ingredientsHTML = '<ul class="item-list">';
  for (var i = 0; i < r.ingredients.length; i++) {
    ingredientsHTML += '<li><span class="num">' + (i + 1) + "</span><span>" + r.ingredients[i] + "</span></li>";
  }
  ingredientsHTML += "</ul>";
  document.getElementById("pane-ingredients").innerHTML = ingredientsHTML;

  var instructionsHTML = '<ul class="item-list">';
  for (var i = 0; i < r.instructions.length; i++) {
    instructionsHTML += '<li><span class="num">' + (i + 1) + "</span><span>" + r.instructions[i] + "</span></li>";
  }
  instructionsHTML += "</ul>";
  document.getElementById("pane-instructions").innerHTML = instructionsHTML;


  var keys = Object.keys(r.nutrition);
 var nutritionHTML = '<div class="row g-2">';
  for (var i = 0; i < keys.length; i++) {
    nutritionHTML +=
      '<div class="col-md-6"><div class="nutri-item">' +
      '<span><i class="fa-solid ' + nutritionIcons[keys[i]] + ' me-2"></i>' + keys[i] + "</span>" +
      "<strong>" + r.nutrition[keys[i]] + "</strong></div></div>";
  }
  nutritionHTML += "</div>";
  document.getElementById("pane-nutrition").innerHTML = nutritionHTML;


  var tipsHTML = "";
  for (var i = 0; i < r.tips.length; i++) {
    tipsHTML += '<div class="tip"><i class="fa-solid fa-circle-check text-warning me-2"></i>' + r.tips[i] + "</div>";
  }
  document.getElementById("pane-tips").innerHTML = tipsHTML;

}


pickRecipe();