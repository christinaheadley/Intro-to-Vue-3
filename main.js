const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "crew socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
      inventory: 0,
      onSale: false,
      url: "www.google.com",
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
