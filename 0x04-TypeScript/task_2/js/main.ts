export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting acoffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks(){
        return 'Getting to work';
    }
}

export function createEmployee(salary: (string | number)) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export function isDirectory(employee: (Director | Teacher)): boolean {
    if (employee instanceof Director) {
        return true;
    }
    return false;

}
export function executeWork(employee: (Director | Teacher)): string {
    if (isDirectory(employee)) {
        (employee as Director).workDirectorTasks();
    }
    (employee as Teacher).workTeacherTasks();
}