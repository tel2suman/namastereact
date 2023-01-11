//with basic javascript

// const heading = document.createElement("h1");

//     heading.innerHTML = "hello world from react js";

//     const root = document.getElementById("root");

//     root.appendChild(heading);

//With react dom

import React from "react";

import ReactDOM, { createRoot } from "react-dom/client";

import navlogo from "./images/navbar-logo.png";

import bootstrapicons from "./node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="topnav">
        <a href="/">
          <img src={navlogo} className="logo-image" alt="logo" />
        </a>
        {/* <div className="search-container">
                    <form>
                        <input type="text" placeholder="Search.." name="search"/>
                        <button>Submit</button>
                    </form>
                </div> */}
        <nav>
          <ul className="menu">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">Faq</a>
            </li>
            <a href="#home" className="active">
              <i className="bi bi-cart"></i>
            </a>
          </ul>
          <div className="login-btn">
            <a href="" className="btn btn-login">
              Login or Signup
            </a>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

const RestaurentList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "573520",
      name: "La Pino'z Pizza",
      uuid: "3702a5e3-0c22-42c4-9e7a-9465516b45af",
      city: "7",
      area: "Lake Town",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "lzizp47mjiibrevh2psy",
      cuisines: ["Pizzas", "Italian", "Snacks", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "29 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "la-pino-z-pizza-lake-town-lake-town",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "956  JESSORE ROAD  SHOP NO 9 AND 9A  BLOCK A  GOKULDHAM COMPLEX  P S LAKE TOWN, WARD NO 20  SOUTH DUM DUM MUNICIPALITY  North Twenty Four Parganas  West Bengal 700055",
      locality: "SOUTH DUM DUM MUNICIPALITY",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5699243~p=1~eid=00000185-9855-ee87-1f26-6a6e00220161",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "573520",
        deliveryTime: 29,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "208641",
      name: "Rajdhani Food Express",
      uuid: "25eebe28-1b1f-4eed-bcc2-4e81fc7ac399",
      city: "7",
      area: "Dum Dum Park",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "y5nxmki4st1cwp1fndmq",
      cuisines: ["Chinese", "Continental", "Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "28 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "rajdhani-food-express-lake-town-lake-town",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "50 Shyamnagar Road, Santilaya Appartment Shop No-3, P.S- DumDum Kol-700055, District - North Twenty Four Parganas, STATE, West Bengal",
      locality: "Lake Town",
      parentId: 165477,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "208641",
        deliveryTime: 28,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "565707",
      name: "Kolkata@99",
      uuid: "27119f07-7415-4632-a208-58c57de91ee5",
      city: "7",
      area: "Rajarhat",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kryot10xvvr6x7hymkbg",
      cuisines: ["Biryani", "North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "39 MINS",
      lastMileTravel: 2.5999999046325684,
      slugs: {
        restaurant: "kolkata-99-lake-town-lake-town",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "16/352,JYANGRA,SUKANTA PALLY, P.S.BAGUIATI,KOLKATA - 700059, WARD NO-13, BIDHANNAGAR-RAJARHAT MUNICIPAL CORPORATION, North Twenty Four Parganas, West Bengal - 700059",
      locality: "Lake Town",
      parentId: 120048,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "565707",
        deliveryTime: 39,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 2.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "13926",
      name: "Wow! Momo",
      uuid: "dd180ad5-16cc-4eff-9b3a-46039effce05",
      city: "7",
      area: "Lake Town",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "fvktsyhe22tanr7kbzo7",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "31 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "wow-momo-lake-town-lake-town",
        city: "kolkata",
      },
      cityState: "7",
      address: "217, Block B,Lake Town, Kolkata",
      locality: "Block B",
      parentId: 1776,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5703236~p=4~eid=00000185-9855-ee87-1f26-6a6f00220411",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "13926",
        deliveryTime: 31,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "427664",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      uuid: "1bf9e1b9-ab99-4ac0-99da-9a07e6ea78f6",
      city: "7",
      area: "Rajarhat",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "fykoxtg3gadbaz831ir4",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "25 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant:
          "kwality-walls-frozen-dessert-and-ice-cream-shop-rajarhat-rajarhat-3",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "PUSHPA JAISWAL: ATGHARA, JHAUTALA, LOKENATH PARK, HATIARA, WARD NO-12, NORTH 24 PARGANAS, WEST BENGAL-700157",
      locality: "WARD NO-12",
      parentId: 582,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 on select items | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 on select items | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5669304~p=10~eid=00000185-9855-ee87-1f26-6a7100220a17",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "427664",
        deliveryTime: 25,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "634435",
    "name": "Rajlaxmi Food House",
    "uuid": "f96f9380-d366-4f4e-ba42-b04c4d4c7786",
    "city": "7",
    "area": "Lake Town",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "yoluvnnhq76jyznasj4f",
    "cuisines": [
    "Pizzas",
    "Beverages"
    ],
    "tags": [ ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "36 MINS",
    "lastMileTravel": 0.5,
    "slugs": {
    "restaurant": "rajlaxmi-food-house-lake-town-lake-town",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "TARA MA APARTMENT DB 20 RAIL PUKUR ROAD DESH BANDHU NAGAR BAGAUHATI,WARD NO10.BIDHANAHAR RAJARHAT MUNICIPAL CORPORATION,NORTH 24 PARGANAS WEST BENAGAL-700059",
    "locality": "Rail pukar road",
    "parentId": 382270,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [ ],
    "aggregatedDiscountInfo": {
    "header": "50% off",
    "shortDescriptionList": [
    {
    "meta": "50% off | Use WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "50% off up to ₹90 | Use code WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "50% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "50% off up to ₹90 | Use code WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [ ],
    "feeDetails": {
    "fees": [ ],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [ ],
    "textBased": [ ],
    "textExtendedBadges": [ ]
    },
    "lastMileTravelString": "0.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "634435",
    "deliveryTime": 36,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "lastMileTravel": 0.5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "634430",
    "name": "Rasoi Jalpan",
    "uuid": "de9b5ea7-2594-45d8-b298-32705fab8a7a",
    "city": "7",
    "area": "Lake Town",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "njydy7zq4jhbyoi9bwus",
    "cuisines": [
    "Pizzas",
    "Beverages",
    "Italian"
    ],
    "tags": [ ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "slaString": "33 MINS",
    "lastMileTravel": 0.5,
    "slugs": {
    "restaurant": "rasoi-jalpan-lake-town-lake-town-4",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "Tara Ma APARTMENT DB20 RAILPUKUR ROAD DESH BANDHUNAGAR,BAGAUHATI, WARD NO-10,BIDHANAGAR-RAJARHAT,MUNICIPAL CORPORATION,NORTH TWENTY FOUR PARGANAS,WEST BENGAL-700059",
    "locality": "Rail pukar road",
    "parentId": 18601,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [ ],
    "aggregatedDiscountInfo": {
    "header": "50% off",
    "shortDescriptionList": [
    {
    "meta": "50% off | Use WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "50% off up to ₹90 | Use code WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "50% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "50% off up to ₹90 | Use code WELCOME50",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [ ],
    "feeDetails": {
    "fees": [ ],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [ ],
    "textBased": [ ],
    "textExtendedBadges": [ ]
    },
    "lastMileTravelString": "0.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "634430",
    "deliveryTime": 33,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "lastMileTravel": 0.5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    }
];

const RestaurentCard = ({
  cloudinaryImageId, 
  name, 
  cuisines, 
  avgRating 
}) => {

  return (
    <React.Fragment>
      <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        +cloudinaryImageId} />
        <div className="card-info">
          <h2>{name}</h2>
          <p>{cuisines.join(",")}</p>
          <h4>{avgRating} stars</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

const Body = () => {
  return (
    <React.Fragment>
      <div className="restaurant-list">
      {
        RestaurentList.map(restaurant => {
          return <RestaurentCard {...restaurant.data} key={restaurant.data.id} />
        })
      }
        {/* <RestaurentCard {...RestaurentList[0].data} />
        <RestaurentCard {...RestaurentList[1].data}/>
        <RestaurentCard {...RestaurentList[2].data}/>
        <RestaurentCard {...RestaurentList[3].data}/>
        <RestaurentCard {...RestaurentList[4].data}/>
        <RestaurentCard {...RestaurentList[5].data}/>
        <RestaurentCard {...RestaurentList[6].data}/> */}
      </div>
    </React.Fragment>
  );
};

const Footer = () => {
  return <h4>footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
