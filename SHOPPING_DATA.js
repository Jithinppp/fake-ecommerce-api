const SHOPPING_DATA = [
  {
    id: 1,
    category: "shoes",
    title: "Nike red sprint shoe",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 199,
  },
  {
    id: 2,
    category: "shoes",
    title: "Nike blue sneaker",
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 399,
  },
  {
    id: 3,
    category: "shoes",
    title: "Nike air max",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 99,
  },
  {
    id: 4,
    category: "shoes",
    title: "Adidas white sike sneaker",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 976,
  },
  {
    id: 4,
    category: "shoes",
    title: "Adidas white sike sneaker",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 383,
  },
  {
    id: 5,
    category: "shoes",
    title: "Nike mesh gray sneaker",
    image:
      "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 654,
  },
  {
    id: 6,
    category: "shoes",
    title: "Werner hereNow Red sneaker",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 896,
  },
  {
    id: 7,
    category: "shoes",
    title: "Adidas colorful v4",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 123,
  },
  {
    id: 8,
    category: "shoes",
    title: "Nike airborne shadow",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 875,
  },
  {
    id: 9,
    category: "shoes",
    title: "Nike green star v2",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 342,
  },
  {
    id: 10,
    category: "smartphones",
    title: "Xiaomi Mi 11 Lite 5G",
    image:
      "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 3222,
  },
  {
    id: 11,
    category: "smartphones",
    title: "iPhone 11 Pro Max — Space Gray",
    image:
      "https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 6744,
  },
  {
    id: 12,
    category: "smartphones",
    title: "Galaxy Z Flip",
    image:
      "https://images.unsplash.com/photo-1592813630413-1124aa567638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=585&q=80",
    price: 2312,
  },
  {
    id: 13,
    category: "smartphones",
    title: "Samsung Galaxy A52 5G",
    image:
      "https://images.unsplash.com/photo-1618214394482-caa124b8ad2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    price: 6473,
  },
  {
    id: 14,
    category: "smartphones",
    title: "Samsung Galaxy Note20 Ultra",
    image:
      "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    price: 9854,
  },
  {
    id: 15,
    category: "smartphones",
    title: "Samsung Galaxy S10",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 2343,
  },
  {
    id: 15,
    category: "smartphones",
    title: "Pixel 3a",
    image:
      "https://images.unsplash.com/photo-1587840178393-079769787b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 6886,
  },
  {
    id: 16,
    category: "smartphones",
    title: "Pixel 4a",
    image:
      "https://images.unsplash.com/photo-1599016012665-13b74bb3b528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    price: 2321,
  },
  {
    id: 17,
    category: "smartphones",
    title: "realme xt",
    image:
      "https://images.unsplash.com/photo-1631871633283-31be5e55a29a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 1211,
  },
  {
    id: 18,
    category: "smartphones",
    title: "OnePlus 8T",
    image:
      "https://images.unsplash.com/photo-1614796740292-50ae67262ff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=439&q=80",
    price: 5687,
  },
  {
    id: 19,
    category: "watches",
    title: "Hamilton Watches",
    image:
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    price: 5433,
  },
  {
    id: 20,
    category: "watches",
    title: "golden rolex",
    image:
      "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 64174,
  },
  {
    id: 21,
    category: "watches",
    title: "Omega Planet Ocean 600M",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2322,
  },
  {
    id: 22,
    category: "watches",
    title: "nomos gg32",
    image:
      "https://images.unsplash.com/photo-1554151447-b9d2197448f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 5656,
  },
  {
    id: 23,
    category: "watches",
    title: "Seiko Sarb033",
    image:
      "https://images.unsplash.com/photo-1612817159623-0399784fd0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 2344,
  },
  {
    id: 24,
    category: "watches",
    title: "ARBRE LONDON",
    image:
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 6545,
  },
  {
    id: 25,
    category: "watches",
    title: "Seiko SARB033",
    image:
      "https://images.unsplash.com/photo-1611353229530-f17036b8479a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 6877,
  },
  {
    id: 26,
    category: "watches",
    title: "Reloj Fossil",
    image:
      "https://images.unsplash.com/photo-1617317376997-8748e6862c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 3423,
  },
  {
    id: 27,
    category: "watches",
    title: "Daniel Philip",
    image:
      "https://images.unsplash.com/photo-1616928231359-fc8b7e244c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 8789,
  },
  {
    id: 28,
    category: "watches",
    title: "Orient Mako II USA White Dial dive",
    image:
      "https://images.unsplash.com/photo-1620421895918-b4e8c86648fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 6877,
  },
  {
    id: 29,
    category: "jackets",
    title: "brown shine jacket",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    price: 123,
  },
  {
    id: 30,
    category: "jackets",
    title: "leather snow jacket",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 432,
  },
  {
    id: 31,
    category: "jackets",
    title: "black leather",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    price: 332,
  },
  {
    id: 32,
    category: "jackets",
    title: "blue boom followers",
    image:
      "https://images.unsplash.com/photo-1552327359-d86398116072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80",
    price: 756,
  },
  {
    id: 33,
    category: "jackets",
    title: "expiration jean jacket",
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80",
    price: 346,
  },
  {
    id: 34,
    category: "jackets",
    title: "professional cool v1 suit",
    image:
      "https://images.unsplash.com/photo-1516431762806-5a41e2353ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    price: 784,
  },
  {
    id: 35,
    category: "jackets",
    title: "professional dark red v3",
    image:
      "https://images.unsplash.com/photo-1593032580308-d4bafafc4f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    price: 224,
  },
  {
    id: 36,
    category: "jackets",
    title: "film colors areama content",
    image:
      "https://images.unsplash.com/photo-1603468240274-b296ab5e93d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    price: 445,
  },
];

module.exports = SHOPPING_DATA;
