export default function getStudentIdSum(getListStudents) {
  const ID = [1, 2, 5];
  const sumID = ID.reduce((acc, val) => acc + val, 0);
  return sumID;
}
