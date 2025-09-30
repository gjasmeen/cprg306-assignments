
function Item ({item}) {
    const { name, quantity, category} = item;
    return (
            <li className="text-white p-4 m-4 bg-blue-950">
                <p className="text-lg font-bold">{name}</p>
                <p className ="text-sm">{category} </p>
                <p className="text-sm">{quantity}</p>
            </li>
        );

    }

export default Item;