import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";

export async function authWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'ru';
    signInWithPopup(auth, provider)
        .then((result) => {
            const db = getFirestore();
            const userRef = collection(db, "users");
            setDoc(doc(userRef, result.user.uid), {})


            console.log(result.user);

        }).catch((error) => {
            console.log(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
    });
}

export function getCurrentUser() {
    const auth = getAuth();
    return auth?.currentUser?.email;
}
