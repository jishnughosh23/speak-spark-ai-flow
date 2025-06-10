import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Video, 
  CheckCircle, 
  BookOpen, 
  Trophy, 
  Clock,
  Play,
  BarChart3,
  Globe,
  Mic
} from 'lucide-react';

const Dashboard = () => {
  const languages = [
    { name: 'English', flag: '🇺🇸', level: 'Advanced', progress: 85 },
    { name: 'Spanish', flag: '🇪🇸', level: 'Intermediate', progress: 60 },
    { name: 'French', flag: '🇫🇷', level: 'Beginner', progress: 25 },
    { name: 'German', flag: '🇩🇪', level: 'Beginner', progress: 15 },
  ];

  const practiceModules = [
    {
      title: 'Interview Prep',
      description: 'Practice common interview questions',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      sessions: 12,
      link: '/practice'
    },
    {
      title: 'Communication Practice',
      description: 'Improve daily conversation skills',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      sessions: 8,
      link: '/practice'
    },
    {
      title: 'Grammar Check',
      description: 'Real-time grammar correction',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      sessions: 15,
      link: '/practice'
    },
    {
      title: 'Pronunciation',
      description: 'Perfect your accent and pronunciation',
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      sessions: 10,
      link: '/practice'
    }
  ];

  const recentActivities = [
    { type: 'practice', title: 'Interview Practice Session', time: '2 hours ago', score: 92 },
    { type: 'lesson', title: 'Business Communication', time: '1 day ago', score: 88 },
    { type: 'practice', title: 'Pronunciation Exercise', time: '2 days ago', score: 95 },
  ];

  const userStats = {
    totalSessions: 45,
    hoursSpent: 32,
    averageScore: 89,
    streak: 7
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="pt-20 px-4 pb-8">
        <div className="container mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, Alex! 👋
                </h1>
                <p className="text-muted-foreground text-lg">
                  Ready to continue your learning journey?
                </p>
              </div>
              <Link to="/practice">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 mt-4 md:mt-0">
                  <Play className="w-5 h-5 mr-2" />
                  Start Practice
                </Button>
              </Link>
            </div>

            {/* Progress Overview */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.totalSessions}</div>
                    <p className="text-sm text-muted-foreground">Total Sessions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.hoursSpent}h</div>
                    <p className="text-sm text-muted-foreground">Hours Practiced</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.averageScore}%</div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.streak} days</div>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-primary" />
              Your Languages
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{language.flag}</div>
                      <h3 className="font-semibold text-lg mb-2">{language.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{language.level}</p>
                      <Progress value={language.progress} className="mb-2" />
                      <p className="text-xs text-muted-foreground">{language.progress}% Complete</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Practice Modules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-primary" />
              Practice Modules
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practiceModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to={module.link}>
                    <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center mb-4`}>
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {module.sessions} sessions completed
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary">{activity.score}%</div>
                          <Trophy className="w-4 h-4 text-yellow-500 mx-auto" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/analytics">
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-5 h-5 mr-3" />
                      View Progress Analytics
                    </Button>
                  </Link>
                  <Link to="/practice">
                    <Button variant="outline" className="w-full justify-start">
                      <Video className="w-5 h-5 mr-3" />
                      Start Video Practice
                    </Button>
                  </Link>
                  <Link to="/settings">
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="w-5 h-5 mr-3" />
                      Add New Language
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
