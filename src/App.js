import "./App.css";
import MyUnsplashApp from "./components/MyUnsplashApp/MyUnsplashApp";
import ImagesProvider from "./contexts/ImagesContext";

function App() {
  return (
    <ImagesProvider>
      <MyUnsplashApp />
    </ImagesProvider>
  );
}

export default App;
