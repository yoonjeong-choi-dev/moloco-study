interface User {
  name: string;
  age: number;
}

function canDrive(user: User) {
  console.log(`Hello~ ${user.name}`);
  if (user.age > 16) console.log('You can drive!');
  else console.log('You cannot drive...');
}

const user1 = {
  name: 'YJ',
  age: 30,
};

const user2 = {
  name: 'YJ',
};

const user3 = {
  age: 30,
};

canDrive(user1);
//canDrive(user2);
//canDrive(user3);
