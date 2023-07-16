function Item({ user, remove }) {
  return (
    <li>
      {user.name}
      <button onClick={() => remove(user.id)}>Delete</button>
    </li>
  );
}

export default Item;
