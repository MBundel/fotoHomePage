// CSS
import "../../styles/galleryPic.css";

interface GalleryPic {
  imgSrc: string;
  href: string
}

function GalleryPic(props: GalleryPic) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" >
      <div className="gallery">
        <img src={props.imgSrc} alt="" className="gallery__img" />
      </div>
    </a>
  );
}

export default GalleryPic;
