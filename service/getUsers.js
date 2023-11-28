export async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");
  const jsonParse = await response.json();
  const products = jsonParse.users;

  return products;
}
