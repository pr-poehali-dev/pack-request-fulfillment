import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import Chat from '@/components/Chat';

const CustomerRequests = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  const activeRequests = [
    {
      id: 1,
      productName: 'Электроника',
      quantity: 100,
      location: 'Москва',
      status: 'Поиск исполнителя',
      offers: 3,
      createdDate: 'Сегодня, 14:20'
    },
    {
      id: 2,
      productName: 'Одежда',
      quantity: 500,
      location: 'Санкт-Петербург',
      status: 'В работе',
      offers: 0,
      fulfillmentCenter: 'ФЦ "Северная логистика"',
      createdDate: 'Вчера, 10:15'
    }
  ];

  const completedRequests = [
    {
      id: 3,
      productName: 'Косметика',
      quantity: 200,
      location: 'Москва',
      fulfillmentCenter: 'ФЦ "МосПак"',
      completedDate: '24.10.2024',
      rating: 5
    }
  ];

  const offers = [
    {
      id: 1,
      requestId: 1,
      centerName: 'ФЦ "МосПак"',
      price: '45 000 ₽',
      deadline: '2 дня',
      rating: 4.8,
      completedOrders: 234
    },
    {
      id: 2,
      requestId: 1,
      centerName: 'ФЦ "Быстрая упаковка"',
      price: '42 000 ₽',
      deadline: '1 день',
      rating: 4.9,
      completedOrders: 156
    },
    {
      id: 3,
      requestId: 1,
      centerName: 'ФЦ "ПроПак"',
      price: '48 000 ₽',
      deadline: '3 дня',
      rating: 4.7,
      completedOrders: 189
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <Button onClick={() => navigate('/customer')}>
                <Icon name="Plus" size={20} className="mr-2" />
                Новая заявка
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Мои заявки</h1>
          <p className="text-gray-600">Управление заявками и предложениями</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Активные заявки</p>
                  <p className="text-3xl font-bold text-gray-900">{activeRequests.length}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="FileText" size={24} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Новые предложения</p>
                  <p className="text-3xl font-bold text-gray-900">{offers.length}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Завершено</p>
                  <p className="text-3xl font-bold text-gray-900">{completedRequests.length}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">
              Активные ({activeRequests.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Завершенные ({completedRequests.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4 mt-6">
            {activeRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{request.productName}</CardTitle>
                      <CardDescription>{request.createdDate}</CardDescription>
                    </div>
                    <Badge variant={request.status === 'В работе' ? 'default' : 'secondary'}>
                      {request.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Icon name="Package" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">Количество:</span>
                        <span className="font-semibold">{request.quantity} шт</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{request.location}</span>
                      </div>
                    </div>

                    {request.status === 'Поиск исполнителя' && request.offers > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon name="Mail" size={20} className="text-green-600" />
                            <span className="font-semibold text-green-900">
                              У вас {request.offers} новых предложения!
                            </span>
                          </div>
                          <Button size="sm" variant="outline">
                            Посмотреть
                          </Button>
                        </div>

                        <div className="mt-4 space-y-3">
                          {offers.filter(o => o.requestId === request.id).map((offer) => (
                            <Card key={offer.id} className="bg-white">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <h4 className="font-semibold">{offer.centerName}</h4>
                                      <div className="flex items-center space-x-1">
                                        <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-medium">{offer.rating}</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                      <span>💰 {offer.price}</span>
                                      <span>⏱️ {offer.deadline}</span>
                                      <span>📦 {offer.completedOrders} заказов</span>
                                    </div>
                                  </div>
                                  <div className="flex space-x-2">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button 
                                          size="sm" 
                                          variant="outline"
                                          onClick={() => setSelectedOrder(request.id)}
                                        >
                                          <Icon name="MessageCircle" size={16} className="mr-2" />
                                          Чат
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="max-w-2xl">
                                        <DialogHeader>
                                          <DialogTitle>Чат с {offer.centerName}</DialogTitle>
                                        </DialogHeader>
                                        <Chat 
                                          orderId={request.id}
                                          orderTitle={request.productName}
                                          userRole="customer"
                                          partnerName={offer.centerName}
                                        />
                                      </DialogContent>
                                    </Dialog>
                                    <Button size="sm">
                                      Принять
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {request.status === 'В работе' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="Building" size={18} className="text-gray-500" />
                          <span className="text-sm text-gray-600">Исполнитель:</span>
                          <span className="font-semibold">{request.fulfillmentCenter}</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" onClick={() => setSelectedOrder(request.id)}>
                              <Icon name="MessageCircle" size={16} className="mr-2" />
                              Открыть чат
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Чат с {request.fulfillmentCenter}</DialogTitle>
                            </DialogHeader>
                            <Chat 
                              orderId={request.id}
                              orderTitle={request.productName}
                              userRole="customer"
                              partnerName={request.fulfillmentCenter || ''}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4 mt-6">
            {completedRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{request.productName}</CardTitle>
                      <CardDescription>{request.quantity} единиц • {request.location}</CardDescription>
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
                        <Icon name="Building" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{request.fulfillmentCenter}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{request.completedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < request.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
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

export default CustomerRequests;
