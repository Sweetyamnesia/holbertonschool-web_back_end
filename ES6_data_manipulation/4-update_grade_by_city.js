export default function updateStudentGradeByCity(students, city) {
  const newGrades = [
    {
      studentId: 31,
      grade: 78,
    },
  ];

  if (students !== newGrades) {
    return 'N/A';
  }

  newGrades.filter((students) => students.location === city);
  return students.map((student) => student.id);
}
