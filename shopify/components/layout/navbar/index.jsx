export async function NavBar() {
  const menu = await getMenu("front-menu");
  return <nav></nav>;
}
