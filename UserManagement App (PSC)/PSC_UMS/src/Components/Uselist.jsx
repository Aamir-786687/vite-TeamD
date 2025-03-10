const users = [
    { id: 1, name: 'User One', email: 'user1@example.com' },
    { id: 2, name: 'User Two', email: 'user2@example.com' },
  ];
  
  const UserList = () => (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
  
  export default UserList;
  