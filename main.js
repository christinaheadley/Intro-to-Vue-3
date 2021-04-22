const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "not Nike",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 },
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
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    saleMessage() {
      if (this.onSale) {
        return this.brand + " " + this.product + " " + "are on sale!";
      }
    },
  },
});
