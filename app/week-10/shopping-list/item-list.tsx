"use client";

import Item from "./item";
import { useState } from "react";

type ItemType = { 
  id?: string; 
  name: string; 
  quantity: number; 
  category: string; 
};

export function ItemList({
  items,
  onItemSelect
}: {
  items: ItemType[];
  onItemSelect: (name: string) => void;
}) {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = sortedItems.reduce(
    (groups: Record<string, typeof items[0][]>, item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
      return groups;
    },
    {}
  );

  return (
    <div>

      {/* buttons */}
      <div className="flex justify-center gap-1 mt-4">
        <button
          onClick={() => {
            setGrouped(false);
            setSortBy("name");
          }}
          className={`px-3 py-1 rounded ${
            sortBy === "name" && !grouped
              ? "bg-pink-600 text-white p-2 mx-2 rounded"
              : "bg-gray-200 p-2 mx-2 rounded"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => {
            setGrouped(false);
            setSortBy("category");
          }}
          className={`px-3 py-1 rounded ${
            sortBy === "category" && !grouped
              ? "bg-pink-600 text-white p-2 mx-2 rounded"
              : "bg-gray-200 p-2 mx-2 rounded"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setGrouped(true)}
          className={`px-3 py-1 rounded ${
            grouped
              ? "bg-pink-600 text-white p-2 mx-2 rounded"
              : "bg-gray-200 p-100 mx-2 rounded"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* normal list */}
      {!grouped && (
        <div>
          {sortedItems.map((item, index) => (
            <Item
              key={item.id ?? index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onClick={() => onItemSelect(item.name)}
            />
          ))}
        </div>
      )}

      {/* grouped list */}
      {grouped && (
        <div>
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category}>
                <h2 className="text-center text-l font-bold capitalize mt-5">
                  {category}
                </h2>

                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item, index) => (
                    <Item
                      key={item.id ?? index}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      onClick={() => onItemSelect(item.name)}
                    />
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
