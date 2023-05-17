import Format from '@/layout/format'
import Author from '@/components/_child/author'
import Image from 'next/image'
import Related from '@/components/_child/related'
import getPost from '@/lib/helper'
import fetcher from '@/lib/fetcher'
import Spinner from '@/components/_child/spinner'
import isLoading from '@/components/_child/spinner'
import ErrorComponent from '@/components/_child/error'
import { FaArrowLeft } from "react-icons/fa"
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Link from 'next/link'

export default function Page({fallback}) {
    const router = useRouter()
    const {postId} = router.query;
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <ErrorComponent></ErrorComponent>

    return (
        <SWRConfig value={{fallback}}>
            <Article {...data}></Article>
        </SWRConfig>
    )
}

function Article( {title, img, subtitle, published, description, author} ) {
  return (
    <Format>
        <section className="container mx-auto py-16 lg:w-3/5">
            <Link href={"/"} className='flex items-center dark:text-white hover:opacity-50 transition-opacity pb-8'><FaArrowLeft className='mr-2' />All articles</Link>
            <div className="post">
                <h1 className='font-bold dark:text-white lg:text-5xl text-3xl pb-5'>{title || Title}</h1>
                { author ? <Author {...author}></Author> : <></>}

                <p className='text-gray-500 dark:text-gray-300 text-lg pt-5 text-base'>{subtitle || "No Title"}</p>

                <div className="py-10">
                    <Image src={img || "/"} width={1000} height={580} className='w-fit' alt="Article image" ></Image>            
                </div>

                <div className="content text-gray-500 dark:text-gray-300 text-lg flex flex-col" dangerouslySetInnerHTML={{__html: description.replace(/\n/g, '<p class="block text-lg pb-5 text-base">')}}></div>
            </div>
            <Related />
        </section>
    </Format>
  )
}

export async function getStaticProps( {params} ) {
    const posts = await getPost(params.postId)

    return {
        props: {
            fallback: {
                '/api/posts': posts
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPost();

    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}