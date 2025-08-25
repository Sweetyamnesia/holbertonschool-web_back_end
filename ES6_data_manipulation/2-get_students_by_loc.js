export default function getStudentsByLocation(students, city) {
  students.filter((students) => students.location === city);
  return students;
}
