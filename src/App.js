//untuk menggunakan useState harus mengimport dari react library
//import bberapa fungsi dari react router-dom
//import Header from "./components/Header"
import { useState } from "react"
//import {useEffect } from "react"
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";



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
  
//   //4.MEMBUAT PROPS (berfungsi mengirimkan data dari komponen induk ke komponen anak)
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

    /*5.USEEFFECT (bermanfaat jika ingin menjalankan suatu perintah atau fungsi setiap kali suatu element atau halaman
     di render*/
     //useEffect merupakan function yang berjalan setiap kali terdapat perubahan pada DOM.
  //    function App() {
  // const [products, setProducts] = useState ([
  //   {id:1, title: 'product 1', price: 899},
  //   {id:2, title: 'product 2', price: 769},
  //   {id:3, title: 'product 3', price: 989},
  //   {id:4, title: 'product 4', price: 871},
  //   {id:5, title: 'product 5', price: 459}
  // ]);
  //     //membuat fuction deleteProduct
  //     //tangkap idnya kasih nama yang berbeda productId
  //     //buat variable baru const newProduct dan gunakan fungsi js yaitu filter untuk mengambil productnya
  //     //di dalam filter ambil item dari setiap listnya yaitu product.id !==(tidak sama dengan productId)
  //     //kemudian update useStatenta 
  //     const deleteProduct = (productId) => {
  //       const newProducts = products.filter(product => product.id !== productId);
  //       setProducts(newProducts);
  //     }

  //     //membuat dependence untuk menjalankan useEffec
  //     const [name, setName] = useState ('Yusuf');


  //     useEffect(() =>{
  //       console.log('Use Effec Runing')
  //     },[name]);
  //      /*pada button buat event onClick yang berfungsi untuk merubah useState ('Yusuf')*/ 
  //      /* output useStatenya mengunakan paragraf */
  //     return (
  //       <div>
  //         <Header />
  //         <ProductList products={products} deleteProduct={deleteProduct}/>
  //         <button onClick={() => setName('Arifin')}>Change Name</button>
  //         <p>{name}</p>
  //       </div>
  //     );
  //   }


     //6.REACT ROUTER
     /*Berbeda dengan multiple page application pada umumnya, react router tidak melakukan request ke server,
      melainkan hanya merender komponen di sisi client dengan URL tertentu. */
    //PETAMA INSTAL REACT-ROUTER-DOM
    //CEK PADA PACKAGE-LOCK.JSON sudah terinstal apa blm
    //pertama2 import dan instal beberapa fungsi 

    function App() {
      const [products, setProducts] = useState([
        {id: 1, title: 'Product 1', price: 899},
        {id: 2, title: 'Product 2', price: 982},
        {id: 3, title: 'Product 3', price: 322},
        {id: 4, title: 'Product 4', price: 763},
        {id: 5, title: 'Product 5', price: 389}
      ]);
     
      const deleteProduct = (productId) => {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
      }

          //di dalam router gunakan fungsi switch
          //didalam switch gunakan route yang di instal dari react router dom
          //di dalam route terdapat atribut path yaitu url
          //panggil komponen pada saat mengunjungi slash
          //non aktifkan import header karna tidak di butuhkan
          return (
            <div>
              <Router>

                <Routes>

                <Route exact path="/" element={<ProductList/>} products={ products } deleteProduct={ deleteProduct }/>
                  
                <Route path="/about"  element={<About/>}/> 
                
                <Route path="/contact" element={<Contact/>}/> 
              
                </Routes>

              </Router>
            </div>
          );
        }


    //7.JSON SERVER
    //membuai API palsu
    //buat file db.json dan isi filenya
    /*buka terminal baru dan jalankan perintah berikut:

npx json-server --watch db.json --port 8080
Kembali ke browser dan kunjungi URL berikut:


http://localhost:8080/products */

 


export default App;
