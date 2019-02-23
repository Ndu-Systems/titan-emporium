export interface Product {

    id:string;
    name:string;
    secondaryHeading?:string;
    imageUrl?:string;
    details?:Array<string>;

    tableHeadings?:Array<string>;
    tableRows?:string[][]
}

export interface RowData{
    data:Array<string>;
}