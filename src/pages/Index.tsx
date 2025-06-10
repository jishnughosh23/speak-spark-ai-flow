
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Play, Star, CheckCircle, Globe, MessageSquare, BarChart3 } from 'lucide-react';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c8d8e4] via-[#f0f6f8] to-[#e8f2f5] dark:from-[#1a3a42] dark:via-[#2b6777] dark:to-[#1e4a54]">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* AI Avatar Animation */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-[#2b6777] to-[#52bad5] rounded-full flex items-center justify-center shadow-2xl"
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
                    "0 0 40px rgba(82, 186, 213, 0.5)",
                    "0 0 20px rgba(43, 103, 119, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageSquare className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2b6777] via-[#52bad5] to-[#2b6777] bg-clip-text text-transparent">
              Master Communication with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your speaking skills through AI-powered video conversations. 
              Practice languages, ace interviews, and boost confidence with personalized feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-[#2b6777] to-[#52bad5] hover:from-[#1e4a54] hover:to-[#3a8fa5] text-white shadow-xl">
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

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b6777]">Why Choose SpeakAI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of language learning with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2b6777] to-[#52bad5] rounded-full flex items-center justify-center -mt-12 relative z-10 shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#2b6777]">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b6777]">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Join thousands of satisfied learners</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-[#2b6777]">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b6777]">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground">Start free, upgrade when you're ready</p>
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
                    <span className="bg-gradient-to-r from-[#2b6777] to-[#52bad5] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'border-2 border-[#2b6777] shadow-2xl' : ''} bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm`}>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#2b6777]">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-6 text-primary">{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-[#2b6777] to-[#52bad5] hover:from-[#1e4a54] hover:to-[#3a8fa5] text-white' : 'border-[#2b6777] text-[#2b6777] hover:bg-[#2b6777] hover:text-white'}`}
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

      {/* Footer */}
      <footer className="bg-[#2b6777] text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#c8d8e4] to-white bg-clip-text text-transparent">
            SpeakAI
          </div>
          <p className="text-[#c8d8e4] mb-8">Empowering communication through AI technology</p>
          <div className="flex justify-center space-x-6 text-sm text-[#c8d8e4]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
