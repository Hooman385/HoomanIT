import image1 from "../../../../public/productSliderImages/product1.jpg"
import image2 from '../../../../public/productSliderImages/product2.jpg'
import image3 from '../../../../public/productSliderImages/product3.jpg'
import image4 from '../../../../public/productSliderImages/product4.jpg'
import image5 from '../../../../public/productSliderImages/product5.jpg'

export const images = [image1, image2, image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
