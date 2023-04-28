import Image from 'next/image'
import mypic from '../assets/sojaoo.jpeg'
import styles from '@/styles/Home.module.css'

const image = (props) => {
  const img_url = 'https://d1hy0tp7pfir2x.cloudfront.net/v2.login-bg-customer.jpg'
  const img_url2 = 'https://www.media.io/imagesV3/img-shiyitu1.png'

  return (
    <>
      <div className={styles.card}>
        <Image
          src={img_url}
          alt="Picture of the author"
          width={425}
          height={425}
          loading="lazy"
          quality='75'
        />
      </div>
      <div className={styles.card}>
      <Image
          src={img_url}
          alt="Picture of the author"
          width={425}
          height={425}
          quality='75'
        />
       </div>
      <div className={styles.card}>
        <Image
          src={img_url}
          alt="Picture of the author"
          width={425}
          height={425}
          quality='75'
        />
      </div>
      <div className={styles.card}>
        <Image
          src={""}
          alt="Picture of the author"
          width={425}
          height={425}
          loading="lazy"
          quality={75}
        />
       </div>
      <div className={styles.card}>
        <Image
          src={mypic}
          alt="Picture of the author"
          width={825}
          height={825}
          loading="lazy"
          quality={75}
        />
      </div>
    </>
   
  )
}

export default image