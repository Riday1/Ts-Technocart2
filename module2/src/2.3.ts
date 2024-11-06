{
    //



    // type Rolls = number[]
    // const rolls: Rolls = [2, 4, 6]

    //or 

    // const rolls: number[] = [10, 20, 30, 40]  ekbare type define kore declare kore dilam



    // Generic Type (jekono shomoy prolyojon onushare type toiri ebong reuse korte pari tai type ke generalized kore felbo eitai Generic type)


    // const rollNumbers: number[] = [1, 2, 3, 4]
    // const students: string[] = ["Sakib", "tamim", "musfik"]
    // const booleanArray: boolean[] = [true, false, true]

    // we can declare these above this using Array<>

    // const rollNumbers: number[] = [1, 2, 3, 4]
    // const rollNumbers: Array<number> = [1, 2, 3, 4]

    // const students: string[] = ["Sakib", "tamim", "musfik"]
    // const students: Array<string> = ["mr x", "mr y", "mr z"]

    // const booleanArray: boolean[] = [true, false, true]
    // const booleanArray: Array<boolean> = [true, false, true]


    //  we can declare above arrays using ****Generic Type****
    //type GenericArray<parameter> = Array <parameter>
    type GenericArray<T> = Array<T>

    const rollNumbers: GenericArray<number> = [1, 2, 3]
    const mentors: GenericArray<string> = ["Riday", "sohel"]
    const booleanArray: GenericArray<boolean> = [true, false, true]


    //Using Generic declare array of object 
    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "sohel",
            age: 21
        },
        {
            name: "riday",
            age: 22
        },

    ]




    // Generic Touple

    type GenericTuple<X, Y, Z> = [X, Y, Z]
    const manush: GenericTuple<string, string, boolean> = ["Mr. x", "Miss Y", true]

    const UserWithId: GenericTuple<number, { name: string, email: string }, boolean> = [123, { name: "riday", email: "riday@gmail.com" }, true]

    type GenericArray1<T> = Array<T>

    const UserNames: GenericArray1<string> = ["Mr x", "Mr y"]

    const Users: GenericArray1<{ name: string, age: number }> = [
        {
            name: "riday",
            age: 21,
        },
        {
            name: "shanto",
            age: 22,
        },

    ]

    // type User10 = {
    //     name: string,
    //     age: number
    // }

    interface User10 {
        name: string,
        age: number
    }

    const user10: GenericArray<User10> = [
        {
            name: "riday",
            age: 21
        }
    ]


    


    //

}