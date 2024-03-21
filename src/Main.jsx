
//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

// ?CSS dosyalrı import "path" seklinde ekelnir.
import "./Main.css"
import kediImages from "./images/kedi.jpeg"

const Main = () => {
    // !js alanı
    // ?local ve global style değişkeni
    const headerStyle = {
        color:"pink",
        backgroundColor:"green",
        fontSize:"0.9rem",
        fontWeight:"bold",


    }
  return (
    <main>
        {/* JSX */}
      {/* Inline CSS, (key-value), notasyon olarak camelCase */}
        <h2 style={{color:"red",backgroundColor:"gray"}}>MAİN SECTİON</h2>

        <h3 style={headerStyle}>other header</h3>
        <p style={headerStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis, dicta necessitatibus quae aliquam consequuntur numquam dignissimos, accusamus aspernatur reiciendis earum maiores beatae nisi similique quasi sint qui eveniet voluptatem.</p>
        <p className="par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur autem ipsam, voluptatibus incidunt eius impedit ab. Dolores provident debitis totam, velit assumenda magni fuga nihil, neque, illo quos mollitia labore.</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, distinctio?</p>

        <div >
            <img className="img" src="https://cdn.pixabay.com/photo/2023/01/08/08/40/road-7704729_1280.jpg" alt="sokak" />

            <img className="img" src="https://cdn.pixabay.com/photo/2024/02/29/13/32/blackthorn-8604451_1280.jpg" alt="ilkbahar" />
{/* local ortamımızda bulunan bir resmi doğrudan path vererek cağıramayız.bunun yerine import yaparız.ve süslülerle çağırıız.aşağıda yaptığımız gibi  */}
            <img className="img" src={kediImages} alt="kedi" />
{/* public klasörüneki resimlere dpğrudan ulaşılabildiği için yol vererek eriştik.Ana dizin */}
            <img className="img" src="./img/papağan.webp" alt="papağan" />
        </div>

    </main>
  )
}

export default Main