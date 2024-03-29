import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import Link from 'next/link'
import Newsletter from "./_child/newsletter"

export default function footer() {
  return (
    <footer className="dark:bg-slate-900 pt-10">
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="pt-5">
          <div className="flex gap-6 justify-center">
            <Link aria-label="Facebook icon" href={"/"}><FaFacebookF className="dark:text-emerald-300 hover:opacity-75 transition-opacity hover:text-emerald-600"/></Link>
            <Link aria-label="Twitter icon" href={"/"}><FaTwitter className="dark:text-emerald-300 hover:opacity-75 transition-opacity hover:text-emerald-600"/></Link>
            <Link aria-label="Youtube icon" href={"/"}><FaYoutube className="dark:text-emerald-300 hover:opacity-75 transition-opacity hover:text-emerald-600"/></Link>
          </div>

          <p className="pt-5 text-sm text-gray-400">© 2023 Gert. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
