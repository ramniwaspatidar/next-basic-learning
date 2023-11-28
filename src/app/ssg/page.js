export default async function ssg() {
  const getUsersList = await getUsers();

  return (
    <div>
      <h1>Product list</h1>

      {products &&
        getUsersList.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <div>{item.title}</div>;
        })}
    </div>
  );
}
