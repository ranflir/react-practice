import styles from './Gallery.modules.css';

function Gallery ({image}){
  return(

    <div className={styles.galley}>

      {images.map((image) => (
        return
        <img key={image} src = {image} />
      )) }
    </div>  
  )
}

export default Gallery;