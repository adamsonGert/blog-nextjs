import useSWR from 'swr'

const response = (...args) => fetch(...args).then(res => res.json())
const baseURL = 'https://blog-nextjs-adamsongert.vercel.app';
 
export default function Fetcher(endpoint) {
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}