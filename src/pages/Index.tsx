import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [calculatorData, setCalculatorData] = useState({
    weight: '',
    dimensions: '',
    packageType: ''
  });

  const fulfillmentCenters = [
    {
      id: 1,
      name: 'FastPack Логистика',
      rating: 4.9,
      reviews: 342,
      location: 'Москва',
      price: 'от 150₽',
      services: ['Упаковка', 'Хранение', 'Доставка'],
      response: '15 мин'
    },
    {
      id: 2,
      name: 'Экспресс Склад',
      rating: 4.8,
      reviews: 256,
      location: 'Санкт-Петербург',
      price: 'от 180₽',
      services: ['Упаковка', 'Маркировка', 'Хранение'],
      response: '20 мин'
    },
    {
      id: 3,
      name: 'Про-Фулфилмент',
      rating: 4.7,
      reviews: 198,
      location: 'Екатеринбург',
      price: 'от 130₽',
      services: ['Упаковка', 'Хранение'],
      response: '25 мин'
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '150₽',
      period: 'за единицу',
      features: ['Стандартная упаковка', 'Трекинг заказа', 'Поддержка 24/7', 'Хранение 3 дня']
    },
    {
      name: 'Профи',
      price: '280₽',
      period: 'за единицу',
      popular: true,
      features: ['Премиум упаковка', 'Приоритетный трекинг', 'Персональный менеджер', 'Хранение 7 дней', 'Маркировка товара']
    },
    {
      name: 'Бизнес',
      price: 'от 5000₽',
      period: 'в месяц',
      features: ['Безлимитная упаковка', 'API интеграция', 'Выделенный менеджер', 'Хранение 30 дней', 'Индивидуальные условия']
    }
  ];

  const calculateCost = () => {
    if (!calculatorData.weight || !calculatorData.packageType) {
      toast({
        title: 'Заполните все поля',
        description: 'Укажите вес и тип упаковки для расчёта',
        variant: 'destructive'
      });
      return;
    }
    
    const baseCost = 150;
    const weightCost = parseFloat(calculatorData.weight) * 20;
    const total = baseCost + weightCost;
    
    toast({
      title: 'Стоимость упаковки',
      description: `Примерная стоимость: ${total.toFixed(0)}₽`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">PackHub</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#how" className="text-gray-700 hover:text-primary transition-colors">Как работает</a>
              <a href="#centers" className="text-gray-700 hover:text-primary transition-colors">Фулфилмент</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                🚀 Быстрая упаковка товаров
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Упаковка товаров за <span className="text-primary">15 минут</span>
              </h1>
              <p className="text-xl text-gray-600">
                Найдите фулфилмент-центр рядом с вами. Создайте заявку, выберите исполнителя и отслеживайте процесс в реальном времени.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Фулфилмент-центров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15к+</div>
                  <div className="text-gray-600">Заказов в месяц</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                  <div className="text-gray-600">Средний рейтинг</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Калькулятор стоимости</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="weight">Вес товара (кг)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="Например, 2.5"
                    value={calculatorData.weight}
                    onChange={(e) => setCalculatorData({...calculatorData, weight: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="dimensions">Габариты (см)</Label>
                  <Input 
                    id="dimensions" 
                    placeholder="Например, 30x20x15"
                    value={calculatorData.dimensions}
                    onChange={(e) => setCalculatorData({...calculatorData, dimensions: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="package">Тип упаковки</Label>
                  <Select onValueChange={(value) => setCalculatorData({...calculatorData, packageType: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартная</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                      <SelectItem value="fragile">Хрупкие товары</SelectItem>
                      <SelectItem value="food">Продукты питания</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" size="lg" onClick={calculateCost}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600">Простой процесс в 4 шага</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'FileText', title: 'Создайте заявку', desc: 'Укажите параметры товара и требования к упаковке' },
              { icon: 'Search', title: 'Выберите центр', desc: 'Сравните предложения от фулфилмент-центров рядом' },
              { icon: 'CreditCard', title: 'Оплатите онлайн', desc: 'Безопасная оплата картой или электронными деньгами' },
              { icon: 'MapPin', title: 'Отслеживайте', desc: 'Следите за статусом заказа в реальном времени' }
            ].map((step, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="centers" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные фулфилмент-центры</h2>
            <p className="text-xl text-gray-600">Проверенные партнёры с лучшими рейтингами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {fulfillmentCenters.map((center) => (
              <Card key={center.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{center.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        {center.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="fill-current" />
                      {center.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{center.price}</span>
                    <span className="text-sm text-gray-600">{center.reviews} отзывов</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {center.services.map((service) => (
                      <Badge key={service} variant="outline">{service}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Clock" size={16} />
                    <span>Ответит за {center.response}</span>
                  </div>

                  <Button className="w-full">
                    Выбрать центр
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы и цены</h2>
            <p className="text-xl text-gray-600">Выберите подходящий план для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">Как быстро обрабатываются заявки?</AccordionTrigger>
              <AccordionContent className="px-6">
                Фулфилмент-центры отвечают на заявки в среднем за 15-30 минут. После принятия заявки упаковка выполняется в течение 1-3 часов в зависимости от объёма.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">Какие способы оплаты доступны?</AccordionTrigger>
              <AccordionContent className="px-6">
                Мы принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки (ЮMoney, QIWI), а также безналичный расчёт для юридических лиц.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">Можно ли отследить статус заказа?</AccordionTrigger>
              <AccordionContent className="px-6">
                Да, в личном кабинете доступен трекинг в реальном времени. Вы получите уведомления на каждом этапе: принятие заявки, начало упаковки, завершение работ.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">Как стать партнёром-фулфилментом?</AccordionTrigger>
              <AccordionContent className="px-6">
                Перейдите в раздел "Для фулфилмент-центров" и заполните форму заявки. Наша команда свяжется с вами для обсуждения условий партнёрства.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">Создайте первую заявку прямо сейчас</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Создать заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Package" size={28} className="text-primary" />
                <span className="text-xl font-bold text-white">PackHub</span>
              </div>
              <p className="text-sm">Платформа для быстрой упаковки товаров через фулфилмент-центры</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@packhub.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2024 PackHub. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
