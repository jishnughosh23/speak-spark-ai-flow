
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Phone, 
  MessageSquare, 
  Settings,
  Volume2,
  VolumeX,
  RotateCcw,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const Practice = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);
  const [transcript, setTranscript] = useState([
    { speaker: 'AI', text: 'Hello! I\'m your AI conversation partner. What would you like to practice today?', timestamp: '10:30' },
    { speaker: 'You', text: 'I\'d like to practice job interview questions.', timestamp: '10:31' },
    { speaker: 'AI', text: 'Perfect! Let\'s start with a common question: Tell me about yourself.', timestamp: '10:31' }
  ]);

  const currentTopic = "Job Interview Practice";
  const sessionDuration = 1245; // seconds
  const [timeRemaining, setTimeRemaining] = useState(sessionDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const feedback = {
    grammar: 92,
    pronunciation: 88,
    fluency: 85,
    vocabulary: 90
  };

  const suggestions = [
    "Try to speak more slowly for better pronunciation",
    "Great use of professional vocabulary!",
    "Consider pausing between sentences",
    "Your grammar accuracy has improved significantly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="container mx-auto">
          {/* Session Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{currentTopic}</h1>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  ● Live Session
                </Badge>
                <span>Duration: {formatTime(sessionDuration - timeRemaining)}</span>
              </div>
            </div>
            <Button 
              variant="destructive" 
              size="lg"
              onClick={() => setIsCallActive(!isCallActive)}
              className="mt-4 md:mt-0"
            >
              <Phone className="w-5 h-5 mr-2" />
              End Session
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Call Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Video Area */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-t-lg relative overflow-hidden">
                    {/* AI Avatar */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                        <motion.div
                          className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                          animate={{ 
                            boxShadow: [
                              "0 0 30px rgba(139, 92, 246, 0.4)",
                              "0 0 50px rgba(59, 130, 246, 0.6)",
                              "0 0 30px rgba(139, 92, 246, 0.4)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <MessageSquare className="w-12 h-12 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* User Video (small) */}
                    <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-800 rounded-lg border-2 border-white/20 flex items-center justify-center">
                      {isVideoOn ? (
                        <div className="text-white text-xs">Your Video</div>
                      ) : (
                        <VideoOff className="w-6 h-6 text-white/60" />
                      )}
                    </div>

                    {/* Session Info Overlay */}
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                      <div className="text-sm font-medium">AI Conversation Partner</div>
                      <div className="text-xs opacity-80">Speaking fluency practice</div>
                    </div>

                    {/* Audio Visualization */}
                    <div className="absolute bottom-4 left-4 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-green-400 rounded-full"
                          animate={{
                            height: [4, Math.random() * 20 + 4, 4],
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Control Bar */}
                  <div className="p-4 bg-gray-900 text-white rounded-b-lg">
                    <div className="flex items-center justify-center space-x-4">
                      <Button
                        variant={isMicOn ? "default" : "destructive"}
                        size="icon"
                        onClick={() => setIsMicOn(!isMicOn)}
                        className="rounded-full"
                      >
                        {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                      </Button>

                      <Button
                        variant={isVideoOn ? "default" : "destructive"}
                        size="icon"
                        onClick={() => setIsVideoOn(!isVideoOn)}
                        className="rounded-full"
                      >
                        {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                      </Button>

                      <Button
                        variant={isAudioOn ? "default" : "destructive"}
                        size="icon"
                        onClick={() => setIsAudioOn(!isAudioOn)}
                        className="rounded-full"
                      >
                        {isAudioOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full text-white border-white/20"
                      >
                        <Settings className="w-5 h-5" />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full text-white border-white/20"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Real-time Transcript */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                    Live Transcript
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {transcript.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex ${message.speaker === 'You' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          message.speaker === 'You' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium opacity-80">
                              {message.speaker}
                            </span>
                            <span className="text-xs opacity-60 ml-2">
                              {message.timestamp}
                            </span>
                          </div>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feedback Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Real-time Feedback */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Real-time Feedback</h3>
                  <div className="space-y-4">
                    {Object.entries(feedback).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium capitalize">{key}</span>
                          <span className="text-sm font-bold text-primary">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Suggestions */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">AI Suggestions</h3>
                  <div className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-3 bg-background/50 rounded-lg text-sm"
                      >
                        {suggestion}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Feedback</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Mark as Helpful
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ThumbsDown className="w-4 h-4 mr-2" />
                      Request Different Topic
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Repeat Question
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

export default Practice;
