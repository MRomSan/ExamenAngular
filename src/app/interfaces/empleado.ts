export interface Empleado {
    status:string;
    id:number;
    data:{
        employee_name:string;
        employee_salary:number;
        employee_age:number;
        profile_image:string;
    };
    message:string;
}
