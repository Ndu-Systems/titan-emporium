export interface ProductInfoFini {
    id: string;
    heading: string;
    images: string[];
    secondaryHeading: string;
    paragraphs: string[];
    data: any;

}



export const fini_info_array: ProductInfoFini[] = [
    {
        id: 'aaaaaaaa',
        heading: '4KW-11KW (5HP-15HP)',
        images: [
            `assets/products/fescolo-screw/B88A5901.jpg`,
            `assets/products/fescolo-screw/B88A5905.jpg`,
            `assets/products/fescolo-screw/B88A5914.jpg`,
            `assets/products/fescolo-screw/B88A5920.jpg`],
        secondaryHeading: 'Name:AirHorse belt driven screw air compressor',
        paragraphs: [`Category:Standard screw air compressor`, `
        Name:AirHorse belt driven screw air compressor
        Category:Standard screw air compressor
        AirHorse screw compressors with V-belt
         drive are economical and reliable,use
          Germany technology which provide high
          quality air,low noise and high efficiency,
          easy to install,simple operation and miantenance.`],
        data: [[]]
    }
];
