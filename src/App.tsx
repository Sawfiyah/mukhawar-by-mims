import { useState, useEffect } from "react";
import { Menu, X, ArrowDownRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  available: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Mims Design 01",
    price: 150000,
    image: "/assets/products/product-01.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Mims Design 02",
    price: 150000,
    image: "/assets/products/product-02.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Mims Design 03",
    price: 150000,
    image: "/assets/products/product-03.jpg",
    available: false,
  },
  {
    id: 4,
    name: "Mims Design 04",
    price: 150000,
    image: "/assets/products/product-04.jpg",
    available: true,
  },
  {
    id: 5,
    name: "Mims Design 05",
    price: 150000,
    image: "/assets/products/product-05.jpg",
    available: true,
  },
  {
    id: 6,
    name: "Mims Design 06",
    price: 150000,
    image: "/assets/products/product-06.jpg",
    available: false,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [length, setLength] = useState("");
  const [style, setStyle] = useState("");
  const [sleeves, setSleeves] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [quantity, setQuantity] = useState(1);

  const PRICE = 150000;
  const total = PRICE * quantity;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProduct =
    products.find((product) => product.id === selectedProduct) ?? null;

  return (
    <main className="min-h-screen bg-[#FAF7F4] text-[#211A1C]">
      {/* Navigation */}
      {/* Hero and transparent navigation */}
      <section className="relative min-h-[100svh] bg-[#211A1C]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Two models wearing Mukhawar by Mims designs"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for navigation and hero text contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Transparent navigation */}
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[#FAF7F4] shadow-[0_2px_15px_rgba(255,255,255,0.2)]"
              : "bg-transparent"
          }`}
        >
          <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 sm:px-8 lg:px-14">
            <a href="#" aria-label="Mukhawar by Mims home">
              <img
                src={scrolled ? "/logo1.png" : "/assets/logo.png"}
                alt="Mukhawar by Mims"
                className="h-10 w-auto object-contain transition-all duration-300 sm:h-12"
              />
            </a>

            <div
              className={`hidden items-center gap-9 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 md:flex ${
                scrolled ? "text-[#211A1C]" : "text-white"
              }`}
            >
              <a
                href="#collection"
                className="transition-colors hover:text-[#EBCFD3]"
              >
                Shop
              </a>
              <a
                href="#about"
                className="transition-colors hover:text-[#EBCFD3]"
              >
                Our Story
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-[#EBCFD3]"
              >
                Contact
              </a>
            </div>

            <a
              href="#collection"
              className={`hidden border px-5 py-3 text-[10px] uppercase tracking-[0.16em] transition-all duration-300 sm:inline-flex ${
                scrolled
                  ? "border-[#5B2638] text-[#5B2638] hover:bg-[#5B2638] hover:text-white"
                  : "border-white/80 text-white hover:border-white hover:bg-white hover:text-[#211A1C]"
              }`}
            >
              Discover Mims
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center transition-colors duration-300 md:hidden ${
                scrolled ? "text-[#211A1C]" : "text-white"
              }`}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {menuOpen && (
            <div className="absolute inset-x-0 top-full border-t border-white/20 bg-[#211A1C]/95 px-6 py-6 text-white backdrop-blur-md md:hidden">
              <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.18em]">
                <a href="#collection" onClick={() => setMenuOpen(false)}>
                  Shop
                </a>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  Our Story
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-end px-5 pb-12 pt-28 text-center text-white sm:pb-16 lg:pb-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] sm:text-xs">
            The art of dressing beautifully
          </p>

          <h1 className="font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            Wear confidence.
            <br />
            Wear Mims.
          </h1>

          <a
            href="#collection"
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#5B2638] px-8 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#421A29]"
          >
            Shop the collection
          </a>
        </div>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="scroll-mt-8 bg-[#FAF7F4] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
      >
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-7xl text-center sm:mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A85D70] sm:text-xs">
            Discover Mims
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Pieces to treasure.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#75666A] sm:text-base">
            Discover designs that bring elegance to every occasion.
          </p>
        </div>

        {/* Product grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => {
            const productNumber = String(product.id).padStart(2, "0");

            return (
              <article key={product.id} className="group">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(product.id);
                    setQuantity(1);
                    setLength("");
                    setStyle("");
                    setSleeves("");
                    setSpecialRequests("");
                  }}
                  className="block w-full text-left"
                  aria-label={`View ${product.name}`}
                >
                  {/* Product image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#F0E9E5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />

                    {/* View details overlay */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-[#211A1C]/80 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-y-0">
                      View details
                      <ArrowDownRight size={15} className="ml-2" />
                    </div>
                  </div>
                  {/* Product details */}
                  <div className="flex items-start justify-between gap-2 pt-4">
                    <div>
                      <h3 className="font-serif text-base sm:text-lg">
                        Mims Design {productNumber}
                      </h3>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8B7B7E] sm:text-xs">
                        ₦{PRICE.toLocaleString("en-NG")}
                      </p>
                    </div>

                    <span className="mt-1 text-[#A85D70]">
                      <ArrowDownRight size={18} strokeWidth={1.3} />
                    </span>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        {/* Collection CTA */}
        <div className="mt-14 text-center sm:mt-20">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#5B2638] px-8 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#421A29]"
          >
            Enquire about a design
          </a>
        </div>
      </section>
      {/* The Mims Woman */}
      <section
        id="customers"
        className="bg-[#F3EDE8] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-12 text-center sm:mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A85D70] sm:text-xs">
              Real women. Beautiful moments.
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              The Mims Woman
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#75666A]">
              Beautifully worn. Beautifully remembered.
            </p>
          </div>

          {/* Customer gallery */}
          <div className="relative mx-auto max-w-7xl">
            <div
              id="customer-gallery"
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5 lg:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {Array.from({ length: 6 }, (_, index) => {
                const photoNumber = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={photoNumber}
                    className="group relative aspect-[3/4] w-[82%] shrink-0 snap-start overflow-hidden bg-[#E8DED7] sm:w-[48%] lg:w-[calc((100%-3rem)/3)]"
                  >
                    <img
                      src={`/assets/customers/customer-${photoNumber}.jpg`}
                      alt={`A Mukhawar by Mims customer wearing her outfit`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <div className="mt-7 hidden items-center justify-center gap-3 sm:flex">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("customer-gallery")?.scrollBy({
                    left: -400,
                    behavior: "smooth",
                  });
                }}
                className="flex h-11 w-11 items-center justify-center border border-[#5B2638]/30 text-[#5B2638] transition-colors hover:bg-[#5B2638] hover:text-white"
                aria-label="Previous customer photos"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("customer-gallery")?.scrollBy({
                    left: 400,
                    behavior: "smooth",
                  });
                }}
                className="flex h-11 w-11 items-center justify-center border border-[#5B2638]/30 text-[#5B2638] transition-colors hover:bg-[#5B2638] hover:text-white"
                aria-label="Next customer photos"
              >
                →
              </button>
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="mt-14 text-center sm:mt-20">
            <p className="font-serif text-2xl sm:text-3xl">Wearing Mims?</p>

            <p className="mt-3 text-sm text-[#75666A]">
              We'd love to see you. Share your Mims moments with us.
            </p>

            <a
              href="https://www.instagram.com/mukhawarbymims_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center border border-[#5B2638] px-8 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5B2638] transition-colors duration-300 hover:bg-[#5B2638] hover:text-white"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* The Mims Experience */}
      <section
        id="about"
        className="bg-[#FAF7F4] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Editorial image */}
          <div className="aspect-[4/5] overflow-hidden bg-[#F0E9E5]">
            <img
              src="/assets/about.jpg"
              alt="Mukhawar by Mims collection"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Brand introduction */}
          <div className="max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A85D70] sm:text-xs">
              The Mims Experience
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Elegance in every detail.
            </h2>

            <div className="my-7 h-px w-16 bg-[#A85D70]" />

            <p className="text-sm leading-8 text-[#75666A] sm:text-base">
              Discover beautifully styled mukhawars designed to make every
              occasion feel special. Explore the collection and find a design
              that feels like you.
            </p>

            <a
              href="#collection"
              className="mt-9 inline-flex min-h-12 items-center justify-center bg-[#5B2638] px-8 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#421A29]"
            >
              Explore the collection
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#211A1C] px-5 py-16 text-white sm:px-8 lg:px-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-10 border-b border-white/15 pb-12 md:flex-row">
            {/* Logo */}
            <a href="#" aria-label="Mukhawar by Mims home">
              <img
                src="/assets/logo.png"
                alt="Mukhawar by Mims"
                className="w-64 object-contain"
              />
            </a>

            {/* Footer navigation */}
            <nav className="flex flex-wrap justify-center gap-7 text-[10px] uppercase tracking-[0.18em] text-white/80 sm:gap-10">
              <a
                href="#collection"
                className="transition-colors hover:text-[#EBCFD3]"
              >
                Shop
              </a>

              <a
                href="#customers"
                className="transition-colors hover:text-[#EBCFD3]"
              >
                The Mims Woman
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-[#EBCFD3]"
              >
                Our Experience
              </a>
            </nav>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mukhawarbymims_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-[#EBCFD3]"
            >
              Instagram ↗
            </a>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center text-[10px] tracking-[0.12em] text-white/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Mukhawar by Mims. All rights
              reserved.
            </p>

            <a href="#" className="transition-colors hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Product details modal */}
      {/* Product details modal */}
      {selectedProduct !== null && activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative my-auto grid w-full max-w-4xl overflow-hidden bg-[#FAF7F4] sm:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-[#FAF7F4]/90 text-[#211A1C] transition-colors hover:bg-white"
              aria-label="Close product details"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Product image */}
            <div className="aspect-[4/3] bg-[#F0E9E5] sm:aspect-auto sm:min-h-[480px]">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product information */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#A85D70]">
                The Mims Collection
              </p>

              <h2
                id="product-modal-title"
                className="mt-4 font-serif text-3xl leading-tight sm:text-4xl"
              >
                {activeProduct.name}
              </h2>

              {/* Availability */}
              <div className="mt-3 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    activeProduct.available ? "bg-[#71866B]" : "bg-[#A85D70]"
                  }`}
                />

                <span
                  className={`text-xs ${
                    activeProduct.available
                      ? "text-[#71866B]"
                      : "text-[#A85D70]"
                  }`}
                >
                  {activeProduct.available ? "In stock" : "Currently sold out"}
                </span>
              </div>

              <p className="mt-3 text-sm font-medium">
                ₦{activeProduct.price.toLocaleString("en-NG")}
                <span className="ml-1 font-normal text-[#8B7B7E]">
                  per item
                </span>
              </p>

              <div className="my-6 h-px w-full bg-[#E5DAD5]" />

              <p className="text-sm leading-7 text-[#75666A]">
                Discover this design from Mukhawar by Mims. Get in touch to
                enquire about availability, sizing, and other details.
              </p>

              {/* Available product */}
              {activeProduct.available ? (
                <>
                  {/* Customisation form */}
                  <div className="mt-6 space-y-5">
                    {/* Length */}
                    <div>
                      <label
                        htmlFor="mukhawar-length"
                        className="mb-2 block text-xs font-medium"
                      >
                        Mukhawar Length{" "}
                        <span className="text-[#A85D70]">*</span>
                      </label>

                      <select
                        id="mukhawar-length"
                        value={length}
                        onChange={(event) => setLength(event.target.value)}
                        className="min-h-12 w-full border border-[#DED2CC] bg-transparent px-4 text-sm outline-none focus:border-[#5B2638]"
                      >
                        <option value="">Choose a length</option>

                        {Array.from({ length: 13 }, (_, i) => 50 + i).map(
                          (value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    {/* Style */}
                    <div>
                      <label
                        htmlFor="mukhawar-style"
                        className="mb-2 block text-xs font-medium"
                      >
                        Mukhawar Style <span className="text-[#A85D70]">*</span>
                      </label>

                      <select
                        id="mukhawar-style"
                        value={style}
                        onChange={(event) => setStyle(event.target.value)}
                        className="min-h-12 w-full border border-[#DED2CC] bg-transparent px-4 text-sm outline-none focus:border-[#5B2638]"
                      >
                        <option value="">Choose a style</option>
                        <option value="A-shape">A-shape</option>
                        <option value="Bubu">Bubu</option>
                      </select>
                    </div>

                    {/* Sleeves */}
                    <div>
                      <label
                        htmlFor="mukhawar-sleeves"
                        className="mb-2 block text-xs font-medium"
                      >
                        Sleeves Style <span className="text-[#A85D70]">*</span>
                      </label>

                      <select
                        id="mukhawar-sleeves"
                        value={sleeves}
                        onChange={(event) => setSleeves(event.target.value)}
                        className="min-h-12 w-full border border-[#DED2CC] bg-transparent px-4 text-sm outline-none focus:border-[#5B2638]"
                      >
                        <option value="">Choose a sleeve style</option>
                        <option value="Long">Long</option>
                        <option value="Short">Short</option>
                      </select>
                    </div>

                    {/* Special requests */}
                    <div>
                      <label
                        htmlFor="special-requests"
                        className="mb-2 block text-xs font-medium"
                      >
                        Special Requests{" "}
                        <span className="text-[#8B7B7E]">(Optional)</span>
                      </label>

                      <textarea
                        id="special-requests"
                        value={specialRequests}
                        onChange={(event) =>
                          setSpecialRequests(event.target.value)
                        }
                        placeholder="Add measurements or other instructions..."
                        rows={3}
                        className="w-full resize-y border border-[#DED2CC] bg-transparent p-3 text-sm outline-none placeholder:text-[#A89A9C] focus:border-[#5B2638]"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Quantity</span>

                      <div className="flex items-center border border-[#DED2CC]">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="flex h-10 w-10 items-center justify-center hover:bg-[#F0E9E5]"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span className="w-10 text-center text-sm">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="flex h-10 w-10 items-center justify-center hover:bg-[#F0E9E5]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between border-t border-[#E5DAD5] pt-4">
                      <span className="text-sm">Total</span>

                      <span className="font-serif text-2xl">
                        ₦
                        {(activeProduct.price * quantity).toLocaleString(
                          "en-NG",
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Instagram enquiry */}
                  <button
                    type="button"
                    onClick={async () => {
                      if (!length || !style || !sleeves) {
                        alert(
                          "Please select a length, style, and sleeve style.",
                        );
                        return;
                      }

                      const message = [
                        "Hello Mukhawar by Mims! I'd like to enquire about this design.",
                        "",
                        `Product: ${activeProduct.name}`,
                        `Price per item: ₦${activeProduct.price.toLocaleString("en-NG")}`,
                        `Length: ${length}`,
                        `Style: ${style}`,
                        `Sleeves: ${sleeves}`,
                        `Quantity: ${quantity}`,
                        `Total: ₦${(activeProduct.price * quantity).toLocaleString("en-NG")}`,
                        `Special requests: ${specialRequests.trim() || "None"}`,
                      ].join("\n");

                      try {
                        await navigator.clipboard.writeText(message);

                        window.open(
                          "https://www.instagram.com/mukhawarbymims_/",
                          "_blank",
                          "noopener,noreferrer",
                        );

                        alert(
                          "Your order summary has been copied! Open the brand's Instagram DM and paste your message.",
                        );
                      } catch {
                        alert(
                          "We couldn't copy your order summary automatically. Please try again.",
                        );
                      }
                    }}
                    className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-[#5B2638] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#421A29]"
                  >
                    Enquire via Instagram
                  </button>
                </>
              ) : (
                /* Sold-out product */
                <div className="mt-8 border border-[#E5DAD5] bg-[#F3EDE8] p-5 text-center">
                  <p className="font-serif text-xl">Currently unavailable</p>

                  <p className="mt-2 text-sm leading-6 text-[#75666A]">
                    This design is currently sold out. Please follow us on
                    Instagram for updates on availability.
                  </p>

                  <a
                    href="https://www.instagram.com/mukhawarbymims_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center bg-[#5B2638] px-6 py-3 text-[10px] uppercase tracking-[0.16em] text-white"
                  >
                    Visit our Instagram
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default App;
