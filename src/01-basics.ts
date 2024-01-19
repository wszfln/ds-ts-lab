interface Friend {
    name: string;
    phone: string;
    age: number
}
interface Colleague {
    name: string;
    department: string;
    contact: {
        email: string,
        extension: number,
      }
}
interface ColleagueHistory {
    current: Colleague[],
    former: Colleague[]
  }

// (Optional) Change the names below to your friends.

const Friend1 = {
    name: "Jia Yang",
    phone: "087-12345",
    age: 25,
  };
  
  const Friend2 = {
    name: "Jingyi Wang",
    phone: "086--12345",
    age: 31,
  };
  
  const Friends = [Friend1, Friend2];
  console.log(Friends[1]);
  
  //   -------------------
  const Colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const Colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const Colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  export const Colleagues : ColleagueHistory = {
    current: [Colleague1, Colleague2, Colleague3],
    former: [],
  };
  
  console.log(Colleagues.current[0]);