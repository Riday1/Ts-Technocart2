{
    //Mapped type


    const arrayOfNumbers: number[] = [1, 2, 3]
    const arrayOfString: string[] = ["1", "2", "3"]

    const newArray: string[] = arrayOfNumbers.map(number => number.toString())

    // mapped types work similar of map 

    type AreaNumber = {
        height: number;
        width: number
    }


    // type AreaString = {
    //     height: string;
    //     width: string
    // }

    // to implement map type you need to use index signature

    type AreaString = {
        [key in keyof AreaNumber]: string
    }


    // lookup type 
    type Height = AreaNumber["height"] // obj["height"]



    // { height: string; width: number}
    type AreaString1<T> = {
        [key in keyof T]: T[key]
    }
    const area1: AreaString1<{
        height: string; width: number
    }> = {
        height: "21",
        width: 21
    }










    //
}