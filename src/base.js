import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import {FIREBASE_CONFIG} from './config'

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)
  

 const base = Rebase.createClass(firebase.database())

 export { firebaseApp }

 export default base