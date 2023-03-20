import { useState, useEffect } from "react";

import usersData from "data/users.json";

import ItemTweet from "components/ItemTweet/ItemTweet";
import { Container, List } from "./ListTweets.styled";

export default function ListTweets() {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) ?? usersData
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleButton = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isFollow: user.isFollow ? false : true,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
          };
        }
        return user;
      })
    );
  };

  return (
    <Container>
      <List>
        {users.map((user) => {
          return <ItemTweet key={user.id} user={user} onClick={handleButton} />;
        })}
      </List>
    </Container>
  );
}
