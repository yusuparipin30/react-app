//untuk menggunakan useState harus mengimport dari react library
import { useState } from "react";
import Header from "./components/Header"


  //1. MEMBUAT EVENT
// function App() {
//   //dinamic value
//   const title = "welcome to my app";
//   const age = 20;
//   const link = "https://github.com/yusuparipin30/";

  //membuat ero function event untuk memanggil function ini bisa dari button  dengan cara nenambahkan onclick dan menggunakan dinamic value clickme
  //cara nengkap parameter yusuf yang ada di button yaitu hanya perlu menambahkan name di function 
  //dan memberikan pesan pada console.log yaitu hello name
//   const Clickme = (name) => {
//     console.log('Hello:'+ name);
//   }


//    //"penting" membuat EVENT di buttont yaitu onclick dan memanggil methot dengan ero function 
//   return (
//     <div>
//       <Header />
//      <h1>{title}</h1>
//      <h1>{age * 3}</h1>
//      <a href={link}>Go To Github Yusuf</a>
//      <button onClick={() => Clickme('Yusuf')}>Click me</button>
//     </div>
//   );
// }


//MEMBUAT USE STATE (berfungsi untuk merubah variable) dan jangan lupa mengimport di react library
function App() {
  //dinamic value
  //untuk merubah variable dengan USESTATE masukan variable title ke dalam usetate hook
 //usetate ini akan mereturn array yang terdiri dari dua parameter
 //parameter array 1.satate nya , 2. function yang berfungsi untuk merubah titlenya
const [title, setTitle] = useState ("welcome to my app") ;
const [age, setAge] = useState (20) ;

const changeTitle = () => {
  setTitle("Title Change");
  setAge(40);
    }
     //"penting" membuat USE STATE di buttont yaitu changeTitle dan memanggil methot dengan ero function 
    return (
      <div>
        <Header />
       <h1>{title}</h1>
       <h1>{age * 3}</h1>
       <button onClick={changeTitle}>Change Title</button>
      </div>
    );
  }
  //penutup MEMBUAT USE STATE 

export default App;
