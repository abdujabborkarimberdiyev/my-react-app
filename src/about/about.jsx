import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";


export default function Navbar() {
    return (
        <div>
            <nav className="w-full shadow-sm bg-white fixed top-0  z-50">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    <div className="text-xl font-bold">Exclusive</div>


                    <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
                        <li className="cursor-pointer hover:text-black">Home</li>
                        <li className="cursor-pointer hover:text-black">Contact</li>
                        <li className="cursor-pointer hover:text-black">About</li>
                        <li className="cursor-pointer hover:text-black">Sign Up</li>
                    </ul>

                    <div className="flex items-center gap-4">

                        <div className="flex items-center rounded-md bg-gray-100 px-3 py-1">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-40 bg-transparent text-sm outline-none"
                            />
                            <Search size={16} className="text-gray-500" />
                        </div>


                        <Heart size={18} className="cursor-pointer" />
                        <ShoppingCart size={18} className="cursor-pointer" />
                        <User size={18} className="cursor-pointer" />
                    </div>
                </div>
            </nav>
            <section className="mt-20 ml-20 flex justify-around ">
                <div>
                    <p><span className="text-gray-400 text-sm">Home /</span>About</p>
                    <h1 className="text-5xl  font-semibold mt-20">Our Story</h1>
                    <p className="my-5">Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported  <br />by wide range of tailored marketing, data and service solutions,<br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a <br />very fast. Exclusive offers a diverse assotment in categories <br />ranging  from consumer.</p>
                </div>
                <img src="/Side Image.png" alt="" />

            </section>
            <section className="ml-20 mt-40 mb-50 flex justify-around ">
                <div className="border border-gray-300 shadow-sm rounded h-40 w-60 pt-2 flex flex-col items-center text-center">
                    <img src="/Services.png" alt="" />
                    <h2 className="text-xl font-semibold">10.5k</h2>
                    <p className="text-sm">Sallers active our site</p>
                </div>
                <div className="border border-gray-300 bg-red-500 shadow-sm rounded h- w-60 pt-2 flex flex-col items-center text-center">
                    <img src="/Services (1).png" alt="" />
                    <h2 className="text-xl font-semibold">33k</h2>
                    <p className="text-sm">Mopnthly Produduct Sale</p>
                </div>
                <div className="border border-gray-300 shadow-sm rounded h-40 w-60 pt-2 flex flex-col items-center text-center">
                    <img src="/Services (2).png" alt="" />
                    <h2 className="text-xl font-semibold">45.5k</h2>
                    <p className="text-sm">Customer active in our site</p>
                </div>
                <div className="border border-gray-300 shadow-sm rounded h-40 w-60 pt-2 flex flex-col items-center text-center">
                    <img src="/Services (3).png" alt="" />
                    <h2 className="text-xl font-semibold">25k</h2>
                    <p className="text-sm">Anual gross sale in our site</p>
                </div>

            </section>
            <section className="flex ml-20 text-center rounded-2xl justify-around">
                <div>
                    <img src="/Frame 874.png" alt="" />
                    <h1 className="text-2xl font-semibold mt-5" >Tom Cruise</h1>
                    <p className="text-sm">Founder & Chairman</p>
                    <a href="https://www.figma.com/design/RndJH37BqAtJElNZDtyZLG/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=205-4904&t=WQq3xkXqtaSaJI81-0"> <img className="pl-30  pt-5" src="/Frame 881.png" alt="" /></a>
                </div>
                <div>
                    <img src="/Frame 875.png" alt="" />
                    <h1 className="text-2xl font-semibold mt-5" >Emma Watson</h1>
                    <p className="text-sm">Managing Director</p>
                    <a href="https://www.figma.com/design/RndJH37BqAtJElNZDtyZLG/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=205-4904&t=WQq3xkXqtaSaJI81-0"> <img className="pl-30  pt-5" src="/Frame 881.png" alt="" /></a>

                </div>
                <div>
                    <img src="/Frame 876.png" alt="" />
                    <h1 className="text-2xl font-semibold mt-5" >Will Smith</h1>
                    <p className="text-sm">Product Designer</p>
                    <a href="https://www.instagram.com/"> <img className="pl-30  pt-5" src="/Frame 881.png" alt="" /></a>
                </div>

            </section>
            <img className="ml-184 mt-10 mb-30" src="/Frame 883.png" alt="" />
            <section className="flex ml-20 justify-around text-center mb-20">
                <div>
                    <img className="ml-15 my-3" src="Services (4).png " alt="" />
                    <h1 className=" font-semibold">FREE AND FAST DELIVERY</h1>
                    <p className="text-sm">Free delivery for all orders over $140</p>
                </div>
                <div>
                    <img className="ml-15 my-3" src="Services (5).png " alt="" />
                    <h1 className=" font-semibold">24/7 CUSTOMER SERVICE</h1>
                    <p className="text-sm">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col">
                    <img className=" ml-14 w-20 my-3" src="Services (6).png " alt="" />
                    <h1 className=" font-semibold">MONEY BACK GUARANTEE</h1>
                    <p className="text-sm">We reurn money within 30 days</p>
                </div>
            </section>

            <footer className="bg-black text-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-5">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Exclusive</h2>
                        <p className="font-medium">Subscribe</p>
                        <p className="text-sm text-gray-400">Get 10% off your first order</p>
                        <div className="flex items-center rounded border border-gray-600 px-3 py-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent text-sm outline-none"
                            />
                            <Send size={18} className="text-gray-400" />
                        </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-400">
                        <h3 className="text-base font-medium text-white">Support</h3>
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className="space-y-3 text-sm text-gray-400">
                        <h3 className="text-base font-medium text-white">Account</h3>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>

                    <div className="space-y-3 text-sm text-gray-400">
                        <h3 className="text-base font-medium text-white">Quick Link</h3>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-base font-medium">Download App</h3>
                        <p className="text-xs text-gray-400">Save $3 with App New User Only</p>

                        <div className="flex gap-3 ">
                            <img src="/Qr.png.png" alt="QR" className="h-20 w-20" />
                            <div className="">
                                <img src="/google-play.png.png" alt="Google Play" className="" />
                                <img src="/app-store.png.png" alt="App Store" className="" />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <Facebook size={18} />
                            <Twitter size={18} />
                            <Instagram size={18} />
                            <Linkedin size={18} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
                    © Copyright Rimel 2022. All right reserved
                </div>
            </footer>
        </div>
    );
}




