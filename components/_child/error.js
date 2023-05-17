import Image from "next/image";

export default function error() {
    return (
        <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-emerald-600 py-10">Something Went Wrong</h2>
            <Image className="mx-auto" src={"/images/not_found.jpg"} alt="Image not found" width={400} height={400}></Image>
        </div>
    )
}