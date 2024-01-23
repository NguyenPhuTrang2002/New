
import Product from "../LessionTwo/ListProduct.js"
import { useState, useEffect } from 'react'
import MenuItem from "./Menu.js"
function Index() {
  const TAGS = ["Show all", "Auction", "Buy Now"]
  const MENU = [
    {
      id: 1,
      name: "Useless"
    },
    {
      id: 2,
      name: "Condition"
    },
    {
      id: 3,
      name: "Delivery options"
    }
  ]
  const OPTIONS = ["Related", "worldwide shipping", "under $50", "kitten", "plastic plugs", "pucker shoes", "vintage typewriter"]
  // const [ArrayProduct, setArrayProduct] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then(res => res.json())
  //     .then(res => setArrayProduct(res))
  //     .catch(err => console.error(err))
  // }, [])
  const ArrayProducts = [
    {
      img: "./img/image.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image2.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image3.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image4.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image5.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image6.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image7.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image8.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image9.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image10.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
    {
      img: "./img/image7  .png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    }, {
      img: "./img/image3.png",
      content: "Vintage Typewriter to post awesome stories about UI design and webdev.",
      price: "$13.95",
      review: "1258 bids, 359 watchers $5.95 for shipping",
      point: "49.50"
    },
  ]
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div className="">
      <div className="flex justify-between mr-4">
        <div className=" mt-[35px] mb-[40px] ">
          {MENU.map((menu, index) => (
            <MenuItem data={menu} />
          ))}
          <div className="inline-flex justify-center items-center ml-[235px]">
            {TAGS.map((tag, index) => (
              <a key={index} className={`inline-flex w-[85px] h-[36px] items-center justify-center rounded-md ${tag === "Auction" ? " bg-white box-shadow text-[#2264D1]" : "bg-[#EBF2FF]"}`} id="tags">
                {tag}
              </a>
            ))}
          </div>
        </div>
        <div className="flex right-1 items-center mb-1">
          <div className="flex items-center rounded-md justify-center bg-[#EBF2FF] w-[68px] h-[36px]">
            <svg className="inline-block" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="view-list (1)">
                <path id="Vector" d="M5 0V4H17V0H5ZM5 14H17V10H5V14ZM5 9H17V5H5V9ZM0 4H4V0H0V4ZM0 14H4V10H0V14ZM0 9H4V5H0V9Z" fill="#787885" />
              </g>
            </svg>
          </div>

          <div className="w-[68px] h-[36px] rounded-md flex items-center justify-center bg-white box-shadow">
            <svg className="inline-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="view-grid (1)">
                <path id="Vector" d="M0 8H8V0H0V8ZM0 18H8V10H0V18ZM10 18H18V10H10V18ZM10 0V8H18V0" fill="#2979FF" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap space-x-2">
        {OPTIONS.map((option, index) => (
          <a key={index} className=" w-full sm:w-[150px] h-[40px] rounded-2xl bg-[#EDEDF0] text-center flex items-center justify-center mb-2 ml-4 " id="option">
            {option}
          </a>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 border-b-1 border-[#EDEDF0] mb-10 rounded-2xl shadow-md">
        {ArrayProducts.map((ars, index) => (
          <Product key={index} img={ars.img} content={ars.content} price={ars.price} review={ars.review} point={ars.point} />
        ))}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-3 lg:gap-5 xl:gap-5 pb-[100px]">
        <div class="flex flex-col items-center justify-center bg-[#EDEDF0] rounded-lg">
          <svg className="pt-[26px] w-[80px] h-[80px] pb-2" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M38 20H44V24H38V20ZM0 20H6V24H0V20ZM24 0V6H20V0H24ZM7.84 5L12.1 9.28L9.26 12.1L5 7.86L7.84 5ZM31.9 9.26L36.14 5L39 7.86L34.74 12.1L31.9 9.26ZM22 10C25.1826 10 28.2348 11.2643 30.4853 13.5147C32.7357 15.7652 34 18.8174 34 22C34 26.44 31.58 30.32 28 32.4V36C28 36.5304 27.7893 37.0391 27.4142 37.4142C27.0391 37.7893 26.5304 38 26 38H18C17.4696 38 16.9609 37.7893 16.5858 37.4142C16.2107 37.0391 16 36.5304 16 36V32.4C12.42 30.32 10 26.44 10 22C10 18.8174 11.2643 15.7652 13.5147 13.5147C15.7652 11.2643 18.8174 10 22 10ZM26 40V42C26 42.5304 25.7893 43.0391 25.4142 43.4142C25.0391 43.7893 24.5304 44 24 44H20C19.4696 44 18.9609 43.7893 18.5858 43.4142C18.2107 43.0391 18 42.5304 18 42V40H26ZM20 34H24V29.74C27.46 28.86 30 25.72 30 22C30 19.8783 29.1571 17.8434 27.6569 16.3431C26.1566 14.8429 24.1217 14 22 14C19.8783 14 17.8434 14.8429 16.3431 16.3431C14.8429 17.8434 14 19.8783 14 22C14 25.72 16.54 28.86 20 29.74V34Z" fill="#65B168" />
          </svg>
          <h1 class="text-[20px] leading-[30px]">Clear & Usable user flows</h1>
          <p class="text-[14px] leading-[20px] pb-[24px]">Let’s boost your marketplace</p>
        </div>
        <div class="flex flex-col items-center justify-center bg-[#EDEDF0] rounded-lg">
          <svg className="pt-[26px] w-[80px] h-[80px] pb-2" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M13.005 7.2L8.005 10L10.805 5L8.005 0L13.005 2.8L18.005 0L15.205 5L18.005 10L13.005 7.2ZM37.005 26.8L42.005 24L39.205 29L42.005 34L37.005 31.2L32.005 34L34.805 29L32.005 24L37.005 26.8ZM42.005 0L39.205 5L42.005 10L37.005 7.2L32.005 10L34.805 5L32.005 0L37.005 2.8L42.005 0ZM24.685 21.56L29.565 16.68L25.325 12.44L20.445 17.32L24.685 21.56ZM26.745 10.58L31.425 15.26C32.205 16 32.205 17.3 31.425 18.08L8.085 41.42C7.305 42.2 6.005 42.2 5.265 41.42L0.585 36.74C-0.195 36 -0.195 34.7 0.585 33.92L23.925 10.58C24.705 9.8 26.005 9.8 26.745 10.58Z" fill="#7985CB" />
          </svg>
          <h1 className="text-[20px] leading-[30px]">Fine & Styled components</h1>
          <p className="text-[14px] leading-[20px] pb-[24px]">Speed up with Setproduct templates</p>
        </div>
        <div class="flex flex-col items-center justify-center bg-[#EDEDF0] rounded-lg">
          <svg className="pt-[26px] w-[80px] h-[80px] pb-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M29 18C28.2044 18 27.4413 17.6839 26.8787 17.1213C26.3161 16.5587 26 15.7956 26 15C26 14.2044 26.3161 13.4413 26.8787 12.8787C27.4413 12.3161 28.2044 12 29 12C29.7956 12 30.5587 12.3161 31.1213 12.8787C31.6839 13.4413 32 14.2044 32 15C32 15.7956 31.6839 16.5587 31.1213 17.1213C30.5587 17.6839 29.7956 18 29 18ZM23 10C22.2044 10 21.4413 9.68393 20.8787 9.12132C20.3161 8.55871 20 7.79565 20 7C20 6.20435 20.3161 5.44129 20.8787 4.87868C21.4413 4.31607 22.2044 4 23 4C23.7956 4 24.5587 4.31607 25.1213 4.87868C25.6839 5.44129 26 6.20435 26 7C26 7.79565 25.6839 8.55871 25.1213 9.12132C24.5587 9.68393 23.7956 10 23 10ZM13 10C12.2044 10 11.4413 9.68393 10.8787 9.12132C10.3161 8.55871 10 7.79565 10 7C10 6.20435 10.3161 5.44129 10.8787 4.87868C11.4413 4.31607 12.2044 4 13 4C13.7956 4 14.5587 4.31607 15.1213 4.87868C15.6839 5.44129 16 6.20435 16 7C16 7.79565 15.6839 8.55871 15.1213 9.12132C14.5587 9.68393 13.7956 10 13 10ZM7 18C6.20435 18 5.44129 17.6839 4.87868 17.1213C4.31607 16.5587 4 15.7956 4 15C4 14.2044 4.31607 13.4413 4.87868 12.8787C5.44129 12.3161 6.20435 12 7 12C7.79565 12 8.55871 12.3161 9.12132 12.8787C9.68393 13.4413 10 14.2044 10 15C10 15.7956 9.68393 16.5587 9.12132 17.1213C8.55871 17.6839 7.79565 18 7 18ZM18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C18.7956 36 19.5587 35.6839 20.1213 35.1213C20.6839 34.5587 21 33.7957 21 33C21 32.22 20.7 31.52 20.22 31C19.76 30.46 19.46 29.76 19.46 29C19.46 28.2044 19.7761 27.4413 20.3387 26.8787C20.9013 26.3161 21.6644 26 22.46 26H26C28.6522 26 31.1957 24.9464 33.0711 23.0711C34.9464 21.1957 36 18.6522 36 16C36 7.16 27.94 0 18 0Z" fill="#EF6292" />
          </svg>
          <h1 className="text-[20px] leading-[30px]">Customizable & Reusable</h1>
          <p className="text-[14px] leading-[20px] pb-[24px]">Take our UX patterns and rebuild</p>
        </div>
      </div>

    </div>
  )
}
export default Index