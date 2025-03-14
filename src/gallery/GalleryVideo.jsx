
export default function GalleryVideo(){
    return (
        <video controls>
            <source src="./src/assets/video_pizza.mp4" type="video/mp4" alt="video, pizza" />
            Your browser does not support the video tag.
        </video>
    )
}