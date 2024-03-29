import { AiFillStar } from "react-icons/ai";

const Productdata = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.zlZI0kLKy12G1tUBd2P-ugHaHa&pid=Api&P=0&h=180",
    title: "Classic Leash",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 540",
    newPrice: "200",
    company: "Blitz",
    color: "pink",
    category: "Leashes",
    Description: "Breathable and gentle on even the most sensitive skin, leaving no more chafing or irritation. Reinforced webbing stands up to playful pulls and adventurous leaps, ensuring carefree walks for years to come.Perfect for comfortable walking and effective training.",
    id: "1"
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.qfeFdRdK_h1gh1vBq1u2RAHaHa&pid=Api&P=0&h=180",
    title: "Heavy Duty Retractable Leash",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 1400",
    newPrice: "800",
    company: "Rage",
    color: "black",
    category: "Leashes",
    Description: "Durable polyester webbing ensures long-lasting strength; reflective stitching for improved nighttime visibility.Features reflective stitching, which helps improve visibility at night—an important safety factor when out walking your dog",
    id: "2"
  },

  {
    img: "https://tse4.mm.bing.net/th?id=OIP.sstanDE3IMqPcW8KOqDGxAHaKn&pid=Api&P=0&h=180",
    title: "Meow Mix Cat Food",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 600",
    newPrice: "300",
    company: "Meow Mix",
    color:"yellow",
    Description: "Taurine for healthy heart.Healthy skin and beautiful coat.Hairball protection.Control urinary pH",
    id: "3"
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.hYWtZ5l2PyRGDnz46VGf8AHaHa&pid=Api&P=0&h=180",
    title: "Pedigree Dog Food",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 700",
    newPrice: "200",
    company: "Pedigree",
    color: "yellow",
    category: "Pet Food",
    Description: "Complete and balanced dry dog food in kibble form for adult dogs which can be served as sole meal for your dog.Consumption Pedigree Dry Dog food in Chicken and Vegetables flavour by dogs aids in strong muscles, bones & teeth and healthier & shinier coat for your dog",
    id: "4"
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.5rUPu_6i8y4Hvfpqhm_rCQHaHa&pid=Api&P=0&h=180",
    title: "Pure Fun Bird Food",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 400",
    newPrice: "100",
    company: "Pure Fun",
    color: "purple",
    category: "Pet Food",
    Description: "Facilitates healthy digestion and maximum absorption of nutrition. Riched with essential vitamins and minerals, it boosts overall immunity and maintains ideal body weight.",
    id: "5"
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.smAJQzyUsI46G0oTA8kqKAHaHa&pid=Api&P=0&h=180",
    title: "Dog Chewer",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 300",
    newPrice: "50",
    company: "Eimeli",
    color: "white",
    category: "Pet Toys",
    Description: "These toys are more durable than cuddle buddy and teething toys, they are a perfect fit for senior dogs or moderate chewers who like to chew, tug, snuggle and fetch. Not recommended for aggressive chewers.",
    id:"6"
  },

  {
    img: "https://tse3.mm.bing.net/th?id=OIP.h8G85igZE5wti7QOBri1ngHaFi&pid=Api&P=0&h=180",
    title: "Cat Scratcher Toy",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 400",
    newPrice: "300",
    company: "Blitz",
    color: "brown",
    category: "Pet Toys",
    Description: "Premium scratching textures design, our cat scratching pad more closely mimics tree bark. Different touching experience makes it more irresistible for the cats. More importantly with this design, The cat scratch pad is 50% more durable than the normal ones",
    id: "7"  },

  {
    img: "https://tse2.mm.bing.net/th?id=OIP.9B4uygtLaUqfXb8QVYSnnAHaHI&pid=Api&P=0&h=180",
    title: "Bellpull Bird Toy",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 100",
    newPrice: "80",
    company: "Bonkers",
    color: "yellow",
    category: "Pet Toys",
    Description: "Birds love toys that make noise and have a special fondness for bells. Perfect size for Caiques, Conures, Quakers and Ring necks.",
    id: "8"    
  },

  {
    img: "https://tse4.mm.bing.net/th?id=OIP.zSJOn0lbxBmAyXbYcYVmEQHaHa&pid=Api&P=0&h=180",
    title: "Waterproof Dog Vest",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 1500",
    newPrice: "200",
    company: "Blitz",
    color: "black",
    category: "Pet Clothes",
    Description: "The dog coat is made of windproof & Waterproof polyester fabric & Cotton, have double-layered fleece liner and filled with thick cotton. Light-weight and breathable design to provide all-day warmth and comfort in cold winter weather.",
    id: "9"

  },

  {
    img: "https://tse2.mm.bing.net/th?id=OIP.sckNw_R6HjkOWpMpx4RWbQHaHa&pid=Api&P=0&h=180",
    title: "Cat Jacket",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 1600",
    newPrice: "500",
    company: "Bonkers",
    color: "blue",
    category: "Pet Clothes",
    Description: "Outside with Three-part gel, splashproof, windproof and snowproof, inside layer is polar fleece which touches soft and keeps warm well, especially good for outdoor walking and playing.",
    id: "10"

  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.dcn1DFZ_A8nJxtDldZ4ZfgHaHa&pid=Api&P=0&h=180",
    title: "Parrot Tux",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 2200",
    newPrice: "2000",
    company: "Bonkers",
    color: "black",
    category: "Pet Clothes",
    Description: "Parrot clothes are made of high-quality waterproof fabric, skin-friendly, soft, durable, easy to clean, can be used repeatedly, ultra-thin, breathable, light weight, does not stimulate the skin, is very safe for birds.",
    id: "11"

  },
  {
    img: "https://ipetcompanion.net/wp-content/uploads/2019/11/4.-Yizhi-Miaow-Escape-Proof-Kitten-Harness-with-Leash-1024x1024.jpg",
    title: " Cat Harness And Leash",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 700",
    newPrice: "500",
    company: "Rage",
    color: "black",
    category: "Leashes",
    Description: "This Cat Harness and Leash Escape proof Made of Breathable Mesh fabric , Very Lightweight and Comfortable to Wear. The Cat doesn't need to be Weight-bearing at all. With soft Padding Edge, the Cat can wear this Harness all day",
    id: "12"

  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.xr_zGdKzQOL3dlaK1dy84wHaHa&pid=Api&P=0&h=180",
    title: " Leather Dog Leash",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 500",
    newPrice: "100",
    company: "Bonkers",
    color: "yellow",
    category: "Leashes",
    Description: "Measures 25 feet long.Durable metal clips ensure quick, easy connections.Weighs only 0.4 kgs",
    id: "13"

  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.-bQLD7wkVf51ASh-X-CGrgHaHa&pid=Api&P=0&h=180",
    title: "Birds Diet Food",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 1000",
    newPrice: "500",
    company: "Hartz",
    color: "yellow",
    category: "Pet Food",
    Description: "Food contains 8-10 types of seed mix. All the seeds are freshly sourced from farmers, cleaned in factory with machine.",
    id: "14"

  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.3FJybk3sIizIpL4j4VdpzAHaHa&pid=Api&P=0&h=180",
    title: "Dry Cat Food",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 1000",
    newPrice: "500",
    company: "Hartz",
    color: "pink",
    category: "Pet Food",
    Description: "Crunchy chunks packed with real fish/chicken flavour.Made with high-quality ingredients & nutrition for pet cats.Special blend of nutrients support the cat's vital system",
    id: "15"

  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.bcF1eeJCThuk_F_PQSvqXwHaHa&pid=Api&P=0&h=180",
    title: "Cat Fishing Rod",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "Rs 1000",
    newPrice: "500",
    company: "Hartz",
    color: "blue",
    category: "Pet Toys",
    Description: "Promotes the natural instinct of hunting and chasing prey. More than just a toy, spend quality time playing with your cat",
    id: "16"

  },
  
];

export default Productdata;