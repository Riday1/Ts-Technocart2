{
    //con


    const addToCourseStudent = <T extends { name: string, email: string }>(student: T) => {
        const course = "next level web development"

        return {
            ...student,
            course
        }
    }

    // type Student = {
    //     name: string;
    //     email: string
    // }

    const student1 = addToCourseStudent({ name: "rida", email: "x.com", devType: "frontend", workPlace: "from home" })
    const student2 = addToCourseStudent({ name: 'sakib', email: "s.com" })









    //
}