import Image from 'next/image'
import mypic from '../assets/sojaoo.jpeg'

const image = (props) => {
  const img_url = 'https://d1hy0tp7pfir2x.cloudfront.net/v2.login-bg-customer.jpg'
  const img_url2 = 'https://www.media.io/imagesV3/img-shiyitu1.png'

  return (
    <>
      <Image
        src={img_url}
        alt="Picture of the author"
        priority
        width={425}
        height={425}
        loading="lazy"
        quality='75'
      />
      <Image
        src={img_url}
        alt="Picture of the author"
        width={425}
        height={425}
        quality='75'
      />
      <Image
        src={img_url}
        alt="Picture of the author"
        width={425}
        height={425}
        quality='75'
      />
      <Image
        src={""}
        alt="Picture of the author"
        width={425}
        height={425}
        loading="lazy"
        quality={75}
      />

      <Image
        src={mypic}
        alt="Picture of the author"
        width={425}
        height={425}
        loading="lazy"
        quality={75}
      />
    </>
   
  )
}

export default image