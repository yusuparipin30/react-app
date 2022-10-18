//untuk dapat menggunakan komponent ProductList ini harus di import dari app.js
//parameter ini bisa di isi fungsi props nya atau memanggil secara langsung parameter products nya
const ProductList = ({products,deleteProduct}) => {
    return (
        <div>
            <ul>
                {products.map((product) =>(
                    //kitaun dapat mengirimkan data dari komponen anak ke komponen induk contoh-
                    //menambahkan button, dimana button ini berfungsi untuk menghapus itemnya
                    //menambahkan ivent onclick ,dimana ivent onclick ini akan memanggil sebuah method 
                    //di onclick akan memasukan aninomouse => function karana akan mengirimkan parameter
                    //membuat function deleteProduct dan kemudian mengirimkan id dari productnya yaitu product.id
                    //kemudian function deleteProduct di masukan ke dalam parameter props di atas
                    //di app.js tangkap function deleteProduct sebagai props
                <li key={product.id}>{ product.title} - { product.price} 
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList