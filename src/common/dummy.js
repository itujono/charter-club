

export const user = {
    id: 100,
    firstName: "Eddie",
    lastName: "Brock",
    phone: "+65 7439823",
    email: "eddieb@mail.com",
    city: "Singapore",
    zip: "78887",
    address: "3 Science Park, Franklin Building"
}

export const properties = {
    transmission: [
        { id: 21, value: 'Dual-Clutch Automatic', text: 'Dual-Clutch Automatic' },
        { id: 22, value: '6-speed Manual', text: '6-speed Manual' },
        { id: 23, value: '5-speed Manual', text: '5-speed Manual' }
    ],
    bodyType: [
        { id: 41, value: 'sedan', text: 'Sedan' },
        { id: 42, value: 'mpv', text: 'MPV' },
        { id: 43, value: 'suv', text: 'SUV' },
        { id: 44, value: 'coupe', text: 'coupe' }
    ],
    years: [
        { id: 31, value: 2010, text: 2010 },
        { id: 32, value: 2011, text: 2011 },
        { id: 33, value: 2012, text: 2012 },
        { id: 34, value: 2013, text: 2013 },
        { id: 35, value: 2014, text: 2014 },
        { id: 36, value: 2015, text: 2015 },
        { id: 37, value: 2016, text: 2016 },
        { id: 38, value: 2017, text: 2017 },
        { id: 39, value: 2018, text: 2018 }
    ]
}

export const orders = [
    {
        id: 501,
        orderedAt: "Thursday, 23 August 2018",
        timestamp: "05:46:33 PM",
        charteredFor: "Friday, 24 August 2018",
        withDriver: true,
        vehicle: 11,
        duration: 3,
        totalPrice: 8400,
        status: "completed",
        remarks: "",
        customer: {
            name: "Lee Ang Ngok",
            phone: "+65 7899879",
            address: "Bishan View Lot #34-44"
        }
    },
    {
        id: 502,
        orderedAt: "Monday, 3 September 2018",
        timestamp: "03:12:33 PM",
        charteredFor: "Tuesday, 4 September 2018",
        withDriver: true,
        vehicle: 12,
        duration: 2,
        totalPrice: 6500,
        status: "completed",
        remarks: "Customer needs it fast",
        customer: {
            name: "David Silveria",
            phone: "+65 8293499",
            address: "6 Battery Road #34-900"
        }
    },
    {
        id: 503,
        orderedAt: "Friday, 20 September 2018",
        timestamp: "05:46:33 PM",
        charteredFor: "Saturday, 21 September 2018",
        withDriver: true,
        vehicle: 11,
        duration: 3,
        totalPrice: 8400,
        status: "cancelled",
        remarks: "",
        customer: {
            name: "Tan Hong",
            phone: "+65 6099899",
            address: "3 Park Drive #67-67"
        }
    },
    {
        id: 504,
        orderedAt: "Tuesday, 9 October 2018",
        timestamp: "05:46:33 PM",
        charteredFor: "Wednesday, 10 October 2018",
        withDriver: false,
        vehicle: 13,
        duration: 2,
        totalPrice: 4500,
        status: "cancelled",
        remarks: "Cancelled by customer",
        customer: {
            name: "Ronny Jamal",
            phone: "+65 7899879",
            address: "21 Lower Kent Ridge Rd"
        }
    },
    {
        id: 505,
        orderedAt: "Thursday, 13 September 2018",
        timestamp: "05:46:33 PM",
        charteredFor: "Friday, 14 September 2018",
        withDriver: true,
        vehicle: 14,
        duration: 3,
        totalPrice: 7700,
        status: "completed",
        remarks: "",
        customer: {
            name: "Lee Ang Ngok",
            phone: "+65 7899879",
            address: "Bishan View Lot #34-44"
        }
    },
    {
        id: 506,
        orderedAt: "Wednesday, 24 October 2018",
        timestamp: "05:26:33 AM",
        charteredFor: "Friday, 26 October 2018",
        withDriver: true,
        vehicle: 15,
        duration: 3,
        totalPrice: 9000,
        status: "on-going",
        remarks: "Needs the car to be cleaned up first",
        customer: {
            name: "Lom Kwik",
            phone: "+65 2223433",
            address: "1 Gul Crescent"
        }
    },
    {
        id: 507,
        orderedAt: "Wednesday, 24 October 2018",
        timestamp: "05:26:33 AM",
        charteredFor: "Saturday, 27 October 2018",
        withDriver: true,
        vehicle: 11,
        duration: 1,
        totalPrice: 2300,
        status: "on-going",
        remarks: "",
        customer: {
            name: "Abdul Samad",
            phone: "+65 8404303",
            address: "10 Collyer Quay 42-01"
        }
    },
    {
        id: 508,
        orderedAt: "Sunday, 1 August 2018",
        timestamp: "05:11:33 PM",
        charteredFor: "Friday, 6 August 2018",
        withDriver: false,
        vehicle: 11,
        duration: 4,
        totalPrice: 8000,
        status: "completed",
        remarks: "",
        customer: {
            name: "James Silvan",
            phone: "+65 8098799",
            address: "6 Temasek Blvd"
        }
    }
]

export const vehicles = [
    {
        id: 11,
        title: "Nissan Maxima SV Premium",
        make: "Nissan",
        model: "Maxima",
        year: "2015",
        kilometers: 39000,
        bodyType: "sedan",
        engine: "V-6 cyl",
        transmission: "Dual-Clutch Automatic",
        exteriorColor: "Dark Grey",
        interiorColor: "Jet Black",
        fuelType: "Gasoline Fuel",
        price: 2800,
        images: ["https://www.lakenormaninfiniti.com/inventoryphotos/909/1n4aa5ap4ec910966/ip/2.jpg", "https://www.eastcharlottenissan.com/inventoryphotos/909/1n4aa5ap4ec910966/ip/6.jpg"],
        extras: ["Security System", "Air Conditioning", "Alloy Wheels", "Anti-lock Brakes", "Anti-Theft", "Anti-Starter", "Dual Airbag", "Intermittent Wipers", "Keyless Entry", "Power Mirrors", "Power Seat", "Power Steering", "CD Player"]
    },
    {
        id: 12,
        title: "Toyota RAV4 Limited V4",
        make: "Toyota",
        model: "RAV4",
        year: "2014",
        kilometers: 29000,
        bodyType: "SUV",
        engine: "V-6 cyl",
        transmission: "5-speed Manual",
        exteriorColor: "White",
        interiorColor: "Black",
        fuelType: "Gasoline Fuel",
        price: 2100,
        images: ["https://2-photos7.motorcar.com/new-2018-toyota-rav4-seawd-8481-17850305-5-1024.jpg", "https://4-photos7.motorcar.com/used-2018-toyota-rav4-leawd-8481-17400334-8-1024.jpg"],
        extras: ["Security System", "Air Conditioning", "Alloy Wheels", "Anti-lock Brakes", "Anti-Theft", "Anti-Starter", "Dual Airbag", "Intermittent Wipers", "Keyless Entry", "Power Mirrors"]
    },
    {
        id: 13,
        title: "Mercedes-Benz CLA45 AMG",
        make: "Mercedes-Benz",
        model: "CLA45 AMG",
        year: "2017",
        kilometers: 15000,
        bodyType: "sedan",
        engine: "V-8 cyl",
        transmission: "Dual-Clutch Automatic",
        exteriorColor: "Grey",
        interiorColor: "Maroon",
        fuelType: "Gasoline Fuel",
        price: 1800,
        images: ["https://carsales.pxcrush.net/carsales/car/dealer/05c89ea72da3249cc28cd28108b06fc5.jpg?pxc_method=crop&pxc_size=670%2C447"],
        extras: ["Security System", "Air Conditioning", "Alloy Wheels", "Anti-lock Brakes", "Anti-Theft", "Anti-Starter", "Dual Airbag", "Intermittent Wipers", "Keyless Entry", "Power Mirrors", "Power Seat"]
    },
    {
        id: 14,
        title: "Audi S4 3.0L V6 Turbo",
        make: "Audi",
        model: "S4",
        year: "2014",
        kilometers: 10000,
        bodyType: "sedan",
        engine: "V-6 cyl",
        transmission: "Dual-Clutch Automatic",
        exteriorColor: "Dark Grey",
        interiorColor: "Jet Black",
        fuelType: "Gasoline Fuel",
        price: 2000,
        images: ["https://i2.wp.com/www.enthusiast-owned.com/wp-content/uploads/Ken_S4_01.jpg", "https://farm5.static.flickr.com/4145/4985501838_cfee50aed8_b.jpg"],
        extras: ["Security System", "Air Conditioning", "Alloy Wheels", "Anti-lock Brakes", "Anti-Theft", "Anti-Starter", "Dual Airbag", "Power Mirrors", "Power Seat", "Power Steering", "CD Player"]
    },
    {
        id: 15,
        title: "Ferrari F430 483 HP",
        make: "Ferrari",
        model: "F430",
        year: "2013",
        kilometers: 19000,
        bodyType: "coupe",
        engine: "DOHC inline-6",
        transmission: "6-speed Manual",
        exteriorColor: "Black",
        interiorColor: "Jet Black",
        fuelType: "Gasoline Fuel",
        price: 3300,
        images: ["http://2-photos.motorcar.com/used-2007-ferrari-f430-basetrim-6383-5734106-1-640.jpg", "https://e0415552026373f497aa-79445249ccb41a60f7b99c8ef6df8604.ssl.cf3.rackcdn.com/4_async_wmarker/2018/7/23/1e98a82cd5df857f1c4cb3bf74b69691e0cd3940/main.jpeg"],
        extras: ["Security System", "Air Conditioning", "Anti-Starter", "Dual Airbag", "Intermittent Wipers", "Keyless Entry", "Power Mirrors", "Power Seat", "Power Steering", "CD Player"]
    },
]