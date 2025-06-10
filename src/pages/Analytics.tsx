
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Award, 
  Clock,
  Target,
  Mic,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState('week');

  const progressData = [
    { day: 'Mon', grammar: 85, pronunciation: 78, fluency: 82, vocabulary: 90 },
    { day: 'Tue', grammar: 87, pronunciation: 80, fluency: 85, vocabulary: 88 },
    { day: 'Wed', grammar: 89, pronunciation: 82, fluency: 87, vocabulary: 91 },
    { day: 'Thu', grammar: 91, pronunciation: 85, fluency: 89, vocabulary: 93 },
    { day: 'Fri', grammar: 88, pronunciation: 87, fluency: 91, vocabulary: 89 },
    { day: 'Sat', grammar: 93, pronunciation: 89, fluency: 93, vocabulary: 95 },
    { day: 'Sun', grammar: 95, pronunciation: 91, fluency: 94, vocabulary: 97 }
  ];

  const sessionData = [
    { month: 'Jan', sessions: 12, hours: 8 },
    { month: 'Feb', sessions: 18, hours: 12 },
    { month: 'Mar', sessions: 25, hours: 18 },
    { month: 'Apr', sessions: 32, hours: 22 },
    { month: 'May', sessions: 28, hours: 20 },
    { month: 'Jun', sessions: 35, hours: 26 }
  ];

  const skillDistribution = [
    { name: 'Grammar', value: 92, color: '#8B5CF6' },
    { name: 'Pronunciation', value: 88, color: '#3B82F6' },
    { name: 'Fluency', value: 85, color: '#10B981' },
    { name: 'Vocabulary', value: 90, color: '#F59E0B' }
  ];

  const achievements = [
    { title: '7-Day Streak', description: 'Practiced 7 days in a row', icon: '🔥', achieved: true },
    { title: 'Grammar Master', description: '95% accuracy in grammar', icon: '📚', achieved: true },
    { title: 'Pronunciation Pro', description: '90% pronunciation score', icon: '🎯', achieved: false },
    { title: 'Conversation Expert', description: '50 practice sessions', icon: '💬', achieved: true },
  ];

  const weeklyStats = {
    totalSessions: 12,
    totalHours: 8.5,
    averageScore: 89,
    improvement: 12
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                  <BarChart3 className="w-8 h-8 mr-3 text-primary" />
                  Progress Analytics
                </h1>
                <p className="text-muted-foreground text-lg">
                  Track your improvement and achievements
                </p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button 
                  variant={timeFilter === 'week' ? 'default' : 'outline'}
                  onClick={() => setTimeFilter('week')}
                >
                  Week
                </Button>
                <Button 
                  variant={timeFilter === 'month' ? 'default' : 'outline'}
                  onClick={() => setTimeFilter('month')}
                >
                  Month
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Sessions', value: weeklyStats.totalSessions, icon: MessageSquare, change: '+15%' },
                { label: 'Hours', value: `${weeklyStats.totalHours}h`, icon: Clock, change: '+8%' },
                { label: 'Avg Score', value: `${weeklyStats.averageScore}%`, icon: Target, change: '+12%' },
                { label: 'Improvement', value: `+${weeklyStats.improvement}%`, icon: TrendingUp, change: '+5%' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-xs text-green-600">{stat.change}</p>
                        </div>
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Charts Section */}
          <Tabs defaultValue="skills" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="skills">Skills Progress</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="distribution">Skills Distribution</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Weekly Skills Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="day" />
                        <YAxis domain={[70, 100]} />
                        <Line 
                          type="monotone" 
                          dataKey="grammar" 
                          stroke="#8B5CF6" 
                          strokeWidth={3}
                          dot={{ r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="pronunciation" 
                          stroke="#3B82F6" 
                          strokeWidth={3}
                          dot={{ r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="fluency" 
                          stroke="#10B981" 
                          strokeWidth={3}
                          dot={{ r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="vocabulary" 
                          stroke="#F59E0B" 
                          strokeWidth={3}
                          dot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {[
                        { name: 'Grammar', color: '#8B5CF6' },
                        { name: 'Pronunciation', color: '#3B82F6' },
                        { name: 'Fluency', color: '#10B981' },
                        { name: 'Vocabulary', color: '#F59E0B' }
                      ].map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div 
                            className="w-4 h-4 rounded-full mr-2"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span className="text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="sessions">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Practice Sessions Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Bar dataKey="sessions" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="distribution">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Current Skills Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={skillDistribution}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {skillDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-4">
                        {skillDistribution.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill.name}</span>
                              <span className="font-bold">{skill.value}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="h-2 rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="achievements">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg ${
                      achievement.achieved ? 'ring-2 ring-green-500' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg flex items-center">
                              {achievement.title}
                              {achievement.achieved && (
                                <Award className="w-5 h-5 ml-2 text-green-500" />
                              )}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
