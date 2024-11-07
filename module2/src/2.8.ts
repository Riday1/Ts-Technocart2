{
    //Asynchronous TypeScript with Promise
    // 1. To use promise, config ("target": "ES6")
    // 2. in case of promise you can do 2 things, either resolve it or reject it


    // Promise

    // const createPromise = () => {
    //     return new Promise((resolve, reject
    //     ) => {
    //         const data: string = "something"
    //         if (data) {
    //             resolve(data)
    //         }
    //         else {
    //             reject("failed to load data")
    //         }
    //     })
    // }



    type Something = { something: string }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" }
            if (data) {
                resolve(data)
            }
            else {
                reject("failed to reload data")
            }

        })
    }
    // calling create promise function
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise()
        return data
    }


    showData()






















    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data
    }






    //
}