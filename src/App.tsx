import { SwipeGallery } from "./components/SwipeGallery";

const images = [
  { url: "../public/images/1.jpg", description: "SP 1" },
  { url: "../public/images/2.jpg", description: "SP 2" },
  { url: "../public/images/3.jpg", description: "SP 3" },
  { url: "../public/images/4.jpg", description: "SP 4" },
  { url: "../public/images/5.jpg", description: "SP 5" },
  { url: "../public/images/6.jpg", description: "SP 6" },
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
