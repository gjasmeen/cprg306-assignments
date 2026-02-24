"use client";
import {useState} from "react"
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemObjects from "./items.json";

type ItemType = { 
  id?: string; 
  name: string;
  quantity: number; 
  category: string; 
};


export default function Page() {
  const [items, setItems] = useState<ItemType[]>(ItemObjects); 
 
  function handleAddItem(newItem: ItemType) { 
    setItems([...items, newItem]); 
  }


  return (
    <main>
        <h1 className= "text-center text-xl"> Shopping List </h1>
      <NewItem onAddItem={handleAddItem}/>


      <ItemList items ={items}/>
    </main>
  );
}