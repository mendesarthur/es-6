const user = {
    name: 'John Doe',
    email: 'doeJohn@email.com',
    friends:[{
        name: 'marry',
        address:{
            street: 'San jose',
            number: 45,
        }
    }],
    age: 42,
    phone:{
        countryCode: "+55",
        ddd: '22',
        number: "988833456"
    }
}

// console.log(user.friends[0].phone.ddd)

console.log(user.friends[0].phone?.ddd)

console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)