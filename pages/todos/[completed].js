export default function ArticleListByCategory({ todos, completed }) {
  return (
    <>
      <h1>
        Showing news for category <i>{completed}</i>
      </h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>
              {todo.id} {todo.title}
            </h2>
            <p>{todo.completed ? 'complete: true' : 'complete: false'}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=Mussa']);
  const { completed } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?completed=${completed}`
  );
  const data = await response.json();

  return {
    props: {
      todos: data,
      completed,
    },
  };
}
