import Link from 'next/link';
import { FaHome, FaShoppingCart, FaUser, FaSignInAlt, FaBoxOpen } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getCartItems } from '../utils/cart';
//import styles from '../components/Navbar.module.css';

const HomeNavbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCartItems().then(count => {
            setCartCount(count);
        });
    }, []);

    const navbarStyle = {
        backgroundColor: 'white',
        color: '#8b4513' // Chocolate brown color
    };

    const linkStyle = {
        color: '#8b4513', // Chocolate brown color
    };

    return (
        <nav style={navbarStyle} className="relative z-10 bg-opacity-75 bg-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-5">
                <Link href="/" className="flex items-center space-x-2" style={linkStyle}>
                    <img src="/steampunkcybercafelogo.jpg" alt="Steampunk Cyber Cafe" className="logo w-16 h-16" />
                    <span className="text-2xl font-semibold">Steampunk Cyber Cafe</span>
                </Link>
                <div className="flex space-x-4 md:space-x-6 items-center">
                    <Link href="/" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link href="/products" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Products</span>
                    </Link>
                    <Link href="/checkout" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Checkout</span>
                    </Link>
                    <Link href="/signup" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaUser /> <span>Signup</span>
                    </Link>
                    <Link href="/login" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaSignInAlt /> <span>Login</span>
                    </Link>
                    <Link href="/cart" className="hover:underline relative flex items-center space-x-1" style={linkStyle}>
                        <FaShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const SignupNavbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCartItems().then(count => {
            setCartCount(count);
        });
    }, []);

    const navbarStyle = {
        backgroundColor: 'white',
        color: '#8b4513' // Chocolate brown color
    };

    const linkStyle = {
        color: '#8b4513', // Chocolate brown color
    };

    return (
        <nav style={navbarStyle} className="relative z-10 bg-opacity-75 bg-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-5">
                <Link href="/" className="flex items-center space-x-2" style={linkStyle}>
                    <img src="/steampunkcybercafelogo.jpg" alt="Steampunk Cyber Cafe" className="logo w-16 h-16" />
                    <span className="text-2xl font-semibold">Steampunk Cyber Cafe</span>
                </Link>
                <div className="flex space-x-4 md:space-x-6 items-center">
                    <Link href="/" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link href="/products" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Products</span>
                    </Link>
                    <Link href="/login" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaUser /> <span>Login</span>
                    </Link>
                    <Link href="/cart" className="hover:underline relative flex items-center space-x-1" style={linkStyle}>
                        <FaShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const LoginNavbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCartItems().then(count => {
            setCartCount(count);
        });
    }, []);

    const navbarStyle = {
        backgroundColor: 'white',
        color: '#8b4513' // Chocolate brown color
    };

    const linkStyle = {
        color: '#8b4513', // Chocolate brown color
    };
    return (
        <nav style={navbarStyle} className="relative z-10 bg-opacity-75 bg-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-5">
                <Link href="/" className="flex items-center space-x-2" style={linkStyle}>
                    <img src="/steampunkcybercafelogo.jpg" alt="Steampunk Cyber Cafe" className="logo w-16 h-16" />
                    <span className="text-chocolate-brown text-2xl font-semibold">Steampunk Cyber Cafe</span>
                </Link>
                <div className="flex space-x-4 md:space-x-6 text-chocolate-brown items-center">
                <Link href="/" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link href="/products" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Products</span>
                    </Link>
                    <Link href="/login" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaSignInAlt /> <span>Login</span>
                    </Link>
                    <Link href="/signup" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaUser /> <span>Signup</span>
                    </Link>
                    <Link href="/cart" className="hover:underline relative flex items-center space-x-1" style={linkStyle}>
                        <FaShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const CartNavbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCartItems().then(count => {
            setCartCount(count);
        });
    }, []);

    const navbarStyle = {
        backgroundColor: 'white',
        color: '#8b4513' // Chocolate brown color
    };

    const linkStyle = {
        color: '#8b4513', // Chocolate brown color
    };

    return (
        <nav style={navbarStyle} className="relative z-10 bg-opacity-75 bg-white py-4 shadow-lg w-full">
            <div className="flex justify-between items-center px-3 md:px-5 md:px-10 w-full">
                <Link href="/" className="flex items-center space-x-2" style={linkStyle}>
                    <img src="/steampunkcybercafelogo.jpg" alt="Steampunk Cyber Cafe" className="logo w-16 h-16" />
                    <span className="text-chocolate-brown text-2xl font-semibold">Steampunk Cyber Cafe</span>
                </Link>
                <div className="flex space-x-4 md:space-x-6 text-chocolate-brown items-center ml-auto">
                    <Link href="/" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link href="/checkout" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Checkout</span>
                    </Link>
                    <Link href="/signup" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaUser /> <span>Signup</span>
                    </Link>
                    <Link href="/login" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaSignInAlt /> <span>Login</span>
                    </Link>
                    <Link href="/cart" className="hover:underline relative flex items-center space-x-1" style={linkStyle}>
                        <FaShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const CheckoutNavbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCartItems().then(count => {
            setCartCount(count);
        });
    }, []);

    const navbarStyle = {
        backgroundColor: 'white',
        color: '#8b4513' // Chocolate brown color
    };

    const linkStyle = {
        color: '#8b4513', // Chocolate brown color
    };

    return (
        <nav style={navbarStyle} className="relative z-10 bg-opacity-75 bg-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-5">
                <Link href="/" className="flex items-center space-x-2" style={linkStyle}>
                    <img src="/steampunkcybercafelogo.jpg" alt="Steampunk Cyber Cafe" className="logo w-16 h-16" />
                    <span className="text-chocolate-brown text-2xl font-semibold">Steampunk Cyber Cafe</span>
                </Link>
                <div className="flex space-x-4 md:space-x-6 text-chocolate-brown items-center">
                    <Link href="/" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link href="/checkout" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Checkout</span>
                    </Link>
                    <Link href="/products" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaBoxOpen /> <span>Products</span>
                    </Link>
                    <Link href="/signup" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaUser /> <span>Signup</span>
                    </Link>
                    <Link href="/login" className="hover:underline flex items-center space-x-1" style={linkStyle}>
                        <FaSignInAlt /> <span>Login</span>
                    </Link>
                    <Link href="/cart" className="hover:underline relative flex items-center space-x-1" style={linkStyle}> 
                        <FaShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};


export { HomeNavbar, SignupNavbar, LoginNavbar, CartNavbar, CheckoutNavbar }
