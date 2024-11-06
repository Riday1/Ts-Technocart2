{

    //
    //Function with generics

    //(Recap)
    // normal function
    // function add(a: number, b: number): number {
    //     return a + b
    // }

    // arrow function
    // const ADD = (a: number, b: number): number => a + b

    // function with type alias
    // type ADD = (a: number, b: number) => number
    // const add: ADD = (a, b) => a + b



    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray("bangladesh") // ["bangladesh"]
    const res2 = createArrayWithGeneric<boolean>(true)

    type User1 = {
        id: number;
        name: string
    }
    const res3 = createArrayWithGeneric<{ id: number, name: string }>({ id: 21, name: "Mr X" })
    const res4 = createArrayWithGeneric<User1>({ id: 21, name: "Mr X" })

    //Generic Array with tuple [numerous data type ]
    const GenericArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res5 = GenericArrayWithTuple<string, number>("bangladesh", 12)
    const res6 = GenericArrayWithTuple<User1, number>({ id: 21, name: "riday" }, 21)
    //


    const addCourseToStudent = <T>(student: T) => {
        const course = 'next level web development'

        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({ name: 'x', email: 'x.com', devType: 'nlwd' })
    const student2 = addCourseToStudent({ name: 'y', email: 'y.com', watch: 'apple' })
}