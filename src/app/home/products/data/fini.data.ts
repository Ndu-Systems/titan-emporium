export interface ProductFini {
    id: string;
    heading: string;
    imageTags: ProductFiniImageTag[];

}
export interface ProductFiniImageTag {
    imgUrl: string;
    imgText: string;
    link?: string;

}


export const fini_array: ProductFini[] = [
    {
        id: 'standard-screw-air-compressor',
        heading: 'STANDARD SCREW AIR COMPRESSOR',
        imageTags: [{
            imgUrl: 'standard-screw-air-compressor1',
            imgText: '4KW-11KW (5HP-15HP) 皮带式',
            link: '/product-info/aaaaaaaa'
        }]
    },
    {
        id: 'belt-driven-type-ahb-series',
        heading: 'BELT DRIVEN TYPE (AHB SERIES)',
        imageTags: [{
            imgUrl: 'B88A5901.jpg',
            imgText: '4KW-11KW (5HP-15HP)',
            link: '/product-info/4kw-11kw'
        },
        {
            imgUrl: 'B88A5932.jpg',
            imgText: '15KW-30KW (20HP-40HP)',
            link: '/product-info/15kw-30kw'
        },
        {
            imgUrl: 'B88A6012.jpg',
            imgText: '37KW-75KW (50HP-100HP)',
            link: '/product-info/37kw-75kw'
        }
        ]
    },
    {
        id: 'direct-driven-type-ahd-series',
        heading: 'DIRECT DRIVEN TYPE (AHD SERIES)',
        imageTags: [{
            imgUrl: 'B88A5792.jpg',
            imgText: '15KW-45KW (20HP-60HP)',
            link: '/product-info/aaaaaaaa'
        },
        {
            imgUrl: 'B88A5800.jpg',
            imgText: '55KW-110KW (75HP-150HP)',
            link: '/product-info/aaaaaaaa'
        },
        {
            imgUrl: 'B88A5794.jpg',
            imgText: '132KW-250KW (175HP-350HP)',
            link: '/product-info/aaaaaaaa'
        }
        ]
    }
];
