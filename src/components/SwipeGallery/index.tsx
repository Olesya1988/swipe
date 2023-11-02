import './index.scss';

interface SwipeGalleryProps {
    url: string;
    description: string;
}[]

export const SwipeGallery = ({ images }: SwipeGalleryProps) => (
    <div className="gallery">
        <div className="gallery-container">
            {images.map((image, index)=> (
                <div
                key={index}
                className="gallery-container-item"
                >
                    <img 
                    src={image.url} 
                    alt={image.description} 
                    loading='lazy'
                    />
                </div>
            ))}
        </div>
    </div>
)