import React from 'react';
import { Star } from 'lucide-react';

const MenuSection = ({ scrollToSection, addToCart, isLoggedIn }) => {
  // Extended Coffee Menu - 10+ items
  const coffeeItems = [
    {
      id: 1,
      name: 'Espresso',
      description: 'A strong, concentrated coffee.',
      price: 2.99,
      image: '/assets/images/coffee/expresso.jpeg',
      category: 'coffee',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Latte',
      description: 'Espresso with steamed milk and foam.',
      price: 4.49,
      image: '/assets/images/coffee/latte.jpg',
      category: 'coffee',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Cappuccino',
      description: 'Equal parts espresso, steamed milk, and foam.',
      price: 4.29,
      image: '/assets/images/coffee/cappuccino.jpg',
      category: 'coffee',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Americano',
      description: 'Espresso diluted with hot water.',
      price: 3.49,
      image: '/assets/images/coffee/americano.jpg',
      category: 'coffee',
      rating: 4.4
    },
    {
      id: 5,
      name: 'Mocha',
      description: 'Espresso, chocolate syrup, and steamed milk.',
      price: 4.99,
      image: '/assets/images/coffee/mocha.jpeg',
      category: 'coffee',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Flat White',
      description: 'A strong espresso-based coffee topped with smooth, velvety microfoam.',
      price: 4.79,
      image: '/assets/images/coffee/flat_white.jpg',
      category: 'coffee',
      rating: 4.5
    },
    {
      id: 7,
      name: 'Macchiato',
      description: 'Espresso with a dollop of steamed milk foam.',
      price: 3.99,
      image: '/assets/images/coffee/macchiato.jpg',
      category: 'coffee',
      rating: 4.3
    },
    {
      id: 8,
      name: 'French Press',
      description: 'Full-bodied coffee brewed with coarsely ground beans.',
      price: 4.29,
      image: '/assets/images/coffee/french_press.jpg',
      category: 'coffee',
      rating: 4.6
    },
    {
      id: 9,
      name: 'Cold Brew',
      description: 'Smooth, cold-extracted coffee served over ice.',
      price: 3.99,
      image: '/assets/images/coffee/cold_brew.webp',
      category: 'coffee',
      rating: 4.4
    },
    {
      id: 10,
      name: 'Affogato',
      description: 'Vanilla ice cream drowned in hot espresso.',
      price: 5.49,
      image: '/assets/images/coffee/affogato.jpg',
      category: 'coffee',
      rating: 4.9
    },
    {
      id: 11,
      name: 'Irish Coffee',
      description: 'Coffee with Irish whiskey, sugar, and whipped cream.',
      price: 6.99,
      image: '/assets/images/coffee/irish_coffee.jpg',
      category: 'coffee',
      rating: 4.7
    },
    {
      id: 12,
      name: 'Turkish Coffee',
      description: 'Traditional finely ground coffee served with grounds.',
      price: 4.99,
      image: '/assets/images/coffee/turkish_coffee.jpg',
      category: 'coffee',
      rating: 4.2
    }
  ];

  const snackItems = [
    {
      id: 13,
      name: 'Chocolate Croissant',
      description: 'Buttery croissant filled with rich chocolate.',
      price: 3.99,
      image: '/assets/images/snacks/chocolate_croissant.jpg',
      category: 'snack',
      rating: 4.6
    },
    {
      id: 14,
      name: 'Blueberry Muffin',
      description: 'Fresh baked muffin with juicy blueberries.',
      price: 2.99,
      image: '/assets/images/snacks/blueberry_muffin.jpg',
      category: 'snack',
      rating: 4.4
    },
    {
      id: 15,
      name: 'Avocado Toast',
      description: 'Toasted sourdough with fresh avocado and seasoning.',
      price: 6.99,
      image: '/assets/images/snacks/avocado_toast.jpg',
      category: 'snack',
      rating: 4.7
    },
    {
      id: 16,
      name: 'Bagel & Cream Cheese',
      description: 'Fresh bagel with premium cream cheese.',
      price: 4.49,
      image: '/assets/images/snacks/bagel_cream_cheese.jpg',
      category: 'snack',
      rating: 4.3
    }
  ];

  // Ambience Images
  const ambienceImages = [
    '/assets/images/ambience/bg.jpeg',
    '/assets/images/ambience/cafe2.webp',
    '/assets/images/ambience/cafe3.jpeg',
    '/assets/images/ambience/cafe4.jpg',
    '/assets/images/ambience/cafe5.jpg',
    '/assets/images/ambience/cafe6.jpeg',
    '/assets/images/ambience/cafe7.jpeg',
    '/assets/images/ambience/cafe8.jpeg',
    '/assets/images/ambience/cafe9.jpeg',
    '/assets/images/ambience/cafe10.jpeg'
  ];

  return (
    <div className="menu-section">
      {/* We Serve Section */}
      <div className="serve" id="menu" style={{
        textAlign: 'center',
        textShadow: 'sandybrown',
        fontFamily: 'cursive',
        fontSize: '35px',
        fontStyle: 'oblique',
        padding: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
      }}>
        We Serve
      </div>

      {/* Coffee Items Container */}
      <div className="container" style={{
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '40px 20px'
      }}>
        {coffeeItems.map(item => (
          <div key={item.id} className="menu-item" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '300px',
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid #f0f0f0'
          }}>
            <img 
              src={item.image} 
              alt={item.name}
              className="img"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 10px rgba(0, 0.5, 0.5, 0.5)',
                marginBottom: '15px'
              }}
            />
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Star className="h-4 w-4 text-yellow-400" style={{ fill: 'currentColor' }} />
              <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>
                {item.rating}
              </span>
            </div>

            <p className="description_title" style={{
              marginTop: '10px',
              textAlign: 'center',
              fontSize: '18px',
              fontFamily: 'cursive',
              fontStyle: 'oblique',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              {item.name}
            </p>

            <p className="description" style={{
              marginTop: '5px',
              textAlign: 'center',
              fontSize: '14px',
              fontFamily: 'cursive',
              color: '#666',
              marginBottom: '12px',
              lineHeight: '1.4'
            }}>
              {item.description}
            </p>

            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#d97706',
              marginBottom: '15px'
            }}>
              ${item.price}
            </p>

            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(item)}
              style={{
                background: '#d97706',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontFamily: 'cursive',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '16px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Snacks Section */}
      <div style={{ marginTop: '60px' }}>
        <div style={{
          textAlign: 'center',
          fontFamily: 'cursive',
          fontSize: '35px',
          fontStyle: 'oblique',
          padding: '20px',
          color: '#d97706'
        }}>
          Fresh Snacks & Treats
        </div>

        <div className="container" style={{
          alignContent: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '40px 20px'
        }}>
          {snackItems.map(item => (
            <div key={item.id} className="menu-item" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '300px',
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid #f0f0f0'
            }}>
              <img 
                src={item.image} 
                alt={item.name}
                className="img"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 4px 10px rgba(0, 0.5, 0.5, 0.5)',
                  marginBottom: '15px'
                }}
              />
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Star className="h-4 w-4 text-yellow-400" style={{ fill: 'currentColor' }} />
                <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>
                  {item.rating}
                </span>
              </div>

              <p className="description_title" style={{
                marginTop: '10px',
                textAlign: 'center',
                fontSize: '18px',
                fontFamily: 'cursive',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '8px'
              }}>
                {item.name}
              </p>

              <p className="description" style={{
                marginTop: '5px',
                textAlign: 'center',
                fontSize: '14px',
                fontFamily: 'cursive',
                color: '#666',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                {item.description}
              </p>

              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#d97706',
                marginBottom: '15px'
              }}>
                ${item.price}
              </p>

              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
                style={{
                  background: '#d97706',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontFamily: 'cursive',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '16px'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ambience Section */}
      <p className="amb" id="Ambience" style={{
        fontSize: '35px',
        fontFamily: 'cursive',
        fontStyle: 'oblique',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        Ambience
      </p>
      
      <div className="ambience" style={{
        alignItems: 'center',
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        padding: '20px',
        scrollBehavior: 'smooth'
      }}>
        {ambienceImages.map((image, index) => (
          <img 
            key={index}
            src={image}
            className="amb_img"
            alt={`Cafe ambience ${index + 1}`}
            style={{
              height: '300px',
              width: '500px',
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
              flexShrink: 0,
              objectFit: 'cover'
            }}
          />
        ))}
      </div>

      {/* About Us Section */}
      <p className="amb" id="about" style={{
        fontSize: '35px',
        fontFamily: 'cursive',
        fontStyle: 'oblique',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        About Us
      </p>
      
      <div className="about" style={{
        display: 'flex',
        margin: '40px',
        gap: '30px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <img 
          src="/assets/images/ambience/about.avif"
          className="about_img"
          style={{
            height: '300px',
            width: '500px',
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            objectFit: 'cover',
            flex: '1',
            minWidth: '300px'
          }}
          alt="About us"
        />
        <section className="about_description" style={{
          fontSize: '15px',
          fontFamily: 'cursive',
          fontStyle: 'italic',
          padding: '20px',
          paddingTop: '40px',
          flex: '2',
          minWidth: '300px'
        }}>
          Welcome to Café Mosaic, where every cup tells a story. Nestled in the heart of the city, our café is a haven for coffee lovers and comfort seekers alike. At Café Mosaic, we believe that coffee is more than just a drink—it's an experience, a moment of connection, and a spark of creativity. Our carefully crafted brews, paired with a warm and inviting ambiance, make for the perfect spot to relax, work, or catch up with friends. Whether you're here for your morning pick-me-up or an afternoon escape, we promise to make every visit a delightful one.
          <br /><br />
          From the aroma of freshly ground beans to the smiles of our baristas, every detail at Café Mosaic is designed to make you feel at home. Join us, and be part of our ever-growing coffee community.
        </section>
      </div>

      {/* Why Us Section */}
      <p className="amb" style={{
        fontSize: '35px',
        fontFamily: 'cursive',
        fontStyle: 'oblique',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        Why Us ?
      </p>
      
      <div className="why" style={{
        alignItems: 'flex-start',
        display: 'flex',
        gap: '40px',
        padding: '40px 20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
          <img 
            src="/assets/images/icons/shield.png"
            className="why_img"
            style={{ height: '60px', width: '60px', marginBottom: '20px' }}
            alt="Quality"
          />
          <p className="why-description" style={{
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '15px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            We source our beans from the finest coffee farms around the world, ensuring that every cup we serve is rich, flavorful, and brewed to perfection. Our baristas are trained to extract the best flavors, making sure you experience the true essence of coffee.
          </p>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
          <img 
            src="/assets/images/icons/home.png"
            className="why_img"
            style={{ height: '60px', width: '60px', marginBottom: '20px' }}
            alt="Home atmosphere"
          />
          <p className="why-description" style={{
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '15px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            Our coffee shop is designed to be a home away from home, offering a warm and welcoming environment where you can relax, work, or catch up with friends. With comfortable seating, soothing music, and free Wi-Fi, it's the perfect spot to unwind.
          </p>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
          <img 
            src="/assets/images/icons/vip-person.png"
            className="why_img"
            style={{ height: '60px', width: '60px', marginBottom: '20px' }}
            alt="Personal service"
          />
          <p className="why-description" style={{
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '15px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            We pride ourselves on our friendly and attentive service. Our staff takes the time to get to know our customers, ensuring that every visit is a personalized experience. Whether it's remembering your favorite drink or recommending something new, we're here to make your day better.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="transparent-box" style={{
        textAlign: 'center',
        backgroundColor: '#f7f7f7',
        padding: '40px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '90%',
        margin: '60px auto'
      }}>
        <p className="amb" style={{
          fontSize: '35px',
          fontFamily: 'cursive',
          fontStyle: 'oblique',
          marginBottom: '30px'
        }}>
          Testimonials
        </p>
        
        <img 
          src="/assets/images/icons/quotes.png"
          className="quote_img"
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            height: '40px',
            width: '40px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px'
          }}
          alt="Quote"
        />
        
        <p className="testimonial-description" style={{
          fontFamily: 'cursive',
          fontStyle: 'italic',
          fontSize: '18px',
          textAlign: 'center',
          margin: '0 0 20px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6'
        }}>
          "The best coffee in town! The atmosphere is cozy, and the staff always makes me feel welcome. It's my go-to spot for a morning pick-me-up."
        </p>
        
        <span style={{
          fontFamily: 'cursive',
          fontStyle: 'oblique',
          fontSize: '20px',
          textAlign: 'center',
          display: 'block',
          fontWeight: 'bold',
          marginTop: '10px',
          color: '#d97706'
        }}>
          Laura M.
        </span>
      </div>

      {/* Videos Section */}
 // Update the Videos Section in your MenuSection.js component
// Replace the existing videos section with this code:

{/* Videos Section */}
<p className="amb" style={{
  fontSize: '35px',
  fontFamily: 'cursive',
  fontStyle: 'oblique',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '80px'
}}>
  Videos
</p>

<div className="video" style={{
  display: 'flex',
  padding: '20px',
  gap: '40px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center'
}}>
  <div className="video-container" style={{
    flex: '1 1 500px',
    minWidth: '300px',
    maxWidth: '560px'
  }}>
    <iframe 
      width="100%" 
      height="315" 
      src="https://www.youtube.com/embed/MYPVQccHhAQ?si=qBwsdGkJw14NhTKN" 
      title="Coffee making video 1"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen 
      className="frame"
      style={{
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        aspectRatio: '16/9'
      }}
    />
  </div>
  
  <div className="video-container" style={{
    flex: '1 1 500px',
    minWidth: '300px',
    maxWidth: '560px'
  }}>
    <iframe 
      width="100%" 
      height="315" 
      src="https://www.youtube.com/embed/0L38Z9hIi5s?si=UGrP-W2xKGtz319Y" 
      title="Coffee making video 2"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen 
      className="frame"
      style={{
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        aspectRatio: '16/9'
      }}
    />
  </div>
</div>

{/* Add responsive CSS for videos */}
<style jsx>{`
  @media (max-width: 768px) {
    .video {
      flex-direction: column !important;
      gap: 20px !important;
    }
    
    .video-container {
      flex: none !important;
      width: 100% !important;
    }
    
    .frame {
      width: 100% !important;
      height: 200px !important;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1200px) {
    .frame {
      height: 250px !important;
    }
  }
`}</style>
      {/* Contact Section */}
      <p className="amb" id="contact" style={{
        fontSize: '35px',
        fontFamily: 'cursive',
        fontStyle: 'oblique',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        Contact Us
      </p>
      
      <div className="contact" style={{
        display: 'flex',
        gap: '70px',
        padding: '40px 20px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38866270.29364837!2d172.66082959999997!3d53.51832629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0221c96ec85e9%3A0x66ff9ad68c4c202a!2sCafe%20Mosaics!5e0!3m2!1sen!2sin!4v1723715286354!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{ 
            border: 0,
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)'
          }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          className="map"
          title="Cafe location map"
        />

        <section style={{ minWidth: '300px' }}>
          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <img 
              src="/assets/images/icons/pin.png"
              className="contact_img"
              style={{ height: '40px', width: '40px' }}
              alt="Location pin"
            />
            <div>
              <p className="contact_title" style={{
                fontStyle: 'oblique',
                fontFamily: 'cursive',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 8px 0'
              }}>
                Our Office Address
              </p>
              <p className="contact_description" style={{
                fontStyle: 'italic',
                fontFamily: 'cursive',
                fontSize: '15px',
                margin: 0,
                color: '#666'
              }}>
                123 Brew Lane, Coffee Town, Java City, 45678
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <img 
              src="/assets/images/icons/email.png"
              className="contact_img"
              style={{ height: '40px', width: '40px' }}
              alt="Email"
            />
            <div>
              <p className="contact_title" style={{
                fontStyle: 'oblique',
                fontFamily: 'cursive',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 8px 0'
              }}>
                General Enquiries
              </p>
              <p className="contact_description" style={{
                fontStyle: 'italic',
                fontFamily: 'cursive',
                fontSize: '15px',
                margin: 0,
                color: '#666'
              }}>
                contact.cafemosaic@gmail.com
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <img 
              src="/assets/images/icons/phone-call.png"
              className="contact_img"
              style={{ height: '40px', width: '40px' }}
              alt="Phone"
            />
            <div>
              <p className="contact_title" style={{
                fontStyle: 'oblique',
                fontFamily: 'cursive',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 8px 0'
              }}>
                Call Us
              </p>
              <p className="contact_description" style={{
                fontStyle: 'italic',
                fontFamily: 'cursive',
                fontSize: '15px',
                margin: 0,
                color: '#666'
              }}>
                + 91 8737827940
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <img 
              src="/assets/images/icons/clock.png"
              className="contact_img"
              style={{ height: '40px', width: '40px' }}
              alt="Clock"
            />
            <div>
              <p className="contact_title" style={{
                fontStyle: 'oblique',
                fontFamily: 'cursive',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 8px 0'
              }}>
                Our Timings
              </p>
              <p className="contact_description" style={{
                fontStyle: 'italic',
                fontFamily: 'cursive',
                fontSize: '15px',
                margin: 0,
                color: '#666'
              }}>
                Monday to Friday: 7:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuSection;