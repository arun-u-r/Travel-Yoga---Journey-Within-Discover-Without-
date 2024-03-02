import tourImg01 from "../images/tour1.jpg";
import tourImg02 from "../images/tour2.jpg";
import tourImg03 from "../images/tour3.jpg";
import tourImg04 from "../images/tour4.jpg";
import tourImg05 from "../images/tour5.jpg";
import tourImg06 from "../images/tour6.jpg";
import tourImg07 from "../images/tour7.jpg";
import tourImg09 from "../images/tour9.jpg";
import tourImg10 from "../images/tour10.jpg";
import tourImg11 from "../images/tour11.jpg";
import tourImg12 from "../images/img12.jpg";
import tourImg13 from "../images/img13.jpg";
import tourImg14 from "../images/img14.jpg";
import tourImg15 from "../images/img15.jpg";
import tourImg16 from "../images/img16.JPG";
import tourImg17 from "../images/her.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    price: 799,
    maxGroupSize: 10,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo:tourImg01,
    featured: false,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 599,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "culture, art, opera, literature",
    city: "Italy",
    distance: 500,
    price: 1199,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "eiffel tower, paris",
    city: "paris, France",
    distance: 500,
    price: 8599,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 7099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 6999,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jing",
        rating: 3.8,
      },
    ],
    avgRating: 4,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 2199,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "culture, art,sushi",
    city: "Thailand",
    distance: 500,
    price: 899,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "William",
        rating: 3.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "09",
    title: "Fiji , film, and fashion",
    city: "fiji",
    distance: 400,
    price: 10099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "jina",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "10",
    title: "Anjuna, Goa",
    city: "Goa, India",
    distance: 400,
    price: 200,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "11",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 1400,
    price: 2099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg12,
    featured: false,
  },
  {
    id: "12",
    title: "Miami, Florida",
    city: "USA",
    distance: 1400,
    price: 2099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg13,
    featured: true,
  },
  {
    id: "13",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 1400,
    price: 2099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg14,
    featured: true,
  },
  {
    id: "14",
    title: "kulu, manali ",
    city: "India",
    distance: 1400,
    price: 2099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg15,
    featured: false,
  },
  {
    id: "15",
    title: "Sahara, ",
    city: "Saudi Arabia",
    distance: 900,
    price: 1099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg16,
    featured: true,
  },
  {
    id: "16",
    title: "kodaikanal ",
    city: "India, Tamilnadu",
    distance: 900,
    price: 1099,
    maxGroupSize: 8,
    address:'some where over the rainbow',
    desc: "this is the description",
    reviews: [
      {
        name: "arun",
        rating: 4,
      },
    ],
    avgRating: 4.1,
    photo: tourImg17,
    featured: false,
  },
];

export default tours;