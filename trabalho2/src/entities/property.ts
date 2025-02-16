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
  constructor(
    public name: string,
    public email: string,
    public address: Address
  ) {}
}

export class Landlord extends User {
  constructor(
    name: string,
    email: string,
    public properties: Property[],
    public address: Address
  ) {
    super(name, email, address);
  }
}

export class Tenant extends User {
  constructor(
    name: string,
    email: string,
    public address: Address,
    public rentedProperty?: Property
  ) {
    super(name, email, address);
  }
}
