import React from "react";
import NavBar from "@/components/NavBar"; // Import the NavBar component
import AboutUs from "@/components/Contact";
import Footer from "@/components/Footer"; // Correct import path if Footer is intended
import { Contact } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What types of chairs do you offer?",
      answer:
        "We offer a wide range of chairs, including ergonomic office chairs, dining chairs, lounge chairs, and outdoor seating. Our collection suits various styles and preferences.",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer:
        "Yes, all our chairs come with a warranty. The duration and coverage depend on the specific product. Please refer to the product details or contact us for more information.",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer:
        "Absolutely! You can visit our showroom to try our chairs before purchasing. Alternatively, take advantage of our 30-day return policy for online orders.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "You can contact us via email at support@comforty.com, call us at 0323-8277117, or use the live chat feature on our website.",
    },
    {
      question: "What will be delivered? And when?",
      answer:
        "Once your order is confirmed, you'll receive an email with the details. Delivery times range from 5-14 business days, depending on your location and the item purchased.",
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Clean your chair regularly with a soft, damp cloth. For fabric chairs, use a vacuum to remove dust. Avoid using harsh chemicals, and follow the care instructions provided.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Add NavBar here */}
      <NavBar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          FAQ's for Furniture Website
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <dt className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </dt>
              <dd className="text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Additional components */}
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default FAQ;

