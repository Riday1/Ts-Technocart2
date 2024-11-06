{
    // Generic With Interface


    type Developer<T> = {
        name: string;
        computer: {
            brand: string;
            model: string;
            price: number
        };
        smartWatch?: T

    }

    type NormalWatch = {
        name: string;
        modle: string;
        quality: string;
        manufacturer: "china"
    }
    const poorDeveloper: Developer<NormalWatch> = {
        name: "riday",
        computer: {
            brand: "HP",
            model: "A-12",
            price: 1000
        },
        smartWatch: {
            name: "Unknown",
            modle: "fj3",
            quality: "cheap",
            manufacturer: "china"
        }

    }


    interface AppleWatch {
        name: string;
        modle: string;
        quality: string
    }
    const poshDeveloper: Developer<AppleWatch> = {
        name: "mezba",
        computer: {
            brand: "Asus",
            model: "232gk3",
            price: 239239232,
        },
        smartWatch: {
            name: "apple Watch",
            modle: "uie22",
            quality: "High"
        }
    }



    //
}