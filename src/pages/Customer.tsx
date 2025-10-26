import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Customer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    weight: '',
    dimensions: '',
    packageType: '',
    location: '',
    urgency: '',
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });

  const handleSubmit = () => {
    if (!formData.productName || !formData.quantity || !formData.location) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Название товара, количество и местоположение обязательны',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка создана!',
      description: 'Фулфилмент-центры получили вашу заявку. Ожидайте предложения.',
    });

    setTimeout(() => {
      navigate('/customer/requests');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="Package" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">DEPO44</span>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Создание заявки</h1>
            <p className="text-gray-600">Заполните форму, и фулфилмент-центры отправят вам предложения</p>
          </div>

          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  s <= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    s < step ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && 'Информация о товаре'}
                {step === 2 && 'Детали упаковки'}
                {step === 3 && 'Контактные данные'}
              </CardTitle>
              <CardDescription>
                {step === 1 && 'Расскажите о товаре, который нужно упаковать'}
                {step === 2 && 'Укажите параметры упаковки и доставки'}
                {step === 3 && 'Как с вами связаться?'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === 1 && (
                <>
                  <div>
                    <Label htmlFor="productName">Название товара *</Label>
                    <Input
                      id="productName"
                      placeholder="Например, Электроника, одежда, косметика"
                      value={formData.productName}
                      onChange={(e) => setFormData({...formData, productName: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Количество единиц *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="100"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="weight">Вес (кг)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="2.5"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="dimensions">Габариты (см)</Label>
                    <Input
                      id="dimensions"
                      placeholder="30x20x15"
                      value={formData.dimensions}
                      onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Описание товара</Label>
                    <Textarea
                      id="description"
                      placeholder="Дополнительная информация о товаре"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="mt-2"
                      rows={3}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <Label htmlFor="packageType">Тип упаковки</Label>
                    <Select onValueChange={(value) => setFormData({...formData, packageType: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите тип упаковки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандартная</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                        <SelectItem value="fragile">Хрупкие товары</SelectItem>
                        <SelectItem value="food">Продукты питания</SelectItem>
                        <SelectItem value="custom">Индивидуальная</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Город/Регион *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moscow">Москва</SelectItem>
                        <SelectItem value="spb">Санкт-Петербург</SelectItem>
                        <SelectItem value="ekb">Екатеринбург</SelectItem>
                        <SelectItem value="kazan">Казань</SelectItem>
                        <SelectItem value="nn">Нижний Новгород</SelectItem>
                        <SelectItem value="other">Другой город</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Срочность</Label>
                    <Select onValueChange={(value) => setFormData({...formData, urgency: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Когда нужна упаковка?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Срочно (сегодня)</SelectItem>
                        <SelectItem value="tomorrow">Завтра</SelectItem>
                        <SelectItem value="week">В течение недели</SelectItem>
                        <SelectItem value="flexible">Не срочно</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <Label htmlFor="contactName">ФИО</Label>
                    <Input
                      id="contactName"
                      placeholder="Иван Иванов"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPhone">Телефон</Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-900">
                        <p className="font-semibold mb-1">Что произойдет дальше?</p>
                        <p>Фулфилмент-центры рядом с вами получат вашу заявку и отправят предложения с ценой и сроками. Вы сможете выбрать лучшее предложение.</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                )}
                {step < 3 ? (
                  <Button onClick={() => setStep(step + 1)} className="ml-auto">
                    Далее
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="ml-auto">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Customer;
