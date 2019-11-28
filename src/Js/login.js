import * as React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
 
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
 
import firebaseConfig from './firebase';
 
const firebaseApp = firebase.initializeApp(firebaseConfig);




const App = ({
  /** These props are provided by withFirebaseAuth HOC */
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  signInWithTwitter,
  signInAnonymously,
  signOut,
  setError,
  user,
  error,
  loading,
}: WrappedComponentProps) => (
  <React.Fragment>
    {
      user
        ? <h1>Hola, {user.displayName}</h1>
        : <h1>Ingresar</h1>
    }
 
    {   
      user
        ? <button onClick={signOut}>Salir</button>
        : <button onClick={signInWithGoogle}>Ingresar con google</button>
    }
    {
        user
        ? <button onClick={signOut}>Salir</button>
        : <button onClick={signInWithFacebook}>Ingresar con facebook</button>
    }
 
    {
      loading && <h2>Loading..</h2>
    }
  </React.Fragment>
);
 
const firebaseAppAuth = firebaseApp.auth();
 
/** See the signature above to find out the available providers */
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

/** Wrap it */
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

