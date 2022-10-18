//untuk menggunakan useState harus mengimport dari react library
import { useState, useEffect } from "react";
import Header from "./components/Header"
import ProductList from "./components/ProductList";


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


// //2.MEMBUAT USE STATE (berfungsi untuk merubah variable) dan jangan lupa mengimport di react library
// function App() {
//   //untuk merubah variable dengan USESTATE masukan variable title ke dalam usetate hook
//  //usetate ini akan mereturn array yang terdiri dari dua parameter
//  //parameter array 1.satate nya , 2. function yang berfungsi untuk merubah titlenya
// const [title, setTitle] = useState ("welcome to my app") ;
// const [age, setAge] = useState (20) ;

// const changeTitle = () => {
//   setTitle("Title Change");
//   setAge(40);
//     }
//      //"penting" membuat USE STATE di buttont yaitu changeTitle dan memanggil methot dengan ero function 
//     return (
//       <div>
//         <Header />
//        <h1>{title}</h1>
//        <h1>{age * 3}</h1>
//        <button onClick={changeTitle}>Change Title</button>
//       </div>
//     );
//   }
//   //penutup MEMBUAT USE STATE 

//3.MEMBUAT LOOPING LISTS (berfungsi untuk merubah variable) dan jangan lupa mengimport di react library
// function App() {
// //LOOPING , apabila kita ingin mengoutput lists data dari database bisa menggunakan fungsi map pada javascrippt
// //contoh membuat state baru yaitu products dan state nya adalah setProducts, data terdapat array object yaitu
// const [products, setProducts] = useState ([
//   {id:1, title: 'product 1', price: 899},
//   {id:2, title: 'product 2', price: 769},
//   {id:3, title: 'product 3', price: 989},
//   {id:4, title: 'product 4', price: 871},
//   {id:5, title: 'product 5', price: 459}
// ]);
//      //"penting" di sini kita akan melooping menggunakan lits ul
//      // dan bisa menggunakan dinamic value {products.map} dan mengambil setiap item dari productnya
//     // selanjutnya membuat erofunction menggunakan looping jsx syntax menggunakan-
//     // tag lists dan bisa mengeksekusi productnya=> (<li key={product.id}>{ product.title} - { product.price}</li>)
//      //setiap looping membutuhkan uniq KEY
//     return (
//       <div>
//         <Header />
//        <ul>
//         { products.map((product) =>(
//           <li key={product.id}>{ product.title} - { product.price}</li>
//         ))}
//        </ul>
//       </div>
//     );
//   }
//   //penutup LOOPING 
  
//   //3.MEMBUAT PROPS (berfungsi mengirimkan data dari komponen induk ke komponen anak)
//   //kita juga bisa menggunakan sebagai ivent untuk mengirimkan data dri komponent anak ke komponen induk
// function App() {
//   const [products, setProducts] = useState ([
//     {id:1, title: 'product 1', price: 899},
//     {id:2, title: 'product 2', price: 769},
//     {id:3, title: 'product 3', price: 989},
//     {id:4, title: 'product 4', price: 871},
//     {id:5, title: 'product 5', price: 459}
//   ]);
//       //membuat fuction deleteProduct
//       //tangkap idnya kasih nama yang berbeda productId
//       //buat variable baru const newProduct dan gunakan fungsi js yaitu filter untuk mengambil productnya
//       //di dalam filter ambil item dari setiap listnya yaitu product.id !==(tidak sama dengan productId)
//       //kemudian update useStatenta 
//       const deleteProduct = (productId) => {
//         const newProducts = products.filter(product => product.id !== productId);
//         setProducts(newProducts);
//       }
//        // megirimkan products={products} , product (products = props dan {deleteProducts} = useState)
//        //kita dapat menangkap products props di file ProductList.js yaitu menuliskan parameter props atau langsung product nya
//       return (
//         <div>
//           <Header />
//           <ProductList products={products} deleteProduct={deleteProduct}/>
//         </div>
//       );
//     }

    //catatan apabilan dalam browser di hapus semua dan di reload akan muncul kembali arranya sepeti semula-
    //karena kita tidak menghapus datanya dari state ,melainkan kita hanya menampikan data yang tidak sesui dengan id productId
    //untuk kasus sebenarnya kita mungkin akan menghapus data dari database, contoh PROPS di atas hanya untuk mengirim data 
    //dari komponen induk ke komponen anak menggunakan PROPS sebagai function
    //penutup PROPS

  //4.USEEFFECT (bermanfaat jika ingin menjalankan suatu perintah atau fungsi setiap kali suatu element atau halaman di render)
function App() {
  const [products, setProducts] = useState ([
    {id:1, title: 'product 1', price: 899},
    {id:2, title: 'product 2', price: 769},
    {id:3, title: 'product 3', price: 989},
    {id:4, title: 'product 4', price: 871},
    {id:5, title: 'product 5', price: 459}
  ]);
     
      const deleteProduct = (productId) => {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
      }

      //kita juga bisa menggunakan dependence
      const [name, setName] = useState ('Yusuf');
      //gunakan useEffect di sini
      //di useEffect terdapat erofunction dan didalamnya akan kita console.log
      // 
      useEffect (() => {
        console.log('Use Effect Runing');
      },[name]);

      return (
        <div>
          <Header />
          <ProductList products={products} deleteProduct={deleteProduct}/>
          <button onClick={() => setName('Arifin')}>Change Nmae</button>
          <p>{name}</p>
        </div>
      );
    }

export default App;
