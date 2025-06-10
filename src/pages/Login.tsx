
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Github } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c8d8e4] via-[#f0f6f8] to-[#e8f2f5] dark:from-[#1a3a42] dark:via-[#2b6777] dark:to-[#1e4a54] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="pt-20 flex items-center justify-center min-h-screen px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#2b6777] to-[#52bad5] rounded-full flex items-center justify-center shadow-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <User className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="text-2xl font-bold text-[#2b6777]">
                {isLogin ? 'Welcome Back' : 'Join SpeakAI'}
              </CardTitle>
              <p className="text-muted-foreground">
                {isLogin ? 'Sign in to continue your learning journey' : 'Start your communication transformation'}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-[#2b6777]/20 hover:bg-[#2b6777]/5" type="button">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                
                <Button variant="outline" className="w-full border-[#2b6777]/20 hover:bg-[#2b6777]/5" type="button">
                  <Github className="w-5 h-5 mr-2" />
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-2 bg-background text-muted-foreground text-sm">or</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative"
                  >
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 border-[#2b6777]/20 focus:border-[#2b6777] focus:ring-[#2b6777]"
                      required={!isLogin}
                    />
                  </motion.div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 border-[#2b6777]/20 focus:border-[#2b6777] focus:ring-[#2b6777]"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 border-[#2b6777]/20 focus:border-[#2b6777] focus:ring-[#2b6777]"
                    required
                  />
                </div>

                {isLogin && (
                  <div className="text-right">
                    <a href="#" className="text-sm text-[#2b6777] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#2b6777] to-[#52bad5] hover:from-[#1e4a54] hover:to-[#3a8fa5] text-white shadow-xl"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Button>
                </motion.div>
              </form>

              <div className="text-center">
                <span className="text-muted-foreground">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#2b6777] hover:underline font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </div>

              {!isLogin && (
                <p className="text-xs text-muted-foreground text-center">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-[#2b6777] hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-[#2b6777] hover:underline">Privacy Policy</a>
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
