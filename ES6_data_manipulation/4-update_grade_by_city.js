export default function updateStudentGradeByCity(students, city) {
  const filtered = students.filter((students) => students.location === city);

  return filtered.map((student) => student.id)

}
