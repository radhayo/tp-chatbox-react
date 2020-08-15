import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1uFaxbzgzHcGfP-m0Env0aqix1AlkHs0",
    authDomain: "chatbox-app-cb196.firebaseapp.com",
    databaseURL: "https://chatbox-app-cb196.firebaseio.com",
 })

 const base = Rebase.createClass(firebase.database())

 export { firebaseApp }

 export default base