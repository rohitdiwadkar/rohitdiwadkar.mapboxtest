var config = {
    style: 'mapbox://styles/rshenvi/ckfcuxn483zx019qtwn5csju7',
    accessToken: 'pk.eyJ1IjoicnNoZW52aSIsImEiOiJja2ZjbnlybnowNXJvMnlta3c5YXhlcHV5In0.uFXDml_cMToLDdn2FUsb6g',
    showMarkers: true,
    alignment: 'left',
    theme: 'dark',
    title: 'Tailored Brands & Jos A. Bank',
    subtitle: 'Store Closing Locations',
    byline: 'By Rohit Diwadkar',
    footer: 'Source: CoStar, August 2020. Data from CoStar.com',
    chapters: [
        {
            id: 'loaction1',
            title: 'Brand: Jos. A. Bank',
            image: '',
            description: 'Store Name: #0001 INNER HARBOR: LIGHT ST., 100 E PRATT ST BALTIMORE, MD 21202',
            location: {
                center: [-76.60998, 39.29073],
                zoom: 15.78,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'location2',
            title: 'Brand: Jos. A. Bank',
            image: '',
            description: 'Store Name: #0007 WOODMONT OFFICE CENTER, 1401 ROCKVILLE PIKE STE , MD 20852',
            location: {
                center: [ -77.12003, 39.06004],
                zoom: 17.13,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
            
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Location3',
            title: 'Brand: Jos. A. Bank',
            image: '',
            description: 'Store Name: #0019 1199 WILMETTE AVENUE, 1199 WILMETTE AVE STE,WILMETTE, IL 60091',
            location: {
                center: [-87.75998, 42.08002],
                zoom: 16.68,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Location4',
            title: 'Brand: Jos. A. Bank',
            image: '',
            description: 'Store Name: #0050 THE STRAND, 447 SPRINGFIELD AVE, STE 2, SUMMIT, NJ 07901',
            location: {
                center: [ -74.34999, 40.71002],
                zoom: 17.17,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
