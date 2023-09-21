import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section3() {
    const { data, isLoading, isError } = fetcher('api/popular')

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto pb-12">
        <h2 className="font-bold text-2xl py-5 dark:text-white">Most Popular</h2>

        <Swiper 
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }}
        >
          {
              data.map((value, index) => (
                  <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
              ))
          }
        </Swiper>
    </section>
  )
}

function Post({ data }) {

    const {id, title, subtitle, category, img, published, author } = data;

    return (
        <div className="grid item bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 h-full">
            <div className="images">
                <Link href={`/posts/${id}`} className="flex"><Image src={img || "/"} loading="lazy" width={650} height={500} alt="image of article" /></Link>
            </div>
            <div className="info flex flex-col flex-col p-6 pt-4">
                <div className="category pb-3">
                    <Link href={`/posts/${id}`} className="text-emerald-800 hover:opacity-75 dark:text-emerald-300 transition-opacity pr-1 text-sm">{category || "Unknown"}</Link>
                    <Link href={`/posts/${id}`} className="text-gray-800 hover:opacity-50 dark:text-white transition-opacity text-sm">- {published || "Unknown"}</Link>
                </div>
                <div className="title flex flex-col h-full">
                    <Link href={`/posts/${id}`} className="xl:text-2xl text-xl font-bold text-gray-800 hover:opacity-50 dark:text-white transition-opacity">{title || Title}</Link>
                    <p className="text-gray-500 dark:text-gray-400 hover:opacity-50 pt-3 mb-6 transition-opacity text-sm">{subtitle || "description"}</p>
                    { author ? <Author {...author}></Author> : <></>}
                </div>
            </div>
        </div>
    )
}