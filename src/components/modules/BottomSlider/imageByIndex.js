import image1 from "../../../../public/1.jpeg"
import image2 from '../../../../public/2.jpeg'
import image3 from '../../../../public/3.jpg'


export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
