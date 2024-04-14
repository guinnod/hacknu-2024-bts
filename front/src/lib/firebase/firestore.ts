import {
    DocumentData,
    addDoc,
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import firebaseApp from ".";

const firestoreDb = getFirestore(firebaseApp);

export const getItemById = async (
    path: string,
    id: string
): Promise<DocumentData | null> => {
    const docRef = doc(firestoreDb, path, id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        return { ...data, id: docSnapshot.id };
    }
    return null;
};

export const getAllItems = async (path: string): Promise<DocumentData[]> => {
    const collectionRef = collection(firestoreDb, path);
    const querySnapshot = await getDocs(collectionRef);
    const items: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
        if (doc.exists()) {
            const data = doc.data();
            items.push({ ...data, id: doc.id });
        }
    });

    return items;
};

export const saveItem = async (
    path: string,
    newItem: DocumentData
): Promise<string | null> => {
    const collectionRef = collection(firestoreDb, path);

    try {
        const docRef = await addDoc(collectionRef, newItem);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        return null;
    }
};

export const addItemToArrayField = async (
    collectionPath: string,
    documentId: string,
    fieldName: string,
    newItem: any
) => {
    const docRef = doc(firestoreDb, collectionPath, documentId);

    try {
        await updateDoc(docRef, {
            [fieldName]: arrayUnion(newItem),
        });
        console.log("Document field updated successfully");
    } catch (error) {
        console.error("Error updating document field: ", error);
        throw error;
    }
};

export const getItemsByAttribute = async (
    collectionPath: string,
    attributeField: string,
    attributeValue: any
): Promise<DocumentData[]> => {
    const collectionRef = collection(firestoreDb, collectionPath);
    const q = query(collectionRef, where(attributeField, "==", attributeValue));
    const querySnapshot = await getDocs(q);

    const items: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
        if (doc.exists()) {
            const data = doc.data();
            items.push({ ...data, id: doc.id });
        }
    });

    return items;
};
