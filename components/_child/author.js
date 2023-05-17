import Image from "next/image"

export default function author({ name, img, designation}) {
  if(!name && !img) return <></>;
  return (
    <div className="author">
        <div className="image-container">
            <Image src={img || ""} fill alt="image of author" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"></Image>
        </div>
        <div className="flex flex-col justify-center px-4">
            <div className="text-md font-bold text-gray-800 dark:text-white text-sm">{name || "No Name"}</div>
            <span className="text-s text-gray-500 dark:text-gray-400 text-sm">{designation || "Designation"}</span>
        </div>
    </div>
  )
}