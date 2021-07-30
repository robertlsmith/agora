import { firestore } from "./firebase";

const getFarmers = async () => {
    const snapshot = await firestore.collection("farmers").get()
    snapshot.docs.forEach(doc => console.log(doc.data()))
}

export { getFarmers }