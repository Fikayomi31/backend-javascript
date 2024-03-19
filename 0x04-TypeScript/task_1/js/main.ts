interface Teacher {
    readonly firstName: String;
    readonly lastName: String;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: Number;
    location: String;
    [key: string]: any;
}