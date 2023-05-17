import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"

export default function format( { children }) {
    return (
        <>
            <Head>
                <title>Botany - Gardening Blog</title>
            </Head>

            <Header></Header>
            <main className="bg-white dark:bg-slate-900">{children}</main>
            <Footer></Footer>
        </>
    )
}