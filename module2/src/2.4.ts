{
    // Generic With Interface


    type Developer<T, X = null> = { // if you want you can set null as a default parameter of X
        name: string;
        computer: {
            brand: string;
            model: string;
            price: number
        };
        smartWatch?: T;
        bike?: X

    }

    type NormalWatch = {
        name: string;
        modle: string;
        quality: string;
        manufacturer: "china"
    }
    const poorDeveloper: Developer<NormalWatch, null> = {
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
        },


    }


    interface AppleWatch {
        name: string;
        modle: string;
        quality: string
    }
    interface Yamaha {
        name: string
    }
    const poshDeveloper: Developer<AppleWatch, Yamaha> = {
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
        },
        bike: {
            name: "R19"
        }
    }


    // ekhane amra SmartWatch : er Type dynamic vabe se korechi Generic type diye , generic type diye icchemoto type declare korte pari + reuse korte pari , ekhane "Developer" type ke resuer koreche incchemoto type diyechi smartwatch er .
    //
}