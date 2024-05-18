import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, get, child,set,update, query, orderByChild } from "firebase/database";
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DB_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const dbRef = ref(database);

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function userChange(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      console.log("signOut!!");
    }
  });
}

export async function logout() {
  return signOut(auth)
    .then(() => null)
    .catch((error) => {
      console.log(error);
    });
}


export async function adminUser() {
  return get(child(dbRef, "admins"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admin = snapshot.val();
        return admin;
      } 
      else{
        console.log("뭔가 잘못됨");
      }
    });
}

export async function isAdmin(uid){
  const result = await adminUser();
  return uid === result;
}

export function updateProduct(product,url){
  const id = uuidv4();
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    name: product.name,
    price: parseInt(product.price),
    url,
    color: product.color.split(','),
    size: product.size.split(','),
    sales:0,
    recommend: 0
  });
}


export async function getProducts(){
  return get(child(dbRef, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

export async function getRecommendProducts(){
  const recommendRef = query(ref(database,"products"),orderByChild("recommend"));
  return recommendRef.toJSON();
}

//나의 찜목록에 물품 추가
export async function uploadFavoriteProducts(product,uid){
  set(ref(database, `myfavorites/${uid}/${product.name}`), {
    ...product,
    name: product.name,
    price: parseInt(product.price),
    url: product.url,
    color: product.color,
    size: product.size
  });
}

//나의 찜목록에서 삭제
export async function removeFavoriteProduct(productName,uid){
  var updateData = {};
  updateData[`myfavorites/${uid}/${productName}`] = null;
  update(ref(database),updateData);
}



export async function getHeartProducts(uid){
  return get(child(dbRef, `myfavorites/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }});
}



export async function setRecommend(productId,product,recommend){
  set(ref(database,`products/${productId}`),{
    ...product,
    id: product.id,
    name: product.name,
    price: product.price,
    url: product.url,
    color: product.color,
    size: product.size,
    sales: product.sales,
    recommend: recommend
  });
  
}



