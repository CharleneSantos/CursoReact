import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Pedro', 'Francisco', 'Maria'])
  const [users, setUsers] = useState([
    { id: 1, name: 'Jose', age: 31 },
    { id: 2, name: 'John', age: 35 },
    { id: 3, name: 'Josef', age: 40 },

  ])

  const deleteRandon = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id)

    })
  };

  return <div>
    <ul>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <ul>
      {users.map((user, i) => (
        <li key={i}> {user.name}, {user.age}</li>
      ))}
    </ul>
    <button onClick={deleteRandon}>Delete random user</button>
  </div>;
};

export default ListRender
