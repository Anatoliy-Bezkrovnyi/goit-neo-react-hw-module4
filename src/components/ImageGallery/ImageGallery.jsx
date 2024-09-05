import ImageCard from "../ImageCard/ImageCard"
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ images, onClick }) => {     
    
    return (        
        <ul className={styles.imageGallery}>
            {images.map(image => <li key={image.id} className={styles.imageGalleryImage}>  <ImageCard id={image.id} src={image?.urls?.small} alt={image.alt_description} onClick={onClick} /> </li>)}  
        </ul>    
        
    )
 }

export default ImageGallery