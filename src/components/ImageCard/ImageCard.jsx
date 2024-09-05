import styles from './ImageCard.module.css'


const ImageCard = ({id, src, alt, onClick }) => { 

    return (
        <div className={styles.imageCard}>
            <img className={styles.image} src={src} alt={alt} onClick={() => onClick(id)}/>
        </div>
    )
}
 
export default ImageCard