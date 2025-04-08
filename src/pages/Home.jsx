import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* About Section Preview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Authentic South Indian Experience</h2>
              <p className="text-amber-900 mb-6">
                Welcome to Dakshin Delight, Rajkot's premier destination for authentic South Indian cuisine. Our restaurant brings the rich culinary traditions of South India to Gujarat, offering a menu filled with delicious, made-from-scratch dishes prepared using traditional recipes and techniques.
              </p>
              <p className="text-amber-900 mb-8">
                From crispy dosas to fluffy idlis, steaming vadas to flavorful uttapams - we serve a wide variety of South Indian delicacies made with the finest ingredients. Our chefs, who hail from South India, ensure that every dish captures the authentic flavors and essence of the region.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/south-indian-thali.jpg"
                alt="South Indian Thali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedItems />

      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Taste of South India Today</h2>
          <p className="max-w-2xl mx-auto mb-10 text-amber-100">
            Visit us for an unforgettable dining experience or order online. We're ready to serve you the most authentic South Indian cuisine in Rajkot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-amber-800 hover:bg-amber-100">Reserve a Table</Link>
            <Link to="/menu" className="btn border-2 border-white text-white hover:bg-amber-700">View Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
