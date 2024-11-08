{
    // conditional type 

    type a1 = string
    type b1 = undefined

    type x = a1 extends null ? true : false // x is depending on a1 which is also a type 
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    // car ase kina / bike ase kina /ship kina / tractor ase kina 
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false


    type HasBike = CheckVehicle<"car">
}