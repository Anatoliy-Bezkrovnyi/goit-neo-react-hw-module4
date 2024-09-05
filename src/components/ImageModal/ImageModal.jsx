import styles from "./ImageModal.module.css";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";

const ImageModal = ({ isOpen, image, closeModal }) => { 
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}         
        >
            <button className={styles.closeButton} onClick={closeModal}>
                 <MdClose />
            </button>
            <img className={styles.modalImg} src={image?.urls?.regular} alt={image.alt_description} />
        </Modal>
    )
}
 
export default ImageModal