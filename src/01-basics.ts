interface Friend {
    name: string;
    phone: string;
    age: number
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
  const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);