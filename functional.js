const person = {
  name: "Russell",
  location: {
    postCode: "AB1 1AB",
    city: { long: "London", short: "Lon", super: "City of London" },
  },
};

console.log(person.name?.wtf?.wtf);

console.log(person && person.name && person.name.wtf && person.name.wft.wtf);
