import "./App.css";
import { useState, useEffect } from "react";
import { fetchImagesByFilter } from "./api/api-images";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const initialParams = {
  page: 1,
  query: "",
  per_page: 12
};

function App() {
 
  const [params, setParams] = useState(initialParams);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  

  async function fetchImages() {
      try {
        setLoading(true);	
        setError(false);
        setIsLoadMore(false);
        const data = await fetchImagesByFilter(params);
        console.log(data);
        setImages(data.results ?? []);
        setIsLoadMore(data.total_pages > params.page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    if (!params.query) {
      return;
    }
    fetchImages();
  }, [params]);

  const hanleImageClick = (id) => { 
    const newImage = images.find(image => image.id === id);
    setModalImg(newImage);
    console.log(newImage);
    setIsModal(true);
  }

   const handleSubmit = async (query) => {
    setParams({
      ...initialParams,
      query,
    });
    setImages([]);
   };
  
  const handleLoadMore = () => {
    setParams((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
       <Loader visible={loading} />      
       {!error ? (
            <ImageGallery images={images} onClick={hanleImageClick} />
          ) : (
            <ErrorMessage />
          )}
      
      {isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={isModal} image={modalImg} closeModal={() => setIsModal(false)} />
      <Toaster />
    </>
  )
}

export default App
