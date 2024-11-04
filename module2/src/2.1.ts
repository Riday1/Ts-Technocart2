{
    // Type Assertion

    let anything: any;
    anything = 'riday';
    // (anything as string).


    const kgToGram = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `The converted value is :${convertedValue}`
        }
        if (typeof value === 'number') {
            return value * 1000
        }
    }


    const result1 = kgToGram(1000) as number
    const result2 = kgToGram('1000') as string

    type CustomError = {
        message: string
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message)
    }



    //
}