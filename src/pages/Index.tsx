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
      <header className="bg-white border-b py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">Attikka</div>
            <div className="text-sm text-muted-foreground hidden md:block">Гидроизоляция кровли</div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О материале</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">Примеры</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">Цены</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Dialog open={callbackOpen} onOpenChange={setCallbackOpen}>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Заказать обратный звонок</DialogTitle>
                <DialogDescription>
                  Оставьте ваш номер телефона, и наш специалист свяжется с вами
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
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Заказать звонок
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Премиум гидроизоляция
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Attikka<br />
                <span className="text-primary">Надёжная защита кровли</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Профессиональные гидроизоляционные материалы для плоских и скатных кровель. Европейское качество, российские цены.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span className="font-medium">Гарантия 20 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Droplets" size={20} className="text-primary" />
                  <span className="font-medium">100% герметичность</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Snowflake" size={20} className="text-primary" />
                  <span className="font-medium">Морозостойкость</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contact">Получить расчёт</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/f698ed5f-a193-4cd3-800b-35a0ee53c40d.jpg"
                alt="Гидроизоляция кровли Attikka"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">15 000+</div>
                    <div className="text-sm text-muted-foreground">м² гидроизоляции в месяц</div>
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
            <h2 className="text-4xl font-bold mb-4">Что такое Attikka?</h2>
            <p className="text-lg text-muted-foreground">
              Современный битумно-полимерный материал для гидроизоляции кровель любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/722cb325-20be-4beb-a897-24e9ad8b0919.jpg"
                alt="Материал Attikka"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Многослойная структура</h3>
                  <p className="text-muted-foreground">Армированная основа из стеклохолста или полиэстера обеспечивает прочность и эластичность</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Droplet" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">СБС-модифицированный битум</h3>
                  <p className="text-muted-foreground">Специальные полимеры повышают гибкость при низких температурах и теплостойкость</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Защитное покрытие</h3>
                  <p className="text-muted-foreground">Минеральная посыпка защищает от UV-излучения и механических повреждений</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества Attikka</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему строители и владельцы недвижимости выбирают нашу гидроизоляцию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Droplets',
                title: 'Абсолютная водонепроницаемость',
                description: 'Водопоглощение менее 0,5% по массе. Надёжная защита от протечек даже при длительном контакте с водой.',
              },
              {
                icon: 'Snowflake',
                title: 'Морозостойкость',
                description: 'Сохраняет эластичность при температуре до -35°C. Не трескается при замерзании и оттаивании.',
              },
              {
                icon: 'Flame',
                title: 'Теплостойкость',
                description: 'Выдерживает нагрев до +120°C без потери свойств. Подходит для жаркого климата.',
              },
              {
                icon: 'Hammer',
                title: 'Простой монтаж',
                description: 'Укладка методом наплавления или механической фиксации. Высокая скорость работ — до 500 м² в смену.',
              },
              {
                icon: 'Clock',
                title: 'Долговечность',
                description: 'Срок службы 20-30 лет без ремонта. Стабильные характеристики на протяжении всего периода эксплуатации.',
              },
              {
                icon: 'ShieldCheck',
                title: 'Надёжность',
                description: 'Армированная основа обеспечивает высокую прочность на разрыв. Устойчивость к проколам и механическим повреждениям.',
              },
              {
                icon: 'BadgeCheck',
                title: 'Сертификация',
                description: 'Соответствует ГОСТ 30547-97 и европейским стандартам. Пожарные сертификаты и санитарно-эпидемиологические заключения.',
              },
              {
                icon: 'Zap',
                title: 'Универсальность',
                description: 'Подходит для плоских и скатных кровель, фундаментов, подвалов. Любые климатические зоны России.',
              },
              {
                icon: 'Leaf',
                title: 'Экологичность',
                description: 'Безопасен для здоровья. Не выделяет вредных веществ при эксплуатации.',
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

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '20', label: 'Лет гарантии', icon: 'Award' },
              { number: '500+', label: 'Объектов', icon: 'Building2' },
              { number: '0.5%', label: 'Водопоглощение', icon: 'Droplet' },
              { number: '-35°C', label: 'Морозостойкость', icon: 'Snowflake' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <Icon name={stat.icon} size={40} className="mx-auto mb-4 text-accent" />
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Примеры реализованных проектов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Промышленные, коммерческие и жилые объекты по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/902d9a11-1286-4f79-ba59-7d24db96cac1.jpg',
                title: 'Производственный комплекс',
                area: '8 500 м²',
                location: 'Москва',
                type: 'Плоская кровля',
              },
              {
                image: 'https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/a2a809d9-7430-4750-927c-41d7b21409e5.jpg',
                title: 'Торговый центр',
                area: '12 000 м²',
                location: 'Санкт-Петербург',
                type: 'Эксплуатируемая кровля',
              },
              {
                image: 'https://cdn.poehali.dev/projects/ad33fd48-d711-46bf-972d-edf7f51b4706/files/9377ded3-8543-432a-b46d-c158ac7d6cbf.jpg',
                title: 'Логистический центр',
                area: '15 000 м²',
                location: 'Екатеринбург',
                type: 'Балластная кровля',
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Ruler" size={16} />
                        <span>{project.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Layers" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{project.type}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Цены и комплектация</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование. В стоимость включены материалы, доставка и монтаж
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовый',
                price: '850',
                features: [
                  'Attikka Standard (стеклохолст)',
                  'Толщина 3,0 мм',
                  'Монтаж наплавлением',
                  'Подготовка основания',
                  'Гарантия 10 лет',
                ],
                description: 'Для небольших объектов',
              },
              {
                name: 'Оптимальный',
                price: '1 250',
                features: [
                  'Attikka Premium (полиэстер)',
                  'Толщина 4,0 мм',
                  'Двухслойная укладка',
                  'Пароизоляция',
                  'Гарантия 15 лет',
                  'Техническая поддержка',
                ],
                description: 'Оптимальный выбор для большинства проектов',
                popular: true,
              },
              {
                name: 'Премиум',
                price: '1 850',
                features: [
                  'Attikka Ultra (армированный)',
                  'Толщина 5,0 мм',
                  'Многослойная система',
                  'Утепление + пароизоляция',
                  'Гарантия 20 лет',
                  'Сервисное обслуживание',
                  'Аварийный выезд 24/7',
                ],
                description: 'Для крупных коммерческих объектов',
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative border-none shadow-lg ${plan.popular ? 'ring-2 ring-accent scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Популярный выбор
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">₽/м²</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    <a href="#contact">Выбрать пакет</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              * Цена указана за 1 м² с учётом материалов и работы. Точная стоимость рассчитывается после осмотра объекта.
            </p>
            <Button variant="link" className="text-primary">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать полный прайс-лист (PDF)
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Получите бесплатную консультацию</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Оставьте заявку, и мы рассчитаем стоимость гидроизоляции вашей кровли, проведём техническую экспертизу и ответим на все вопросы
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
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
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Опишите ваш объект: площадь кровли, тип здания, текущее состояние..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-lg">Телефон</p>
                      <p className="text-muted-foreground mb-1">+7 (495) 789-00-55</p>
                      <p className="text-muted-foreground">+7 (800) 200-10-90 (бесплатно)</p>
                      <p className="text-sm text-muted-foreground mt-2">Пн-Вс: 8:00 — 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-lg">Email</p>
                      <p className="text-muted-foreground">info@attikka.ru</p>
                      <p className="text-muted-foreground">sales@attikka.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-lg">Офис и склад</p>
                      <p className="text-muted-foreground">
                        г. Москва, Волоколамское шоссе, д. 73, стр. 1
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Пн-Пт: 8:00-19:00<br />
                        Сб: 10:00-16:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-accent/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Truck" size={32} className="text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Бесплатная доставка</h3>
                      <p className="text-sm text-muted-foreground">
                        Доставим материалы на ваш объект по Москве и области. При заказе от 1000 м² — доставка по России бесплатно.
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
              <h3 className="text-2xl font-bold mb-4">Attikka</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Профессиональная гидроизоляция кровли для промышленных, коммерческих и жилых объектов.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-accent transition-colors">О материале</a></li>
                <li><a href="#features" className="hover:text-accent transition-colors">Преимущества</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Примеры работ</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Цены</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Документы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Сертификаты качества</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Технические характеристики</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Инструкция по монтажу</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Attikka. Все права защищены. ИНН: 7712345678 | ОГРН: 1127746123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
