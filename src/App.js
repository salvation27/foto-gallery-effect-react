import "./App.css";
import Gallery from './Gallery'

function App() {
  let data = [
    {
      id:1,
      img:'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/1-Paris._France-e1530811226705.jpg',
      name:'Paris'
    },
    {
      id:2,
      img:'https://afisha.london/wp-content/uploads/2020/11/cover-1.jpg',
      name:'London'
    },
    {
      id:3,
      img:'https://vgorode.ua/img/article/5050/61_main-v1583947311.jpg',
      name:'Kharkov'
    },
  ]
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>ImageGallery</h1>
      <Gallery data={data} />
    </div>
  );
}

export default App;
