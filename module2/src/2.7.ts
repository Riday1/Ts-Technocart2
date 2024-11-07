{
    // "Generic constraint" with "keyof" operator


    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship" // manually

    type Owner2 = keyof vehicle // vechicle er key gulo niye ekta union type gothon korba

    const user = {
        name: "mr x",
        age: 21,
        address: 'ctg'
    }

    const car = {
        model: "m-16",
        year: 2026
    }
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }




    getPropertyValue(user, "name")
    getPropertyValue(car, "year")



    //
}