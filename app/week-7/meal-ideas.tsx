"use client";

import { useEffect, useState } from "react";

type MealIdeasProps = {
    ingredient: string;
};

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
    if (!ingredient) return [];

  
    let cleaned = ingredient.split(",")[0].toLowerCase().trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF])/g, "");
    //.split(" ")[0]
    //.toLowerCase()
    //.replace(/[^a-z]/g, ""); 
    
    if (cleaned.endsWith("s")) {
        cleaned = cleaned.slice(0, -1);
  }

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleaned}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.meals || [];
}

export default function MealIdeas({ ingredient }: MealIdeasProps) {
    const [meals, setMeals] = useState<Meal[]>([]);

    async function loadMealIdeas() {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  }
    useEffect(() => {
        loadMealIdeas();
}, [ingredient]);

    return (
        <div className="max-w-md mx-auto mt-8 p-4 rounded-xl border border-pink-400 bg-pink-50 
                    dark:border-pink-600 dark:bg-pink-400/20">

        <h2 className="text-center text-pink-700 text-xl font-bold mb-4">
            Meal Ideas
        </h2>

        {!ingredient && (
            <p className="text-center text-slate-500">
                Select an item to see meal ideas.
            </p>
        )}

        {ingredient && meals.length === 0 && (
            <p className="text-center text-slate-500">
                No meals found for "{ingredient}".
            </p>
      )}
       {ingredient && meals.length > 0 && (
            <p className="text-center text-slate-500">
                Meals found for "{ingredient}".
            </p>
      )}
        <ul className="space-y-3">
            {meals.map((meal) => (
            <li
                key={meal.idMeal}
                className="p-3 rounded-lg border border-green-300 bg-white text-slate-700 
                     hover:bg-green-50 transition"
            >
                {meal.strMeal}
            </li>
            ))}
        </ul>
        </div>
  );
}


