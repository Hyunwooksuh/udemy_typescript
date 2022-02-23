enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
  name: "wook",
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

// 1. enum 사용법
if (person.role === Role.AUTHOR) {
  console.log("is author");
}
