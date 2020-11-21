const List = ({todos}) => {
  return (
    <ul>
    {todos.map((todo, index ) => {
      return <li key={index}>{todo}</li>
    })}
  </ul>
  )
}

export default List;