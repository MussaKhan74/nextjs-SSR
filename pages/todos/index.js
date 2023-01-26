export default function ListOfTodos({ todos }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>
              {todo.id} {todo.title}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return {
    props: {
      todos: data,
    },
  };
}
