export class Property {
  constructor(
    public title: string,
    public type: string,
    public price: number
  ) {}
}

export class Address {
  constructor(public street: string, public city: string) {}
}

export class User {
  constructor(public name: string, public email: string) {}
}

export class Landlord extends User {
  constructor(name: string, email: string, public properties: Property[]) {
    super(name, email);
  }
}

export class Tenant extends User {
  constructor(name: string, email: string, public rentedProperty?: Property) {
    super(name, email);
  }
}
