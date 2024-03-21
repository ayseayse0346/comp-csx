
//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

// ?Header component 

function Header(){
    //! js alanı 
    const yazı = "hello fs 16"
    return (
    // jsx alanı
    <header>
        {/* JSX alanı yorum satırı */}
        <h1>{yazı}</h1>
    </header>
    
    )
}

export default Header