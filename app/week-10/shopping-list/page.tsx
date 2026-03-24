"use client";
import {useState} from "react"
import ItemList from "./item-list";
import NewItem from "./new-item";

import MealIdeas from "./meal-ideas"; 
import Link from "next/link";


import {getItems, addItem as addItemToDB} from "../_services/shopping-list-service";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context"; 

type ItemType = { 
  id?: string; 
  name: string;
  quantity: number; 
  category: string; 
};


export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState<ItemType[]>([]); 
  const [selectedIngredient, setSelectedIngredient] = useState<string>("");

  async function loadItems() {
    if (!user) return;
    const itemsFromDB = await getItems(user.uid);
    setItems(itemsFromDB);
  }

   useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]); 
 
  if (!user) {
    return (
    <main className="flex gap-6 p-4">
      <h1>Must be logged in</h1>
      <Link href="/week-10">Login</Link>
    </main>
    );
  } 

  function handleItemSelect(name: string) { 
    setSelectedIngredient(name); 
  }

  


  async function handleAddItem(newItem: ItemType) {
    const newId = await addItemToDB(user.uid, newItem);
  setItems([...items, {id: newId   , ...newItem}]);
  }


  return (  
    
  <main className="flex gap-6 p-4">
    <div className ="flex-1">
      <div className="flex mt-4 text-pink-700 underline"> 
        <Link href="/week-10">Back to Home</Link>
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