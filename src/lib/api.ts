export async function fetchAPI(query = "", {variables}: Record<string, any> ={}, authToken=''){
  const headers = { 'Content-Type': 'application/json'}

  if(!isEmpty(authToken)){
    headers[
      'Authorization'
    ] = `Bearer ${authToken}`
  }
}