import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId: string) => {
    try{
        const itemsCollection = collection(db, "users", userId, "items");
            //, userId, "items");
        const itemsSnapshot = await getDocs(itemsCollection);
        //return itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
       //return itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as { id: string; name: string; quantity: number; category:string }[];
       return itemsSnapshot.docs.map(doc=> {
        const item = doc.data() as any;
        return {
            id: doc.id,
            name: item.name ,
            quantity: item.quantity,
            category: item.category,
        }  });  
    } catch (error) {
        console.error("Error fetching items: ", error);
        return [];
    }
}

export const addItem = async (
    userId: string, item: { name: string; quantity: number; category:string }) => {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw error;
    }
}  ;