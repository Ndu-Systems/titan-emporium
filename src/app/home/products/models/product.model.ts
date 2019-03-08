export interface Product {

    id:string;
    name?:string;
    secondaryHeading?:string;
    imageUrl?:string;
    details?:Array<string>;

    tableHeadings?:Array<string>;
    tableRows?:any[][]
}

export interface ProductGroup{
    name:string;
    data:Array<Product>;
}