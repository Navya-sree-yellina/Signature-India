// ===========================
// MENU DATABASE
// ===========================
let currentCategory = "all";
let currentTypeFilter = 'all'; // 'all', 'veg', 'non-veg'

// Embedded menu data (to avoid CORS issues with file:// protocol)
const menuData = {
  categories: [
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Perfect starters and street food favorites",
      icon: "🥟",
      allowedFilters: ['veg', 'non-veg'],
      items: [
        {
          id: "veg-pakora",
          name: "Veg Pakora",
          description:
            "Assorted vegetable fritters in seasoned chickpea batter, crispy and golden",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "onion-pakora",
          name: "Onion Pakora",
          description:
            "Thinly sliced onions coated in spiced gram flour batter and deep-fried to perfection",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "samosa",
          name: "Samosa",
          description:
            "Crispy triangular pastry filled with spiced potatoes and peas, a classic Indian snack",
          category: "appetizers",
          vegetarian: true,
          popular: true,
        },
        {
          id: "cut-mirchi",
          name: "Cut Mirchi",
          description:
            "Sliced chili fritters stuffed with tangy spices, coated in chickpea batter and fried",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "andhra-mirchi-bajji",
          name: "Andhra Mirchi Bajji",
          description:
            "Traditional Andhra-style whole green chilies dipped in spiced batter and deep-fried",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "stuffed-mirchi-bajji",
          name: "Stuffed Mirchi Bajji",
          description:
            "Large green chilies stuffed with savory filling, battered and fried until crispy",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "punugulu",
          name: "Punugulu",
          description:
            "Crispy South Indian snack made from idli batter, deep-fried into golden balls",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "gobi-manchurian",
          name: "Gobi Manchurian",
          description:
            "Crispy cauliflower florets tossed in tangy Indo-Chinese sauce with garlic and ginger",
          category: "appetizers",
          vegetarian: true,
          popular: true,
        },
        {
          id: "veg-manchurian",
          name: "Veg Manchurian",
          description:
            "Mixed vegetable dumplings in a savory Indo-Chinese sauce with soy and chili",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "mushroom-65",
          name: "Mushroom 65",
          description:
            "Spicy, crispy mushrooms marinated in South Indian spices and deep-fried",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "chilli-gobi",
          name: "Chilli Gobi",
          description:
            "Crispy cauliflower tossed with bell peppers, onions, and spicy chili sauce",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "chilli-paneer",
          name: "Chilli Paneer",
          description:
            "Cottage cheese cubes stir-fried with peppers and onions in spicy Indo-Chinese sauce",
          category: "appetizers",
          vegetarian: true,
          popular: true,
        },
        {
          id: "gun-powder-idli",
          name: "Gun Powder Idli",
          description:
            "Steamed rice cakes tossed with fiery gun powder spice mix and ghee",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "masala-pepper-corn",
          name: "Masala Pepper Corn",
          description:
            "Sweet corn kernels sautéed with aromatic spices, peppers, and herbs",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "gobi-65",
          name: "Gobi 65",
          description:
            "Spicy cauliflower florets marinated in yogurt and South Indian spices, deep-fried",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "chilli-idli",
          name: "Chilli Idli",
          description:
            "Crispy fried idli pieces tossed with onions, peppers, and spicy chili sauce",
          category: "appetizers",
          vegetarian: true,
        },
        {
          id: "chicken-65",
          name: "Chicken 65",
          description:
            "Spicy, deep-fried chicken marinated with curry leaves, yogurt, and South Indian spices",
          category: "appetizers",
          popular: true,
        },
        {
          id: "chicken-pepper-fry",
          name: "Chicken Pepper Fry",
          description:
            "Tender chicken pieces stir-fried with crushed black pepper and aromatic spices",
          category: "appetizers",
        },
        {
          id: "chicken-manchurian",
          name: "Chicken Manchurian",
          description:
            "Crispy chicken dumplings in a tangy Indo-Chinese sauce with garlic and ginger",
          category: "appetizers",
        },
        {
          id: "caribbean-chicken",
          name: "Caribbean Chicken",
          description:
            "Succulent chicken marinated in tropical spices with a hint of sweetness and heat",
          category: "appetizers",
        },
        {
          id: "chicken-masakali",
          name: "Chicken Masakali",
          description:
            "Boneless chicken tossed in a flavorful masala with onions, peppers, and spices",
          category: "appetizers",
        },
        {
          id: "chilli-chicken",
          name: "Chilli Chicken",
          description:
            "Crispy chicken pieces stir-fried with bell peppers, onions, and spicy chili sauce",
          category: "appetizers",
          popular: true,
        },
        {
          id: "lollipop-chicken",
          name: "Lollipop Chicken",
          description:
            "Chicken drumettes shaped like lollipops, marinated and fried to crispy perfection",
          category: "appetizers",
        },
        {
          id: "chicken-majestic",
          name: "Chicken Majestic",
          description:
            "Crispy chicken strips tossed in a creamy, spicy sauce with cashews and curry leaves",
          category: "appetizers",
        },
        {
          id: "curry-leaves-chicken",
          name: "Curry Leaves Chicken",
          description:
            "Tender chicken sautéed with fresh curry leaves, mustard seeds, and aromatic spices",
          category: "appetizers",
        },
        {
          id: "chilli-shrimp",
          name: "Chilli Shrimp",
          description:
            "Succulent shrimp stir-fried with peppers, onions, and spicy Indo-Chinese sauce",
          category: "appetizers",
        },
        {
          id: "shrimp-pepper-fry",
          name: "Shrimp Pepper Fry",
          description:
            "Juicy shrimp sautéed with crushed black pepper, curry leaves, and South Indian spices",
          category: "appetizers",
        },
        {
          id: "goat-sukka",
          name: "Goat Sukka",
          description:
            "Tender goat meat cooked dry with roasted spices, coconut, and curry leaves",
          category: "appetizers",
          popular: true,
        },
        {
          id: "apollo-fish",
          name: "Apollo Fish",
          description:
            "Crispy fish fillets tossed in a tangy, spicy sauce with yogurt and special spices",
          category: "appetizers",
        },
        {
          id: "masala-fish",
          name: "Masala Fish",
          description:
            "Fish pieces marinated in aromatic masala spices and pan-fried to golden perfection",
          category: "appetizers",
        },
      ],
    },
    {
      id: "entrees",
      name: "Entrees",
      description: "Rich and flavorful curries",
      icon: "🍛",
      allowedFilters: ['veg', 'non-veg'],
      items: [
        { id: "dal-tadaka", name: "Dal Tadaka", description: "Yellow lentils tempered with cumin, garlic, and fresh herbs", category: "entrees", vegetarian: true },
        { id: "dal-palak", name: "Dal Palak", description: "Lentils cooked with fresh spinach and tempered spices", category: "entrees", vegetarian: true },
        { id: "mixed-veg-korma", name: "Mixed Veg Korma", description: "Assorted vegetables in a creamy cashew and coconut sauce", category: "entrees", vegetarian: true },
        { id: "paneer-tikka-masala", name: "Paneer Tikka Masala", description: "Grilled cottage cheese cubes in a rich, spiced tomato gravy", category: "entrees", vegetarian: true, popular: true },
        { id: "paneer-makhni", name: "Paneer Makhni", description: "Cottage cheese in a buttery, creamy tomato sauce", category: "entrees", vegetarian: true },
        { id: "malai-kofta", name: "Malai Kofta", description: "Soft cheese and vegetable dumplings in a rich creamy gravy", category: "entrees", vegetarian: true },
        { id: "navaratan-korma", name: "Navaratan Korma", description: "Nine-gem vegetable curry in a sweet and nutty creamy sauce", category: "entrees", vegetarian: true },
        { id: "veg-chettinadu", name: "Veg. Chettinadu", description: "Vegetables cooked in spicy, aromatic Chettinad masala", category: "entrees", vegetarian: true },
        { id: "saag-paneer", name: "Saag Paneer", description: "Cottage cheese cubes simmered in a smooth seasoned spinach puree", category: "entrees", vegetarian: true },
        { id: "kadai-paneer", name: "Kadai Paneer", description: "Paneer tossed with bell peppers and onions in freshly ground spices", category: "entrees", vegetarian: true },
        { id: "bendi-masala", name: "Bendi Masala", description: "Okra stir-fried with onions, tomatoes, and tangy spices", category: "entrees", vegetarian: true },
        { id: "gutti-vankaya-curry", name: "Gutti Vankaya Curry", description: "Stuffed eggplants cooked in a rich peanut and sesame sauce", category: "entrees", vegetarian: true },
        { id: "loo-gobi-masala", name: "Aloo Gobi Masala", description: "Potatoes and cauliflower florets cooked with ginger and spices", category: "entrees", vegetarian: true },
        { id: "chana-masala", name: "Chana Masala", description: "Chickpeas simmered in a rustic, spicy tomato-onion gravy", category: "entrees", vegetarian: true },
        { id: "mushroom-mutter", name: "Mushroom Mutter", description: "Mushrooms and green peas in a flavorful spiced curry", category: "entrees", vegetarian: true },
        { id: "mutter-paneer", name: "Mutter Paneer", description: "Peas and cottage cheese in a homestyle tomato gravy", category: "entrees", vegetarian: true },
        { id: "badami-paneer", name: "Badami Paneer", description: "Cottage cheese in a rich, creamy almond-based sauce", category: "entrees", vegetarian: true },
        { id: "madras-chicken", name: "Madras Chicken", description: "Chicken curry with roasted spices, coconut, and curry leaves", category: "entrees" },
        { id: "chicken-chettinadu", name: "Chicken Chettinadu", description: "Spicy chicken curry from Chettinad region with aromatic spices", category: "entrees" },
        { id: "chicken-tikka-masala", name: "Chicken Tikka Masala", description: "Grilled chicken chunks in a creamy, spiced tomato gravy", category: "entrees", popular: true },
        { id: "butter-chicken", name: "Butter Chicken", description: "Tandoori chicken in a velvety, buttery tomato sauce", category: "entrees", popular: true },
        { id: "kadai-chicken", name: "Kadai Chicken", description: "Chicken stir-fried with bell peppers and onions in kadai spices", category: "entrees" },
        { id: "chicken-korma", name: "Chicken Korma", description: "Chicken braised in a mild, creamy nut-based sauce", category: "entrees" },
        { id: "gongura-chicken", name: "Gongura Chicken", description: "Spicy chicken curry cooked with tangy sorrel leaves", category: "entrees" },
        { id: "andhra-chicken-curry", name: "Andhra Chicken Curry", description: "Traditional spicy chicken curry with distinct Andhra spices", category: "entrees" },
        { id: "badami-chicken", name: "Badami Chicken", description: "Chicken simmered in a rich and creamy almond gravy", category: "entrees" },
        { id: "dum-ka-murgh", name: "Dum ka Murgh", description: "Slow-cooked chicken in a sealed pot with rich Hyderabadi spices", category: "entrees" },
        { id: "saag-chicken", name: "Saag Chicken", description: "Tender chicken cooked in a nutritious, spiced spinach gravy", category: "entrees" },
        { id: "goat-masala", name: "Goat Masala", description: "Tender goat meat cooked in a thick, flavorful masala gravy", category: "entrees" },
        { id: "goat-chettinadu", name: "Goat Chettinadu", description: "Spicy goat curry with roasted Chettinad spices", category: "entrees" },
        { id: "goat-curry", name: "Goat Curry", description: "Traditional home-style goat curry with aromatic spices", category: "entrees" },
        { id: "egg-pulusu", name: "Egg Pulusu", description: "Boiled eggs simmered in a tangy tamarind and tomato stew", category: "entrees" },
        { id: "goat-pepper-fry", name: "Goat Pepper Fry", description: "Tender goat meat stir-fried with crushed black pepper and spices", category: "entrees" },
        { id: "goat-vindaloo", name: "Goat Vindaloo", description: "Spicy and tangy goat curry with vinegar and potatoes", category: "entrees" },
        { id: "gongura-goat-curry", name: "Gongura Goat Curry", description: "Traditional goat curry cooked with tangy sorrel leaves", category: "entrees" },
        { id: "goat-saag", name: "Goat Saag", description: "Goat meat simmered in a smooth, spiced spinach gravy", category: "entrees" },
        { id: "nellore-fish-curry", name: "Nellore Fish Curry", description: "Tangy and spicy fish curry in a tamarind-based sauce", category: "entrees" },
        { id: "shrimp-curry", name: "Shrimp Curry", description: "Succulent shrimp cooked in a coconut and spice-infused gravy", category: "entrees" }
      ],
    },
    {

      id: "biryanis",
      name: "Biryanis",
      description: "Aromatic basmati rice dishes",
      icon: "🥘",
      allowedFilters: ['veg', 'non-veg'],
      items: [
        { id: "biryani-night", name: "BIRIYANI NIGHT", description: "Every Wednesday - Special Offer!", category: "biryanis", highlight: true },
        { id: "veg-biryani", name: "Vegetable Biriyani", description: "Aromatic basmati rice cooked with mixed vegetables and spices", category: "biryanis", vegetarian: true },
        { id: "paneer-biryani", name: "Paneer Biriyani", description: "Basmati rice cooked with marinated cottage cheese cubes", category: "biryanis", vegetarian: true },
        { id: "ulavacharu-paneer-biryani", name: "Ulavacharu Paneer Biriyani", description: "Traditional horse gram soup infused biryani with paneer", category: "biryanis", vegetarian: true },
        { id: "ulavacharu-veg-biryani", name: "Ulavacharu Veg Biriyani", description: "Horse gram soup infused biryani with mixed vegetables", category: "biryanis", vegetarian: true },
        { id: "egg-biryani", name: "Egg Biriyani", description: "Spiced hard-boiled eggs layered with fragrant biryani rice", category: "biryanis" },
        { id: "chicken-biryani", name: "Chicken Biriyani", description: "Classic chicken biryani with bone-in chicken and aromatic spices", category: "biryanis", popular: true },
        { id: "boneless-chicken-biryani", name: "Boneless Chicken Biriyani", description: "Tender boneless chicken pieces cooked with basmati rice", category: "biryanis" },
        { id: "ulavacharu-chicken-biryani", name: "Ulavacharu Chicken Biriyani", description: "Horse gram soup infused biryani with succulent chicken", category: "biryanis" },
        { id: "signature-chicken-biryani", name: "Signature India Spcl Chicken Biriyani", description: "Chef's special secret recipe chicken biryani", category: "biryanis", popular: true },
        { id: "boneless-chicken-65-biryani", name: "Boneless Chicken 65 Biriyani", description: "Spicy Chicken 65 pieces layered with aromatic biryani rice", category: "biryanis" },
        { id: "goat-kheema-biryani", name: "Goat Kheema Biriyani", description: "Minced goat meat cooked with spices and layered with rice", category: "biryanis" },
        { id: "goat-fry-biryani", name: "Goat Fry Biriyani", description: "Fried goat meat pieces tossed with aromatic biryani rice", category: "biryanis" },
        { id: "ulavacharu-goat-biryani", name: "Ulavacharu Goat Biriyani", description: "Horse gram soup infused biryani with tender goat meat", category: "biryanis" },
        { id: "fish-biryani", name: "Fish Biriyani", description: "Fish fillets cooked with spices and basmati rice", category: "biryanis" },
        { id: "shrimp-biryani", name: "Shrimp Biriyani", description: "Juicy shrimp cooked in biryani masala and rice", category: "biryanis" },
        { id: "extra-raita", name: "Extra Raita", description: "Cooling yogurt side dish with cucumber and spices", category: "biryanis", vegetarian: true }
      ],
    },
    {
      id: "tandoori",
      name: "Tandoori",
      description: "Clay oven specialties",
      icon: "🔥",
      allowedFilters: ['non-veg'],
      items: [
        { id: "tandoori-chicken", name: "Tandoori Chicken", description: "Whole chicken marinated in yogurt and traditional spices, roasted to perfection in a clay oven", category: "tandoori", popular: true },
        { id: "chicken-tikka-kebab", name: "Chicken Tikka Kebab", description: "Boneless chicken chunks marinated in spices and yogurt, grilled in tandoor", category: "tandoori" },
        { id: "chicken-malai-kebab", name: "Chicken Malai Kebab", description: "Creamy and mild boneless chicken marinated in cheddar cheese, fresh cream, and herbs", category: "tandoori" },
        { id: "chicken-shish-kebab", name: "Chicken Shish Kebab", description: "Minced chicken seasoned with spices, skewered and grilled", category: "tandoori" },
        { id: "chicken-kalmi-kebab", name: "Chicken Kalmi Kebab", description: "Succulent chicken drumsticks marinated in rich spices and yogurt", category: "tandoori" },
        { id: "tandoori-shrimp", name: "Tandoori Shrimp", description: "Jumbo shrimp marinated in tandoori spices and grilled in a clay oven", category: "tandoori" },
        { id: "lamb-shish-kebab", name: "Lamb Shish Kebab", description: "Minced lamb seasoned with fresh herbs and spices, skewered and grilled", category: "tandoori" }
      ],
    },
    {
      id: "breads",
      name: "Breads",
      description: "Freshly baked naans and rotis",
      icon: "🫓",
      allowedFilters: ['veg', 'non-veg'],
      items: [
        { id: "plain-naan", name: "Plain Naan", description: "Soft, pillowy leavened flatbread baked in a tandoor", category: "breads", vegetarian: true },
        { id: "butter-naan", name: "Butter Naan", description: "Classic naan brushed with melted butter", category: "breads", vegetarian: true },
        { id: "garlic-naan", name: "Garlic Naan", description: "Naan topped with fresh garlic and cilantro", category: "breads", vegetarian: true, popular: true },
        { id: "aloo-paratha", name: "Aloo Paratha", description: "Whole wheat flatbread stuffed with spiced potato filling", category: "breads", vegetarian: true },
        { id: "tandoori-roti", name: "Tandoori Roti", description: "Traditional whole wheat flatbread baked in a clay oven", category: "breads", vegetarian: true },
        { id: "butter-tandoori-roti", name: "Butter Tandoori Roti", description: "Tandoori roti brushed with butter", category: "breads", vegetarian: true },

        { id: "bread-basket", name: "Bread Basket", description: "Assortment of our finest breads: Naan, Garlic Naan, and Roti", category: "breads", vegetarian: true },
        { id: "cheese-kulcha", name: "Cheese Kulcha", description: "Leavened bread stuffed with melted cheese", category: "breads", vegetarian: true },
        { id: "onion-kulcha", name: "Onion Kulcha", description: "Leavened bread stuffed with spiced onions and herbs", category: "breads", vegetarian: true },
        { id: "chicken-tikka-naan", name: "Chicken Tikka Naan", description: "Naan stuffed with minced chicken tikka", category: "breads" },
        { id: "kashmiri-paratha", name: "Kashmiri Paratha", description: "Sweet flatbread stuffed with dried fruits and nuts", category: "breads", vegetarian: true }
      ],
    },
    {
      id: "breakfast",
      name: "Breakfast",
      description: "South Indian specials",
      icon: "🥞",
      allowedFilters: ['veg'],
      items: [
        { id: "idli", name: "Idli", description: "Steamed rice cakes served with chutney and sambar", category: "breakfast", vegetarian: true },
        { id: "sambar-idli", name: "Sambar Idli", description: "Idlis soaked in flavorful sambar", category: "breakfast", vegetarian: true },
        { id: "ghee-karam-idli", name: "Ghee Karam Idli", description: "Idlis tossed with spicy powder and ghee", category: "breakfast", vegetarian: true },
        { id: "sambar-vada", name: "Sambar Vada", description: "Crispy donut-shaped lentils soaked in sambar", category: "breakfast", vegetarian: true },
        { id: "medu-vada", name: "Medu Vada", description: "Crispy fried lentil donuts served with chutney and sambar", category: "breakfast", vegetarian: true },
        { id: "idli-vada", name: "Idli Vada", description: "Combination of steamed idli and crispy vada", category: "breakfast", vegetarian: true },
        { id: "veg-uthappam", name: "Veg. Uthappam", description: "Thick savory pancake topped with mixed vegetables", category: "breakfast", vegetarian: true },
        { id: "onion-uthappam", name: "Onion Uthappam", description: "Thick savory pancake topped with onions", category: "breakfast", vegetarian: true },
        { id: "onion-tomato-uthappam", name: "Onion Tomato Uthappam", description: "Thick savory pancake with onions and tomatoes", category: "breakfast", vegetarian: true },
        { id: "onion-chilli-uthappam", name: "Onion Chilli Uthappam", description: "Spiced pancake topped with onions and green chilies", category: "breakfast", vegetarian: true },
        { id: "poori-aloo", name: "Puri With Aloo", description: "Deep-fried bread served with potato masala curry", category: "breakfast", vegetarian: true },
        { id: "poori-chole", name: "Puri With Chole", description: "Deep-fried bread served with spicy chickpea curry", category: "breakfast", vegetarian: true },
        { id: "extra-puri", name: "Extra Puri", description: "Single piece of deep-fried puffy bread", category: "breakfast", vegetarian: true },
        { id: "plain-dosa", name: "Plain Dosa", description: "Thin, crispy rice crepe served with chutney and sambar", category: "breakfast", vegetarian: true },
        { id: "masala-dosa", name: "Masala Dosa", description: "Crispy crepe filled with spiced potato masala", category: "breakfast", vegetarian: true, popular: true },
        { id: "mysore-masala-dosa", name: "Mysore Masala Dosa", description: "Spicy crepe smeared with chutney and potato filling", category: "breakfast", vegetarian: true },
        { id: "onion-dosa", name: "Onion Dosa", description: "Crispy crepe topped with chopped onions", category: "breakfast", vegetarian: true },
        { id: "paper-roast-dosa", name: "Paper Roast Dosa", description: "Ultra-thin and extra crispy rice crepe", category: "breakfast", vegetarian: true },
        { id: "andhra-kara-dosa", name: "Andhra Kara Dosa", description: "Spicy crepe smeared with special Andhra chili paste", category: "breakfast", vegetarian: true },
        { id: "kal-dosa", name: "Kal Dosa", description: "Thick and soft sponge dosa", category: "breakfast", vegetarian: true },
        { id: "rava-dosa", name: "Rava Dosa", description: "Crispy semolina crepe with cumin and spices", category: "breakfast", vegetarian: true },
        { id: "onion-rava-dosa", name: "Onion Rava Dosa", description: "Semolina crepe topped with onions", category: "breakfast", vegetarian: true },
        { id: "signature-spl-dosa", name: "Signature SPL Dosa", description: "Chef's special stuffed dosa", category: "breakfast", vegetarian: true, popular: true },
        { id: "kid-cheese-dosa", name: "Kid Cheese Dosa", description: "Mild cone-shaped dosa with melted cheese", category: "breakfast", vegetarian: true },
        { id: "kid-plain-dosa", name: "Kid Plain Dosa", description: "Small, mild, and crispy dosa", category: "breakfast", vegetarian: true },
        { id: "ghee-dosa", name: "Ghee Dosa", description: "Crispy crepe roasted with aromatic ghee", category: "breakfast", vegetarian: true },
        { id: "extra-masala", name: "Extra Masala", description: "Side of spiced potato filling", category: "breakfast", vegetarian: true }
      ],
    },
    {
      id: "indian-wok",
      name: "Indian Wok",
      description: "Indo-Chinese fusion",
      icon: "🥢",
      allowedFilters: ['veg', 'non-veg'],
      items: [
        { id: "veg-fried-rice", name: "Veg. Fried Rice", description: "Stir-fried rice with mixed vegetables", category: "indian-wok", vegetarian: true },
        { id: "egg-fried-rice", name: "Egg Fried Rice", description: "Stir-fried rice with scrambled eggs and veggies", category: "indian-wok" },
        { id: "chicken-fried-rice", name: "Chicken Fried Rice", description: "Stir-fried rice with tender chicken pieces", category: "indian-wok" },
        { id: "shrimp-fried-rice", name: "Shrimp Fried Rice", description: "Stir-fried rice with succulent shrimp", category: "indian-wok" },
        { id: "veg-noodles", name: "Veg. Noodles", description: "Hakka style noodles tossed with vegetables", category: "indian-wok", vegetarian: true },
        { id: "egg-noodles", name: "Egg Noodles", description: "Noodles stir-fried with egg and spices", category: "indian-wok" },
        { id: "chicken-noodles", name: "Chicken Noodles", description: "Noodles tossed with chicken and soy sauce", category: "indian-wok" },
        { id: "shrimp-noodles", name: "Shrimp Noodles", description: "Noodles stir-fried with shrimp and veggies", category: "indian-wok" },
        { id: "veg-manchurian-wet", name: "Veg. Manchurian (WET)", description: "Veg dumplings in spicy, tangy gravy", category: "indian-wok", vegetarian: true },
        { id: "chicken-manchurian-wet", name: "Chicken Manchurian (WET)", description: "Chicken dumplings in savory Indo-Chinese sauce", category: "indian-wok" },
        { id: "ginger-chicken-wet", name: "Ginger Chicken (WET)", description: "Chicken cooked in spicy ginger sauce", category: "indian-wok" }
      ],
    },
    {
      id: "pizza",
      name: "Pizza",
      description: "Indian style pizzas",
      icon: "🍕",
      allowedFilters: ['veg', 'non-veg'],
      items: [
        { id: "chicken-tikka-pizza", name: "Chicken Tikka Pizza", description: "Pizza topped with chicken tikka and spices", category: "pizza", popular: true },
        { id: "kadai-paneer-veggie-pizza", name: "Kadai Paneer Veggie Pizza", description: "Spicy paneer and veggies in kadai sauce", category: "pizza", vegetarian: true },
        { id: "butter-chicken-pizza", name: "Butter Chicken Pizza", description: "Tandoori chicken in creamy butter sauce on pizza", category: "pizza" },
        { id: "alfredo-chicken-pizza", name: "Alfredo Chicken Pizza", description: "Chicken with creamy Alfredo sauce", category: "pizza" },
        { id: "cheese-pizza", name: "Cheese Pizza", description: "Classic cheese pizza", category: "pizza", vegetarian: true }
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet endings",
      icon: "🧁",
      allowedFilters: ['veg'],
      items: [
        { id: "gulab-jamun", name: "Gulab Jamun", description: "Soft milk dumplings soaked in rose sugar syrup", category: "desserts", vegetarian: true, popular: true },
        { id: "rasmalai", name: "Rasmalai", description: "Cottage cheese patties in sweetened cardamom milk", category: "desserts", vegetarian: true },
        { id: "dessert-of-day", name: "Dessert of the Day", description: "Chef's special sweet treat", category: "desserts", vegetarian: true }
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Refreshing beverages",
      icon: "🥤",
      allowedFilters: [],
      items: [
        { id: "lassi", name: "Salt/Sweet Lassi", description: "Traditional yogurt-based drink", category: "drinks", vegetarian: true },
        { id: "mango-lassi", name: "Mango Lassi", description: "Sweet yogurt drink blended with mango pulp", category: "drinks", vegetarian: true, popular: true },
        { id: "can-soda", name: "Can Soda", description: "Assorted soda cans", category: "drinks", vegetarian: true },
        { id: "special-soda", name: "Special Soda", description: "Thumsup, Limca, Sprite, Coca Cola", category: "drinks", vegetarian: true },
        { id: "masala-chai", name: "Masala Chai", description: "Spiced Indian hot tea", category: "drinks", vegetarian: true },
        { id: "coffee", name: "Coffee", description: "Freshly brewed coffee", category: "drinks", vegetarian: true }
      ],
    },
    {
      id: "alcohol",
      name: "Alcohol",
      description: "Beers and Spirits",
      icon: "🍺",
      allowedFilters: [],
      items: [
        { id: "large-beer", name: "Large Beer", description: "Premium lager (Large)", category: "alcohol", vegetarian: true },
        { id: "regular-beer", name: "Regular Beer", description: "Standard lager", category: "alcohol", vegetarian: true },
        { id: "kingfisher-small", name: "Kingfisher Beer (Small)", description: "Famous Indian lager", category: "alcohol", vegetarian: true }
      ],
    },
  ],
  restaurant_info: {
    name: "Signature India",
    tagline: "Restaurant & Bakery",
    phone: "(636) 220-1700",
    address: {
      street: "14031 Manchester Rd",
      city: "Manchester",
      state: "MO",
      zip: "63011",
    },
  },
};

// Initialize menu immediately
// Initialize menu immediately
function loadMenuData() {
  // Check if we are on the menu page
  const menuSection = document.getElementById("menu");
  const offeringsSection = document.getElementById("offerings");

  // Get category from URL query param
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");

  if (menuSection) {
    // We are on menu.html (or index has menu)
    // If there's a param, use it, otherwise default to 'all'
    initializeMenu(categoryParam || "all");
  }

  if (offeringsSection) {
    initializeOfferings();
  }
}

// ===========================
// INITIALIZE OFFERINGS
// ===========================
function initializeOfferings() {
  const offeringsGrid = document.getElementById("offeringsGrid");
  if (!offeringsGrid) return;

  const categories = [
    {
      id: "appetizers",
      name: "Appetizers",
      icon: "🥟",
      image: "images/offering-appetizers.png",
    },
    {
      id: "entrees",
      name: "Entrees",
      icon: "🍛",
      image: "images/offering-entrees.png",
    },
    {
      id: "biryanis",
      name: "Biryanis",
      icon: "🍚",
      image: "images/offering-biryanis.png",
    },
    {
      id: "tandoori",
      name: "Tandoori",
      icon: "🔥",
      image: "images/offering-tandoori.png",
    },
    {
      id: "breads",
      name: "Breads",
      icon: "🫓",
      image: "images/offering-breads.png",
    },
    {
      id: "breakfast",
      name: "Breakfast",
      icon: "🥞",
      image: "images/offering-breakfast.png",
    },
    {
      id: "indian-wok",
      name: "Indian Wok",
      icon: "🥢",
      image: "images/offering-indian-wok.png",
    },
    {
      id: "pizza",
      name: "Pizza",
      icon: "🍕",
      image: "images/offering-pizza.png",
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: "🧁",
      image: "images/offering-desserts.png",
    },
    {
      id: "drinks",
      name: "Drinks",
      icon: "🥤",
      image: "images/offering-drinks.png",
    },
  ];

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.className = "mini-offering-card fade-in";
    card.onclick = () => {
      // Redirect to menu.html with category param
      window.location.href = `menu.html?category=${category.id}`;
    };

    card.innerHTML = `
            <img src="${category.image}" alt="${category.name}" class="mini-offering-bg">
            <div class="mini-offering-content">
                <div class="mini-offering-name">${category.name}</div>
            </div>
        `;

    offeringsGrid.appendChild(card);
  });
}

// ===========================
// INITIALIZE MENU
// ===========================
function initializeMenu(initialCategory = "all") {
  if (!menuData) return;

  // Create tabs
  const menuTabs = document.getElementById("menuTabs");
  if (menuTabs) {
    menuTabs.innerHTML = ""; // Clear existing tabs

    // Add "All" tab
    const allTab = document.createElement("button");
    allTab.className = `menu-tab ${initialCategory === "all" ? "active" : ""}`;
    allTab.textContent = "All Items";
    allTab.onclick = () => filterMenu("all");
    menuTabs.appendChild(allTab);

    // Add category tabs
    menuData.categories.forEach((category) => {
      const tab = document.createElement("button");
      tab.className = `menu-tab ${initialCategory === category.id ? "active" : ""}`;
      tab.textContent = category.name;
      tab.onclick = () => filterMenu(category.id);
            menuTabs.appendChild(tab);
        });
        
        // Add Type Filters (Veg/Non-Veg)
        const typeFilters = document.createElement('div');
        typeFilters.className = 'type-filters';
        typeFilters.innerHTML = `
            <button class="type-filter-btn active" onclick="filterType('all')" data-type="all">All Types</button>
            <button class="type-filter-btn" onclick="filterType('veg')" data-type="veg">
                <span style="color: #4CAF50;">●</span> Veg Only
            </button>
            <button class="type-filter-btn" onclick="filterType('non-veg')" data-type="non-veg">
                <span style="color: #E74C3C;">●</span> Non-Veg Only
            </button>
        `;
        // Insert after tabs
        if (menuTabs.nextSibling) {
            menuTabs.parentNode.insertBefore(typeFilters, menuTabs.nextSibling);
        } else {
            menuTabs.parentNode.appendChild(typeFilters);
        }
    }
    
    // Display items for the selected category
    filterMenu(initialCategory);
}

// ===========================
// FILTER TYPE
// ===========================
function filterType(type) {
    currentTypeFilter = type;
    
    // Update active state
    const buttons = document.querySelectorAll('.type-filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        }
    });
    
    // Refresh display
    displayMenuItems(currentCategory);
}

// ===========================
// FILTER MENU
// ===========================
function filterMenu(categoryId) {
  currentCategory = categoryId;

  // Update active tab
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    // Flexible check for "All Items" or category name match
    if (
      (categoryId === "all" && tab.textContent === "All Items") ||
      tab.textContent ===
        menuData.categories.find((c) => c.id === categoryId)?.name
    ) {
      tab.classList.add("active");
    }
  });

  // Update Type Filters Visibility
  const typeFilterContainer = document.querySelector('.type-filters');
  
  if (typeFilterContainer) {
      // Find current category object
      const categoryObj = menuData.categories.find(c => c.id === categoryId);
      const allowedFilters = categoryObj ? (categoryObj.allowedFilters || ['veg', 'non-veg']) : ['veg', 'non-veg'];

      // Reset logic
      currentTypeFilter = 'all';
      
      const btnAll = typeFilterContainer.querySelector('[data-type="all"]');
      const btnVeg = typeFilterContainer.querySelector('[data-type="veg"]');
      const btnNonVeg = typeFilterContainer.querySelector('[data-type="non-veg"]');

      // Reset active and display
      [btnAll, btnVeg, btnNonVeg].forEach(btn => {
          if(btn) {
             btn.classList.remove('active');
             btn.style.display = 'inline-block';
          }
      });
      if(btnAll) btnAll.classList.add('active');

      if (allowedFilters.length === 0) {
          typeFilterContainer.style.display = 'none';
      } else {
          typeFilterContainer.style.display = 'flex';
          
          if (!allowedFilters.includes('veg') && btnVeg) {
              btnVeg.style.display = 'none';
          }
          if (!allowedFilters.includes('non-veg') && btnNonVeg) {
              btnNonVeg.style.display = 'none';
          }
      }
  }

  // Display filtered items
  displayMenuItems(categoryId);
}

// ===========================
// DISPLAY MENU ITEMS
// ===========================
function displayMenuItems(categoryId) {
  const menuItemsContainer = document.getElementById("menuItems");
  if (!menuItemsContainer || !menuData) return;

  menuItemsContainer.innerHTML = "";

  let itemsToDisplay = [];

  if (categoryId === "all") {
    // Show all items from all categories
    menuData.categories.forEach((category) => {
      itemsToDisplay = itemsToDisplay.concat(category.items);
    });
    } else {
        // Show items from selected category
        const category = menuData.categories.find(c => c.id === categoryId);
        if (category) {
            itemsToDisplay = category.items;
        }
    }
    
    // Apply Type Filter
    if (currentTypeFilter !== 'all') {
        itemsToDisplay = itemsToDisplay.filter(item => {
            if (item.highlight) return true;
            if (currentTypeFilter === 'veg') return item.vegetarian === true;
            if (currentTypeFilter === 'non-veg') return !item.vegetarian;
            return true;
        });
    }// Create menu item cards
  itemsToDisplay.forEach((item, index) => {
    const itemCard = document.createElement("div");
    itemCard.className = `menu-item fade-in${item.highlight ? ' highlight' : ''}`;
    itemCard.style.animationDelay = `${index * 0.05}s`;

    const badges = [];
    if (item.vegetarian) {
      badges.push('<span class="badge badge-veg">🌱 Vegetarian</span>');
    }
    if (item.popular) {
      badges.push('<span class="badge badge-popular">⭐ Popular</span>');
    }

    const isDrinkOrAlcohol = item.category === 'drinks' || item.category === 'alcohol';

    const content = `
            <div class="menu-item-header">
                <h3 class="menu-item-name">${item.name}</h3>
                <div class="menu-item-indicators">
                    ${
                      !isDrinkOrAlcohol ? (
                          item.vegetarian
                            ? '<span class="food-symbol veg" title="Vegetarian"></span>'
                            : '<span class="food-symbol non-veg" title="Non-Vegetarian"></span>'
                      ) : ''
                    }
                </div>
            </div>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-badges">
                ${!isDrinkOrAlcohol ? (item.vegetarian ? '<span class="badge badge-veg">Vegetarian</span>' : '<span class="badge badge-non-veg">Non-Veg</span>') : ''}
                ${item.popular ? '<span class="badge badge-popular">★ Bestseller</span>' : ""}
            </div>
    `;

    if (item.highlight) {
        itemCard.innerHTML = `
            <video autoplay muted loop playsinline class="highlight-video-bg">
                <source src="Hero_Section_Background_Video_Ready.mp4" type="video/mp4">
            </video>
            <div class="highlight-content">
                ${content}
            </div>
        `;
    } else {
        itemCard.innerHTML = content;
    }

    menuItemsContainer.appendChild(itemCard);
  });
}

// ===========================
// NAVIGATION FUNCTIONALITY
// ===========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const spans = hamburger.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(8px, 8px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// ===========================
// SCROLL EFFECTS
// ===========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add("scrolled");
    // Clear manual styles to let CSS take over effectively
    navbar.style.background = "";
    navbar.style.boxShadow = "";
    navbar.style.borderBottom = "";
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================
const sections = document.querySelectorAll("section[id]");

function updateActiveNavLink() {
  const scrollPosition = window.pageYOffset + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
          link.classList.remove("active");
          if (href === `#${sectionId}`) {
            link.classList.add("active");
          }
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);

// ===========================
// SMOOTH SCROLL
// ===========================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    // Only prevent default if it's an anchor link on the same page
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// ===========================
// INTERSECTION OBSERVER
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe elements when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = document.querySelectorAll(
    ".offering-card, .menu-item, .contact-card, .stat-item",
  );
  elementsToObserve.forEach((element) => observer.observe(element));
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================
let scrollToTopBtn = null;

function createScrollToTopButton() {
  scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-orange);
        color: var(--color-white);
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: var(--shadow-orange);
    `;

  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

createScrollToTopButton();

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
  }
});

scrollToTopBtn.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.1) translateY(-5px)";
});

scrollToTopBtn.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1) translateY(0)";
});

// ===========================
// DEBOUNCE FUNCTION
// ===========================
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(updateActiveNavLink));

// ===========================
// ACCESSIBILITY
// ===========================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// ===========================
// INITIALIZE ON LOAD
// ===========================
window.addEventListener("DOMContentLoaded", () => {
  loadMenuData();
});

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log(
  "%c🍛 Welcome to Signature India! 🍛",
  "font-size: 20px; color: #FF8C00; font-weight: bold;",
);
console.log(
  "%cExperience authentic Indian cuisine with traditional flavors.",
  "font-size: 14px; color: #4CAF50; font-style: italic;",
);
