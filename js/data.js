/**
 * Kind n Glow - Complete Integrated Data Store
 * Combined from frontend (scaling-enigma) and backend (ideal-octo-guacamole)
 * ZERO DATA LOSS: All products, categories, coupons, reviews, users, and brand info preserved.
 */

window.KNG_DATA = {
  products: [
  {
    "_id": "kng-1",
    "sku": "KG-1001",
    "img": "https://picsum.photos/seed/kng-kg1001-main/600/600",
    "title": "Vitamin C Brightening Face Serum",
    "slug": "vitamin-c-brightening-face-serum",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1001-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1001-2/600/600"
      }
    ],
    "parent": "Facial Care",
    "children": "Powder",
    "price": 199,
    "discount": 15,
    "quantity": 40,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-1",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-1",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "A lightweight 10% Vitamin C serum that fades dark spots and evens skin tone. Non-sticky, suits all skin types. Use 3 drops every morning for a natural glow.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Serum",
      "Vitamin C"
    ],
    "featured": true,
    "sellCount": 42,
    "createdAt": "2026-10-13T07:18:46.969Z"
  },
  {
    "_id": "kng-2",
    "sku": "KG-1002",
    "img": "https://picsum.photos/seed/kng-kg1002-main/600/600",
    "title": "Rose Water Hydrating Toner",
    "slug": "rose-water-hydrating-toner",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1002-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1002-2/600/600"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Face Powder",
    "price": 89,
    "discount": 10,
    "quantity": 50,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-2",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-2",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Steam-distilled rose water toner that balances pH, tightens pores and refreshes tired skin. Alcohol-free, perfect for daily misting.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Toner",
      "Rose"
    ],
    "featured": false,
    "sellCount": 49,
    "createdAt": "2026-10-08T07:18:46.970Z"
  },
  {
    "_id": "kng-3",
    "sku": "KG-1003",
    "img": "https://picsum.photos/seed/kng-kg1003-main/600/600",
    "title": "Niacinamide Brightening Cream",
    "slug": "niacinamide-brightening-cream",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1003-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1003-2/600/600"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Skin",
    "price": 249,
    "discount": 20,
    "quantity": 30,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-3",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-3",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "5% Niacinamide day cream with ceramides. Reduces pigmentation, strengthens the skin barrier and hydrates up to 24 hours.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Moisturizer",
      "Niacinamide"
    ],
    "featured": true,
    "sellCount": 48,
    "createdAt": "2026-10-03T07:18:46.970Z"
  },
  {
    "_id": "kng-4",
    "sku": "KG-1004",
    "img": "https://picsum.photos/seed/kng-kg1004-main/600/600",
    "title": "Gentle Foaming Face Wash",
    "slug": "gentle-foaming-face-wash",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1004-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1004-2/600/600"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Makeup Brush",
    "price": 99,
    "discount": 0,
    "quantity": 60,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-4",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-4",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Sulfate-free foaming cleanser with cucumber extract. Removes dirt, oil and light makeup without stripping the skin.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Cleanser",
      "Foam"
    ],
    "featured": false,
    "sellCount": 41,
    "createdAt": "2026-09-28T07:18:46.970Z"
  },
  {
    "_id": "kng-5",
    "sku": "KG-1005",
    "img": "https://picsum.photos/seed/kng-kg1005-main/600/600",
    "title": "SPF 50 Sunscreen Gel",
    "slug": "spf-50-sunscreen-gel",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1005-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1005-2/600/600"
      }
    ],
    "parent": "Facial Care",
    "children": "Makeup Brush",
    "price": 179,
    "discount": 12,
    "quantity": 45,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-5",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-5",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Water-light SPF 50 PA++++ gel sunscreen. Zero white cast, works beautifully under makeup. Sweat and water resistant.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Sunscreen",
      "SPF 50"
    ],
    "featured": false,
    "sellCount": 55,
    "createdAt": "2026-09-23T07:18:46.970Z"
  },
  {
    "_id": "kng-6",
    "sku": "KG-1006",
    "img": "https://picsum.photos/seed/kng-kg1006-main/600/600",
    "title": "Aloe Vera Soothing Face Mask",
    "slug": "aloe-vera-soothing-face-mask",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1006-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1006-2/600/600"
      }
    ],
    "parent": "Facial Care",
    "children": "Powder",
    "price": 69,
    "discount": 10,
    "quantity": 55,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-6",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-6",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Overnight gel mask with 92% organic aloe vera. Calms redness, hydrates deeply and repairs sun-exposed skin while you sleep.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Mask",
      "Aloe Vera"
    ],
    "featured": false,
    "sellCount": 36,
    "createdAt": "2026-09-18T07:18:46.970Z"
  },
  {
    "_id": "kng-7",
    "sku": "KG-1007",
    "img": "https://picsum.photos/seed/kng-kg1007-main/600/600",
    "title": "Vitamin E Night Repair Oil",
    "slug": "vitamin-e-night-repair-oil",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1007-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1007-2/600/600"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Skin",
    "price": 299,
    "discount": 25,
    "quantity": 25,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-7",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-7",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Cold-pressed Vitamin E night oil that repairs, nourishes and restores elasticity. A few drops massaged at bedtime = glass skin by morning.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Oil",
      "Vitamin E"
    ],
    "featured": true,
    "sellCount": 21,
    "createdAt": "2026-09-13T07:18:46.970Z"
  },
  {
    "_id": "kng-8",
    "sku": "KG-1008",
    "img": "https://picsum.photos/seed/kng-kg1008-main/600/600",
    "title": "Cucumber Eye Gel",
    "slug": "cucumber-eye-gel",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1008-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1008-2/600/600"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Makeup Brush",
    "price": 79,
    "discount": 0,
    "quantity": 35,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-8",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-8",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Cooling under-eye gel with cucumber and caffeine. De-puffs, fades dark circles and brightens the eye area instantly.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Eye Care",
      "Cucumber"
    ],
    "featured": false,
    "sellCount": 43,
    "createdAt": "2026-09-08T07:18:46.970Z"
  },
  {
    "_id": "kng-9",
    "sku": "KG-1009",
    "img": "https://picsum.photos/seed/kng-kg1009-main/600/600",
    "title": "Charcoal Peel-Off Mask",
    "slug": "charcoal-peel-off-mask",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1009-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1009-2/600/600"
      }
    ],
    "parent": "Facial Care",
    "children": "Powder",
    "price": 119,
    "discount": 15,
    "quantity": 40,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-9",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-9",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Deep-pore charcoal peel-off mask that lifts blackheads and impurities for a smoother, clearer complexion in 20 minutes.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Mask",
      "Charcoal"
    ],
    "featured": false,
    "sellCount": 54,
    "createdAt": "2026-09-03T07:18:46.970Z"
  },
  {
    "_id": "kng-10",
    "sku": "KG-1010",
    "img": "https://picsum.photos/seed/kng-kg1010-main/600/600",
    "title": "Hyaluronic Acid Hydra Mist",
    "slug": "hyaluronic-acid-hydra-mist",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1010-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1010-2/600/600"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Skin",
    "price": 109,
    "discount": 10,
    "quantity": 48,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-10",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-10",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Ultra-fine hydrating mist with hyaluronic acid and glycerin. Spritz anytime for a dewy, fresh glow — over or under makeup.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Skincare",
      "Mist",
      "Hyaluronic Acid"
    ],
    "featured": false,
    "sellCount": 48,
    "createdAt": "2026-08-29T07:18:46.970Z"
  },
  {
    "_id": "kng-11",
    "sku": "KG-1011",
    "img": "https://picsum.photos/seed/kng-kg1011-main/600/600",
    "title": "Shea Butter Lip Balm",
    "slug": "shea-butter-lip-balm",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1011-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1011-2/600/600"
      }
    ],
    "parent": "Awesome Lip Care",
    "children": "Cream",
    "price": 49,
    "discount": 0,
    "quantity": 70,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Awesome Lip Care",
      "id": "64240e13253d81bc860d4cf6"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-11",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-11",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Nourishing lip balm with shea butter, cocoa butter and Vitamin E. Heals chapped lips and leaves a soft, natural sheen.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Lip Care",
      "Balm",
      "Shea Butter"
    ],
    "featured": false,
    "sellCount": 42,
    "createdAt": "2026-08-24T07:18:46.970Z"
  },
  {
    "_id": "kng-12",
    "sku": "KG-1012",
    "img": "https://picsum.photos/seed/kng-kg1012-main/600/600",
    "title": "Tinted Lip Oil - Rose",
    "slug": "tinted-lip-oil-rose",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1012-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1012-2/600/600"
      }
    ],
    "parent": "Awesome Lip Care",
    "children": "Cosmetics",
    "price": 129,
    "discount": 20,
    "quantity": 38,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Awesome Lip Care",
      "id": "64240e13253d81bc860d4cf6"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-12",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-12",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Glass-finish tinted lip oil in rose. Hydrates for 8 hours and gives a buildable flush of color. Non-sticky formula.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Lip Care",
      "Lip Oil",
      "Rose"
    ],
    "featured": true,
    "sellCount": 52,
    "createdAt": "2026-08-19T07:18:46.970Z"
  },
  {
    "_id": "kng-13",
    "sku": "KG-1013",
    "img": "https://picsum.photos/seed/kng-kg1013-main/600/600",
    "title": "Peppermint Lip Scrub",
    "slug": "peppermint-lip-scrub",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1013-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1013-2/600/600"
      }
    ],
    "parent": "Awesome Lip Care",
    "children": "Cosmetics",
    "price": 59,
    "discount": 0,
    "quantity": 44,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Awesome Lip Care",
      "id": "64240e13253d81bc860d4cf6"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-13",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-13",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Sugar-based lip scrub with peppermint oil. Exfoliates dead skin and preps lips for smooth lipstick application.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Lip Care",
      "Scrub",
      "Peppermint"
    ],
    "featured": false,
    "sellCount": 21,
    "createdAt": "2026-08-14T07:18:46.970Z"
  },
  {
    "_id": "kng-14",
    "sku": "KG-1014",
    "img": "https://picsum.photos/seed/kng-kg1014-main/600/600",
    "title": "Matte Lipstick - Blush Pink",
    "slug": "matte-lipstick-blush-pink",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1014-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1014-2/600/600"
      }
    ],
    "parent": "Awesome Lip Care",
    "children": "Cosmetics",
    "price": 159,
    "discount": 25,
    "quantity": 32,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Awesome Lip Care",
      "id": "64240e13253d81bc860d4cf6"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-14",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-14",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Transfer-proof matte lipstick in Blush Pink. One swipe = full coverage that lasts 10 hours. Infused with jojoba oil so lips never feel dry.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Makeup",
      "Lipstick",
      "Matte"
    ],
    "featured": true,
    "sellCount": 31,
    "createdAt": "2026-08-09T07:18:46.970Z"
  },
  {
    "_id": "kng-15",
    "sku": "KG-1015",
    "img": "https://picsum.photos/seed/kng-kg1015-main/600/600",
    "title": "Cream Blush - Peony",
    "slug": "cream-blush-peony",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1015-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1015-2/600/600"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Skin",
    "price": 139,
    "discount": 10,
    "quantity": 36,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-15",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-15",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Buildable cream blush in Peony that melts into skin for a natural, lit-from-within flush. Works on cheeks and lips.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Makeup",
      "Blush",
      "Cream"
    ],
    "featured": false,
    "sellCount": 50,
    "createdAt": "2026-08-04T07:18:46.970Z"
  },
  {
    "_id": "kng-16",
    "sku": "KG-1016",
    "img": "https://picsum.photos/seed/kng-kg1016-main/600/600",
    "title": "Kajal Eyeliner - Jet Black",
    "slug": "kajal-eyeliner-jet-black",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1016-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1016-2/600/600"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Lip Liner",
    "price": 99,
    "discount": 15,
    "quantity": 58,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-16",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-16",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Smudge-proof kajal with a creamy glide. Intense jet-black payoff, ophthalmologist tested, safe for sensitive eyes.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Makeup",
      "Kajal",
      "Eyeliner"
    ],
    "featured": false,
    "sellCount": 19,
    "createdAt": "2026-07-30T07:18:46.970Z"
  },
  {
    "_id": "kng-17",
    "sku": "KG-1017",
    "img": "https://picsum.photos/seed/kng-kg1017-main/600/600",
    "title": "Translucent Setting Powder",
    "slug": "translucent-setting-powder",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1017-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1017-2/600/600"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Face Powder",
    "price": 189,
    "discount": 20,
    "quantity": 28,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-17",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-17",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Micro-fine translucent powder that sets makeup and controls shine for 12 hours. No flashback, blurs pores instantly.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Makeup",
      "Powder",
      "Setting"
    ],
    "featured": false,
    "sellCount": 52,
    "createdAt": "2026-07-25T07:18:46.970Z"
  },
  {
    "_id": "kng-18",
    "sku": "KG-1018",
    "img": "https://picsum.photos/seed/kng-kg1018-main/600/600",
    "title": "Illuminating Highlighter - Champagne",
    "slug": "illuminating-highlighter-champagne",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1018-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1018-2/600/600"
      }
    ],
    "parent": "Facial Care",
    "children": "Powder",
    "price": 169,
    "discount": 15,
    "quantity": 26,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-18",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-18",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Baked highlighter in warm champagne. Gives a radiant, glowy finish without glitter fallout. Blendable with fingers or brush.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Makeup",
      "Highlighter",
      "Champagne"
    ],
    "featured": true,
    "sellCount": 26,
    "createdAt": "2026-07-20T07:18:46.970Z"
  },
  {
    "_id": "kng-19",
    "sku": "KG-1019",
    "img": "https://picsum.photos/seed/kng-kg1019-main/600/600",
    "title": "Argan Hair Oil - Non-Sticky",
    "slug": "argan-hair-oil-non-sticky",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1019-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1019-2/600/600"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Makeup Brush",
    "price": 149,
    "discount": 0,
    "quantity": 42,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-19",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-19",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "100% pure argan oil that tames frizz, repairs split ends and adds mirror shine. Absorbs fast with zero greasy residue.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Hair Care",
      "Argan Oil"
    ],
    "featured": false,
    "sellCount": 53,
    "createdAt": "2026-07-15T07:18:46.970Z"
  },
  {
    "_id": "kng-20",
    "sku": "KG-1020",
    "img": "https://picsum.photos/seed/kng-kg1020-main/600/600",
    "title": "Onion Hair Growth Serum",
    "slug": "onion-hair-growth-serum",
    "unit": "1pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Kind Rose",
          "clrCode": "#F3C0D1"
        },
        "img": "https://picsum.photos/seed/kng-kg1020-1/600/600"
      },
      {
        "color": {
          "name": "Blush Beige",
          "clrCode": "#E8D5C4"
        },
        "img": "https://picsum.photos/seed/kng-kg1020-2/600/600"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Skin",
    "price": 259,
    "discount": 20,
    "quantity": 33,
    "brand": {
      "name": "Kind n Glow",
      "id": "brand-kng"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "rating": 4.8,
    "reviews": [
      {
        "_id": "rev-kng-20",
        "userId": {
          "name": "Priya Sharma"
        },
        "rating": 5,
        "comment": "Absolutely love this! Gentle on my skin and produces a real noticeable glow within days.",
        "createdAt": "2026-02-10T10:00:00.000Z"
      },
      {
        "_id": "rev-kng-b-20",
        "userId": {
          "name": "Ananya Reddy"
        },
        "rating": 4.7,
        "comment": "Amazing texture, absorbs so quickly and smells fresh without synthetic perfumery.",
        "createdAt": "2026-03-01T15:30:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Onion oil serum with biotin and caffeine that reduces hair fall and promotes regrowth. Massage 5 drops into the scalp daily.",
    "additionalInformation": [
      {
        "key": "Skin/Hair Type",
        "value": "All types, sensitive skin approved"
      },
      {
        "key": "Usage",
        "value": "Daily ritual morning & night"
      },
      {
        "key": "Cruelty Free",
        "value": "Yes, 100% cruelty-free & vegan"
      },
      {
        "key": "Origin",
        "value": "Handmade in Poranki, Vijayawada"
      }
    ],
    "tags": [
      "Hair Care",
      "Serum",
      "Onion"
    ],
    "featured": false,
    "sellCount": 46,
    "createdAt": "2026-07-10T07:18:46.970Z"
  },
  {
    "_id": "641e887d05f9ee1717e1348a",
    "sku": "NTB7SDVX44",
    "img": "https://i.ibb.co/WVdTgR8/headphone-1.png",
    "title": "Headphones Wireless.",
    "slug": "headphones-wireless.",
    "unit": "3pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Purply Blue",
          "clrCode": "#C1BAE4"
        },
        "img": "https://i.ibb.co/WVdTgR8/headphone-1.png"
      },
      {
        "color": {
          "name": "Light Grey",
          "clrCode": "#D8D7DD"
        },
        "img": "https://i.ibb.co/zh9x3Q0/headphone-2.png"
      },
      {
        "color": {
          "name": "Baby Pink",
          "clrCode": "#F3C0D1"
        },
        "img": "https://i.ibb.co/JBZk7sS/headphone-3.png"
      },
      {
        "color": {
          "name": "Bluish Cyan",
          "clrCode": "#64BFD1"
        },
        "img": "https://i.ibb.co/SrPq3r0/headphone-4.png"
      }
    ],
    "parent": "Headphones",
    "children": "Bluetooth Headphones",
    "price": 120,
    "discount": 14,
    "quantity": 12,
    "brand": {
      "name": "Logitech",
      "id": "6412eae89c2275a25d09541d"
    },
    "category": {
      "name": "Headphones",
      "id": "6419723bd7dc5155c04350d3"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6461c46a9154b65448da799f",
        "userId": {
          "name": "Paul R. Bruns"
        },
        "rating": 5,
        "comment": "This is nice product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "electronics",
    "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    "additionalInformation": [
      {
        "key": "Standing screen display size",
        "value": "Screen display Size 10.4"
      },
      {
        "key": "Colors",
        "value": "Purply Blue, Light Grey, Baby Pink, Bluish Cyan"
      },
      {
        "key": "Screen Resolution",
        "value": "1920 x 1200 Pixels"
      },
      {
        "key": "Max Screen Resolution",
        "value": "2000 x 1200"
      },
      {
        "key": "Processor",
        "value": "2.3 GHz (128 GB)"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 1,
    "tags": [
      "Headphones",
      "Bluetooth "
    ],
    "rating": 5
  },
  {
    "_id": "641e887d05f9ee1717e1348f",
    "sku": "NVB7SDVX45",
    "img": "https://i.ibb.co/n1YRvWJ/headphone-5.png",
    "title": "Gaming Headphone",
    "slug": "gaming-headphone",
    "unit": "5pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Cyan",
          "clrCode": "#03E2DD"
        },
        "img": "https://i.ibb.co/n1YRvWJ/headphone-5.png"
      },
      {
        "color": {
          "name": "Dark Grey",
          "clrCode": "#484848"
        },
        "img": "https://i.ibb.co/WpkH1vq/headphone-6.png"
      },
      {
        "color": {
          "name": "Orange",
          "clrCode": "#F17B3D"
        },
        "img": "https://i.ibb.co/yRYbDCc/headphone-7.png"
      }
    ],
    "parent": "Headphones",
    "children": "Kids Headphones",
    "price": 130,
    "discount": 5,
    "quantity": 10,
    "brand": {
      "name": "Sony",
      "id": "641522d9cd2724817c1c7c38"
    },
    "category": {
      "name": "Headphones",
      "id": "6419723bd7dc5155c04350d3"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    "additionalInformation": [
      {
        "key": "Standing screen display size",
        "value": "Screen display Size 10.4"
      },
      {
        "key": "Colors",
        "value": "Cyan, Dark Grey, Orange"
      },
      {
        "key": "Screen Resolution",
        "value": "1920 x 1200 Pixels"
      },
      {
        "key": "Max Screen Resolution",
        "value": "2000 x 1200"
      },
      {
        "key": "Processor",
        "value": "2.3 GHz (128 GB)"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "offerExpiryTime": {
      "$date": "2023-08-15T18:00:00.000Z"
    },
    "featured": false,
    "sellCount": 2,
    "tags": [
      "Headphones",
      "Kids "
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e13496",
    "sku": "BVB7SDVX50",
    "img": "https://i.ibb.co/5FPhGtq/headphone-8.png",
    "title": "Headphone with Mic",
    "slug": "headphone-with-mic",
    "unit": "4pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Tealish Blue",
          "clrCode": "#455D89"
        },
        "img": "https://i.ibb.co/5FPhGtq/headphone-8.png"
      },
      {
        "color": {
          "name": "Silver",
          "clrCode": "#ECECEC"
        },
        "img": "https://i.ibb.co/vHP1TQf/headphone-9.png"
      },
      {
        "color": {
          "name": "Reddish Magenta",
          "clrCode": "#DED3DB"
        },
        "img": "https://i.ibb.co/3mdtrcm/headphone-10.png"
      }
    ],
    "parent": "Headphones",
    "children": "On-Ear Headphones",
    "price": 110,
    "discount": 0,
    "quantity": 8,
    "brand": {
      "name": "Sony",
      "id": "641522d9cd2724817c1c7c38"
    },
    "category": {
      "name": "Headphones",
      "id": "6419723bd7dc5155c04350d3"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    "additionalInformation": [
      {
        "key": "Standing screen display size",
        "value": "Screen display Size 10.4"
      },
      {
        "key": "Colors",
        "value": "Tealish Blue, Silver, Reddish Magenta"
      },
      {
        "key": "Screen Resolution",
        "value": "1920 x 1200 Pixels"
      },
      {
        "key": "Max Screen Resolution",
        "value": "2000 x 1200"
      },
      {
        "key": "Processor",
        "value": "2.3 GHz (128 GB)"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": true,
    "sellCount": 0,
    "tags": [
      "Headphones",
      "On-Ear"
    ],
    "videoId": "EW4ZYb3mCZk",
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e1349a",
    "sku": "BD7SDVX62",
    "img": "https://i.ibb.co/jvGv6qf/mobile-1.png",
    "title": "Galaxy Android Tablet",
    "slug": "galaxy-android-tablet",
    "unit": "8pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Black",
          "clrCode": "#3A454B"
        },
        "img": "https://i.ibb.co/jvGv6qf/mobile-1.png"
      },
      {
        "color": {
          "name": "Gray",
          "clrCode": "#3C3B39"
        },
        "img": "https://i.ibb.co/F3VPLLh/mobile-2.png"
      },
      {
        "color": {
          "name": "Silver",
          "clrCode": "#343338"
        },
        "img": "https://i.ibb.co/rtmKcPg/mobile-3.png"
      },
      {
        "color": {
          "name": "Cadet Grey",
          "clrCode": "#7B97A3"
        },
        "img": "https://i.ibb.co/NpWtdts/mobile-4.png"
      }
    ],
    "parent": "Mobile Tablets",
    "children": "Samsung",
    "price": 320,
    "discount": 10,
    "quantity": 12,
    "brand": {
      "name": "Samsung",
      "id": "64153eb3707ca6a96638c13b"
    },
    "category": {
      "name": "Mobile Tablets",
      "id": "6419723bd7dc5155c04350d4"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2022, September"
      },
      {
        "key": "Colors",
        "value": "Black, Gray, Silver, Cadet Grey"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "Mobile ",
      "Tablets",
      "Samsung"
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e1349f",
    "sku": "AF7SDVX65",
    "img": "https://i.ibb.co/3WMPkkf/mobile-5.png",
    "title": "iPhone 14 Pro",
    "slug": "iPhone-14-pro",
    "unit": "10pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Lunar Green",
          "clrCode": "#33422B"
        },
        "img": "https://i.ibb.co/3WMPkkf/mobile-5.png"
      },
      {
        "color": {
          "name": "Dark",
          "clrCode": "#292C31"
        },
        "img": "https://i.ibb.co/MfdxWfv/mobile-6.png"
      },
      {
        "color": {
          "name": "Red Wine",
          "clrCode": "#BA1827"
        },
        "img": "https://i.ibb.co/vV22rXc/mobile-7.png"
      },
      {
        "color": {
          "name": "Peach Schnapps",
          "clrCode": "#EAD2CE"
        },
        "img": "https://i.ibb.co/Kby3sY7/mobile-8.png"
      }
    ],
    "parent": "Mobile Tablets",
    "children": "Apple",
    "price": 1199,
    "discount": 15,
    "quantity": 20,
    "brand": {
      "name": "Apple",
      "id": "6415479cfba1a43da8287e20"
    },
    "category": {
      "name": "Mobile Tablets",
      "id": "6419723bd7dc5155c04350d4"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6463026f9eb7e8a0fc8b3457",
        "userId": {
          "name": "Paul R. Bruns"
        },
        "rating": 5,
        "comment": "Average product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "electronics",
    "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Lunar Green, Dark, Red Wine, Peach Schnapps"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": true,
    "sellCount": 0,
    "tags": [
      "Mobile ",
      "Tablets",
      "Apple"
    ],
    "rating": 5
  },
  {
    "_id": "641d4106dbfab7b02ab28b22",
    "sku": "CF7SDVX72",
    "img": "https://i.ibb.co/kxGMcrw/ipad-1.png",
    "title": "Apple iPad Air",
    "slug": "apple-iPad-air",
    "unit": "12pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Gray",
          "clrCode": "#D1CFE4"
        },
        "img": "https://i.ibb.co/kxGMcrw/ipad-1.png"
      },
      {
        "color": {
          "name": "Black",
          "clrCode": "#929095"
        },
        "img": "https://i.ibb.co/NpWzRPL/ipad-2.png"
      },
      {
        "color": {
          "name": "Moonstone Blue",
          "clrCode": "#9DC1D1"
        },
        "img": "https://i.ibb.co/bzgBZ4Y/ipad-3.png"
      }
    ],
    "parent": "Mobile Tablets",
    "children": "Apple",
    "price": 999,
    "discount": 5,
    "quantity": 13,
    "brand": {
      "name": "Apple",
      "id": "6415479cfba1a43da8287e20"
    },
    "category": {
      "name": "Mobile Tablets",
      "id": "6419723bd7dc5155c04350d4"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Gray, Black, Moonstone Blue"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": true,
    "sellCount": 0,
    "tags": [
      "Mobile ",
      "Ipad",
      "Apple"
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e134ad",
    "sku": "DF7SDVX72",
    "img": "https://i.ibb.co/wYZr4k6/cpu-1.png",
    "title": "DeepCool Air Cooler",
    "slug": "deepCool-air-cooler",
    "unit": "15pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Black",
          "clrCode": "#565656"
        },
        "img": "https://i.ibb.co/wYZr4k6/cpu-1.png"
      },
      {
        "color": {
          "name": "Carbon Grey",
          "clrCode": "#606060"
        },
        "img": "https://i.ibb.co/xsKNnzM/cpu-2.png"
      },
      {
        "color": {
          "name": "White",
          "clrCode": "#F4F4F4"
        },
        "img": "https://i.ibb.co/Yf8YRGy/cpu-3.png"
      },
      {
        "color": {
          "name": "Light Gray",
          "clrCode": "#3C3C3C"
        },
        "img": "https://i.ibb.co/23XyrR3/cpu-4.png"
      }
    ],
    "parent": "CPU Heat Pipes",
    "children": "CPU Cooler",
    "price": 80,
    "discount": 0,
    "quantity": 5,
    "brand": {
      "name": "Deepcool",
      "id": "64154ee693b3f0f2c7ec7ff8"
    },
    "category": {
      "name": "CPU Heat Pipes",
      "id": "6419723bd7dc5155c04350d5"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler is AMD AM4 Ready. (NOTE: Refer to FM2+/ FM2/ FM1/ AM3+/ AM3/ AM2+/ AM2 for the manuals). It is equipped with multiple clips to support Intel LGA1155/ 1156/ 775 and AMD AM4/ AM3/ AM2+/ AM2/ K8. It has 2 sintered metal powder heatpipes directly contacting the CPU surface for removing heat and eliminating chances of overheating. It features specialized aluminum heatsink construction for efficient heat dissipation. TPE fan housing designed to absorb operating vibration and reduce fan noise. it has a 1-year warranty.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Black, Carbon Grey, White, Light Gray"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "cpu",
      "cpu cooler"
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e134b2",
    "sku": "DF7SDVX75",
    "img": "https://i.ibb.co/tpypd3B/cpu-5.png",
    "title": "Antec Air Cooler",
    "slug": "antec-air-cooler",
    "unit": "15pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Black",
          "clrCode": "#3A3A3A"
        },
        "img": "https://i.ibb.co/tpypd3B/cpu-5.png"
      },
      {
        "color": {
          "name": "Silver",
          "clrCode": "#4E534F"
        },
        "img": "https://i.ibb.co/wwNDDSG/cpu-6.png"
      },
      {
        "color": {
          "name": "Gray",
          "clrCode": "#0E0E0E"
        },
        "img": "https://i.ibb.co/sHRhjSC/cpu-7.png"
      },
      {
        "color": {
          "name": "Light Gray",
          "clrCode": "#7C7C7C"
        },
        "img": "https://i.ibb.co/vDrwNFX/cpu-8.png"
      }
    ],
    "parent": "CPU Heat Pipes",
    "children": "Air CPU Cooler",
    "price": 80,
    "discount": 0,
    "quantity": 5,
    "brand": {
      "name": "Antec",
      "id": "6415545493b3f0f2c7ec7ffa"
    },
    "category": {
      "name": "CPU Heat Pipes",
      "id": "6419723bd7dc5155c04350d5"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Antec ICE EDGE MINI FS V2.0 CPU Air Cooler DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler is AMD AM4 Ready. (NOTE: Refer to FM2+/ FM2/ FM1/ AM3+/ AM3/ AM2+/ AM2 for the manuals). It is equipped with multiple clips to support Intel LGA1155/ 1156/ 775 and AMD AM4/ AM3/ AM2+/ AM2/ K8. It has 2 sintered metal powder heatpipes directly contacting the CPU surface for removing heat and eliminating chances of overheating. It features specialized aluminum heatsink construction for efficient heat dissipation. TPE fan housing designed to absorb operating vibration and reduce fan noise. it has a 1-year warranty.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Black, Silver, Gray, Light Gray"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "offerExpiryTime": "2023-07-11T18:00:00.000Z",
    "featured": false,
    "sellCount": 0,
    "tags": [
      "cpu",
      "air cooler"
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e134b7",
    "sku": "EF7SDVX72",
    "img": "https://i.ibb.co/yRRLCc5/watch-1.png",
    "title": "Apple Watch Sport Band",
    "slug": "apple-watch-sport-band",
    "unit": "18pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Light Gray",
          "clrCode": "#D9D5D4"
        },
        "img": "https://i.ibb.co/yRRLCc5/watch-1.png"
      },
      {
        "color": {
          "name": "Black",
          "clrCode": "#686465"
        },
        "img": "https://i.ibb.co/WK6bhWf/watch-2.png"
      },
      {
        "color": {
          "name": "White",
          "clrCode": "#EAEAEA"
        },
        "img": "https://i.ibb.co/f2DJvh9/watch-3.png"
      },
      {
        "color": {
          "name": "Gray",
          "clrCode": "#D0C9D0"
        },
        "img": "https://i.ibb.co/8rfG5wZ/watch-4.png"
      }
    ],
    "parent": "Smart Watch",
    "children": "Apple Watch",
    "price": 449,
    "discount": 5,
    "quantity": 5,
    "brand": {
      "name": "Apple",
      "id": "6415479cfba1a43da8287e20"
    },
    "category": {
      "name": "Smart Watch",
      "id": "6419723bd7dc5155c04350d6"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "rev-auto-0",
        "userId": {
          "name": "Happy Customer"
        },
        "rating": 4.5,
        "comment": "Very satisfied with this purchase.",
        "createdAt": "2025-10-05T12:00:00.000Z"
      },
      {
        "_id": "646895be5058260f55efbfa6",
        "userId": {
          "name": "Paul R. Bruns"
        },
        "rating": 4.5,
        "comment": "Nice Product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "electronics",
    "description": "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Light Gray, Black, Gray"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "watch",
      "apple"
    ],
    "sizes": [],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e134c0",
    "sku": "EF7SDVX73",
    "img": "https://i.ibb.co/j4sDV3Q/watch-5.png",
    "title": "Sony Smart Watch",
    "slug": "sony-smart-watch",
    "unit": "12pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Grey Goose",
          "clrCode": "#E8E3DD"
        },
        "img": "https://i.ibb.co/j4sDV3Q/watch-5.png"
      },
      {
        "color": {
          "name": "Rose Gold",
          "clrCode": "#E0C1BC"
        },
        "img": "https://i.ibb.co/hDwW5Td/watch-6.png"
      },
      {
        "color": {
          "name": "Gold",
          "clrCode": "#CBAC97"
        },
        "img": "https://i.ibb.co/6HFLgPB/watch-7.png"
      },
      {
        "color": {
          "name": "Black",
          "clrCode": "#282828"
        },
        "img": "https://i.ibb.co/JxJ0XS4/watch-8.png"
      }
    ],
    "parent": "Smart Watch",
    "children": "Sports Smart Watch",
    "price": 200,
    "discount": 5,
    "quantity": 5,
    "brand": {
      "name": "Sony",
      "id": "641522d9cd2724817c1c7c38"
    },
    "category": {
      "name": "Smart Watch",
      "id": "6419723bd7dc5155c04350d6"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Grey Goose, Rose Gold, Gold, Black"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "watch",
      "sports"
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e134c6",
    "sku": "EG8SDVX74",
    "img": "https://i.ibb.co/fMhtt2T/watch-9.png",
    "title": "Sony Lady Fitness Watch",
    "slug": "sony-lady-fitness-watch",
    "unit": "10pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Black",
          "clrCode": "#333333"
        },
        "img": "https://i.ibb.co/fMhtt2T/watch-9.png"
      },
      {
        "color": {
          "name": "Oyster Pink",
          "clrCode": "#F2C4B4"
        },
        "img": "https://i.ibb.co/HK6jnjP/watch-10.png"
      },
      {
        "color": {
          "name": "Dawn Pink",
          "clrCode": "#C9AFB0"
        },
        "img": "https://i.ibb.co/RNrDzH7/watch-11.png"
      },
      {
        "color": {
          "name": "Light Gray",
          "clrCode": "#1F1F21"
        },
        "img": "https://i.ibb.co/HCzgB0m/watch-12.png"
      }
    ],
    "parent": "Smart Watch",
    "children": "Fitness Smart Watch",
    "price": 150,
    "discount": 3,
    "quantity": 7,
    "brand": {
      "name": "Sony",
      "id": "641522d9cd2724817c1c7c38"
    },
    "category": {
      "name": "Smart Watch",
      "id": "6419723bd7dc5155c04350d6"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6461c5b99154b65448da7a38",
        "userId": {
          "name": "Paul R. Bruns"
        },
        "rating": 4,
        "comment": "This is nice product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      },
      {
        "_id": "rev-auto-1",
        "userId": {
          "name": "Happy Customer"
        },
        "rating": 4.5,
        "comment": "Very satisfied with this purchase.",
        "createdAt": "2025-10-05T12:00:00.000Z"
      },
      {
        "_id": "6462f65c5693f23f37e966d9",
        "userId": {
          "name": "Verified Customer"
        },
        "rating": 5,
        "comment": "Good",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "electronics",
    "description": "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Black, Oyster Pink, Dawn Pink, Light Gray"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "offerExpiryTime": "2023-06-24T18:00:00.000Z",
    "featured": true,
    "sellCount": 0,
    "tags": [
      "watch",
      "fitness"
    ],
    "rating": 4.5
  },
  {
    "_id": "641e887d05f9ee1717e134cb",
    "sku": "DG8SDVX32",
    "img": "https://i.ibb.co/RYST3Ym/blutooth-4.png",
    "title": "Lenovo Wireless Bluetooth",
    "slug": "lenovo-wireless-bluetooth",
    "unit": "7pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Red Wine",
          "clrCode": "#D94043"
        },
        "img": "https://i.ibb.co/RYST3Ym/blutooth-4.png"
      },
      {
        "color": {
          "name": "Conifer",
          "clrCode": "#B4D842"
        },
        "img": "https://i.ibb.co/SXSdbjM/blutooth-5.png"
      },
      {
        "color": {
          "name": "Silver",
          "clrCode": "#414141"
        },
        "img": "https://i.ibb.co/L12vDxf/blutooth-6.png"
      }
    ],
    "parent": "Bluetooth",
    "children": "Wireless Bluetooth",
    "price": 70,
    "discount": 5,
    "quantity": 7,
    "brand": {
      "name": "Lenovo",
      "id": "6415796b0bb49c3eb913bd50"
    },
    "category": {
      "name": "Bluetooth",
      "id": "6419723bd7dc5155c04350d7"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6461f6098a8552beef539317",
        "userId": {
          "name": "Linda"
        },
        "rating": 3,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      },
      {
        "_id": "rev-auto-1",
        "userId": {
          "name": "Happy Customer"
        },
        "rating": 4.5,
        "comment": "Very satisfied with this purchase.",
        "createdAt": "2025-10-05T12:00:00.000Z"
      },
      {
        "_id": "64620d3b8a8552beef5394ca",
        "userId": {
          "name": "Linda"
        },
        "rating": 5,
        "comment": "Awesome",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "electronics",
    "description": "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Black, Conifer, Silver"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "bluetooth",
      "wireless "
    ],
    "rating": 4.166666666666667
  },
  {
    "_id": "641e887d05f9ee1717e134cf",
    "sku": "DF8SDVX33",
    "img": "https://i.ibb.co/fvXHr2Y/blutooth-1.png",
    "title": "Lenovo Sports Bluetooth",
    "slug": "lenovo-sports-bluetooth",
    "unit": "7pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Black",
          "clrCode": "#31363C"
        },
        "img": "https://i.ibb.co/fvXHr2Y/blutooth-1.png"
      },
      {
        "color": {
          "name": "Yellow",
          "clrCode": "#DEDD80"
        },
        "img": "https://i.ibb.co/D920WSP/blutooth-2.png"
      },
      {
        "color": {
          "name": "Light Gray",
          "clrCode": "#C2C2C2"
        },
        "img": "https://i.ibb.co/Kw36W0G/blutooth-3.png"
      }
    ],
    "parent": "Bluetooth",
    "children": "Sports Bluetooth",
    "price": 70,
    "discount": 5,
    "quantity": 7,
    "brand": {
      "name": "Lenovo",
      "id": "6415796b0bb49c3eb913bd50"
    },
    "category": {
      "name": "Bluetooth",
      "id": "6419723bd7dc5155c04350d7"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "electronics",
    "description": "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    "additionalInformation": [
      {
        "key": "Announced",
        "value": "2023, February"
      },
      {
        "key": "Colors",
        "value": "Black, Yellow, Light Gray"
      },
      {
        "key": "Technology",
        "value": "GSM / HSPA / LTE"
      },
      {
        "key": "3G bands",
        "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"
      },
      {
        "key": "4G bands",
        "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "offerExpiryTime": "2023-08-29T18:00:00.000Z",
    "featured": false,
    "sellCount": 0,
    "tags": [
      "bluetooth",
      "sports "
    ],
    "rating": 4.5
  },
  {
    "_id": "6421258288fba3e101965dc3",
    "sku": "FAB7SDVX44",
    "img": "https://i.ibb.co/gg9yCwX/clothing-1.png",
    "title": "Whitetails Women's Dress",
    "slug": "whitetails-women's-dress",
    "unit": "10pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Wine Berry",
          "clrCode": "#642832"
        },
        "img": "https://i.ibb.co/gg9yCwX/clothing-1.png"
      },
      {
        "color": {
          "name": "Wine Berry",
          "clrCode": "#642832"
        },
        "img": "https://i.ibb.co/tZFbTWQ/clothing-2.png"
      },
      {
        "color": {
          "name": "Dirty Blue",
          "clrCode": "#307FA8"
        },
        "img": "https://i.ibb.co/1JqwRnb/clothing-3.png"
      },
      {
        "color": {
          "name": "Dirty Blue",
          "clrCode": "#307FA8"
        },
        "img": "https://i.ibb.co/ngwgSt2/clothing-4.png"
      }
    ],
    "parent": "Clothing",
    "children": "Women's",
    "price": 80,
    "discount": 5,
    "quantity": 10,
    "brand": {
      "name": "Legendary Whitetails",
      "id": "641feafc19436d47078261a3"
    },
    "category": {
      "name": "Clothing",
      "id": "64200cb921162f8b15beae3e"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "646851914edd5c5271092b1d",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4.5,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 1,
    "tags": [
      "whitetails",
      "Clothing",
      "Women's"
    ],
    "sizes": [],
    "rating": 4.5
  },
  {
    "_id": "64215fb702240f90b1138e14",
    "sku": "FBB7SDVX45",
    "img": "https://i.ibb.co/xXHLYZr/clothing-5.png",
    "title": "Boys Graphic T-Shirt",
    "slug": "boys-graphic-t-shirt",
    "unit": "12pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Terra Cotta",
          "clrCode": "#E47561"
        },
        "img": "https://i.ibb.co/xXHLYZr/clothing-5.png"
      },
      {
        "color": {
          "name": "Rodeo Dust",
          "clrCode": "#CDB297"
        },
        "img": "https://i.ibb.co/JqDrC9g/clothing-6.png"
      },
      {
        "color": {
          "name": "Camo Green",
          "clrCode": "#505F33"
        },
        "img": "https://i.ibb.co/3cFJrkR/clothing-7.png"
      },
      {
        "color": {
          "name": "Rose",
          "clrCode": "#ECADA8"
        },
        "img": "https://i.ibb.co/yf4LB8p/clothing-8.png"
      }
    ],
    "parent": "Clothing",
    "children": "Men's",
    "price": 65,
    "discount": 0,
    "quantity": 15,
    "brand": {
      "name": "Legendary Whitetails",
      "id": "641feafc19436d47078261a3"
    },
    "category": {
      "name": "Clothing",
      "id": "64200cb921162f8b15beae3e"
    },
    "status": "out-of-stock",
    "reviews": [],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": true,
    "sellCount": 1,
    "tags": [
      "t-shirt",
      "clothing"
    ],
    "rating": 4.5
  },
  {
    "_id": "6421650a02240f90b1138e1e",
    "sku": "FCB7SDVX46",
    "img": "https://i.ibb.co/DKJr0w4/clothing-9.png",
    "title": "Milumia Blouse",
    "slug": "milumia-blouse",
    "unit": "17pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Cocoa Bean",
          "clrCode": "#4F1523"
        },
        "img": "https://i.ibb.co/DKJr0w4/clothing-9.png"
      },
      {
        "color": {
          "name": "Nile Blue",
          "clrCode": "#153E54"
        },
        "img": "https://i.ibb.co/SP3Q7b6/clothing-10.png"
      },
      {
        "color": {
          "name": "Brandy Rose",
          "clrCode": "#CB877E"
        },
        "img": "https://i.ibb.co/DV3T9Cq/clothing-11.png"
      },
      {
        "color": {
          "name": "Dark",
          "clrCode": "#1B1C31"
        },
        "img": "https://i.ibb.co/P9qdSXC/clothing-12.png"
      }
    ],
    "parent": "Clothing",
    "children": "Women's",
    "price": 70,
    "discount": 5,
    "quantity": 15,
    "brand": {
      "name": "Legendary Whitetails",
      "id": "641feafc19436d47078261a3"
    },
    "category": {
      "name": "Clothing",
      "id": "64200cb921162f8b15beae3e"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "646861ee4edd5c5271092f1d",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": true,
    "sellCount": 0,
    "tags": [
      "milumia",
      "blouse"
    ],
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "642168b402240f90b1138e86",
    "sku": "ECB7SDVX56",
    "img": "https://i.ibb.co/GvXjssF/bag-1.png",
    "title": "Tall Easy Tote-2",
    "slug": "tall-easy-tote-2",
    "unit": "5pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Donkey Brown",
          "clrCode": "#A09370"
        },
        "img": "https://i.ibb.co/GvXjssF/bag-1.png"
      },
      {
        "color": {
          "name": "Pale Carmine",
          "clrCode": "#AC3A30"
        },
        "img": "https://i.ibb.co/pXXYwgF/bag-2.png"
      },
      {
        "color": {
          "name": "Spicy Mix",
          "clrCode": "#8B543F"
        },
        "img": "https://i.ibb.co/ypc0tn9/bag-3.png"
      },
      {
        "color": {
          "name": "Black Eel",
          "clrCode": "#49443E"
        },
        "img": "https://i.ibb.co/GxKRg51/bag-4.png"
      }
    ],
    "parent": "Bags",
    "children": "HandBag",
    "price": 110,
    "discount": 0,
    "quantity": 8,
    "brand": {
      "name": "Sony",
      "id": "641522d9cd2724817c1c7c38"
    },
    "category": {
      "name": "Bags",
      "id": "64200cef21162f8b15beae40"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "sony",
      "handBag"
    ],
    "rating": 4.5
  },
  {
    "_id": "64216b0902240f90b1138e8e",
    "sku": "ECB7SDVX62",
    "img": "https://i.ibb.co/zrdMnPd/bag-5.png",
    "title": "Traveling Bag",
    "slug": "traveling-bag",
    "unit": "5pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Clay",
          "clrCode": "#B36C58"
        },
        "img": "https://i.ibb.co/zrdMnPd/bag-5.png"
      },
      {
        "color": {
          "name": "English Walnut",
          "clrCode": "#402826"
        },
        "img": "https://i.ibb.co/ts8dj9z/bag-6.png"
      },
      {
        "color": {
          "name": "Black",
          "clrCode": "#000000"
        },
        "img": "https://i.ibb.co/9gY1SrG/bag-7.png"
      },
      {
        "color": {
          "name": "Ferra",
          "clrCode": "#725452"
        },
        "img": "https://i.ibb.co/BcDb57T/bag-8.png"
      }
    ],
    "parent": "Bags",
    "children": "Traveling Bag",
    "price": 120,
    "discount": 5,
    "quantity": 10,
    "brand": {
      "name": "Sony",
      "id": "641522d9cd2724817c1c7c38"
    },
    "category": {
      "name": "Bags",
      "id": "64200cef21162f8b15beae40"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "646851be4edd5c5271092be3",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": true,
    "sellCount": 0,
    "tags": [
      "traveling",
      "sony"
    ],
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "64216e2f02240f90b1138e96",
    "sku": "DCB7SDVX64",
    "img": "https://i.ibb.co/xgPThxC/shoes-1.png",
    "title": "Nike Retro GTS-2",
    "slug": "nike-retro-gts-2",
    "unit": "4pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Merlot",
          "clrCode": "#8E1125"
        },
        "img": "https://i.ibb.co/xgPThxC/shoes-1.png"
      },
      {
        "color": {
          "name": "Gulf Stream",
          "clrCode": "#87B0B8"
        },
        "img": "https://i.ibb.co/YXbFH8P/shoes-2.png"
      },
      {
        "color": {
          "name": "Brick Red",
          "clrCode": "#BD2B3D"
        },
        "img": "https://i.ibb.co/zXHVJLj/shoes-3.png"
      },
      {
        "color": {
          "name": "Gainsboro",
          "clrCode": "#DBDADF"
        },
        "img": "https://i.ibb.co/ZxHVh8L/shoes-4.png"
      }
    ],
    "parent": "Shoes",
    "children": "Men's",
    "price": 250,
    "discount": 5,
    "quantity": 18,
    "brand": {
      "name": "Nike",
      "id": "64200b8221162f8b15beae3c"
    },
    "category": {
      "name": "Shoes",
      "id": "64200d2421162f8b15beae42"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "nike",
      "shoes"
    ],
    "rating": 4.5
  },
  {
    "_id": "6421700802240f90b1138e9e",
    "sku": "GCB7SDVX72",
    "img": "https://i.ibb.co/SQY6zdb/shoes-5.png",
    "title": "Jefferson Star Wars™",
    "slug": "jefferson-star-wars™",
    "unit": "4pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Mustard Green",
          "clrCode": "#A7B304"
        },
        "img": "https://i.ibb.co/SQY6zdb/shoes-5.png"
      },
      {
        "color": {
          "name": "Vista White",
          "clrCode": "#FCF8F5"
        },
        "img": "https://i.ibb.co/VWcTW2t/shoes-6.png"
      },
      {
        "color": {
          "name": "Chalky",
          "clrCode": "#E9D69B"
        },
        "img": "https://i.ibb.co/BcJPyh6/shoes-7.png"
      },
      {
        "color": {
          "name": "Liver",
          "clrCode": "#4C5054"
        },
        "img": "https://i.ibb.co/PThjLJh/shoes-8.png"
      }
    ],
    "parent": "Shoes",
    "children": "Women's",
    "price": 270,
    "discount": 7,
    "quantity": 18,
    "brand": {
      "name": "Nike",
      "id": "64200b8221162f8b15beae3c"
    },
    "category": {
      "name": "Shoes",
      "id": "64200d2421162f8b15beae42"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "646851df4edd5c5271092caa",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "featured": false,
    "sellCount": 0,
    "tags": [
      "shoes",
      "jefferson"
    ],
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "64228862253d81bc860d2092",
    "sku": "FCB7SDVX55",
    "img": "https://i.ibb.co/ThxGY6N/clothing-13.png",
    "title": "Baby Cotton Bodysuits",
    "slug": "baby-cotton-bodysuits",
    "unit": "12pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Cool Grey",
          "clrCode": "#94A2A2"
        },
        "img": "https://i.ibb.co/ThxGY6N/clothing-13.png"
      },
      {
        "color": {
          "name": "Sandstone",
          "clrCode": "#7A685E"
        },
        "img": "https://i.ibb.co/dJfjNcJ/clothing-14.png"
      },
      {
        "color": {
          "name": "Soft Amber",
          "clrCode": "#DBC8B1"
        },
        "img": "https://i.ibb.co/2Yf7bqs/clothing-15.png"
      },
      {
        "color": {
          "name": "Natural Grey",
          "clrCode": "#878881"
        },
        "img": "https://i.ibb.co/zf49GS3/clothing-16.png"
      }
    ],
    "parent": "Clothing",
    "children": "Baby",
    "price": 50,
    "discount": 0,
    "quantity": 15,
    "brand": {
      "name": "Legendary Whitetails",
      "id": "641feafc19436d47078261a3"
    },
    "category": {
      "name": "Clothing",
      "id": "64200cb921162f8b15beae3e"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "skincare",
    "description": "PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "Whitetails",
      "Baby",
      "Clothing"
    ],
    "featured": true,
    "sellCount": 2,
    "rating": 4.5
  },
  {
    "_id": "64250d8e253d81bc860d4d26",
    "sku": "DCB7SDVX60",
    "img": "https://i.ibb.co/qNn6Pqy/powder-1.png",
    "title": "INIKA Mineral Sunkissed",
    "slug": "inika-mineral-sunkissed",
    "unit": "15pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Purple Brown",
          "clrCode": "#664536"
        },
        "img": "https://i.ibb.co/qNn6Pqy/powder-1.png"
      },
      {
        "color": {
          "name": "Potters Clay",
          "clrCode": "#8B5A39"
        },
        "img": "https://i.ibb.co/4RJLN3h/powder-2.png"
      },
      {
        "color": {
          "name": "Antique Brass",
          "clrCode": "#BF8A63"
        },
        "img": "https://i.ibb.co/8PV5cC4/powder-3.png"
      },
      {
        "color": {
          "name": "Pale Taupe",
          "clrCode": "#BD9B76"
        },
        "img": "https://i.ibb.co/zJ9SWcP/powder-4.png"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Face Powder",
    "price": 85,
    "discount": 5,
    "quantity": 15,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6468630e4edd5c527109310d",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "inika",
      "sunkissed"
    ],
    "featured": true,
    "sellCount": 4,
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "642515c0253d81bc860d4da3",
    "sku": "DEB7SDVX62",
    "img": "https://i.ibb.co/whwFFGX/lip-liner-1.png",
    "title": "Grand Plumping Highlighter",
    "slug": "grand-plumping-highlighter",
    "unit": "10pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Burning Sand",
          "clrCode": "#D18F7C"
        },
        "img": "https://i.ibb.co/whwFFGX/lip-liner-1.png"
      },
      {
        "color": {
          "name": "Antique Brass",
          "clrCode": "#C88B6A"
        },
        "img": "https://i.ibb.co/h9PYFHJ/lip-liner-2.png"
      },
      {
        "color": {
          "name": "Pinkish Tan",
          "clrCode": "#D1A08F"
        },
        "img": "https://i.ibb.co/LYr2Nkp/lip-liner-3.png"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Lip Liner",
    "price": 60,
    "discount": 5,
    "quantity": 15,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "beauty of skin",
      "lip liner"
    ],
    "featured": false,
    "sellCount": 3,
    "rating": 4.5
  },
  {
    "_id": "64251bc0253d81bc860d4db5",
    "sku": "DFB7SDVX62",
    "img": "https://i.ibb.co/vmJzZk4/cosmetics-1.png",
    "title": "Brand Cosmetic Product",
    "slug": "brand-cosmetic-product",
    "unit": "12pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Barney",
          "clrCode": "#BF1EB2"
        },
        "img": "https://i.ibb.co/vmJzZk4/cosmetics-1.png"
      },
      {
        "color": {
          "name": "Yellow Ochre",
          "clrCode": "#C99E01"
        },
        "img": "https://i.ibb.co/kG1N7m8/cosmetics-2.png"
      },
      {
        "color": {
          "name": "Rich Electric Blue",
          "clrCode": "#0393C9"
        },
        "img": "https://i.ibb.co/GTJ77k0/cosmetics-3.png"
      }
    ],
    "parent": "Awesome Lip Care",
    "children": "Cosmetics",
    "price": 70,
    "discount": 3,
    "quantity": 8,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Awesome Lip Care",
      "id": "64240e13253d81bc860d4cf6"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6468633f4edd5c5271093118",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "awesome lip care",
      "cosmetics"
    ],
    "featured": true,
    "sellCount": 1,
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "64252172253d81bc860d4dbe",
    "sku": "DGB7SDVX62",
    "img": "https://i.ibb.co/p06Mk0H/makeup-1.png",
    "title": "Wet Dewy Cream Beige",
    "slug": "wet-dewy-cream-beige",
    "unit": "12pcs",
    "imageURLs": [
      {
        "color": {
          "name": "Lion",
          "clrCode": "#BE9770"
        },
        "img": "https://i.ibb.co/p06Mk0H/makeup-1.png"
      },
      {
        "color": {
          "name": "Pickled Bean",
          "clrCode": "#654631"
        },
        "img": "https://i.ibb.co/9ttBnfM/makeup-2.png"
      },
      {
        "color": {
          "name": "Tumbleweed",
          "clrCode": "#D4A987"
        },
        "img": "https://i.ibb.co/sbpNm8n/makeup-3.png"
      },
      {
        "color": {
          "name": "Bullet Shell",
          "clrCode": "#BC955E"
        },
        "img": "https://i.ibb.co/M5z3jP1/makeup-4.png"
      }
    ],
    "parent": "Facial Care",
    "children": "Makeup Brush",
    "price": 90,
    "discount": 5,
    "quantity": 6,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "facial care",
      "makeup brush"
    ],
    "featured": false,
    "sellCount": 1,
    "rating": 4.5
  },
  {
    "_id": "6426a68a253d81bc860d5ea6",
    "sku": "EGB7SDVX68",
    "img": "https://i.ibb.co/mvRsPK5/cosmetics-4.png",
    "title": "Tea Tree Lemon For Fine Hair",
    "slug": "tea-tree-lemon-for-fine-hair",
    "unit": "100ml",
    "imageURLs": [
      {
        "color": {
          "name": "Rangoon Green",
          "clrCode": "#142014"
        },
        "img": "https://i.ibb.co/mvRsPK5/cosmetics-4.png"
      },
      {
        "color": {
          "name": "Rangoon Green",
          "clrCode": "#142014"
        },
        "img": "https://i.ibb.co/rkk6dXX/cosmetics-5.png"
      },
      {
        "color": {
          "name": "Rangoon Green",
          "clrCode": "#142014"
        },
        "img": "https://i.ibb.co/TMJPG3B/cosmetics-6.png"
      }
    ],
    "parent": "Discover Skincare",
    "children": "Makeup Brush",
    "price": 45,
    "discount": 0,
    "quantity": 8,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Discover Skincare",
      "id": "64240b66253d81bc860d4cf2"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "discover skincare",
      "makeup brush"
    ],
    "featured": false,
    "sellCount": 0,
    "rating": 4.5
  },
  {
    "_id": "6426ab33253d81bc860d5f86",
    "sku": "FGB7SDVX68",
    "img": "https://i.ibb.co/bdKTWYy/skin-1.png",
    "title": "Mielle Rosemary Mint Scalp",
    "slug": "mielle-rosemary-mint-scalp",
    "unit": "200ml",
    "imageURLs": [
      {
        "color": {
          "name": "Iridium",
          "clrCode": "#3C3C3D"
        },
        "img": "https://i.ibb.co/bdKTWYy/skin-1.png"
      },
      {
        "color": {
          "name": "Iridium",
          "clrCode": "#3C3C3D"
        },
        "img": "https://i.ibb.co/1GtZ2qC/skin-2.png"
      },
      {
        "color": {
          "name": "Iridium",
          "clrCode": "#3C3C3D"
        },
        "img": "https://i.ibb.co/qN95THF/skin-3.png"
      }
    ],
    "parent": "Beauty of Skin",
    "children": "Skin",
    "price": 62,
    "discount": 4,
    "quantity": 10,
    "brand": {
      "name": "Antec",
      "id": "6415545493b3f0f2c7ec7ffa"
    },
    "category": {
      "name": "Beauty of Skin",
      "id": "64240ca8253d81bc860d4cf4"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "beauty of skin",
      "skin"
    ],
    "featured": false,
    "sellCount": 2,
    "rating": 4.5
  },
  {
    "_id": "6426adba253d81bc860d6132",
    "sku": "FCB7SDVX68",
    "img": "https://i.ibb.co/T04BRtd/cream-1.png",
    "title": "Innisfree Face Wash",
    "slug": "innisfree face wash",
    "unit": "150ml",
    "imageURLs": [
      {
        "color": {
          "name": "Faded Green",
          "clrCode": "#80AF6B"
        },
        "img": "https://i.ibb.co/T04BRtd/cream-1.png"
      },
      {
        "color": {
          "name": "Summer Green",
          "clrCode": "#A6B7A5"
        },
        "img": "https://i.ibb.co/8YGVKhd/cream-2.png"
      },
      {
        "color": {
          "name": "Dark Green",
          "clrCode": "#1A2419"
        },
        "img": "https://i.ibb.co/D1Hw4f4/cream-3.png"
      }
    ],
    "parent": "Awesome Lip Care",
    "children": "Cream",
    "price": 68,
    "discount": 3,
    "quantity": 12,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Awesome Lip Care",
      "id": "64240e13253d81bc860d4cf6"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "awesome lip care",
      "cream"
    ],
    "featured": false,
    "sellCount": 5,
    "rating": 4.5
  },
  {
    "_id": "6426b217253d81bc860d6217",
    "sku": "FEB7SDVX68",
    "img": "https://i.ibb.co/XsZ9vLT/beauty-1.png",
    "title": "Blue Rescue Face Mask",
    "slug": "blue-rescue-face-mask",
    "unit": "150ml",
    "imageURLs": [
      {
        "color": {
          "name": "Flame",
          "clrCode": "#D74E27"
        },
        "img": "https://i.ibb.co/XsZ9vLT/beauty-1.png"
      },
      {
        "color": {
          "name": "Flame",
          "clrCode": "#D74E27"
        },
        "img": "https://i.ibb.co/9qnGsJq/beauty-2.png"
      },
      {
        "color": {
          "name": "Flame",
          "clrCode": "#D74E27"
        },
        "img": "https://i.ibb.co/1JWCCnS/beauty-3.png"
      }
    ],
    "parent": "Facial Care",
    "children": "Powder",
    "price": 72,
    "discount": 5,
    "quantity": 15,
    "brand": {
      "name": "INIKA",
      "id": "642508be253d81bc860d4d24"
    },
    "category": {
      "name": "Facial Care",
      "id": "64240fb4253d81bc860d4cf8"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "beauty",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "Colors",
        "value": "Wine Berry , Dirty Blue"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      },
      {
        "key": "FEMIMINE HEMLINE",
        "value": "Fashionable curved hem"
      },
      {
        "key": "Graphics Coprocessor",
        "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
      },
      {
        "key": "Wireless Type",
        "value": "802.11a/b/g/n/ac, Bluetooth"
      }
    ],
    "tags": [
      "facial care",
      "powder"
    ],
    "featured": false,
    "sellCount": 0,
    "rating": 4.5
  },
  {
    "_id": "6431364df5a812bd37e765ac",
    "sku": "AEB7SDVX70",
    "img": "https://i.ibb.co/J7C8xSR/bracelet-1.png",
    "title": "Robert Lee Bangle Bracelet",
    "slug": "robert-lee-bangle-bracelet",
    "unit": "18 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/J7C8xSR/bracelet-1.png"
      },
      {
        "img": "https://i.ibb.co/8g1W4Pp/bracelet-2.png"
      },
      {
        "img": "https://i.ibb.co/2W3S5Xc/bracelet-3.png"
      }
    ],
    "parent": "Bracelets",
    "children": "Gold",
    "price": 250,
    "discount": 3,
    "quantity": 15,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Bracelets",
      "id": "64312cd3e2c1bd22cebb2129"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "6468636b4edd5c527109318f",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "bracelets",
      "gold"
    ],
    "featured": true,
    "sellCount": 0,
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "64313abdf5a812bd37e765bc",
    "sku": "ABC7SDVX70",
    "img": "https://i.ibb.co/s2gB5tt/earring-1.png",
    "title": "Fortuna Creole Earring",
    "slug": "fortuna-creole-earring",
    "unit": "18 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/s2gB5tt/earring-1.png"
      },
      {
        "img": "https://i.ibb.co/4TTyyZ2/earring-2.png"
      },
      {
        "img": "https://i.ibb.co/k0x8r9r/earring-3.png"
      }
    ],
    "parent": "Earrings",
    "children": "Gold",
    "price": 180,
    "discount": 0,
    "quantity": 10,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Earrings",
      "id": "64312cf0e2c1bd22cebb212b"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "earrings",
      "gold"
    ],
    "featured": true,
    "sellCount": 0,
    "rating": 4.5
  },
  {
    "_id": "64313e92f5a812bd37e765cf",
    "sku": "ADC7SDVX70",
    "img": "https://i.ibb.co/KsZ69S3/necklaces-1.png",
    "title": "asiyah necklace",
    "slug": "asiyah-necklace",
    "unit": "15 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/KsZ69S3/necklaces-1.png"
      },
      {
        "img": "https://i.ibb.co/WPMYcmL/necklaces-2.png"
      },
      {
        "img": "https://i.ibb.co/kBB1p6F/necklaces-3.png"
      }
    ],
    "parent": "Necklaces",
    "children": "Gold",
    "price": 200,
    "discount": 2,
    "quantity": 8,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Necklaces",
      "id": "64312d00e2c1bd22cebb212d"
    },
    "status": "in-stock",
    "reviews": [
      {
        "_id": "646863a14edd5c5271093199",
        "userId": {
          "name": "James J. Allen"
        },
        "rating": 4,
        "comment": "Good product",
        "createdAt": "2025-11-12T12:00:00.000Z"
      }
    ],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "necklaces",
      "gold"
    ],
    "featured": true,
    "sellCount": 0,
    "sizes": [],
    "rating": 4
  },
  {
    "_id": "6431418c5e1d915c39ada44b",
    "sku": "AEC7SDVX70",
    "img": "https://i.ibb.co/nnxXBTh/bracelet-4.png",
    "title": "Fortuna Bangle Three-row",
    "slug": "fortuna-bangle-three-row",
    "unit": "14 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/nnxXBTh/bracelet-4.png"
      },
      {
        "img": "https://i.ibb.co/rvmPWxc/bracelet-5.png"
      },
      {
        "img": "https://i.ibb.co/VqGrnz9/bracelet-6.png"
      },
      {
        "img": "https://i.ibb.co/CKkRNnQ/bracelet-7.png"
      }
    ],
    "parent": "Bracelets",
    "children": "Silver",
    "price": 110,
    "discount": 0,
    "quantity": 18,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Bracelets",
      "id": "64312cd3e2c1bd22cebb2129"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "bracelets",
      "silver"
    ],
    "featured": true,
    "sellCount": 0,
    "rating": 4.5
  },
  {
    "_id": "64323fd99814bb139594c443",
    "sku": "BAC7SDVX70",
    "img": "https://i.ibb.co/s12Fy6m/earring-4.png",
    "title": "Palm Ring",
    "slug": "palm-ring",
    "unit": "18 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/s12Fy6m/earring-4.png"
      },
      {
        "img": "https://i.ibb.co/7rL5bgs/earring-5.png"
      },
      {
        "img": "https://i.ibb.co/p2BCQrp/earring-6.png"
      },
      {
        "img": "https://i.ibb.co/JBnqqJH/earring-7.png"
      }
    ],
    "parent": "Earrings",
    "children": "Silver",
    "price": 135,
    "discount": 0,
    "quantity": 13,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Earrings",
      "id": "64312cf0e2c1bd22cebb212b"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "earrings",
      "silver"
    ],
    "featured": true,
    "sellCount": 3,
    "rating": 4.5
  },
  {
    "_id": "6432433c9814bb139594c44c",
    "sku": "BCC7SDVX54",
    "img": "https://i.ibb.co/cwzhf2G/necklaces-4.png",
    "title": "Birthstone Necklace for Women",
    "slug": "birthstone-necklace-for-women",
    "unit": "14 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/cwzhf2G/necklaces-4.png"
      },
      {
        "img": "https://i.ibb.co/fCMG4Fb/necklaces-5.png"
      },
      {
        "img": "https://i.ibb.co/FDB60xJ/necklaces-6.png"
      }
    ],
    "parent": "Necklaces",
    "children": "Silver",
    "price": 100,
    "discount": 3,
    "quantity": 13,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Necklaces",
      "id": "64312d00e2c1bd22cebb212d"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "necklaces",
      "silver"
    ],
    "featured": false,
    "sellCount": 0,
    "rating": 4.5
  },
  {
    "_id": "643249b49814bb139594c454",
    "sku": "BAD7SDVX55",
    "img": "https://i.ibb.co/SvdvsxT/bracelet-8.png",
    "title": "Asiyah Bangle Bracelet",
    "slug": "asiyah-bangle-bracelet",
    "unit": "10 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/SvdvsxT/bracelet-8.png"
      },
      {
        "img": "https://i.ibb.co/nRtHQf5/bracelet-9.png"
      },
      {
        "img": "https://i.ibb.co/1LJ7nnR/bracelet-10.png"
      }
    ],
    "parent": "Bracelets",
    "children": "Silver",
    "price": 118,
    "discount": 0,
    "quantity": 15,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Bracelets",
      "id": "64312cd3e2c1bd22cebb2129"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "bracelets",
      "silver"
    ],
    "featured": true,
    "sellCount": 0,
    "rating": 4.5
  },
  {
    "_id": "64324f0c9814bb139594c47c",
    "sku": "BDC7SDVX88",
    "img": "https://i.ibb.co/Bf0gXqY/earring-8.png",
    "title": "Fortuna Creole Hoop",
    "slug": "fortuna-creole-hoop",
    "unit": "12 kt",
    "imageURLs": [
      {
        "img": "https://i.ibb.co/Bf0gXqY/earring-8.png"
      },
      {
        "img": "https://i.ibb.co/FX5VyWP/earring-9.png"
      },
      {
        "img": "https://i.ibb.co/zQzsWqW/earring-10.png"
      }
    ],
    "parent": "Earrings",
    "children": "Silver",
    "price": 99,
    "discount": 0,
    "quantity": 9,
    "brand": {
      "name": "Louis Vuitton",
      "id": "643134d4e2c1bd22cebb2130"
    },
    "category": {
      "name": "Earrings",
      "id": "64312cf0e2c1bd22cebb212b"
    },
    "status": "in-stock",
    "reviews": [],
    "productType": "jewelry",
    "description": "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    "additionalInformation": [
      {
        "key": "GREAT FOR LAYERING",
        "value": "Mini waffle fabric construction"
      },
      {
        "key": "LEGENDARY STYLING",
        "value": "Cute keyhole notch neck with custom"
      },
      {
        "key": "CUFF DETAILS",
        "value": "Velvet details with lace trim on the cuffs"
      }
    ],
    "tags": [
      "earrings",
      "silver"
    ],
    "featured": true,
    "sellCount": 2,
    "rating": 4.5
  }
],
  categories: [
  {
    "_id": "641d424bdbfab7b02ab28b95",
    "img": "https://i.ibb.co/sVxYFDY/product-cat-1.png",
    "parent": "Headphones",
    "children": [
      "Kids Headphones",
      "Bluetooth Headphones",
      "On-Ear Headphones"
    ],
    "productType": "electronics",
    "products": [
      "641e887d05f9ee1717e1348a",
      "641e887d05f9ee1717e1348f",
      "641e887d05f9ee1717e13496"
    ],
    "status": "Show"
  },
  {
    "_id": "6419723bd7dc5155c04350d4",
    "img": "https://i.ibb.co/xHFpQTV/product-cat-2.png",
    "parent": "Mobile Tablets",
    "children": [
      "Samsung",
      "Apple"
    ],
    "productType": "electronics",
    "products": [
      "641e887d05f9ee1717e1349a",
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22"
    ],
    "status": "Show"
  },
  {
    "_id": "6419723bd7dc5155c04350d5",
    "img": "https://i.ibb.co/S0GjZdp/product-cat-3.png",
    "parent": "CPU Heat Pipes",
    "children": [
      "CPU Cooler",
      "Air CPU Cooler"
    ],
    "productType": "electronics",
    "products": [
      "641e887d05f9ee1717e134ad",
      "641e887d05f9ee1717e134b2"
    ],
    "status": "Show"
  },
  {
    "_id": "6419723bd7dc5155c04350d6",
    "img": "https://i.ibb.co/g3YK8H2/product-cat-4.png",
    "parent": "Smart Watch",
    "children": [
      "Sports Smart Watch",
      "Apple Watch",
      "Fitness Smart Watch"
    ],
    "productType": "electronics",
    "products": [
      "641e887d05f9ee1717e134b7",
      "641e887d05f9ee1717e134c0",
      "641e887d05f9ee1717e134c6"
    ],
    "status": "Show"
  },
  {
    "_id": "6419723bd7dc5155c04350d7",
    "img": "https://i.ibb.co/D9qfYWX/product-cat-5.png",
    "parent": "Bluetooth",
    "children": [
      "Wireless Bluetooth",
      "Sports Bluetooth"
    ],
    "productType": "electronics",
    "products": [
      "641e887d05f9ee1717e134cb",
      "641e887d05f9ee1717e134cf"
    ],
    "status": "Show"
  },
  {
    "_id": "64200cb921162f8b15beae3e",
    "img": "https://i.ibb.co/ZWfqMXs/fashion-cat-1.jpg",
    "parent": "Clothing",
    "children": [
      "Men's",
      "Women's",
      "Baby"
    ],
    "productType": "skincare",
    "products": [
      "6421258288fba3e101965dc3",
      "64215fb702240f90b1138e14",
      "6421650a02240f90b1138e1e",
      "642287e951820d9c45c9127c",
      "64228862253d81bc860d2092"
    ],
    "status": "Show"
  },
  {
    "_id": "64200cef21162f8b15beae40",
    "img": "https://i.ibb.co/GsDLfnh/fashion-cat-2.jpg",
    "parent": "Bags",
    "children": [
      "HandBag",
      "Traveling Bag"
    ],
    "productType": "skincare",
    "products": [
      "642168b402240f90b1138e86",
      "64216b0902240f90b1138e8e"
    ],
    "status": "Show"
  },
  {
    "_id": "64200d2421162f8b15beae42",
    "img": "https://i.ibb.co/H2NsVHm/fashion-cat-3.jpg",
    "parent": "Shoes",
    "children": [
      "Men's",
      "Women's"
    ],
    "productType": "skincare",
    "products": [
      "64216e2f02240f90b1138e96",
      "6421700802240f90b1138e9e"
    ],
    "status": "Show"
  },
  {
    "_id": "64240b66253d81bc860d4cf2",
    "img": "https://i.ibb.co/7yg7yg9/beauty-category-1.jpg",
    "parent": "Discover Skincare",
    "children": [
      "Makeup Brush",
      "Face Powder"
    ],
    "productType": "beauty",
    "products": [
      "64250d8e253d81bc860d4d26",
      "6426a68a253d81bc860d5ea6"
    ],
    "status": "Show"
  },
  {
    "_id": "64240ca8253d81bc860d4cf4",
    "img": "https://i.ibb.co/8YdfXmn/beauty-category-2.jpg",
    "parent": "Beauty of Skin",
    "children": [
      "Skin",
      "Lip Liner"
    ],
    "productType": "beauty",
    "products": [
      "642515c0253d81bc860d4da3",
      "6426ab33253d81bc860d5f86"
    ],
    "status": "Show"
  },
  {
    "_id": "64240e13253d81bc860d4cf6",
    "img": "https://i.ibb.co/1dZNNGh/beauty-category-3.jpg",
    "parent": "Awesome Lip Care",
    "children": [
      "Cosmetics",
      "Cream"
    ],
    "productType": "beauty",
    "products": [
      "64251bc0253d81bc860d4db5",
      "6426adba253d81bc860d6132"
    ],
    "status": "Show"
  },
  {
    "_id": "64240fb4253d81bc860d4cf8",
    "img": "https://i.ibb.co/nkQK0Xr/beauty-category-4.jpg",
    "parent": "Facial Care",
    "children": [
      "Powder",
      "Makeup Brush"
    ],
    "productType": "beauty",
    "products": [
      "64252172253d81bc860d4dbe",
      "6426b217253d81bc860d6217"
    ],
    "status": "Show"
  },
  {
    "_id": "64312cd3e2c1bd22cebb2129",
    "parent": "Bracelets",
    "children": [
      "Gold",
      "Silver"
    ],
    "productType": "jewelry",
    "products": [
      "6431364df5a812bd37e765ac",
      "6431418c5e1d915c39ada44b",
      "643249b49814bb139594c454"
    ],
    "status": "Show"
  },
  {
    "_id": "64312cf0e2c1bd22cebb212b",
    "parent": "Earrings",
    "children": [
      "Gold",
      "Silver"
    ],
    "productType": "jewelry",
    "products": [
      "64313abdf5a812bd37e765bc",
      "64323fd99814bb139594c443",
      "64324f0c9814bb139594c47c"
    ],
    "status": "Show"
  },
  {
    "_id": "64312d00e2c1bd22cebb212d",
    "parent": "Necklaces",
    "children": [
      "Gold",
      "Silver"
    ],
    "productType": "jewelry",
    "products": [
      "64313e92f5a812bd37e765cf",
      "6432433c9814bb139594c44c"
    ],
    "status": "Show"
  }
],
  brands: [
  {
    "_id": "brand-kng",
    "name": "Kind n Glow"
  },
  {
    " _id": "6412eae89c2275a25d09541d",
    "products": [
      "641e887d05f9ee1717e1348a"
    ],
    "name": "Logitech",
    "description": "Logitech Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "logitech@gmail.com",
    "website": "logitech.com",
    "location": "Apples, Switzerland",
    "status": "active",
    "logo": "https://i.ibb.co/Ydf3C1H/brand-1.png"
  },
  {
    "_id": "641522d9cd2724817c1c7c38",
    "products": [
      "641e887d05f9ee1717e1348f",
      "641e887d05f9ee1717e13496",
      "641e887d05f9ee1717e134c0",
      "641e887d05f9ee1717e134c6",
      "642168b402240f90b1138e86",
      "64216b0902240f90b1138e8e"
    ],
    "name": "Sony",
    "description": "Sony Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "sony@gmail.com",
    "website": "sony.com",
    "location": "Apples, America",
    "status": "active",
    "logo": "https://i.ibb.co/GTzWqnP/brand-2.png"
  },
  {
    "_id": "64153eb3707ca6a96638c13b",
    "products": [
      "641e887d05f9ee1717e1349a"
    ],
    "name": "Samsung",
    "description": "Samsung Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "samsung@gmail.com",
    "website": "samsung.com",
    "location": "Samsung, US",
    "status": "active",
    "logo": "https://i.ibb.co/YPzHpCD/brand-3.png"
  },
  {
    "_id": "6415479cfba1a43da8287e20",
    "products": [
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22",
      "641e887d05f9ee1717e134b7"
    ],
    "name": "Apple",
    "description": "Apple Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "apple@gmail.com",
    "website": "apple.com",
    "location": "Apple, US",
    "status": "active",
    "logo": "https://i.ibb.co/n3Wktzh/brand-4.png"
  },
  {
    "_id": "64154ee693b3f0f2c7ec7ff8",
    "products": [
      "641e887d05f9ee1717e134ad"
    ],
    "name": "Deepcool",
    "description": "Deepcool Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "deepcool@gmail.com",
    "website": "deepcool.com",
    "location": "Deepcool, US",
    "status": "active",
    "logo": "https://i.ibb.co/xqTCvsL/brand-5.png"
  },
  {
    "_id": "6415545493b3f0f2c7ec7ffa",
    "products": [
      "641e887d05f9ee1717e134b2",
      "6426ab33253d81bc860d5f86"
    ],
    "name": "Antec",
    "description": "Antec Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "antec@gmail.com",
    "website": "antec.com",
    "location": "Antec, US",
    "status": "active",
    "logo": "https://i.ibb.co/SfBRy61/brand-6.png"
  },
  {
    "_id": "6415796b0bb49c3eb913bd50",
    "products": [
      "641e887d05f9ee1717e134cb",
      "641e887d05f9ee1717e134cf"
    ],
    "name": "Lenovo",
    "description": "Lenovo Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "lenovo@gmail.com",
    "website": "lenovo.com",
    "location": "lenovo, US",
    "status": "active",
    "logo": "https://i.ibb.co/LNymxGk/brand-7.png"
  },
  {
    "_id": "641feafc19436d47078261a3",
    "name": "Legendary Whitetails",
    "description": "Legendary Whitetails Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "legendary-whitetails@gmail.com",
    "website": "legendary-whitetails.com",
    "location": "Legendary Whitetails, US",
    "status": "active",
    "products": [
      "6421258288fba3e101965dc3",
      "64215fb702240f90b1138e14",
      "6421650a02240f90b1138e1e",
      "64228862253d81bc860d2092"
    ],
    "logo": "https://i.ibb.co/mCqwRnT/brand-8.png"
  },
  {
    "_id": "64200b8221162f8b15beae3c",
    "name": "Nike",
    "description": "Nike Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "nike@gmail.com",
    "website": "nike.com",
    "location": "Nike, US",
    "status": "active",
    "products": [
      "64216e2f02240f90b1138e96",
      "6421700802240f90b1138e9e"
    ],
    "logo": "https://i.ibb.co/GTzWqnP/brand-2.png"
  },
  {
    "_id": "642508be253d81bc860d4d24",
    "name": "INIKA",
    "description": "inika Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "inika@gmail.com",
    "website": "inika.com",
    "location": "INIKA, US",
    "status": "active",
    "products": [
      "64250d8e253d81bc860d4d26",
      "642515c0253d81bc860d4da3",
      "64251bc0253d81bc860d4db5",
      "64252172253d81bc860d4dbe",
      "6426a68a253d81bc860d5ea6",
      "6426adba253d81bc860d6132",
      "6426b217253d81bc860d6217"
    ],
    "logo": "https://i.ibb.co/n3Wktzh/brand-4.png"
  },
  {
    "_id": "643134d4e2c1bd22cebb2130",
    "name": "Louis Vuitton",
    "description": "Louis Vuitton Business Support. Top Articles. Top Articles. Find Your Product. Search for your product by name, model number or part number.",
    "email": "louisvuitton@gmail.com",
    "website": "louisvuitton.com",
    "location": "Louis Vuitton, US",
    "status": "active",
    "products": [
      "6431364df5a812bd37e765ac",
      "64313abdf5a812bd37e765bc",
      "64313e92f5a812bd37e765cf",
      "6431418c5e1d915c39ada44b",
      "64323fd99814bb139594c443",
      "6432433c9814bb139594c44c",
      "643249b49814bb139594c454",
      "64324f0c9814bb139594c47c"
    ],
    "logo": "https://i.ibb.co/mCqwRnT/brand-8.png"
  }
],
  coupons: [
  {
    "_id": "cpn-kng-1",
    "title": "Welcome Glow",
    "logo": "assets/logos/kng.svg",
    "couponCode": "GLOW10",
    "endTime": "2028-12-31T23:59:59.000Z",
    "discountPercentage": 10,
    "minimumAmount": 199,
    "productType": "beauty"
  },
  {
    "_id": "cpn-kng-2",
    "title": "Kind Family Special",
    "logo": "assets/logos/kng.svg",
    "couponCode": "KIND20",
    "endTime": "2028-12-31T23:59:59.000Z",
    "discountPercentage": 20,
    "minimumAmount": 499,
    "productType": "beauty"
  },
  {
    "_id": "645f0b95af839230b4d5084a",
    "title": "August Gift Voucher",
    "logo": "https://i.ibb.co/kxGMcrw/ipad-1.png",
    "couponCode": "AUGUST23",
    "endTime": "2023-08-28T06:00:00.000Z",
    "discountPercentage": 14,
    "minimumAmount": 700,
    "productType": "electronics"
  },
  {
    "_id": "645f0b95af839230b4d5084b",
    "title": "SUMMER Vacation",
    "logo": "https://i.ibb.co/ThxGY6N/clothing-13.png",
    "couponCode": "SUMMER23",
    "endTime": "2023-10-22T00:56:00.000Z",
    "discountPercentage": 8,
    "minimumAmount": 400,
    "productType": "skincare"
  },
  {
    "_id": "645f0b95af839230b4d5084c",
    "title": "Paper On Demand",
    "logo": "https://i.ibb.co/h9PYFHJ/lip-liner-2.png",
    "couponCode": "PAPER12",
    "endTime": "2023-05-01T20:19:00.000Z",
    "discountPercentage": 14,
    "minimumAmount": 500,
    "productType": "beauty"
  },
  {
    "_id": "645f0b95af839230b4d5084d",
    "title": "Fifty Fifty",
    "logo": "https://i.ibb.co/rvmPWxc/bracelet-5.png",
    "couponCode": "FIF50",
    "endTime": "2023-09-01T20:19:00.000Z",
    "discountPercentage": 10,
    "minimumAmount": 300,
    "productType": "jewelry"
  }
],
  reviews: [
  {
    "_id": "6461c46a9154b65448da799f",
    "userId": "645f7e130ba9d3c3ea50555a",
    "productId": "641e887d05f9ee1717e1348a",
    "rating": 5,
    "comment": "This is nice product"
  },
  {
    "_id": "6461c5b99154b65448da7a38",
    "userId": "645f7e130ba9d3c3ea50555a",
    "productId": "641e887d05f9ee1717e134c6",
    "rating": 4,
    "comment": "This is nice product"
  },
  {
    "_id": "6461f6098a8552beef539317",
    "userId": "6461f490aae01ae021285ecb",
    "productId": "641e887d05f9ee1717e134cb",
    "rating": 3,
    "comment": "Good product"
  },
  {
    "_id": "64620d3b8a8552beef5394ca",
    "userId": "6461f490aae01ae021285ecb",
    "productId": "641e887d05f9ee1717e134cb",
    "rating": 5,
    "comment": "Awesome"
  },
  {
    "_id": "6462f65c5693f23f37e966d9",
    "userId": "64621f12c16ce188c0b5cb30",
    "productId": "641e887d05f9ee1717e134c6",
    "rating": 5,
    "comment": "Good"
  },
  {
    "_id": "6463026f9eb7e8a0fc8b3457",
    "userId": "645f7e130ba9d3c3ea50555a",
    "productId": "641e887d05f9ee1717e1349f",
    "rating": 5,
    "comment": "Average product"
  },
  {
    "_id": "646851914edd5c5271092b1d",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "6421258288fba3e101965dc3",
    "rating": 4.5,
    "comment": "Good product"
  },
  {
    "_id": "646851be4edd5c5271092be3",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "64216b0902240f90b1138e8e",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "646851df4edd5c5271092caa",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "6421700802240f90b1138e9e",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "646861ee4edd5c5271092f1d",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "6421650a02240f90b1138e1e",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "6468630e4edd5c527109310d",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "64250d8e253d81bc860d4d26",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "6468633f4edd5c5271093118",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "64251bc0253d81bc860d4db5",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "6468636b4edd5c527109318f",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "6431364df5a812bd37e765ac",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "646863a14edd5c5271093199",
    "userId": "6465ac4d3322f9425ac8f444",
    "productId": "64313e92f5a812bd37e765cf",
    "rating": 4,
    "comment": "Good product"
  },
  {
    "_id": "646895be5058260f55efbfa6",
    "userId": "645f7e130ba9d3c3ea50555a",
    "productId": "641e887d05f9ee1717e134b7",
    "rating": 4.5,
    "comment": "Nice Product"
  }
],
  users: [
  {
    "_id": "645f7e130ba9d3c3ea50555a",
    "email": "paul@gmail.com",
    "password": "$2a$10$mGT/rp97QOz4uMH7X6sAye.RQc1Gj/wCxgVMgfN2gmC3cthpULbu6",
    "role": "user",
    "name": "Paul R. Bruns",
    "status": "active",
    "reviews": [
      "6461c46a9154b65448da799f",
      "6461c5b99154b65448da7a38",
      "6461c5c19154b65448da7a43",
      "6463026f9eb7e8a0fc8b3457",
      "646893f7d1f8b988a8f7be68",
      "646895be5058260f55efbfa6"
    ]
  },
  {
    "_id": "6461f490aae01ae021285ecb",
    "email": "linda@gmail.com",
    "password": "$2a$10$mGT/rp97QOz4uMH7X6sAye.RQc1Gj/wCxgVMgfN2gmC3cthpULbu6",
    "role": "user",
    "name": "Linda",
    "status": "active",
    "reviews": [
      "6461f6098a8552beef539317",
      "64620cef8a8552beef5394ba",
      "64620d3b8a8552beef5394ca",
      "64620d528a8552beef5394da"
    ]
  },
  {
    "_id": "6465ac4d3322f9425ac8f444",
    "email": "james@gmail.com",
    "password": "$2a$10$.rq8a.g4miwJ355HdnzAq.swgf.V4yphd8BX9I7bPlbWprmQw/y5O",
    "role": "user",
    "name": "James J. Allen",
    "status": "active",
    "reviews": [
      "646851914edd5c5271092b1d",
      "646851be4edd5c5271092be3",
      "646851df4edd5c5271092caa",
      "646861ee4edd5c5271092f1d",
      "6468630e4edd5c527109310d",
      "6468633f4edd5c5271093118",
      "6468636b4edd5c527109318f",
      "646863a14edd5c5271093199"
    ]
  }
],
  orders: [
  {
    "_id": "645f5c0a2143136895d1f477",
    "user": "6459dee18d3f535cd6997f07",
    "cart": [
      {
        "brand": {
          "name": "Logitech",
          "id": "6412eae89c2275a25d09541d"
        },
        "category": {
          "name": "Headphones",
          "id": "6419723bd7dc5155c04350d3"
        },
        "_id": "641e887d05f9ee1717e1348a",
        "sku": "NTB7SDVX44",
        "img": "https://i.ibb.co/WVdTgR8/headphone-1.png",
        "title": "Headphones Wireless.",
        "slug": "headphones-wireless.",
        "unit": "3pcs",
        "imageURLs": [
          {
            "color": {
              "name": "Purply Blue",
              "clrCode": "#C1BAE4"
            },
            "img": "https://i.ibb.co/WVdTgR8/headphone-1.png",
            "_id": "641e887d05f9ee1717e1348b"
          },
          {
            "color": {
              "name": "Light Grey",
              "clrCode": "#D8D7DD"
            },
            "img": "https://i.ibb.co/zh9x3Q0/headphone-2.png",
            "_id": "641e887d05f9ee1717e1348c"
          },
          {
            "color": {
              "name": "Baby Pink",
              "clrCode": "#F3C0D1"
            },
            "img": "https://i.ibb.co/JBZk7sS/headphone-3.png",
            "_id": "641e887d05f9ee1717e1348d"
          },
          {
            "color": {
              "name": "Bluish Cyan",
              "clrCode": "#64BFD1"
            },
            "img": "https://i.ibb.co/SrPq3r0/headphone-4.png",
            "_id": "641e887d05f9ee1717e1348e"
          }
        ],
        "parent": "Headphones",
        "children": "Bluetooth Headphones",
        "price": 120,
        "discount": 14,
        "quantity": 12,
        "status": "in-stock",
        "reviews": [],
        "productType": "electronics",
        "description": "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
        "additionalInformation": [
          {
            "key": "Standing screen display size",
            "value": "Screen display Size 10.4"
          },
          {
            "key": "Colors",
            "value": "Purply Blue, Light Grey, Baby Pink, Bluish Cyan"
          },
          {
            "key": "Screen Resolution",
            "value": "1920 x 1200 Pixels"
          },
          {
            "key": "Max Screen Resolution",
            "value": "2000 x 1200"
          },
          {
            "key": "Processor",
            "value": "2.3 GHz (128 GB)"
          },
          {
            "key": "Graphics Coprocessor",
            "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"
          },
          {
            "key": "Wireless Type",
            "value": "802.11a/b/g/n/ac, Bluetooth"
          }
        ],
        "featured": false,
        "sellCount": 1,
        "__v": 0,
        "createdAt": "2023-03-25T05:37:01.352Z",
        "updatedAt": "2023-03-25T05:37:01.352Z",
        "tags": [
          "Headphones",
          "Bluetooth "
        ],
        "orderQuantity": 1
      }
    ],
    "name": "Naim Ahmed",
    "address": "Dhaka",
    "email": "naim.themepure@gmail.com",
    "contact": "3524654564",
    "city": "Sunamganj",
    "country": "bangladesh",
    "zipCode": "1234",
    "subTotal": 230,
    "shippingCost": 60,
    "discount": 0,
    "totalAmount": 290,
    "shippingOption": "on",
    "paymentMethod": "Razorpay",
    "invoice": 1000,
    "status": "Pending"
  }
],
  testimonials: [
  {
    "id": 1,
    "name": "Priya Sharma",
    "location": "Mumbai",
    "rating": 5,
    "text": "Finally, a brand that understands sensitive skin! The Gentle Cleansing Balm removed my makeup without any stinging, and my skin feels so soft after. I've recommended it to all my friends.",
    "product": "Gentle Cleansing Balm",
    "verified": true,
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    "id": 2,
    "name": "Ananya Reddy",
    "location": "Bangalore",
    "rating": 5,
    "text": "The Botanical Face Oil transformed my dull winter skin. It absorbs instantly, doesn't feel greasy, and gives the most beautiful glow. My morning routine is now just 3 steps!",
    "product": "Botanical Face Oil",
    "verified": true,
    "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    "id": 3,
    "name": "Kavya Nair",
    "location": "Kochi",
    "rating": 4,
    "text": "Love the Hydrating Gel Cream — it's lightweight but keeps my skin hydrated all day in this humid weather. The ingredient list is clean and the scent is barely there. Perfect for daily use.",
    "product": "Hydrating Gel Cream",
    "verified": true,
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286523?w=100&h=100&fit=crop&crop=face"
  },
  {
    "id": 4,
    "name": "Riya Patel",
    "location": "Ahmedabad",
    "rating": 5,
    "text": "As someone with eczema-prone skin, I'm so careful about products. The Overnight Repair Mask didn't trigger any flare-ups and my skin barrier feels stronger. Thank you for making safe products!",
    "product": "Overnight Repair Mask",
    "verified": true,
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
],
  timeline: [
  {
    "year": "2019",
    "title": "Where It All Began",
    "dotClass": "bg-kind-primary",
    "text": "Our journey began in 2019, when soap making started as a passion within our family. What began on a small scale slowly became a meaningful journey of creating personal-care products with care."
  },
  {
    "year": "2022",
    "title": "From Passion to Purpose",
    "dotClass": "bg-kind-secondary",
    "text": "In 2022, our soaps began reaching our son's college. Students noticed the positive changes they experienced with the products and encouraged us to make them available to others as well. This was the moment we realized that our passion could become something much bigger."
  },
  {
    "year": "2023",
    "title": "Growing Through Our Community",
    "dotClass": "bg-kind-accent",
    "text": "In 2023, we started sharing our products within our personal circle and gradually expanded through social media. The encouragement, feedback and support from our customers inspired us to keep learning and creating."
  },
  {
    "year": "2024",
    "title": "Expanding into Skincare",
    "dotClass": "bg-kind-sage-200",
    "text": "In November 2024, we began focusing more deeply on skincare, introducing products such as body butters and other nourishing personal-care products. This marked an important step in the evolution of Kind n Glow."
  },
  {
    "year": "2025",
    "title": "A New Direction",
    "dotClass": "bg-kind-blush-100",
    "text": "By 2025, we took a more dedicated approach towards skincare and haircare. We expanded our range and started reaching more customers through social media, turning Kind n Glow into a growing personal-care brand."
  },
  {
    "year": "2026",
    "title": "Creating, Learning & Growing",
    "dotClass": "bg-kind-taupe-200",
    "text": "In 2026, Kind n Glow expanded further into skincare, lip care and haircare, with a strong focus on thoughtfully selected, herbal-inspired ingredients. We continued experimenting, learning and developing new products to improve our range and meet the changing needs of our customers."
  }
],
  pillars: [
  {
    "icon": "Leaf",
    "title": "Botanical & Actives",
    "description": "Thoughtfully blended plant extracts with clinically-proven actives for visible results.",
    "color": "#5d825d",
    "bgColor": "#e4ebe4"
  },
  {
    "icon": "Droplets",
    "title": "Effortless Rituals",
    "description": "Streamlined care that respects your time and skin — effective routines without clutter or confusion.",
    "color": "#dab336",
    "bgColor": "#fdf9ee"
  },
  {
    "icon": "Heart",
    "title": "Gentle Care",
    "description": "Formulated for sensitive skin. No harsh chemicals, synthetic fragrances, or irritants.",
    "color": "#d66b7f",
    "bgColor": "#fbeef1"
  },
  {
    "icon": "Tag",
    "title": "Accessible Luxury",
    "description": "Premium ingredients at honest prices. Because great skin shouldn't cost a fortune.",
    "color": "#715f52",
    "bgColor": "#ebe7e3"
  }
],
  manifesto: [
  {
    "title": "Kind to Your Skin",
    "text": "We believe skincare should never compromise your skin's health. Every ingredient is chosen for its gentleness and efficacy — no fillers, no harsh actives that damage your barrier, no synthetic fragrances that irritate."
  },
  {
    "title": "Kind to Your Routine",
    "text": "Life is complex. Your skincare shouldn't be. We design multi-tasking formulas that deliver results in fewer steps, so you can spend less time in front of the mirror and more time living."
  },
  {
    "title": "Kind to the Planet",
    "text": "Beauty shouldn't come at earth's expense. We use recyclable packaging, sustainably sourced ingredients, and carbon-neutral shipping. Small choices, big impact."
  }
],
  stats: [
  {
    "number": "50,000+",
    "label": "Happy Customers"
  },
  {
    "number": "4.9/5",
    "label": "Average Rating"
  },
  {
    "number": "97%",
    "label": "Would Recommend"
  },
  {
    "number": "100%",
    "label": "Clean Ingredients"
  }
],
  indianStates: [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
],
  pincodeLookup: {
  "110001": {
    "city": "New Delhi",
    "district": "Central Delhi",
    "state": "Delhi",
    "place": "Connaught Place"
  },
  "226001": {
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "place": "Hazratganj"
  },
  "302001": {
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "place": "M.I. Road"
  },
  "380001": {
    "city": "Ahmedabad",
    "district": "Ahmedabad",
    "state": "Gujarat",
    "place": "Bhadra"
  },
  "400001": {
    "city": "Mumbai",
    "district": "Mumbai City",
    "state": "Maharashtra",
    "place": "Fort"
  },
  "400050": {
    "city": "Mumbai",
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "place": "Bandra"
  },
  "500001": {
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "place": "Abids"
  },
  "500081": {
    "city": "Hyderabad",
    "district": "Rangareddy",
    "state": "Telangana",
    "place": "Hitech City"
  },
  "520001": {
    "city": "Vijayawada",
    "district": "Krishna",
    "state": "Andhra Pradesh",
    "place": "Governorpet"
  },
  "521137": {
    "city": "Vijayawada",
    "district": "Krishna",
    "state": "Andhra Pradesh",
    "place": "Poranki"
  },
  "560001": {
    "city": "Bangalore",
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "place": "MG Road"
  },
  "560034": {
    "city": "Bangalore",
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "place": "Koramangala"
  },
  "600001": {
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "place": "George Town"
  },
  "682001": {
    "city": "Kochi",
    "district": "Ernakulam",
    "state": "Kerala",
    "place": "Fort Kochi"
  },
  "700001": {
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "place": "BBD Bagh"
  }
}
};
