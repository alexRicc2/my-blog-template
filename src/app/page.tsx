import { getPosts } from "@/lib/queries/Post/getPost"

export default async function Home() {

  console.log("hello")
  const posts = await getPosts();
  console.log('posts', posts)
  return (
    <>
    <h1>hello</h1>
    </>
  )
}
