import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"
import styles from '../styles/home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

export default function Section1() {

  const { data, isLoading, isError } = fetcher('api/trending')
  const swiperRef = useRef();

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  SwiperCore.use([Autoplay])

  return (
    <section className="container mx-auto pb-12 relative">
      <Swiper onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      slidesPerView={1}>
        {
            data.map((value, index) => (
                <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
            ))
        }
      </Swiper>
      <div className="absolute w-full hidden sm:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MdNavigateBefore onClick={() => swiperRef.current.slidePrev()} className='text-3xl text-gray-500 back-button absolute left-0 hover:cursor-pointer hover:opacity-50 transition-opacity' />
        <MdNavigateNext onClick={() => swiperRef.current.slideNext()} className='text-3xl text-gray-500 next-button absolute right-0 hover:cursor-pointer hover:opacity-50 transition-opacity' />
      </div>
    </section>
  )
}

function Slide({ data }) {

  const {id, title, category, img, published, description, author } = data;
  
  return (
    <Link href={`/posts/${id}`}>
      <div className={`${styles.backgroundImg} relative bg-top bg-no-repeat bg-cover`} style={{width: '100%', backgroundImage: `url(${img || "/"})`}}>
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 dark:to-gray-800"></div>
        <div className="absolute bottom-0 w-full text-white p-8 max-w-2xl">
          <div className="category pb-1">
            <span className="text-emerald-500 dark:text-emerald-400 hover:opacity-50 pr-1 transition-opacity">{category || "Unknown"}</span>
            <span className="text-white hover:opacity-50 transition-opacity">- {published || "Unknown"}</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white hover:opacity-50 transition-opacity">{title || "No title"}</h3>
          <p className="text-gray-200 dark:text-gray-300 pt-4 line-clamp-2 hover:opacity-50 transition-opacity">{description || "description"}</p>
        </div>
      </div>
    </Link>
  )
}