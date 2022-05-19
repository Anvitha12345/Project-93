
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBJi77iuwCoV_C2g1xi96R3FZn72VJ9u6w",
      authDomain: "project-93-a7fad.firebaseapp.com",
      projectId: "project-93-a7fad",
      storageBucket: "project-93-a7fad.appspot.com",
      messagingSenderId: "941772782415",
      appId: "1:941772782415:web:8df9c16f6847d23d96233a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addRoom(){

      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name", room_name);

      window.location = "";
}



function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}