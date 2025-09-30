import ItemList from "./item-list";
export default function Page()
{
    return (
        <main>
            <div className="p-5">
                <h1 className="text-xl text-center font-bold text-white p-8 bg-blue-950">Shopping List</h1>
                <ItemList/>
            </div>
        </main>
    )
}