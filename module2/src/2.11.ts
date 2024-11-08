// utility type

type Area = {
    width: number;
    height: number;

}

type Height = Pick<Area, "height">



///
type User = {
    name: string;
    age: string;
    email?: string;
    mobile: string;
}

type User1 = Pick<User, "name" | "age"> // to pickup some property
type User2 = Omit<User, "email" | "mobile"> // to avoid some property
type User3 = Required<User> // required every property

// Readonly utility, you can only read this property , you can't reassign any value in any property
type User4 = Readonly<User>
const user4: User4 = {
    name: "riday",
    age: "21",
    email: "x@gmail.com",
    mobile: "212121"
}

// partial type

type Obj = Record<string, unknown>
const myObj:Obj ={
    name: "ssfdf",
    age: 'sfdfd',
    sex: 'sfdfd'
} 


