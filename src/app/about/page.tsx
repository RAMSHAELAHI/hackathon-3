import React from 'react';
import NavBar from '@/components/NavBar';
import Contact from '@/components/ContactUs';
import Footer from '@/components/Footer';

const InfoCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow text-center">
        <div className="text-2xl text-emerald-500 mb-4" aria-label={title}>
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-emerald-600 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const ProductCard = ({ image, name, price, width, height }: { image: string; name: string; price: string; width?: string; height?: string }) => (
    <div className="p-4 border rounded shadow text-center">
        <img
            src={image}
            alt={name}
            className="mb-4 mx-auto object-cover"
            style={{ width: width, height: height }}
            loading="lazy"
        />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-blue-500 font-bold">{price}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            {/* NavBar */}
            <NavBar />
            
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center md:items-start py-12">
                <div className="md:w-1/2 text-center md:text-left bg-teal-500 p-8 text-white">
                    <h1 className="text-4xl font-bold mb-6">About Us - Comforty</h1>
                    <p className="text-lg mb-6">
                        At Comforty, we believe that the right chair can transform your space while delivering comfort,
                        ergonomic excellence, and premium materials. Discover timeless, modern chairs that seamlessly
                        blend style with functionality.
                    </p>
                    <button className="bg-teal-400 text-white py-2 px-6 rounded hover:bg-blue-600">
                        <a href="/collection">View Collection</a>
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img src="/images/line 1.png" alt="Comforty Chair" className="max-w-md" loading="lazy" />
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InfoCard
                        icon="🚚"
                        title="Next day as standard"
                        description="Order before 3pm and get your order the next day as standard."
                    />
                    <InfoCard
                        icon="✔️"
                        title="Made by true artisans"
                        description="Handmade crafted goods made with real passion and craftsmanship."
                    />
                    <InfoCard
                        icon="💳"
                        title="Unbeatable prices"
                        description="For our materials and quality, you won't find better prices anywhere."
                    />
                    <InfoCard
                        icon="🌱"
                        title="Recycled packaging"
                        description="We use 100% recycled materials to ensure our footprint is more manageable."
                    />
                </div>
            </section>

            {/* Products Section */}
            <section className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Popular Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <ProductCard
                        image="/images/green sofa.png"
                        name="The Popular Suede Sofa"
                        price="$99.00"
                        width="360"
                        height="240px"
                    />
                    {/* Product 2 */}
                    <ProductCard
                        image="/images/dandy chair1.png"
                        name="The Dandy Chair"
                        price="$99.00"
                        width="305px"
                        height="262px"
                    />
                    {/* Product 3 */}
                    <ProductCard
                        image="/images/dandy chair2.png"
                        name="The Dandy Chair"
                        price="$99.00"
                        width="305px"
                        height="262px"
                    />
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
