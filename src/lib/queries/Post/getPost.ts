import { fetchAPI } from "@/lib/api";

export async function getPosts() {
  const data = await fetchAPI(
    `
    query Posts {
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }){
        edges{
          node{
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author{
              node{
                name
              }
            }
          }
        }
      }
    }
    `
  )
  return data?.posts
}