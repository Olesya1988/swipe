import { SwipeGallery } from "./components/SwipeGallery";

const images = [
  { url: "/images/1.jpg", description: "Me 1" },
  { url: "/images/2.jpg", description: "Me 2" },
  { url: "/images/3.jpg", description: "Me 3" },
  { url: "/images/4.jpg", description: "Me 4" },
  { url: "/images/5.jpg", description: "Me 5" },
  { url: "/images/6.jpg", description: "Me 6" },
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
