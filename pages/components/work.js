import Link from "next/link"

export default function fetchPeopleList({ profileName, content, imageUrl }) {
  return (
    <div className=" rounded-lg shadow-md px-5 py-5 w-[500px]  border-[1px] border-gray-200">
      <div className="flex gap-5 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
          <img src={imageUrl} className="object-contain" />
        </div>
        <div className="flex flex-col gap-2 h-full ">
          <h1 className="text-3xl text-slate-600 font-bold">
            <Link href={`/${profileName}`}>{profileName}</Link>
          </h1>
        </div>
      </div>

      <p className="pt-7">{content}</p>
    </div>
  )
}