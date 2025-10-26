import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">DEPO44</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Упаковка товаров <span className="text-primary">за 15 минут</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Платформа для быстрой упаковки товаров через фулфилмент-центры
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary group"
              onClick={() => navigate('/customer')}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Я заказчик</h2>
              <p className="text-gray-600 mb-6">
                Создайте заявку на упаковку товаров и получите предложения от фулфилмент-центров
              </p>
              <Button className="w-full" size="lg">
                Создать заявку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>

            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary group"
              onClick={() => navigate('/fulfillment')}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Warehouse" size={40} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Фулфилмент-центр</h2>
              <p className="text-gray-600 mb-6">
                Принимайте заявки на упаковку и управляйте заказами
              </p>
              <Button className="w-full" size="lg" variant="outline">
                Перейти к заявкам
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстро</h3>
              <p className="text-gray-600">Упаковка товаров за 15 минут</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Надежно</h3>
              <p className="text-gray-600">Проверенные фулфилмент-центры</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Выгодно</h3>
              <p className="text-gray-600">Конкурентные цены от разных центров</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Package" size={28} className="text-primary" />
                <span className="text-xl font-bold text-white">DEPO44</span>
              </div>
              <p className="text-sm">Платформа для быстрой упаковки товаров через фулфилмент-центры</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Для заказчиков</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Создать заявку</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Для фулфилмент-центров</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Стать партнером</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@depo44.ru</li>
                <li>Тел: +7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2024 DEPO44. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
