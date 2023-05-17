import { useRouter } from 'next/router'
import Format from '@/layout/format'
import Link from "next/link"
import fetcher from "@/lib/fetcher"
import Spinner from '@/components/_child/spinner'
import Error from '@/components/_child/error'

export default function Results() {

    const { data, isLoading, isError } = fetcher('api/posts')
    const router = useRouter()
    const query = router.query.query

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

    const filteredData = data.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(query.toLowerCase())
    );

    const highlightQuery = (text) => {
        if (query && text) {
          const regex = new RegExp(`(${query})`, 'gi')
          return text.split(regex).map((part, index) =>
            regex.test(part) ? (
              <span key={index} className="text-emerald-600 dark:text-emerald-500">
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )
        }
        return text
      }

    return (
        <Format>
            <section className="pt-16 md:pb-10">
                <div className="container mx-auto md:px-20">
                    {filteredData.length > 0 ? (
                        <>
                        <h1 className='font-bold text-4xl pb-12 dark:text-white'>Search results for &quot;{query}&quot;</h1>
                        {filteredData.map((value, index) => (
                            <Post data={{ ...value, title: highlightQuery(value.title), subtitle: highlightQuery(value.subtitle) }} key={index} />
                        ))}
                        </>
                    ) : (
                        <h1 className='dark:text-white'>No results found for &quot;{query}&quot;</h1>
                    )}
                </div>
            </section>
        </Format>
      )
}

function Post( { data } ) {
    const { id, title, subtitle, category, published, author } = data;
    return (
        <div className="item">
            <div className="info flex justify-center flex-col py-4">
                <div className="category pb-5">
                    <Link href={`/posts/${id}`} className="text-emerald-600 dark:text-emerald-500 hover:opacity-50 pr-1">{category || "Unknown"}</Link>
                    <Link href={`/posts/${id}`} className="text-gray-800 dark:text-gray-300 hover:opacity-50 transition-opacity">- {published || "Unknown"}</Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} className="text-xl font-bold text-gray-800 hover:opacity-50 transition-opacity dark:text-white">{title || Title}</Link>
                    <p className="text-gray-500 dark:text-gray-300 py-5">{subtitle || "Subtitle"}</p>
                </div>
            </div>
        </div>
    )
}