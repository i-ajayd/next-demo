import { useRouter } from "next/router"
import styles from "../../../styles/Home.module.css"
import Link from "next/link"
import Image from "next/image"

const article = ({article}) => {
    const router = useRouter()
    const { id } = router.query
  return (
    <>
        <div className={styles.main}>This is article {id}, title: {article.title}
            <Link className={styles.card} href='/'>Go Back</Link>
        </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
      )
      console.log(res)
    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}
export default article