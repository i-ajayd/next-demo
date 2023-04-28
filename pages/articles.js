import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const articles = ({ articles }) => {

  return (
    <>
      {articles.map(article => (
        <div className={styles.card}>
          <Link href="/article/[id]" as={`article/${article.id}`}>
            <h3>{article.title}</h3>
          </Link>
        </div>
        
      ))}
    </>
  )
}


export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/`
  )

  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

export default articles