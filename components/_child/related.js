import Link from "next/link"
import Image from "next/image"
import Author from "./author"
import fetcher from "@/lib/fetcher"
import Spinner from "./spinner"
import Error from "./error"

export default function Related() {

  const { data, isLoading, isError } = fetcher('api/posts')

  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>

  return (
    <section>
        <h2 className="font-bold dark:text-white text-3xl py-10">More posts</h2>

        <div className="grid md:grid-cols-2 gap-10">
            {
                data.map((value, index) => (
                    <Post key={index} data={value}></Post>
                ))
            }
        </div>
    </section>
  )
}

function Post( {data} ) {

    const { id, title, subtitle, img, published, author } = data;

    return (
        <div className="flex flex-col">
            <div className="flex gap-5">
                <div className="image flex flex-col justify-center">
                    <Link href={`/posts/${id}`} className="rounded"><Image src={img || ""} width={250} height={100} alt="image of article" /></Link>
                </div>
                <div className="info flex flex-col justify-center">
                    <div className="title max-w-xs">
                        <Link href={`/posts/${id}`} className="text-md font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:opacity-50 transition-opacity">{title || "No title"}</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
