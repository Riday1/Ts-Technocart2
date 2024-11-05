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

    type houseNumber = number
    // we cant not declare primitive data type using primitive
    // to declare primitive data we will use type 
    // to declare object we can use (type) or (interface)

    const house: houseNumber = 26;
    const user: User1 = {
        name: "riday",
        age: 26
    }

    const user2: User2 = {
        name: 'riday',
        age: 26
    }








    //
}