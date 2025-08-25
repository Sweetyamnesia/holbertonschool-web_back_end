export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter(student => student.location === city);

  return filtered.map(student => {
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);

    let grade;
    if (gradeObj) {
      grade = gradeObj.grade;
    } else {
      grade = "N/A";
    }

    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: grade
    };
  });
}
