//endpoint: http://localhost:3000/api/posts/

const baseURL = 'https://blog-nextjs-adamsongert.vercel.app/api/posts';

export default async function getPost(id) {
    const res = await fetch(`${baseURL}`)

    if (res.status === 200) {
        const posts = await res.json()

        if (id) {
            return posts.find(value => value.id == id)
        }

        return posts;
    }

    throw new Error("Failed to fetch posts");
}
