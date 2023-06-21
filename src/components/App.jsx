import './App.css';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal';

function App() {
  return (
    <>
      <Button />
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Modal />
    </>
  );
}

export default App;
