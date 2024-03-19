export interface Teacher {
    readonly firstName: String;
    readonly lastName: String;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: Number;
    location: String;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: Number;
}

export function printTeacher(firstName: String, lastName: String) {
    return `${firstName[0]}. ${lastName}`
}

export interface printTeacherFunction {
   (firstName: String, lastName: String): String
}