import React from 'react';
import { useState } from 'react';

const BookingHotel = () => {

    const [hotelsDrop, setHotelsDrop] = useState(false)
    const [checkInDrop, setCheckInDrop] = useState(false)
    const [checkOutDrop, setCheckOutDrop] = useState(false)
    const [pesangerDrop, setPesangerDrop] = useState(false)

    // // Hotel Items
    // const hotelsDb = [
    //     {
    //         name: "Hotel The Cox Today",
    //         address: "Plot - 07, Road - 02, Hotel Motel Zone Kolatoly Road, Cox's Bazar 4700",
    //         phone: "01755-598446",
    //         website: "https://hotelthecoxtoday.com",
    //         hid: "htct1",
    //         images: [
    //             ""
    //         ],
    //         fs: [
    //             {
    //                 name: "5-star hotel",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free breakfast",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free Wi-Fi",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free parking",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Outdoor pool",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Hot tub",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Air conditioning",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Fitness centre",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Spa",
    //                 icon: ""
    //             }
    //         ]
    //     },
    //     {
    //         name: "Sayeman Beach Resort",
    //         address: "Marine Drive, Road, Cox's Bazar 4700",
    //         phone: "01401-777888",
    //         website: "https://sayemanresort.com",
    //         hid: "sbr1",
    //         images: [
    //             "https://lh3.googleusercontent.com/p/AF1QipO9H7TBKj84bvducGg0fkhmQ8bic5tMuhIJoWnV",
    //             "https://lh3.googleusercontent.com/p/AF1QipPC6lj42V2ttAd3RjNViz_0TeBcfgSNwNCiO1IV",
    //             "https://lh3.googleusercontent.com/p/AF1QipPgh9jL17sYzwuC-aX9sxAmmXkK-5uKuojKwOLB",
    //             "https://lh3.googleusercontent.com/p/AF1QipORl-OtRungw_mhWSEpxZt02zM6eh_39CydYK68",
    //             "https://lh3.googleusercontent.com/p/AF1QipNyXdLX_QodlzTUW9Ml9_xG5ez247X-cjjGBuaX",
    //             "https://lh3.googleusercontent.com/p/AF1QipNHB3Na27WkK69fnz9e02uDS4xLdgVe_vcYBNwB"
    //         ],
    //         fs: [
    //             {
    //                 name: "4-star hotel",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free breakfast",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free Wi-Fi",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free parking",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Outdoor pool",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Beach Access",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Air conditioning",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Fitness centre",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Spa",
    //                 icon: ""
    //             }
    //         ]
    //     },
    //     {
    //         name: "Long Beach Hotel Cox's Bazar",
    //         address: "14, Kalatoli, Hotel-Motel Zone, 4700",
    //         phone: "01755-660051",
    //         website: "https://longbeachhotelbd.com/",
    //         hid: "lbhcb1",
    //         images: [
    //             "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283183777.jpg?k=899b1542446c88268f790cf9968ddeffe42a7b24c7b228069de09413d5275822&o=&hp=1"
    //         ],
    //         fs: [
    //             {
    //                 name: "5-star hotel",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free breakfast",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free Wi-Fi",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Free parking",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Outdoor pool",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Hot tub",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Air conditioning",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Fitness centre",
    //                 icon: ""
    //             },
    //             {
    //                 name: "Spa",
    //                 icon: ""
    //             }
    //         ]
    //     },
    //     // {
    //     //     name: "",
    //     //     address: "",
    //     //     phone: "",
    //     //     website: "",
    //     //     hid: "htct1",
    //     //     images: [
    //     //         ""
    //     //     ],
    //     //     fs: [
    //     //         {
    //     //             name: "5-star hotel",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free breakfast",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free Wi-Fi",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free parking",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Outdoor pool",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Hot tub",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Air conditioning",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Fitness centre",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Spa",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "",
    //     //             icon: ""
    //     //         }
    //     //     ]
    //     // },
    //     // {
    //     //     name: "",
    //     //     address: "",
    //     //     phone: "",
    //     //     website: "",
    //     //     hid: "htct1",
    //     //     images: [
    //     //         ""
    //     //     ],
    //     //     fs: [
    //     //         {
    //     //             name: "5-star hotel",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free breakfast",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free Wi-Fi",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free parking",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Outdoor pool",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Hot tub",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Air conditioning",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Fitness centre",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Spa",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "",
    //     //             icon: ""
    //     //         }
    //     //     ]
    //     // },
    //     // {
    //     //     name: "",
    //     //     address: "",
    //     //     phone: "",
    //     //     website: "",
    //     //     hid: "htct1",
    //     //     images: [
    //     //         ""
    //     //     ],
    //     //     fs: [
    //     //         {
    //     //             name: "5-star hotel",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free breakfast",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free Wi-Fi",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free parking",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Outdoor pool",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Hot tub",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Air conditioning",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Fitness centre",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Spa",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "",
    //     //             icon: ""
    //     //         }
    //     //     ]
    //     // },
    //     // {
    //     //     name: "",
    //     //     address: "",
    //     //     phone: "",
    //     //     website: "",
    //     //     hid: "htct1",
    //     //     images: [
    //     //         ""
    //     //     ],
    //     //     fs: [
    //     //         {
    //     //             name: "5-star hotel",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free breakfast",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free Wi-Fi",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Free parking",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Outdoor pool",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Hot tub",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Air conditioning",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Fitness centre",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "Spa",
    //     //             icon: ""
    //     //         },
    //     //         {
    //     //             name: "",
    //     //             icon: ""
    //     //         }
    //     //     ]
    //     // },
    // ]

    // // Destinations Items
    // const destinationsDb = [
    //     {
    //         title: "Cox's bazar",
    //         cId: "cx1",
    //         img: "https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar-990x490.jpg",
    //     },
    //     {
    //         title: "Sajek",
    //         cId: "sj1",
    //         img: "https://whatson.guide/wp-content/uploads/2018/02/171782_185994668099908_100000681295465_502955_3502055_o.jpg",
    //     },
    //     {
    //         title: "St. Martin's",
    //         cId: "st1",
    //         img: "https://travelvibe.net/wp-content/uploads/2021/03/Most-attractive-tourist-attraction-of-bangladesh-saint-martin-e1615271792566.jpg",
    //     },
    //     {
    //         title: "Bandarban",
    //         cId: "bb1",
    //         img: "https://sgp1.digitaloceanspaces.com/cosmosgroup/news/y8eC0WBzPEEVyKIGGjcM3zKIgirEYLTLvioF3GaP.jpeg",
    //     },
    //     {
    //         title: "Rangamati",
    //         cId: "rg1",
    //         img: "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/6754470_suspension-bridge-kaptai-lake-rangamati.jpg",
    //     },
    //     {
    //         title: "Sylhet",
    //         cId: "sy1",
    //         img: "https://cdn.getyourguide.com/img/tour/5728ce3b7284b.jpeg/146.jpg",
    //     },
    //     {
    //         title: "Sreemangal",
    //         cId: "sr1",
    //         img: "https://img.locationscout.net/images/2017-01/sreemangal-bangladesh-1j57_l.jpeg",
    //     }
    // ]


    // // Tour Pacages
    // const toreItems = [
    //     {
    //         title: "Cox's bazar Regular Trip",
    //         description: "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",
    //         price: 20000,
    //         cId: "cxreg1",
    //         imgs: [
    //             "https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar-990x490.jpg",
    //             "https://www.travelandexplorebd.com/storage/app/public/posts/March2020/9hyD6VMjOYYQqvkX0YtS.jpg",
    //             "https://images.unsplash.com/photo-1650096893088-4c36f7d8f184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //             "https://images.unsplash.com/photo-1649779584147-9077c8016eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
    //             "https://images.unsplash.com/photo-1608958723684-ffd89a6cca8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    //         ],
    //         day: 3,
    //         night: 2,
    //         person: 1,
    //         gidePrice: false,
    //         destinations: [
    //             "St. Martin's Island"
    //         ],
    //         destinationId: "cx1",
    //         bg: 'https://fervent-ardinghelli-1b9493.netlify.app/1.png'
    //     },
    //     {
    //         title: "Sajek 2 day 1 night",
    //         description: "Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet above sea level. Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.",
    //         price: 15000,
    //         cId: "sjreg1",
    //         img: [
    //             "https://whatson.guide/wp-content/uploads/2018/02/171782_185994668099908_100000681295465_502955_3502055_o.jpg",
    //             "https://images.unsplash.com/photo-1589307357647-4e11b161a2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80",
    //             "https://images.unsplash.com/photo-1589307357838-9ce2259ac411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    //             "https://images.unsplash.com/photo-1603191048213-16a132107a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    //             "https://images.unsplash.com/photo-1578128177156-30a236e03946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    //         ],
    //         day: 2,
    //         night: 1,
    //         person: 1,
    //         gidePrice: false,
    //         destinations: [
    //             "St. Martin's Island"
    //         ],
    //         destinationId: "sj1",
    //         bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/1200px-Sajek_Valley_2.jpg'
    //     },
    //     {
    //         title: "St. Martin's Prmium Tour",
    //         description: "Saint Martin is part of the Leeward Islands in the Caribbean Sea. It comprises 2 separate countries, divided between its northern French side, called Saint-Martin, and its southern Dutch side, Sint Maarten. The island is home to busy resort beaches and secluded coves. It's also known for fusion cuisine, vibrant nightlife and duty-free shops selling jewelry and liquor.",
    //         price: 20000,
    //         cId: "stpre1",
    //         img: [
    //             "https://images.unsplash.com/photo-1606546008984-41818b01968a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    //             "https://awalkintheworld.com/wp-content/uploads/2020/08/beach-saint-martins-island-bangladesh-1920x1080.jpg",
    //             "https://avijatrik.org/wp-content/uploads/2019/06/cover-3-870x555.jpg",
    //             "https://images.unsplash.com/photo-1585501296541-c2af5630245f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    //         ],
    //         day: 2,
    //         night: 1,
    //         person: 1,
    //         gidePrice: 200,
    //         destinations: [
    //             "St. Martin's Island"
    //         ],
    //         destinationId: "st1",
    //         bg: 'https://chokkhttps://www.theindependentbd.com/assets/news_images/St-Martin-as-its-territory.jpgor.com/wp-content/uploads/2018/10/Sreemangal.jpg'
    //     },
    // ]


    // Handle Dropdown
    const handleDropDown = (item) => {
        if (item === 'hotels') {
            if (hotelsDrop) {

            } else {

            }
        } else if (item === 'chack-in-date') {
            if (checkInDrop) {

            } else {

            }
        } else if (item === 'chack-out-date') {
            if (checkOutDrop) {

            } else {

            }
        } else if (item === 'pesanger') {
            if (pesangerDrop) {

            } else {

            }
        } else {

        }
    }


    return (
        <div className='booking-section-flight mt-5 row'>
            <div className="col-4 border bg-light p-2 text-start rounded">
                <button class="w-100 p-2 text-start bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: "none" }}>
                    <small className='text-uppercase'>Hotel</small>
                    <h5>Hotel The Cox Today</h5>
                    <small className=' text-uppercase'><b>Cox's Bazar,</b> Bangladesh</small>
                </button>
                {
                    hotelsDrop &&
                    <div className="">

                    </div>
                }
            </div>
            <div className="col-4">
                <div className=" border bg-light p-2 text-start w-100 rounded d-flex">

                </div>
            </div>
            <div className="col-4">
                <div className="border bg-light p-2 text-start w-100 rounded">

                </div>
            </div>
        </div>
    );
};

export default BookingHotel;