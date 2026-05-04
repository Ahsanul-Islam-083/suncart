import Link from "next/link";
import Image from "next/image";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FiTwitter, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="relative mt-8 bg-white z-10">
            <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

            {/* Background Layer */}
            <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 -z-10 bg-linear-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl" />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">

                    {/* Brand */}
                    <div className="space-y-4 col-span-2 md:col-span-3 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="pixgen logo"
                                width={32}
                                height={32}
                                className="dark:brightness-200"
                            />
                            <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                                SunCart
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                            Shop smarter, live better. Quality products, fast delivery, and hassle-free returns — all in one place.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-1">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 border-2">
                                <FiTwitter size={16} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 border-2">
                                <FiGithub size={16} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 border-2">
                                <FiInstagram size={16} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 border-2">
                                <FiLinkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link href="/winter" className="hover:text-black dark:hover:text-white transition">Winter</Link>
                            </li>
                            <li>
                                <Link href="/summer" className="hover:text-black dark:hover:text-white transition">Summer</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-black dark:hover:text-white transition">Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-black dark:hover:text-white transition">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-black dark:hover:text-white transition">Contact</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-black dark:hover:text-white transition">Terms</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <a href="mailto:hello@suncart.com" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition">
                                    <FiMail size={14} className="shrink-0" />
                                    hello@suncart.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition">
                                    <FiPhone size={14} className="shrink-0" />
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiMapPin size={14} className="shrink-0 mt-0.5" />
                                <span>123 AI Street, San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Block */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-black dark:text-white">Shop Now</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Discover thousands of products with deals updated every day.</p>
                        <Link href="/signup" className=" inline-flex items-center justify-center px-4 md:px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10">
                           Browse Store
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Bottom */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} SunCart. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black dark:hover:text-white transition">Terms</Link>
                        <Link href="/contact" className="hover:text-black dark:hover:text-white transition">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;