type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Jollof Rice",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/jollof.jpg",
    price: 1200,
    options: [
      {
        title: "Small",
        additionalPrice: 500,
      },
      {
        title: "Medium",
        additionalPrice: 700,
      },
      {
        title: "Large",
        additionalPrice: 100,
      },
    ],
  },
  {
    id: 2,
    title: "Pounded Yam",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/pounded-yam.jpg",
    price: 500,
    options: [
      {
        title: "Small",
        additionalPrice: 200,
      },
      {
        title: "Medium",
        additionalPrice: 300,
      },
      {
        title: "Large",
        additionalPrice: 400,
      },
    ],
  },
  {
    id: 3,
    title: "Ofada Rice",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/ofada.jpg",
    price: 1000,
    options: [
      {
        title: "Small",
        additionalPrice: 400,
      },
      {
        title: "Medium",
        additionalPrice: 500,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 4,
    title: "Goat Meat Pepper Soup",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/goat-pepper.jpg",
    price: 1500,
    options: [
      {
        title: "Small",
        additionalPrice: 500,
      },
      {
        title: "Medium",
        additionalPrice: 1000,
      },
      {
        title: "Large",
        additionalPrice: 1500,
      },
    ],
  },
  {
    id: 5,
    title: "Catfish Pepper soup",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/cat-pepper.jpg",
    price: 1500,
    options: [
      {
        title: "Small",
        additionalPrice: 500,
      },
      {
        title: "Medium",
        additionalPrice: 1000,
      },
      {
        title: "Large",
        additionalPrice: 1500,
      },
    ],
  },
  {
    id: 6,
    title: "Isi Ewu",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/isi-ewu.jpg",
    price: 1200,
    options: [
      {
        title: "Small",
        additionalPrice: 400,
      },
      {
        title: "Medium",
        additionalPrice: 600,
      },
      {
        title: "Large",
        additionalPrice: 800,
      },
    ],
  },
  {
    id: 7,
    title: "Yam Porridge",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/yam-porridge.jpg",
    price: 800,
    options: [
      {
        title: "Small",
        additionalPrice: 200,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 8,
    title: "Eba and Turkey",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/eba.jpg",
    price: 1300,
    options: [
      {
        title: "Small",
        additionalPrice: 300,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 9,
    title: "Egusi",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/egusi.jpg",
    price: 300,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 200,
      },
      {
        title: "Large",
        additionalPrice: 300,
      },
    ],
  },
  {
    id: 10,
    title: "Oha Soup",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/oha.jpg",
    price: 500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 300,
      },
      {
        title: "Large",
        additionalPrice: 500,
      },
    ],
  },
];

export const local: Products = [
  {
    id: 1,
    title: "Jollof Rice",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/jollof.jpg",
    price: 1200,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 2,
    title: "Yam Porridge",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/yam-porridge.jpg",
    price: 800,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 3,
    title: "Ofada Rice",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/ofada.jpg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 800,
      },
      {
        title: "Large",
        additionalPrice: 1000,
      },
    ],
  },
  {
    id: 4,
    title: "Pounded Yam",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/pounded-yam.jpg",
    price: 700,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 200,
      },
      {
        title: "Large",
        additionalPrice: 300,
      },
    ],
  },
  {
    id: 5,
    title: "Eba",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/eba.jpg",
    price: 400,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 100,
      },
      {
        title: "Large",
        additionalPrice: 200,
      },
    ],
  },
  {
    id: 6,
    title: "Rice and Stew",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/rice.jpg",
    price: 1200,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 300,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
];

export const continental: Products = [
  {
    id: 1,
    title: "Mac and Cheese",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/mac-cheese.jpg",
    price: 3500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 1500,
      },
      {
        title: "Large",
        additionalPrice: 2000,
      },
    ],
  },
  {
    id: 2,
    title: "French Fries",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/french-fries.jpg",
    price: 3000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 1000,
      },
      {
        title: "Large",
        additionalPrice: 1500,
      },
    ],
  },
  {
    id: 3,
    title: "Lobster",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/lobster.jpg",
    price: 10500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 4,
    title: "Burger",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/burger.jpg",
    price: 2500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 800,
      },
      {
        title: "Large",
        additionalPrice: 1200,
      },
    ],
  },
  {
    id: 5,
    title: "Sushi Rolls",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/sushi.jpg",
    price: 13000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5000,
      },
      {
        title: "Large",
        additionalPrice: 7000,
      },
    ],
  },
  {
    id: 6,
    title: "Pizza",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/pizza.jpg",
    price: 6500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2000,
      },
      {
        title: "Large",
        additionalPrice: 3000,
      },
    ],
  },
];

export const smallchops: Products = [
  {
    id: 1,
    title: "Chin Chin",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/chin-chin.jpg",
    price: 1200,
    options: [
      {
        title: "Small",
        additionalPrice: 200,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 2,
    title: "Egg Roll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/egg-roll.jpg",
    price: 800,
    options: [
      {
        title: "Small",
        additionalPrice: 200,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 600,
      },
    ],
  },
  {
    id: 3,
    title: "Dodo",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/dodo.jpg",
    price: 500,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Masa",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/masa.jpg",
    price: 1200,
    options: [
      {
        title: "Small",
        additionalPrice: 400,
      },
      {
        title: "Medium",
        additionalPrice: 300,
      },
      {
        title: "Large",
        additionalPrice: 200,
      },
    ],
  },
  {
    id: 5,
    title: "Samosa",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/samosa.jpg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 500,
      },
      {
        title: "Medium",
        additionalPrice: 700,
      },
      {
        title: "Large",
        additionalPrice: 1000,
      },
    ],
  },
  {
    id: 6,
    title: "Shawarma",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
    img: "/sharwama.jpg",
    price: 1500,
    options: [
      {
        title: "Small",
        additionalPrice: 200,
      },
      {
        title: "Medium",
        additionalPrice: 300,
      },
      {
        title: "Large",
        additionalPrice: 500,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem, temporibus quod cumque hic omnis totam illum aliquam. Reiciendis sunt corporis eaque velit odit dignissimos atque!",
  img: "/masa.jpg",
  price: 1200,
  options: [
    {
      title: "Small",
      additionalPrice: 200,
    },
    {
      title: "Medium",
      additionalPrice: 400,
    },
    {
      title: "Large",
      additionalPrice: 600,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "menu/localdish",
    title: "Local",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem!",
    img: "/localdish.png",
    color: "white",
  },
  {
    id: 2,
    slug: "menu/continentaldish",
    title: "Continental",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem!",
    img: "/continentaldish.png",
    color: "black",
  },
  {
    id: 3,
    slug: "menu/smallchops",
    title: "Chops",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero quo nostrum libero quidem!",
    img: "/snacks.png",
    color: "white",
  },
];
