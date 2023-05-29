interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

console.log(
  updateAssignment(
    {
      studentId: "a",
      title: "a",
      grade: 20,
    },
    { grade: 10 }
  )
);

const a = <T extends Assignment, K extends keyof T>(b: T, c: K): T[K] => {
  return b[c];
};

console.log(
  a(
    {
      studentId: "a",
      title: "a",
      grade: 20,
    },
    "grade"
  )
);

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

console.log(
  recordAssignment({
    studentId: "a",
    title: "a",
    grade: 20,
    verified: false,
  })
);

type AssignResult = Pick<Assignment, "grade" | "studentId">;

const b: AssignResult = {
  grade: 20,
  studentId: "a",
};
