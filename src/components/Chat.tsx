import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  sender: 'customer' | 'fulfillment';
  text: string;
  timestamp: string;
  isRead: boolean;
}

interface ChatProps {
  orderId: number;
  orderTitle: string;
  userRole: 'customer' | 'fulfillment';
  partnerName: string;
}

const Chat = ({ orderId, orderTitle, userRole, partnerName }: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'customer',
      text: 'Здравствуйте! Уточните, пожалуйста, когда сможете начать упаковку?',
      timestamp: '14:23',
      isRead: true
    },
    {
      id: 2,
      sender: 'fulfillment',
      text: 'Добрый день! Можем приступить сегодня после 16:00. Товар уже у вас на складе?',
      timestamp: '14:25',
      isRead: true
    },
    {
      id: 3,
      sender: 'customer',
      text: 'Да, всё готово. Нужна ли специальная упаковка для электроники?',
      timestamp: '14:27',
      isRead: true
    },
    {
      id: 4,
      sender: 'fulfillment',
      text: 'Да, мы используем антистатические пакеты и пузырчатую пленку. Всё включено в стоимость.',
      timestamp: '14:30',
      isRead: false
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: messages.length + 1,
      sender: userRole,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      isRead: false
    };

    setMessages([...messages, message]);
    setNewMessage('');

    setIsTyping(true);
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        sender: userRole === 'customer' ? 'fulfillment' : 'customer',
        text: 'Спасибо за информацию! Обязательно учтем.',
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        isRead: false
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{orderTitle}</CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              <Icon name="User" size={14} className="inline mr-1" />
              {partnerName}
            </p>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Онлайн
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === userRole ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === userRole
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className="flex items-center justify-end mt-1 space-x-1">
                    <span className={`text-xs ${
                      message.sender === userRole ? 'text-primary-foreground/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </span>
                    {message.sender === userRole && (
                      <Icon 
                        name={message.isRead ? 'CheckCheck' : 'Check'} 
                        size={14} 
                        className={message.isRead ? 'text-blue-300' : 'text-primary-foreground/70'}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Icon name="Paperclip" size={20} className="text-gray-500" />
            </Button>
            <Input
              placeholder="Введите сообщение..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={newMessage.trim() === ''}>
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chat;
