import { SwipeGallery } from "./components/SwipeGallery";

const images = [
  { url: "./images/1.jpg", description: "SP 1" },
  { url: "./images/2.jpg", description: "SP 2" },
  { url: "./images/3.jpg", description: "SP 3" },
  { url: "./images/4.jpg", description: "SP 4" },
  { url: "./images/5.jpg", description: "SP 5" },
  { url: "./images/6.jpg", description: "SP 6" },
];

function App() {
  return (
    <div className="container">
      <h1>Swipe Gallery</h1>
      <SwipeGallery images={images} />
    </div>
  );
}

export default App;
