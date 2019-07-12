export interface Product {

    id:string;
    name?:string;    
    desctiption?:string;
    secondaryHeading?:string;
    imageUrl?:string;
    details?:Array<string>;

    tableHeadings?:Array<string>;
    tableRows?:any[][];
    tableAbbrevations?:string;
    

}

export interface ProductGroup{
    name:string;
    data:Array<Product>;
}