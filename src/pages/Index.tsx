
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Play, Star, CheckCircle, Globe, MessageSquare, BarChart3, Users, Award, Zap, Heart, Twitter, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Features animation
    gsap.fromTo(".feature-card", 
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        }
      }
    );

    // Stats counter animation
    gsap.fromTo(".stat-number", 
      { textContent: 0 },
      { 
        textContent: (i, el) => el.getAttribute('data-value'),
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        }
      }
    );

    // Testimonials stagger animation
    gsap.fromTo(".testimonial-card", 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Conversations",
      description: "Practice with advanced AI that adapts to your level and provides real-time feedback.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Globe,
      title: "Multiple Languages",
      description: "Learn and practice over 20 languages with native-level pronunciation guidance.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and personalized insights.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "SpeakAI helped me improve my presentation skills in just 2 weeks. The AI feedback is incredibly accurate!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Miguel Rodriguez",
      role: "Business Analyst", 
      content: "The interview preparation feature boosted my confidence. I landed my dream job thanks to SpeakAI!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Thompson",
      role: "Marketing Manager",
      content: "Learning French has never been this engaging. The AI conversations feel so natural!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      features: ["5 AI conversations/month", "Basic feedback", "1 language"],
      popular: false
    },
    {
      name: "Pro",
      price: "$19/month",
      features: ["Unlimited conversations", "Advanced analytics", "All languages", "Priority support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Team management", "Custom AI training", "API access", "Dedicated support"],
      popular: false
    }
  ];

  const stats = [
    { number: 50000, label: "Active Users", icon: Users },
    { number: 150, label: "Languages Supported", icon: Globe },
    { number: 95, label: "Success Rate", icon: Award, suffix: "%" },
    { number: 24, label: "Hours Support", icon: Zap, suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#2b6777]">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto text-center relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* AI Avatar Animation */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 bg-[#2b6777] rounded-full flex items-center justify-center shadow-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(43, 103, 119, 0.3)",
                    "0 0 40px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(43, 103, 119, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageSquare className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2b6777] dark:text-white">
              Master Communication with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
              Transform your speaking skills through AI-powered video conversations. 
              Practice languages, ace interviews, and boost confidence with personalized feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6 bg-[#2b6777] hover:bg-[#1e4a54] text-white shadow-xl">
                  Start Now - It's Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 group border-[#2b6777] text-[#2b6777] hover:bg-[#2b6777] hover:text-white">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-[#1e4a54]" ref={statsRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#2b6777] rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#2b6777] dark:text-white mb-2">
                  <span className="stat-number" data-value={stat.number}>0</span>
                  {stat.suffix}
                </div>
                <p className="text-gray-600 dark:text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" ref={featuresRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b6777] dark:text-white">Why Choose SpeakAI?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Experience the future of language learning with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card h-full bg-white dark:bg-[#1e4a54] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#2b6777] rounded-full flex items-center justify-center -mt-12 relative z-10 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#2b6777] dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#1e4a54]" ref={testimonialsRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b6777] dark:text-white">What Our Users Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">Join thousands of satisfied learners</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card h-full bg-white dark:bg-[#2b6777] rounded-lg shadow-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-200 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#2b6777] dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b6777] dark:text-white">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">Start free, upgrade when you're ready</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#2b6777] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'border-2 border-[#2b6777] shadow-2xl' : ''} bg-white dark:bg-[#1e4a54]`}>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#2b6777] dark:text-white">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-6 text-[#2b6777] dark:text-white">{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center text-gray-600 dark:text-gray-200">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-[#2b6777] hover:bg-[#1e4a54] text-white' : 'border-[#2b6777] text-[#2b6777] hover:bg-[#2b6777] hover:text-white'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Footer */}
      <footer className="bg-[#2b6777] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <MessageSquare className="w-6 h-6 text-[#2b6777]" />
                </div>
                <h3 className="text-2xl font-bold">SpeakAI</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Empowering communication through cutting-edge AI technology. Join millions of learners worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-200" />
                  <span className="text-gray-200">hello@speakai.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-200" />
                  <span className="text-gray-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-200" />
                  <span className="text-gray-200">San Francisco, CA</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg text-[#2b6777] focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-[#2b6777] px-4 py-2 rounded-r-lg hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-200 mb-4 md:mb-0">
                © 2024 SpeakAI. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
