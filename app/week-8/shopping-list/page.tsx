"use client";
import {useState} from "react"
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemObjects from "./items.json";
import MealIdeas from "./meal-ideas"; 
import Link from "next/link";

type ItemType = { 
  id?: string; 
  name: string;
  quantity: number; 
  category: string; 
};


export default function Page() {
  const [items, setItems] = useState<ItemType[]>(ItemObjects); 
  const [selectedIngredient, setSelectedIngredient] = useState<string>("");
 
  function handleAddItem(newItem: ItemType) { 
  setItems([...items, newItem]); 
  }
  function handleItemSelect(name: string) { 
    setSelectedIngredient(name); 
  }


  return (
  <main className="flex gap-6 p-4">
    <div className ="flex-1">
      <div className="flex mt-4 text-pink-700 underline"> 
        <Link href="/week-8">Back to Home</Link>
      </div>
      
      <h1 className= "text-center text-xl"> Shopping List </h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items ={items} 
        onItemSelect={handleItemSelect}/>
      </div>
      <div className ="w-1/3 p-4">
        <MealIdeas ingredient={selectedIngredient} />
        </div>
    </main>
  );
}