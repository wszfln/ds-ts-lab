import {Friend, Colleague, ColleagueHistory } from './myTypes'

// (Optional) Change the names below to your friends.

const friend1: Friend = {
    name: "Jia Yang",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Jingyi Wang",
    phone: "086--12345",
    age: 31,
  };
  
  export const friends: Friend[] = [friend1, friend2];

  // console.log(Friends[1]);
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  // console.log(Colleagues.current[0]);