interface ItemProps {
    name: string;
    quantity: number;   
    category: string;
}            

function Item ({name, quantity, category}: ItemProps) {
    return (
    <div className="flex justify-center mt-2">
        <div className= "text-center border border-pink-500 p-4 m-4 rounded-3xl bg-pink-100 w-120"  >
        <p className="text-lg font-bold">{name}</p>
        <p className ="text-sm">Category: {category}</p>
        <p className="text-sm">Quantity: {quantity}</p>
        </div>
    </div>
    );
}
export default Item;