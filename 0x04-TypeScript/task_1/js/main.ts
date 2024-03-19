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