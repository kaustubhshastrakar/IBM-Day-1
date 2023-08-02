import { Address } from "./Address";

 

export class Person {

 

   constructor(private firstName:string,private lastName:string,private email:string,address:Address)

   {

 

   }

 

 

 

    public get _firstName():string

    {

        return this.firstName;

    }

    public set _firstName(_firstName:string)

    {

        this.firstName=_firstName;

    }

 

    public get _lastName():string

    {

        return this.lastName;

    }

 

    public set _lastName(_lastName:string)

    {

        this.lastName=_lastName;        

    }

 

    public get _email():string

    {

        return this.email;

    }

 

    public set _email(_email:string)

    {

        this.email=_email;

    }

 

}