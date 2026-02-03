"use client";
import {useState} from "react";

export default function NewItem() {
    const [name, setName] = useState<string>("");

    // Validation state 
    const [nametouched, setNameTouched] = useState<boolean>(false);

    const [quantity, setQuantity] = useState<number>(1);

    const [category, setCategory] = useState<string>("produce");

    const handleSubmit= (event:React.FormEvent<HTMLFormElement>)  => {
        event.preventDefault();
        if (!name || name.length < 2)
            return alert("Please enter a valid name with at least 2 characters.");
        const item = {name, quantity, category};    
        console.log({item});

        alert("Name: " + name + "\nQuantity: " + quantity + "\nCategory: " + category);

        setName("");
        setQuantity(1);
        setCategory("produce")
    };
        return (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">

                <div>
                    <label className="text-center text-pink-700 block mb-1 font-semibold">
                        Item Name
                    </label>
                    <input className={`w-full rounded border border-green-300 px-3 py-2 ${nametouched && (name.length <2 || name==="") ? 'border-red-500 text-slate-500' :' border-green-500 text-slate-500'}`}

                        
                        type="text"
                        value={name}
                        placeholder="Please enter name!"
                
                        onBlur={()=> setNameTouched(true)}
                        
                        onChange={(e) => setName(e.target.value)}
                        required

                    />
                    {nametouched && (name.length < 2 || name === "") && (<p className="text-red-500">Name must have at least 2 characters</p>)}
                </div>

                <div>
                    <section className="text-center rounded-xl border border-pink-400 bg-pink-50 p-2
                                     dark:border-pink-600 dark:bg-pink-400/20">
                        <label className="block mb-1 font-semibold">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))} 
                            required

                        />
                        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">Allowed range: 1-99</p>
                </section>
                </div>

                <div>
                    <label className=" text-center text-pink-600 block mb-1 font-semibold">
                        Category:
                    </label>
                    <select className="w-full rounded border border-pink-300 px-3 py-2 text-slate-500" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select category please</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value='household'>Household Items</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className ="flex justify-center">
                    <button type="submit" disabled={name === '' || name.length< 2} className=" disabled:bg-gray-400 diabled:cursor-not-allowed bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-center">submit</button>
                </div>






            </form>
        );
    }
