// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <img src="/src/assets/sasik-logo-transparent.png" alt="Logo" className="h-14 w-18 mr-3" />
          <span className="text-primary text-xl font-bold">SASIK CAR CARE</span>
        </div>

        {/* Navigation Options */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-primary hover:text-accent mr-5">HOME</a>
          <a href="#about" className="text-primary hover:text-accent mr-5">ABOUT</a>
          <a href="#services" className="text-primary hover:text-accent mr-5">SERVICES</a>
          <a href="#blog" className="text-primary hover:text-accent">CONTACT</a>
        </div>

        {/* Contact Us Button */}
        <a
          href="#contact"
          className="hidden md:block bg-primary text-black px-4 py-2 rounded hover:bg-secondary transition duration-200"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
