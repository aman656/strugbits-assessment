import React, { useState, useEffect } from "react";
import "./App.css";
import pizzaBackground from "./pizza.jpg";
import { Dialog, DialogTitle, DialogActions, Button, Box } from "@mui/material";

const App = () => {
  const [tabName, setTabName] = useState("All")
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState("week1");
  const [selectedRecipe,setSelectedRecipe] = useState(null)
  const handleClose = () => setOpen(false);
  const [week1recipes, setWeek1Recipes] = useState([{
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
      "Pizza",
      "Italian"
    ],
    "userId": 166,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 98,
    "mealType": [
      "Dinner"
    ]
  }, {
    "id": 2,
    "name": "Vegetarian Stir-Fry",
    "ingredients": [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving"
    ],
    "instructions": [
      "In a wok, heat sesame oil over medium-high heat.",
      "Add minced ginger and garlic, sauté until fragrant.",
      "Add cubed tofu and stir-fry until golden brown.",
      "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
      "Pour soy sauce over the stir-fry and toss to combine.",
      "Serve over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Medium",
    "cuisine": "Asian",
    "caloriesPerServing": 250,
    "tags": [
      "Vegetarian",
      "Stir-fry",
      "Asian"
    ],
    "userId": 143,
    "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    "rating": 4.7,
    "reviewCount": 26,
    "mealType": [
      "Lunch"
    ]
  }]);
  const [week2recipes, setWeek2Recipes] = useState([{
    "id": 3,
    "name": "Chocolate Chip Cookies",
    "ingredients": [
      "All-purpose flour",
      "Butter, softened",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Baking soda",
      "Salt",
      "Chocolate chips"
    ],
    "instructions": [
      "Preheat the oven to 350°F (175°C).",
      "In a bowl, cream together softened butter, brown sugar, and white sugar.",
      "Beat in eggs one at a time, then stir in vanilla extract.",
      "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 10-12 minutes or until edges are golden brown.",
      "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 24,
    "difficulty": "Easy",
    "cuisine": "American",
    "caloriesPerServing": 150,
    "tags": [
      "Cookies",
      "Dessert",
      "Baking"
    ],
    "userId": 34,
    "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
    "rating": 4.9,
    "reviewCount": 13,
    "mealType": [
      "Snack",
      "Dessert"
    ]
  }, {
    "id": 4,
    "name": "Chicken Alfredo Pasta",
    "ingredients": [
      "Fettuccine pasta",
      "Chicken breast, sliced",
      "Heavy cream",
      "Parmesan cheese, grated",
      "Garlic, minced",
      "Butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    "instructions": [
      "Cook fettuccine pasta according to package instructions.",
      "In a pan, sauté sliced chicken in butter until fully cooked.",
      "Add minced garlic and cook until fragrant.",
      "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
      "Season with salt and pepper to taste.",
      "Combine the Alfredo sauce with cooked pasta.",
      "Garnish with fresh parsley before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Italian",
    "caloriesPerServing": 500,
    "tags": [
      "Pasta",
      "Chicken"
    ],
    "userId": 136,
    "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
    "rating": 4.9,
    "reviewCount": 82,
    "mealType": [
      "Lunch",
      "Dinner"
    ]
  }]);
  const [week3recipes, setWeek3Recipes] = useState([{
    "id": 5,
    "name": "Mango Salsa Chicken",
    "ingredients": [
      "Chicken thighs",
      "Mango, diced",
      "Red onion, finely chopped",
      "Cilantro, chopped",
      "Lime juice",
      "Jalapeño, minced",
      "Salt and pepper to taste",
      "Cooked rice for serving"
    ],
    "instructions": [
      "Season chicken thighs with salt and pepper.",
      "Grill or bake chicken until fully cooked.",
      "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
      "Dice the cooked chicken and mix it with the mango salsa.",
      "Serve over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "cuisine": "Mexican",
    "caloriesPerServing": 380,
    "tags": [
      "Chicken",
      "Salsa"
    ],
    "userId": 26,
    "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
    "rating": 4.9,
    "reviewCount": 63,
    "mealType": [
      "Dinner"
    ]
  }, {
    "id": 6,
    "name": "Quinoa Salad with Avocado",
    "ingredients": [
      "Quinoa, cooked",
      "Avocado, diced",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red bell pepper, diced",
      "Feta cheese, crumbled",
      "Lemon vinaigrette dressing",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
      "Drizzle with lemon vinaigrette dressing and toss to combine.",
      "Season with salt and pepper to taste.",
      "Chill in the refrigerator before serving."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Mediterranean",
    "caloriesPerServing": 280,
    "tags": [
      "Salad",
      "Quinoa"
    ],
    "userId": 197,
    "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
    "rating": 4.4,
    "reviewCount": 59,
    "mealType": [
      "Lunch",
      "Side Dish"
    ]
  }]);
  const [week4recipes, setWeek4Recipes] = useState([{
    "id": 7,
    "name": "Tomato Basil Bruschetta",
    "ingredients": [
      "Baguette, sliced",
      "Tomatoes, diced",
      "Fresh basil, chopped",
      "Garlic cloves, minced",
      "Balsamic glaze",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 375°F (190°C).",
      "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
      "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
      "Season with salt and pepper to taste.",
      "Top each toasted baguette slice with the tomato-basil mixture.",
      "Drizzle with balsamic glaze before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 6,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 120,
    "tags": [
      "Bruschetta",
      "Italian"
    ],
    "userId": 137,
    "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
    "rating": 4.7,
    "reviewCount": 95,
    "mealType": [
      "Appetizer"
    ]
  }, {
    "id": 9,
    "name": "Caprese Salad",
    "ingredients": [
      "Tomatoes, sliced",
      "Fresh mozzarella cheese, sliced",
      "Fresh basil leaves",
      "Balsamic glaze",
      "Extra virgin olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.",
      "Tuck fresh basil leaves between the slices.",
      "Drizzle with balsamic glaze and extra virgin olive oil.",
      "Season with salt and pepper to taste.",
      "Serve immediately as a refreshing salad."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 200,
    "tags": [
      "Salad",
      "Caprese"
    ],
    "userId": 128,
    "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
    "rating": 4.6,
    "reviewCount": 82,
    "mealType": [
      "Lunch"
    ]
  }]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);
  const handleDelete = (id, week) => {
    if (tabName == "week1") {
      setWeek1Recipes(week1recipes.filter(meal => meal.id !== id))
    } else if (tabName == "week2") {
      setWeek2Recipes(week2recipes.filter(meal => meal.id !== id))
    }
    else if (tabName == "week3") {
      setWeek3Recipes(week3recipes.filter(meal => meal.id !== id))
    } else {
      setWeek4Recipes(week4recipes.filter(meal => meal.id !== id))
    }
  };
  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
  };
  const handleSave = () => {
    if(selectedWeek=="Week 1"){
      setWeek1Recipes((prev) => {
        const alreadyExists = prev.some((recipe) => recipe.id === selectedRecipe.id);
        if (!alreadyExists) {
          return [...prev, selectedRecipe];
        }
        return prev;
      });
    }
    else if(selectedWeek=="Week 2"){
      setWeek2Recipes((prev) => {
        const alreadyExists = prev.some((recipe) => recipe.id === selectedRecipe.id);
        if (!alreadyExists) {
          return [...prev, selectedRecipe];
        }
        return prev;
      });
    }
    else if(selectedWeek=="Week 3"){
      setWeek3Recipes((prev) => {
        const alreadyExists = prev.some((recipe) => recipe.id === selectedRecipe.id);
        if (!alreadyExists) {
          return [...prev, selectedRecipe];
        }
        return prev;
      });
    }else{
      setWeek4Recipes((prev) => {
        const alreadyExists = prev.some((recipe) => recipe.id === selectedRecipe.id);
        if (!alreadyExists) {
          return [...prev, selectedRecipe];
        }
        return prev;
      });
    }
    setTabName(selectedWeek =="Week 1" ? "week1" : selectedWeek =="Week 2" ? "week2" : selectedWeek =="Week 3" ? "week3" : "week4")
    setSelectedWeek(null)
    handleClose();
  };
  console.log(recipes)
  return (
    <div className="app">
      {/* Background Section */}
      <div
        className="background"
        style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiARxgOHTm3lAFer_NMdDplGhtt3uYYwIUYg&s"})`, }}
      >
        <div className="overlay">
          <h1 className="main-heading">Optimized Your Meal</h1>
          <p className="subheading">
            Select Meal to Add in Week. You will be able to edit, modify and
            change the Meal Weeks.
          </p>
        </div>
      </div>
      {/* <div className="week-top"> */}
      <h2 >Week Orders</h2>
      <div className="tabs">
            <span className={tabName == "All" ? "tab active" : "tab"} onClick={() => setTabName("All")}>All Meals</span>
            <span className={tabName == "week1" ? "tab active" : "tab"} onClick={() => setTabName("week1")}>Week 1</span>
            <span className={tabName == "week2" ? "tab active" : "tab"} onClick={() => setTabName("week2")}>Week 2</span>
            <span className={tabName == "week3" ? "tab active" : "tab"} onClick={() => setTabName("week3")}>Week 3</span>
            <span className={tabName == "week4" ? "tab active" : "tab"} onClick={() => setTabName("week4")}>Week 4</span>
            <button className={tabName !== "All" ? "add-week-btn":"add-week-btn-blue"} disabled={tabName !=="All"} onClick={()=>setOpen(true)}>Add to Week</button>
          </div>
        <div className="week-orders">
          
          <div className="meal-cards">
            {(tabName == "All" ? recipes : tabName == "week1" ? week1recipes : tabName == "week2" ? week2recipes : tabName == "week3" ? week3recipes : week4recipes).map((data) => (
              <div className="meal-card" style={{border: selectedRecipe && selectedRecipe.id == data.id && "4px solid skyblue"}} onClick={()=>setSelectedRecipe(data)}>
                <img src={data.image} alt="Meal 1" className="meal-image" />
                {tabName !== "All" && <div className="delete-btn" onClick={() => handleDelete(data.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: 'red' }}
                  >
                    <path d="M3 6h18c0.553 0 1 0.447 1 1v1h-2v12c0 1.104-0.896 2-2 2h-12c-1.104 0-2-0.896-2-2v-12h-2v-1c0-0.553 0.447-1 1-1zm4 2v12h12v-12h-12zm3-4v2h6v-2h-6z" />
                  </svg>
                </div>}
                <span className="meal-label">{data.mealType[0]}</span>
                <p className="meal-head" style={{ fontWeight: "bold", fontSize: "20px" }}>{data.name}</p>
                <p className="meal-desc">{recipes[0].instructions.join(", ")}</p>
                <div className="follter">
                  <div className="follter1"><p className="cusine" style={{ fontWeight: "bold" }}>Cuisine:</p><p>{data.cuisine}</p></div>
                  <div className="follter1"><p className="rating" style={{ fontWeight: "bold" }}>Rating:</p>
                    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                      <p>{data.rating}</p>
                      {[...Array(Math.floor(data.rating))].map((_, index) => (
                        <span key={`full-${index}`} style={{ color: "blue", fontSize: "20px" }}>
                          ★
                        </span>
                      ))}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "center", fontWeight: "bold",paddingTop:"50px" }}>
          Select Week
        </DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            p: 10,
            pt:2,
            pb:2
          }}
        >
          {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, index) => (
            <Button
              key={index}
              variant={selectedWeek === week ? "contained" : "outlined"}
              onClick={() => handleWeekSelect(week)}
              sx={{
                width: "100px",
                textTransform: "none",
                backgroundColor: selectedWeek === week ? "#E3F2FD" : "",
                color: selectedWeek === week ? "#1976D2" : "",
              }}
            >
              {week}
            </Button>
          ))}
        </Box>
        <DialogActions sx={{alignItems:"center",margin:"0 auto"}}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mx: 2,width:"200px",padding:"10px",marginBottom:"40px",marginTop:"20px" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* </div> */}
    </div>
  );
};

export default App;
