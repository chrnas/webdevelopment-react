
export default function GalleryVideo({ src }){
    return (
        <video controls>
            <source src={src} type="video/mp4" alt="video, pizza" />
            Your browser does not support the video tag.
        </video>
    )
}