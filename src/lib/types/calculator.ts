export interface ListType {
  service: string;
  price: number;
}

export interface PackageType {
  services: string[];
  price: number;
}

export interface ApiType {
  year?: number;
  services: ListType[];
  package: PackageType[];
}
