import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Chat from '@/components/Chat';

const Fulfillment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const newRequests = [
    {
      id: 1,
      productName: 'Электроника',
      quantity: 100,
      weight: '250 кг',
      dimensions: '30x20x15 см',
      location: 'Москва',
      urgency: 'Срочно (сегодня)',
      packageType: 'Стандартная',
      description: 'Смартфоны, требуется аккуратная упаковка',
      contactName: 'Иван Петров',
      contactPhone: '+7 (999) 123-45-67',
      timeAgo: '5 мин назад'
    },
    {
      id: 2,
      productName: 'Одежда',
      quantity: 500,
      weight: '150 кг',
      dimensions: '40x30x20 см',
      location: 'Санкт-Петербург',
      urgency: 'Завтра',
      packageType: 'Премиум',
      description: 'Дизайнерская одежда для интернет-магазина',
      contactName: 'Мария Сидорова',
      contactPhone: '+7 (999) 765-43-21',
      timeAgo: '15 мин назад'
    },
    {
      id: 3,
      productName: 'Косметика',
      quantity: 200,
      weight: '80 кг',
      dimensions: '25x15x10 см',
      location: 'Москва',
      urgency: 'В течение недели',
      packageType: 'Хрупкие товары',
      description: 'Косметические наборы, требуется защита от повреждений',
      contactName: 'Анна Кузнецова',
      contactPhone: '+7 (999) 555-12-34',
      timeAgo: '30 мин назад'
    }
  ];

  const activeOrders = [
    {
      id: 4,
      productName: 'Книги',
      quantity: 300,
      location: 'Москва',
      status: 'В работе',
      progress: 65,
      dueDate: 'Сегодня, 18:00',
      customerName: 'ООО "Книжный мир"'
    },
    {
      id: 5,
      productName: 'Игрушки',
      quantity: 150,
      location: 'Москва',
      status: 'Упаковка',
      progress: 30,
      dueDate: 'Завтра, 12:00',
      customerName: 'ИП Соколов А.В.'
    }
  ];

  const completedOrders = [
    {
      id: 6,
      productName: 'Посуда',
      quantity: 200,
      location: 'Москва',
      completedDate: '25.10.2024',
      rating: 5
    },
    {
      id: 7,
      productName: 'Сувениры',
      quantity: 100,
      location: 'Москва',
      completedDate: '24.10.2024',
      rating: 4
    }
  ];

  const handleAcceptRequest = (id: number) => {
    toast({
      title: 'Заявка принята!',
      description: 'Вы можете связаться с заказчиком для уточнения деталей.',
    });
  };

  const handleRejectRequest = (id: number) => {
    toast({
      title: 'Заявка отклонена',
      description: 'Заявка удалена из списка',
      variant: 'destructive'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="Package" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">DEPO44</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" onClick={() => navigate('/')}>
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Дашборд фулфилмента</h1>
          <p className="text-gray-600">Управление заявками и заказами</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Новые заявки</p>
                  <p className="text-3xl font-bold text-gray-900">{newRequests.length}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Inbox" size={24} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">В работе</p>
                  <p className="text-3xl font-bold text-gray-900">{activeOrders.length}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon name="Package" size={24} className="text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Завершено</p>
                  <p className="text-3xl font-bold text-gray-900">{completedOrders.length}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Рейтинг</p>
                  <p className="text-3xl font-bold text-gray-900">4.8</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Icon name="Star" size={24} className="text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new">
              Новые заявки ({newRequests.length})
            </TabsTrigger>
            <TabsTrigger value="active">
              В работе ({activeOrders.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Завершенные ({completedOrders.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="space-y-4 mt-6">
            {newRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{request.productName}</CardTitle>
                      <CardDescription>{request.timeAgo}</CardDescription>
                    </div>
                    <Badge variant={request.urgency.includes('Срочно') ? 'destructive' : 'secondary'}>
                      {request.urgency}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="Package" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Количество:</span>
                        <span className="font-semibold">{request.quantity} шт</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Weight" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Вес:</span>
                        <span className="font-semibold">{request.weight}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Ruler" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Габариты:</span>
                        <span className="font-semibold">{request.dimensions}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Локация:</span>
                        <span className="font-semibold">{request.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Box" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Тип упаковки:</span>
                        <span className="font-semibold">{request.packageType}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="User" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Контакт:</span>
                        <span className="font-semibold">{request.contactName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">{request.description}</p>
                  </div>

                  <div className="flex space-x-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Icon name="MessageCircle" size={20} className="mr-2" />
                          Написать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Чат с {request.contactName}</DialogTitle>
                        </DialogHeader>
                        <Chat 
                          orderId={request.id}
                          orderTitle={request.productName}
                          userRole="fulfillment"
                          partnerName={request.contactName}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button 
                      onClick={() => handleAcceptRequest(request.id)}
                      className="flex-1"
                    >
                      <Icon name="Check" size={20} className="mr-2" />
                      Принять заявку
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleRejectRequest(request.id)}
                    >
                      <Icon name="X" size={20} className="mr-2" />
                      Отклонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4 mt-6">
            {activeOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{order.productName}</CardTitle>
                      <CardDescription>{order.quantity} единиц • {order.location}</CardDescription>
                    </div>
                    <Badge>{order.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Прогресс выполнения</span>
                        <span className="text-sm font-semibold">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={18} className="text-gray-500" />
                          <span className="text-sm text-gray-600">Срок:</span>
                          <span className="font-semibold">{order.dueDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="User" size={18} className="text-gray-500" />
                          <span className="text-sm text-gray-600">{order.customerName}</span>
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <Icon name="MessageCircle" size={16} className="mr-2" />
                            Чат
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Чат с {order.customerName}</DialogTitle>
                          </DialogHeader>
                          <Chat 
                            orderId={order.id}
                            orderTitle={order.productName}
                            userRole="fulfillment"
                            partnerName={order.customerName}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4 mt-6">
            {completedOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{order.productName}</CardTitle>
                      <CardDescription>{order.quantity} единиц • {order.location}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Icon name="CheckCircle" size={14} className="mr-1" />
                      Завершено
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{order.completedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < order.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Детали
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Fulfillment;