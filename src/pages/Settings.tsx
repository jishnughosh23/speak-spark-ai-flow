
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  User, 
  Bell, 
  Globe, 
  Volume2, 
  Mic, 
  Camera, 
  Shield, 
  Download,
  Trash2,
  Save
} from 'lucide-react';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Passionate language learner improving communication skills'
  });

  const [preferences, setPreferences] = useState({
    primaryLanguage: 'english',
    learningLanguages: ['spanish', 'french'],
    notifications: {
      practice: true,
      achievements: true,
      reminders: false,
      marketing: false
    },
    audio: {
      microphone: 'default',
      speakers: 'default',
      volume: 80
    },
    video: {
      camera: 'default',
      quality: 'hd'
    }
  });

  const languages = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { code: 'french', name: 'French', flag: '🇫🇷' },
    { code: 'german', name: 'German', flag: '🇩🇪' },
    { code: 'italian', name: 'Italian', flag: '🇮🇹' },
    { code: 'portuguese', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'japanese', name: 'Japanese', flag: '🇯🇵' },
    { code: 'chinese', name: 'Chinese', flag: '🇨🇳' }
  ];

  const savedSessions = [
    { id: 1, title: 'Job Interview Practice', date: '2024-01-15', duration: '23 min' },
    { id: 2, title: 'Business Presentation', date: '2024-01-14', duration: '18 min' },
    { id: 3, title: 'Casual Conversation', date: '2024-01-13', duration: '32 min' },
  ];

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (type: string) => {
    setPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type as keyof typeof prev.notifications]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
              <User className="w-8 h-8 mr-3 text-primary" />
              Settings & Profile
            </h1>
            <p className="text-muted-foreground text-lg">
              Customize your learning experience
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Camera className="w-4 h-4 mr-2" />
                        Change Photo
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Upload a profile picture (JPG, PNG, max 5MB)
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => handleProfileUpdate('name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileUpdate('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                      id="bio"
                      placeholder="Tell us about yourself..."
                      value={profile.bio}
                      onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                    />
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Language Preferences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-primary" />
                    Language Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Primary Language</Label>
                    <Select value={preferences.primaryLanguage} onValueChange={(value) => 
                      setPreferences(prev => ({ ...prev, primaryLanguage: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            <span className="flex items-center">
                              <span className="mr-2">{lang.flag}</span>
                              {lang.name}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Learning Languages</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            preferences.learningLanguages.includes(lang.code)
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => {
                            const newLanguages = preferences.learningLanguages.includes(lang.code)
                              ? preferences.learningLanguages.filter(l => l !== lang.code)
                              : [...preferences.learningLanguages, lang.code];
                            setPreferences(prev => ({ ...prev, learningLanguages: newLanguages }));
                          }}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-1">{lang.flag}</div>
                            <div className="text-sm font-medium">{lang.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-primary" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: 'practice', label: 'Practice Reminders', description: 'Get notified about scheduled practice sessions' },
                    { key: 'achievements', label: 'Achievement Notifications', description: 'Celebrate your progress and milestones' },
                    { key: 'reminders', label: 'Daily Reminders', description: 'Daily motivation and practice reminders' },
                    { key: 'marketing', label: 'Marketing Updates', description: 'New features and promotional content' }
                  ].map((notification) => (
                    <div key={notification.key} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{notification.label}</div>
                        <div className="text-sm text-muted-foreground">{notification.description}</div>
                      </div>
                      <Switch
                        checked={preferences.notifications[notification.key as keyof typeof preferences.notifications]}
                        onCheckedChange={() => handleNotificationToggle(notification.key)}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Audio & Video Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Volume2 className="w-5 h-5 mr-2 text-primary" />
                    Audio & Video Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium flex items-center">
                        <Mic className="w-4 h-4 mr-2" />
                        Audio Settings
                      </h4>
                      <div className="space-y-2">
                        <Label>Microphone</Label>
                        <Select value={preferences.audio.microphone}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default Microphone</SelectItem>
                            <SelectItem value="built-in">Built-in Microphone</SelectItem>
                            <SelectItem value="external">External Microphone</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Speakers</Label>
                        <Select value={preferences.audio.speakers}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default Speakers</SelectItem>
                            <SelectItem value="built-in">Built-in Speakers</SelectItem>
                            <SelectItem value="headphones">Headphones</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium flex items-center">
                        <Camera className="w-4 h-4 mr-2" />
                        Video Settings
                      </h4>
                      <div className="space-y-2">
                        <Label>Camera</Label>
                        <Select value={preferences.video.camera}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default Camera</SelectItem>
                            <SelectItem value="built-in">Built-in Camera</SelectItem>
                            <SelectItem value="external">External Camera</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Video Quality</Label>
                        <Select value={preferences.video.quality}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sd">Standard Definition</SelectItem>
                            <SelectItem value="hd">High Definition</SelectItem>
                            <SelectItem value="fhd">Full HD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline">
                    Test Audio & Video
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Saved Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="w-5 h-5 mr-2 text-primary" />
                    Saved Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {savedSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <div>
                          <div className="font-medium">{session.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {session.date} • {session.duration}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Theme & Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Privacy & Appearance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div>
                      <div className="font-medium">Dark Mode</div>
                      <div className="text-sm text-muted-foreground">Switch between light and dark themes</div>
                    </div>
                    <Switch
                      checked={theme === 'dark'}
                      onCheckedChange={toggleTheme}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Export Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-destructive">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
