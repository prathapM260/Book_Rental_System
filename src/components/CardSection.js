import React, { useEffect,useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
function CardSection() {
    const [selectedCard, setSelectedCard] = useState(null); // State to track selected card
    useEffect(() => {
        AOS.init({
            duration: 1200, // Customize the duration of animations here
        });
    }, []);
    // Sample data for cards
    const cards = [
        { id: 1, image: 'https://letterreview.com/wp-content/uploads/2022/09/best-pens-for-author-book-signings.jpg', count: 20, details: 'Details about Authors. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 13 }, (_, i) => `Person ${i + 1}`) },
        { id: 2, image: 'https://th.bing.com/th/id/OIP.4JQRLB3X9FTZwb6-iGDThAAAAA?rs=1&pid=ImgDetMain', count: 20, details: 'Details about Writers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 16 }, (_, i) => `Person ${i + 1}`) },
        { id: 3, image: 'https://th.bing.com/th/id/OIP.8wI8D0q8vfcUE8UKyBnx2AHaE8?rs=1&pid=ImgDetMain', count: 24, details: 'Details about Designers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 19 }, (_, i) => `Person ${i + 1}`) },
        { id: 4, image: 'https://blog.papertrue.com/wp-content/uploads/2023/03/TOP-10-book-publish.png', count: 13, details: 'Details about Producers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 13 }, (_, i) => `Person ${i + 1}`) },
        { id: 5, image: 'https://th.bing.com/th/id/OIP.NjjAHfzKfnHCTq827QOmWgAAAA?rs=1&pid=ImgDetMain', count: 36, details: 'Details about Publishers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 16 }, (_, i) => `Person ${i + 1}`) },
        { id: 6, image: 'https://goingivy.com/wp-content/uploads/2017/06/European-History-Tutor-1.jpg', count: 29, details: 'Details about Readers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 19 }, (_, i) => `Person ${i + 1}`) },
        { id: 7, image: 'https://th.bing.com/th/id/R.2a629ab7e2d490a0fce68c4c160cb98c?rik=qpK4klq9%2bneWiQ&riu=http%3a%2f%2fwww.thebluediamondgallery.com%2fwooden-tile%2fimages%2fdonation.jpg&ehk=FK%2fKRZEZclZ91wzIEmdK8S5O2IrdjOAY36YJ0f49tVQ%3d&risl=&pid=ImgRaw&r=0', count: 11, details: 'Details about Customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris eget nunc iaculis pharetra.', members: Array.from({ length: 11 }, (_, i) => `Person ${i + 1}`) },
        
    ];

    // Function to handle card click
    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    // Define names based on selected card
    const name = {
        1: 'Authors',
        2: 'Creators',
        3: 'Producers',
        4: 'Publishers',
        5: 'Readers',
        6: 'Students',
        7: 'Donators',
        
    };

    return (
        <div className="bg-gray-100 py-8 mt-2 shadow-md">
            {/* Section with horizontally scrollable cards */}
            <div className="container mx-auto overflow-x-auto">
            <div className="text-center">
        <h1 className="text-center text-xl font-bold" >Assemble your team of professionals</h1>
        <h2 className="text-weight-normal space-top-xs-sm">
          Our community is home to the best publishing talent on the planet.
        </h2>
      </div>
                <div className="flex space-x-4 p-4">
                    {cards.map((card,index) => (
                        <div data-aos="fade-up"
                            data-aos-delay={index * 100}
                            key={card.id}
                            className={`flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer ${selectedCard && selectedCard.id === card.id ? 'border-2 border-blue-500' : 'border'}`}
                            onClick={() => handleCardClick(card)}
                            style={{ minWidth: '160px', maxWidth: '160px', minHeight: '240px', maxHeight: '240px' }}
                        >
                            {/* Card content */}
                            <div data-aos="fade-up" className="p-4">
                                <img src={card.image} alt={`Card ${card.id}`} className="w-full h-32 object-cover mb-4" />
                                <div className="text-center text-xl font-bold">{card.members.length}</div>
                                <div className="text-center text-xl font-bold">{name[card.id]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Display detailed information based on selected card */}
            {selectedCard && (
                <div data-aos="fade-up" className="container mx-auto mt-8 p-4 bg-white shadow-md">
                    <div className="flex">
                        {/* Left side with detailed description */}
                        <div data-aos="fade-up" className="w-3/5 pr-4">
                            <h3 className="text-xl font-bold mb-2">{name[selectedCard.id]}</h3>
                            <p className="text-gray-600 mb-4">{selectedCard.details}</p>
                        </div>
                        {/* Right side with members cards */}
                        <div className="w-2/5 max-h-64 overflow-y-auto">
                            <h4 data-aos="fade-up" className="text-lg font-bold mb-2">Related Persons ({selectedCard.members.length})</h4>
                            <div>
                                {selectedCard.members.map((member, index) => (
                                    <div data-aos="fade-up" key={index} className="bg-white rounded-lg overflow-hidden shadow-md border-t-4 border-blue-500 mb-4 p-2">
                                        <div className="text-gray-600">{member}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardSection;
