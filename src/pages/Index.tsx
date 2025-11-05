import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roofType: '',
    area: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для расчета стоимости.",
    });
    setFormData({ name: '', phone: '', roofType: '', area: '', message: '' });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Запрос принят!",
      description: "Мы перезвоним вам по номеру: " + formData.phone,
    });
    setCallbackOpen(false);
    setFormData({ name: '', phone: '', roofType: '', area: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">ATTIKKA</div>
            <div className="text-sm text-muted-foreground hidden md:block">WPC</div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Продукция</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            8 708 212 1268
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Гидроизоляция кровли в Казахстане и России от квалифицированных подрядчиков <span className="text-primary">Attikka</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Решаем проблемы мягкой, ПВХ, металлической и бетонной кровли
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="font-medium">Надежная гидроизоляция</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span className="font-medium">Защита от протечек</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="font-medium">Долговечность</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#contact">Заказать расчет гидроизоляции</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#products">Купить материалы</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/f698ed5f-a193-4cd3-800b-35a0ee53c40d.jpg"
                alt="Гидроизоляция кровли Attikka"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">7 215</div>
                    <div className="text-sm text-muted-foreground">Подписчиков в Instagram</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Профессиональные материалы для гидроизоляции кровли</h2>
            <p className="text-lg text-muted-foreground">
              Attikka предлагает профессиональные решения по гидроизоляции кровли, которые сочетают в себе надёжность, эстетику и долговечность. Мы специализируемся на материалах для защиты мягкой, ПВХ, металлической и бетонной кровли от протечек и износа.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Решаем проблемы кровли</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Есть проблема? — Находим решение!
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: 'Layers',
                title: 'Мягкая кровля',
                description: 'Восстановление и гидроизоляция битумных и рулонных материалов',
              },
              {
                icon: 'Box',
                title: 'ПВХ кровля',
                description: 'Ремонт и герметизация полимерных мембран',
              },
              {
                icon: 'Shield',
                title: 'Металлическая кровля',
                description: 'Защита металлических покрытий от коррозии и протечек',
              },
              {
                icon: 'Building',
                title: 'Бетонная кровля',
                description: 'Гидроизоляция плоских бетонных крыш и эксплуатируемых кровель',
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/722cb325-20be-4beb-a897-24e9ad8b0919.jpg"
                alt="Полиэфирная ткань Attikka"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <div className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Наша продукция
              </div>
              <h2 className="text-4xl font-bold mb-6">Высококачественная полиэфирная ткань</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Высококачественная полиэфирная ткань, специально разработанная для использования с полимерами ATTIKKA в системах гидроизоляции кровли. Эта ткань обладает рядом характеристик, которые делают её идеальным материалом для обеспечения надёжной гидроизоляции и усиления кровельных мембран.
              </p>
              <div className="space-y-4">
                {[
                  'Надежная гидроизоляция',
                  'Защита от протечек',
                  'Долговечность материала',
                  'Эстетичность покрытия',
                  'Усиление кровельных мембран'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Купить гидроизоляцию Attikka
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают Attikka?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионализм, надёжность и комплексный подход к решению задач
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: 'Users',
                title: 'Квалифицированные подрядчики',
                description: 'Опытная команда специалистов с многолетним стажем работы',
              },
              {
                icon: 'Award',
                title: 'Профессиональные материалы',
                description: 'Только проверенные и сертифицированные материалы высокого качества',
              },
              {
                icon: 'Package',
                title: 'Комплексные решения',
                description: 'От диагностики проблемы до полного восстановления кровли',
              },
              {
                icon: 'ShieldCheck',
                title: 'Гарантия качества',
                description: 'Гарантия на все виды работ и использованные материалы',
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный процесс от заявки до гарантии
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                icon: 'MessageSquare',
                title: 'Консультация',
                description: 'Связываемся с вами, выясняем проблему и особенности объекта',
              },
              {
                number: '02',
                icon: 'Calculator',
                title: 'Расчет',
                description: 'Выезжаем на объект, оцениваем объём работ и рассчитываем стоимость',
              },
              {
                number: '03',
                icon: 'Wrench',
                title: 'Выполнение работ',
                description: 'Профессионально выполняем гидроизоляцию с использованием качественных материалов',
              },
              {
                number: '04',
                icon: 'Award',
                title: 'Гарантия',
                description: 'Предоставляем гарантию на все виды работ и материалы',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={step.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Получите расчет, заполнив форму</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Закажите расчет гидроизоляции вашей кровли онлайн или по телефону!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="roofType">Тип кровли</Label>
                  <Input
                    id="roofType"
                    placeholder="Мягкая, ПВХ, металлическая или бетонная"
                    value={formData.roofType}
                    onChange={(e) => setFormData({ ...formData, roofType: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="area">Площадь (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Примерная площадь кровли"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="Опишите проблему или задачу..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Заказать расчет
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-lg">Телефон</p>
                      <p className="text-2xl font-bold text-primary mb-2">8 708 212 1268</p>
                      <p className="text-sm text-muted-foreground">Казахстан и Россия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Instagram" size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-lg">Instagram</p>
                      <p className="text-muted-foreground">@attikkawpc</p>
                      <p className="text-sm text-muted-foreground mt-1">7 215 подписчиков</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Home" size={32} className="text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">🏠 Восстановление гидроизоляции любой кровли</h3>
                      <p className="text-sm text-primary-foreground/90">
                        🔧 Есть проблема? — Находим решение!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ATTIKKA WPC</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Решения для гидроизоляции крыш в Казахстане и России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-accent transition-colors">Услуги</a></li>
                <li><a href="#products" className="hover:text-accent transition-colors">Продукция</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Гидроизоляция мягкой кровли</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Гидроизоляция ПВХ кровли</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Гидроизоляция металлической кровли</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Гидроизоляция бетонной кровли</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Телефон: 8 708 212 1268</li>
                <li>Instagram: @attikkawpc</li>
                <li>Казахстан и Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/70">
              © 2024 ATTIKKA WPC. Все права защищены.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-2">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
