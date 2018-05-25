export class User{
    id:number;
    userName:string;
    passwordGrp:{
        password:string;
        confirmPassword:string;
    };
    gender:string;
    terms:boolean;
    email:string;

    constructor(values:object={}){
         Object.assign(this,values);
    }
}