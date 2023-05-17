import Link from "next/link"
import Image from "next/image"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section4() {
  const { data, isLoading, isError } = fetcher('api/posts')

  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>

  return (
    <section className="container mx-auto pb-12">
        <div className="grid lg:grid-cols-2 gap-10">
            <div className="item">
                <h2 className="font-bold text-2xl pb-5 dark:text-white">House plants</h2>
                <div className="flex flex-col gap-6">
                    { data[1] ? <Post data={data[1]}></Post> : <></> }
                    { data[2] ? <Post data={data[2]}></Post> : <></> }
                    { data[3] ? <Post data={data[3]}></Post> : <></> }
                </div>
            </div>
            <div className="item">
                <h2 className="font-bold text-2xl pt-12 md:pt-0 pb-5 dark:text-white">Outdoor plants</h2>
                <div className="flex flex-col gap-6">
                    { data[4] ? <Post data={data[4]}></Post> : <></> }
                    { data[5] ? <Post data={data[5]}></Post> : <></> }
                    { data[2] ? <Post data={data[2]}></Post> : <></> }
                </div>
            </div>
        </div>
    </section>
  )
}

function Post({ data }) {

    const {id, title, category, img, published, description } = data;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-center">
                <Link href={`/posts/${id}`} className="rounded"><Image src={img || "/"} loading="lazy" width={250} height={100} alt="Image of article" /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category pb-2 md:pb-5">
                    <Link href={`/posts/${id}`} className="text-emerald-600 hover:opacity-50 text-emerald-500 transition-opacity dark:text-emerald-400 pr-1 text-sm">{category || "Unknown"}</Link>
                    <Link href={`/posts/${id}`} className="text-gray-800 hover:opacity-50 text-black-500 transition-opacity dark:text-white text-sm">- {published || "Unknown"}</Link>
                </div>
                <div className="title max-w-sm">
                    <Link href={`/posts/${id}`} className="text-md md:text-xl font-bold text-gray-800 hover:opacity-50 transition-opacity dark:text-white">{title || Title}</Link>
                </div>
            </div>
        </div>
    )
}
