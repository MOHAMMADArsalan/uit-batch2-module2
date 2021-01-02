export const users = [
  {
    name: "user 1",
    email: "user1@gmail.com",
    id: 1
  },
  {
    name: "user 2",
    email: "user2@gmail.com",
    id: 2
  },
  {
    name: "user 3",
    email: "user3@gmail.com",
    id: 3
  },
];

export const getUserById = (id) => {
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].id === id) {
  //     return users[i];
  //   }
  // }

  // return null;

  // let user = null;
  // users.forEach((usr) => {
  //   if(usr.id === id) {
  //     user = usr;
  //   }
  // })

  // return user;
  console.log(id, '2222222222222')
  const user = users.find((user) => user.id === parseInt(id));
  return user;
};
