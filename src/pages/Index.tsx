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
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Запрос принят!",
      description: "Мы перезвоним вам в течение 15 минут.",
    });
    setCallbackOpen(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">HydroProtect Pro</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="hover:text-accent transition-colors">Преимущества</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Работы</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Цены</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Dialog open={callbackOpen} onOpenChange={setCallbackOpen}>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                <Icon name="Phone" size={18} className="mr-2" />
                Обратный звонок
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Заказать обратный звонок</DialogTitle>
                <DialogDescription>
                  Оставьте ваш номер телефона, и мы перезвоним в течение 15 минут
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="callback-name">Имя</Label>
                  <Input
                    id="callback-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="callback-phone">Телефон</Label>
                  <Input
                    id="callback-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Заказать звонок
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Надёжная гидроизоляция кровли для промышленных объектов
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Современные материалы европейского качества. Гарантия 15 лет. Монтаж за 3-5 дней.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-lg">Сертификат ISO 9001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-lg">500+ объектов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-lg">12 лет на рынке</span>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href="#contact">Получить расчёт</a>
              </Button>
            </div>
            <div className="hidden md:block">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Быстрый расчёт стоимости</CardTitle>
                  <CardDescription className="text-white/80">Заполните форму и получите коммерческое предложение за 30 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/90"
                      required
                    />
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/90"
                      required
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/90"
                    />
                    <Textarea
                      placeholder="Площадь кровли, тип объекта"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/90"
                    />
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Получить расчёт
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Преимущества материала HydroProtect Pro</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Европейский стандарт качества для российских условий
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Прочность и долговечность',
                description: 'Армированная структура выдерживает механические нагрузки. Срок службы — до 30 лет.',
              },
              {
                icon: 'Droplet',
                title: 'Абсолютная водонепроницаемость',
                description: 'Водопоглощение менее 0.5%. Сохраняет свойства при температуре от -50°C до +120°C.',
              },
              {
                icon: 'Zap',
                title: 'Быстрый монтаж',
                description: 'Укладка методом наплавления или механической фиксации. До 500 м² в день.',
              },
              {
                icon: 'Flame',
                title: 'Пожаробезопасность',
                description: 'Класс горючести Г2. Негорючая основа из стеклохолста.',
              },
              {
                icon: 'ThermometerSnowflake',
                title: 'Морозостойкость',
                description: 'Сохраняет эластичность при -50°C. Идеально для северных регионов.',
              },
              {
                icon: 'BadgeCheck',
                title: 'Сертификация',
                description: 'Соответствует ГОСТ 30547-97. Сертификаты пожарной безопасности и экологии.',
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={28} className="text-accent" />
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

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Примеры наших работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Реализованные проекты в промышленном и коммерческом строительстве
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/902d9a11-1286-4f79-ba59-7d24db96cac1.jpg',
                title: 'Производственный комплекс',
                area: '12 500 м²',
                location: 'Москва',
              },
              {
                image: 'https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/a2a809d9-7430-4750-927c-41d7b21409e5.jpg',
                title: 'Логистический центр',
                area: '8 300 м²',
                location: 'Санкт-Петербург',
              },
              {
                image: 'https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/9377ded3-8543-432a-b46d-c158ac7d6cbf.jpg',
                title: 'Торговый центр',
                area: '15 000 м²',
                location: 'Казань',
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-white/90">
                      <Icon name="MapPin" size={14} className="inline mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Ruler" size={18} />
                    <span>Площадь: {project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Прозрачное ценообразование</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите подходящий пакет или закажите индивидуальный расчёт
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовый',
                price: '850',
                features: [
                  'Материал HydroProtect Standard',
                  'Монтаж наплавлением',
                  'Подготовка основания',
                  'Гарантия 10 лет',
                  'Документация ГОСТ',
                ],
              },
              {
                name: 'Оптимальный',
                price: '1 250',
                features: [
                  'Материал HydroProtect Premium',
                  'Монтаж с пароизоляцией',
                  'Усиленное основание',
                  'Гарантия 15 лет',
                  'Полный пакет документов',
                  'Техническое обслуживание',
                ],
                popular: true,
              },
              {
                name: 'Премиум',
                price: '1 850',
                features: [
                  'Материал HydroProtect Ultra',
                  'Многослойная система',
                  'Утепление и пароизоляция',
                  'Гарантия 20 лет',
                  'VIP документация',
                  'Техобслуживание 5 лет',
                  'Аварийный выезд 24/7',
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'border-accent border-2 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный выбор
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/м²</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <a href="#contact">Выбрать пакет</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Оставьте заявку, и наш специалист свяжется с вами для уточнения деталей проекта
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Расскажите о вашем проекте: площадь кровли, тип объекта, сроки выполнения"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (800) 555-00-99</p>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@hydroprotect.ru</p>
                      <p className="text-muted-foreground">sales@hydroprotect.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Офис и склад</p>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15, стр. 3</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Building" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Реквизиты</p>
                      <p className="text-sm text-muted-foreground">ООО "ГидроПротект Про"</p>
                      <p className="text-sm text-muted-foreground">ИНН: 7712345678</p>
                      <p className="text-sm text-muted-foreground">ОГРН: 1127746123456</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-3">HydroProtect Pro</h3>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональная гидроизоляция кровли для промышленных и коммерческих объектов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#features" className="hover:text-accent transition-colors">Преимущества</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Примеры работ</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Цены</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Документы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Сертификаты качества</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
            <p>© 2024 HydroProtect Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
