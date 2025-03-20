
interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export default async function PostsPage() {

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    async function handleSearchUser(formData: FormData) {
        'use server'

        const userId = formData.get('userId');
        console.log(userId)
    }

    return (
        <div>
            <h1 className="text-center font-bold mt-5 mb-2 text-3xl">Todos os posts.</h1>

            <form className="flex gap-2 my-4" action={handleSearchUser}>
                <input type="text" placeholder="ID do usuário" className="border border-gray-200 p-2" name="userId" />
                <button className="bg-blue-500 text-white p-2">
                    Buscar Usuário
                </button>
            </form>

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}