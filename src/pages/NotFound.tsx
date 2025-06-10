import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Search, MessageSquare } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="pt-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated Lost AI Avatar */}
          <motion.div
            className="w-48 h-48 mx-auto mb-8 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main AI Avatar */}
            <motion.div
              className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MessageSquare className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Question Marks */}
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                style={{
                  top: `${20 + index * 15}%`,
                  left: `${10 + index * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                ?
              </motion.div>
            ))}

            {/* Confused Expression Lines */}
            <motion.div
              className="absolute top-8 left-12 w-12 h-1 bg-white/60 rounded-full"
              animate={{
                scaleX: [1, 0.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute top-12 right-12 w-8 h-1 bg-white/60 rounded-full"
              animate={{
                scaleX: [1, 0.6, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3,
              }}
            />
          </motion.div>

          {/* 404 Text with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <motion.h1
              className="text-8xl md:text-9xl font-bold mb-4"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(45deg, #8B5CF6, #3B82F6, #10B981, #F59E0B, #8B5CF6)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              404
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Oops! My AI got lost in conversation...
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              It seems the page you're looking for decided to practice its disappearing act. 
              Don't worry, even our AI makes mistakes sometimes!
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Home className="w-5 h-5 mr-2" />
                  Take Me Home
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/dashboard">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  Go to Dashboard
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Funny AI Quotes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
          >
            <motion.p
              className="text-sm text-muted-foreground italic"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              "I may be artificial, but my confusion about this missing page is very real!" 
              <br />
              <span className="text-xs mt-2 block">- Your Friendly AI Assistant</span>
            </motion.p>
          </motion.div>

          {/* Background Animation Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 bg-purple-300 dark:bg-purple-600 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
