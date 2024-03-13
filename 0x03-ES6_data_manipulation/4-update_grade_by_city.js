export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    return listStudents.filter((students) => students.location === city)
        .map((student) => {
            // spreading all property to Default N/A
            const data = {...student, grade: 'N/A'};
            const newGrade = newGrades.find((grade) => (grade.studentId === student.id));
            if (newGrade !== undefined) {
                data.grade = newGrade.grade;
            }
            return data;
        });
}