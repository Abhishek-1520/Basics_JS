//! Object: A pair of key and value.
//? Property can be access by using Dot(.) Notation.

//? Creating an object.
//*Normal way of creating an object.
/*  const obj = {
    Name:'Abhishek',
    Mob:9810
};
 console.log(obj); */

 //* New way of creating an object.
 
/*  const obj = new Object();
 obj.Name="Abhishek";
 obj.Mob=9810;

 console.log(obj)  *///{Name: 'Abhishek', Mob: 9810}

 //* To add new property in an existing object.

/*  const obj = {
    Name:'Abhishek',
    Mob:9810
};

obj.Adress = 'Govindpuram';

console.log(obj); */ //{Name: 'Abhishek', Mob: 9810, Adress: 'Govindpuram'}

//* To re-assign the property of an object.(Value will be over-written)

/* const obj = {
    Name:'Abhishek',
    Mob:9810
};

obj.Adress = 'Govindpuram';
obj.Name = 'Ankit';

console.log(obj); */ //{Name: 'Ankit', Mob: 9810, Adress: 'Govindpuram'}

//* To delete a property from an object.

/* const obj = {
    Name:'Abhishek',
    Mob:9810
};

obj.Adress = 'Govindpuram';
obj.Name = 'Ankit';

delete obj.Mob;

console.log(obj); */ //{Name: 'Ankit', Adress: 'Govindpuram'}

//* To implement and access nested object property.

/* const obj = {
    Name:'Abhishek',
    Mob:9810,
    address: {
        Area:'Block-A',
        Pincode: 201002
    }
};

console.log(obj); // {Name: 'Abhishek', Mob: 9810, address: {…}}

console.log(obj.address); // {Area: 'Block-A', Pincode: 201002}

console.log(obj.address.Area) */  // Block-A

//* To implement and acces ARRAY in a object.

/* const obj = {
    Name:'Abhishek',
    Mob:[9810,9540,1234], // ARRAY
    address: {
        Area:'Block-A',
        Pincode: 201002
    }
};

console.log(obj); // {Name: 'Abhishek', Mob: Array(3), address: {…}}

console.log(obj.Mob); // [9810, 9540, 1234]

console.log(obj.Mob[1]) // 9540

///* To add more elements in an array.

const obj = {
    Name:'Abhishek',
    Mob:[9810,9540,1234], // ARRAY
    address: {
        Area:'Block-A',
        Pincode: 201002
    }
};

console.log(obj.Mob[3] = 'Abhishek'); // adding an element.

console.log(obj.Mob); // [9810, 9540, 1234, 'Abhishek']

delete obj.Mob[1];
console.log(obj.Mob) */ //  [9810, empty, 1234, 'Abhishek']

//* To implement and access FUNCTION in an object.

/* const obj = {
    Names : ['Abhishek','Hello'],
    adress : {
        Pincode: 201002,
        Area : 'Block - A'
    },
    details: function(){
        console.log(`${this.Names[1]} ${this.Names[0]} are you from ${this.adress.Area} with pincode ${this.adress.Pincode} `)
    }
}

obj.details(); */

//! Mothods of object

//? object.keys() : Returns only pair of keys from an object.

/* const obj = {
    Names : ['Abhishek','Hello'],
    adress : {
        Pincode: 201002,
        Area : 'Block - A'
    },
    details: function(){
        console.log(`${this.Names[1]} ${this.Names[0]} are you from ${this.adress.Area} with pincode ${this.adress.Pincode} `)
    }
}

console.log(Object.keys(obj)); */ //  ['Names', 'adress', 'details']

//? object.values(): Returns only values from the object property.

/* const obj = {
    Names : ['Abhishek','Hello'],
    adress : {
        Pincode: 201002,
        Area : 'Block - A'
    },
    details: function(){
        console.log(`${this.Names[1]} ${this.Names[0]} are you from ${this.adress.Area} with pincode ${this.adress.Pincode} `)
    }
}
console.log(Object.values(obj)); */ // [Array(2), {…}, ƒ]

//? object.entries(): convert the key and value pair in array format and returns a new array.

/* const obj = {
    Name:'Abhishek',
    Mob:9810
};
console.log(Object.entries(obj.Name)); */ //Array(2)


//? Object.create(): To enhance the security in an object.

/* const obj = Object.create({
    Name: 'Abhishek',
    mob:9810
});
console.log(obj) // {}
console.log(obj.Name) // Abhishek

console.log(delete obj.Name) // True
console.log(obj.Name)  */// Not deleted 


//? objName.hasOwnPropert('key'): Return boolean values when property are present.

/* const obj = {
    Name:'Abhishek',
    Mob:9810
};
console.log(obj.hasOwnProperty('Name')); // true
console.log(obj.hasOwnProperty('Nam')); */ // false

//! To know the length of  an object.

/* const obj = {
    Name:'Abhishek',
    Mob:9810,
    address: 'hy'
};

console.log(Object.keys(obj).length) */ // Returns the length of an array.