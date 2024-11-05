{

    //

    type User1 = {
        name: string;
        age: number;
    }
    interface User2 {
        name: string,
        age: number
    }

    type User3 = {
        name: string;
        sex: string
    }


    type houseNumber = number
    // we cant not declare primitive data type using primitive
    // to declare primitive data we will use type 
    // to declare object we can use (type) or (interface)

    type newType = User1 & { sex: string }
    // by using "Type Alias" we can expand/extends our object through "Intersection" property
    const newUser: newType = {
        name: 'riday',
        age: 24,
        sex: 'male'
    }

    interface UserWithSex extends User2 {
        sex: string // extends property you want to add mention here
    }
    const newUser2: UserWithSex = {
        name: 'sakib',
        age: 23,
        sex: 'male'
    }

    const house: houseNumber = 26;
    const user: User1 = {
        name: "riday",
        age: 26
    }

    const user2: User2 = {
        name: 'riday',
        age: 26
    }




    // declare a "Array" using "Interface"
    type Friends = number[]
    const friends1: Friends = [10, 20, 30]
    interface Friends2 {
        [index: number]: number // array er index hobe number and eita number type array return korbe
    }
    const frined2: Friends2 = [10, 20, 309]



    //
    type Add1 = (n1: number, n2: number) => number
    const add: Add1 = (num1, num2) => num1 + num2

    interface Add2 {
        (num1: number, num2: number): number
        // first parameter  type is : number , second parameter type is : number , after that this function will return a number
    }
    interface Add3 {
        (num1: number, num2: number): number
    }
    interface Substraction1 {
        (num1: number, num2: number): number
    }
    interface Multiply1 {
        (num1: number, num2: number): number
    }
    interface Multiply2 {
        (num1: number, num2: number): number
    }
    interface Array1 {
        [index: number]: number
    }
    interface Array2 {
        [index: number]: string
    }


    // declaring an array using interface
    const friends4: Array2 = ["sohel", 'riday', "shanto"]

    // declare a function using "Interface"
    interface Division1 {
        (num1: number, num2: number): number
    }
    const division1: Division1 = (num1, num2) => num1 / num2
    division1(30, 10)



    // conclusion between type alias and interface
    // when you will use array - use type alias
    // when you will use function -  use type alias
    // when you will use object  = use type alias / interface
    // when you will expand any object {for type alias use intersection(&)} , {for interface use extends }
    //



    //
}