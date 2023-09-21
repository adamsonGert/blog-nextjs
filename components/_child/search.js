import { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa"

const Search = () => {
    const router = useRouter()

    const [searchInput, setSearchInput] = useState('');

    const isSearchDisabled = !searchInput.trim()

    const handleSubmit = (event) => {
        event.preventDefault()
        const inputValue = event.target.elements.input.value
        router.push(`/results?query=${inputValue}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex items-center">
            <div className="relative"> 
                <input type="text" name="input" className="h-10 w-40 md:w-60 pl-8 pr-12 rounded-full z-0 focus:outline-none bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:text-white transition-colors text-sm" placeholder="Search posts..." value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                <button className="absolute top-0 right-5 bottom-0 m-auto" aria-label="Search button" disabled={!searchInput.trim()} type="submit"><FaSearch className={`${isSearchDisabled ? "text-slate-400 dark:text-slate-400" : "hover:cursor-pointer hover:opacity-70"} dark:text-white`} /></button>  
            </div>
        </div>
    </form>
  );
};

export default Search;