class Address

{

    private addressLine1:string;

    private addressLine2:string;

    private city:string;

 

}

 

class Person {

    private firstName: string;

    private lastName: string;

    private email: string;

    private address:Address;

    constructor(_firstName:string,_lastName:string,_email)

    {

        this.firstName=_firstName;

        this.lastName=_lastName;

        this.email=_email;

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

 

let person=new Person('John','Doe','john2email.com');

person._firstName='Moriarty';

console.log(person._firstName);