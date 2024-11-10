const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('public'));  // For serving static files, like images

// Homepage route to send homepage data
app.get('/api/homepage', (req, res) => {
  const homepageData = {
    title: 'Healthcare at your fingertips.',
    subtitle: 'Access Quality Care Anytime, Anywhere',
    buttonText: 'Book an Appointment',
    services: [
      {
        title: 'Convenient Online Healthcare',
        description: 'Book consultations with specialists from various medical fields through an easy-to-use platform.',
        image: '/images/convenient-healthcare.jpg',
      },
      {
        title: 'Seamless Prescription Management',
        description: 'Receive digital prescriptions and manage medication refills effortlessly with just a few clicks.',
        image: '/images/prescription-management.jpg',
      },
      {
        title: '24/7 Accessible Medical Assistance',
        description: 'Get round-the-clock professional medical support, ensuring help is available whenever you need it.',
        image: '/images/medical-assistance.jpg',
      },
    ],
  };

  res.json(homepageData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const paymentRoutes = require('./routes/payment');

// Middleware
app.use(express.json());

// Payment route
app.use('/api/payment', paymentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
