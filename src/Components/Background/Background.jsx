/* eslint-disable react/prop-types */
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import video from '../../assets/video1.mp4'
import './Background.css'



const Background = ({heroCount,playstatus}) => {
  if (playstatus) {
    return(
      <video className='background' muted loop autoPlay>
        <source src={video} type='video/mp4' />
      </video>
    )
  } else if (heroCount === 0) {
    return(
      <img className='background' src={image1} alt='image' />
    )
  }
  else if (heroCount === 1) {
    return(
      <img className='background' src={image2} alt='image' />
    )
  }
  else if (heroCount === 2) {
    return(
      <img className='background' src={image3} alt='image' />
    )
  }
}

export default Background