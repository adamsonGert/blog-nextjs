import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import getPost from "@/lib/helper"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section2() {

    const { data, isLoading, isError } = fetcher('api/posts')

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto pb-12">
        <h2 className="font-bold text-2xl py-5 dark:text-white">All posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            data.map((value, index) => (
                <Post data={value} key={index}></Post>
            ))
        }
        </div>
    </section>
  )
}

function Post( { data } ) {
    const { id, title, subtitle, category, img, published, author } = data;
    return (
        <Link href={`/posts/${id}`} className="item bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
            <div className="images">
                <Image src={img || "/"} loading="lazy" quality={90} className="w-full" width={400} height={250} alt="Image of article" />
            </div>
            <div className="info p-6 flex flex-col pt-4">
                <div className="category pb-3">
                    <span className="text-emerald-800 hover:opacity-75 transition-opacity dark:text-emerald-300 pr-1 text-sm">{category || "Unknown"}</span>
                    <span className="text-gray-800 hover:opacity-50 text-gray-800 dark:text-white transition-opacity text-sm">- {published || "Unknown"}</span>
                </div>
                <div className="title flex flex-col h-full">
                    <p className="text-lg font-bold text-gray-800 hover:opacity-50 dark:text-white transition-opacity">{title || Title}</p>
                    <p className="text-gray-500 dark:text-gray-400 hover:opacity-50 pt-3 line-clamp-4 mb-6 transition-opacity text-sm">{subtitle || "Subtitle"}</p>
                    { author ? <Author {...author}></Author> : <></>}
                </div>
            </div>
        </Link>
    )
}
