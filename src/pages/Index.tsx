import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">POLARJET</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#objects" className="text-muted-foreground hover:text-foreground transition-colors">
                Объекты
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Вызвать мастера
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Snowflake" className="w-3 h-3 mr-1" />
                    Оборудование PolarJet AG
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Чистота без
                    <span className="text-primary block">химии и воды</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Профессиональная чистка гранулами сухого льда — авто, мотоциклы, бани, сауны, мебель и ковры.
                    Выезд на объект. Без разборки, без влаги, без следов.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Вызвать мастера
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Узнать стоимость
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/90a7c27a-017a-4bac-aa4e-86d5d46bc94a/files/1474a12f-88b0-458b-a277-a35c0e957b09.jpg"
                  alt="Чистка салона авто"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/90a7c27a-017a-4bac-aa4e-86d5d46bc94a/files/afbcccfa-dd57-47b5-bcd7-1302f5b88b1b.jpg"
                  alt="Чистка мотоцикла"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/90a7c27a-017a-4bac-aa4e-86d5d46bc94a/files/c62736f6-b652-4dce-ae4c-978992a6da27.jpg"
                  alt="Чистка бани"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">CO₂</div>
                  <div className="text-sm text-muted-foreground mt-1">Сухой лёд</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПОЧЕМУ СУХОЙ ЛЁД?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Технология криогенной чистки — безопасно, эффективно, без остатков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Droplets" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Без воды</h3>
              <p className="text-muted-foreground">
                Гранулы сухого льда испаряются бесследно — никакой влаги, плесени и долгой сушки после чистки.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ShieldCheck" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Без химии</h3>
              <p className="text-muted-foreground">
                Экологически чистый процесс — только сжатый воздух и CO₂. Безопасно для людей, животных и материалов.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Глубокая очистка</h3>
              <p className="text-muted-foreground">
                Достигает труднодоступных мест без разборки. Удаляет жир, копоть, плесень и загрязнения любой сложности.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция объектов */}
      <section id="objects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">ЧТО МЫ ЧИСТИМ</h2>
            <Button variant="outline">Все услуги</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/90a7c27a-017a-4bac-aa4e-86d5d46bc94a/files/1474a12f-88b0-458b-a277-a35c0e957b09.jpg"
                  alt="Чистка автомобиля"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Популярное</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Автомобили</h3>
                <p className="text-muted-foreground mb-4">Салон, двигатель, арки, кузов — без разборки и демонтажа</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 2 часов
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Выезд на место
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/90a7c27a-017a-4bac-aa4e-86d5d46bc94a/files/afbcccfa-dd57-47b5-bcd7-1302f5b88b1b.jpg"
                  alt="Мотоциклы и мототехника"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Мототехника
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Мотоциклы и мототехника</h3>
                <p className="text-muted-foreground mb-4">Мотоциклы, скутеры, квадроциклы — глубокая чистка всех узлов</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 1.5 часов
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Выезд на место
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/90a7c27a-017a-4bac-aa4e-86d5d46bc94a/files/c62736f6-b652-4dce-ae4c-978992a6da27.jpg"
                  alt="Бани и сауны"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Баня и сауна
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Бани, сауны, хаммамы</h3>
                <p className="text-muted-foreground mb-4">Дерево, камень, печи — удаляем плесень, копоть и налёт</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 3 часов
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Выезд на место
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Дополнительные объекты */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6 flex items-center gap-6">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Sofa" className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Домашняя мебель</h3>
                <p className="text-muted-foreground text-sm">Диваны, кресла, матрасы — удаляем запахи, пятна и аллергены без влаги</p>
              </div>
            </Card>
            <Card className="p-6 flex items-center gap-6">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Layers" className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Ковры и напольные покрытия</h3>
                <p className="text-muted-foreground text-sm">Ковры любой сложности — глубокая чистка без намокания и деформации</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Профессиональная чистка с выездом к вам</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Мы используем сертифицированное оборудование PolarJet AG — швейцарские установки криогенной
                  очистки, которые применяются в авиации, пищевой и автомобильной промышленности.
                </p>
                <p>
                  Выездная служба работает в любой точке — привозим оборудование к вам домой, в гараж, баню или офис.
                  Никакой транспортировки ваших вещей.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Без химических средств</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-muted-foreground">Типов объектов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden flex items-center justify-center bg-secondary/50">
                <div className="text-center p-8">
                  <div className="text-7xl font-bold text-primary mb-4">PolarJet</div>
                  <div className="text-xl text-muted-foreground">AG Switzerland</div>
                  <div className="mt-6 space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Сертифицированное оборудование</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Выезд на объект</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Экологически безопасно</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Без разборки и демонтажа</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Готовы к идеальной чистоте?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Оставьте заявку — мастер приедет с оборудованием PolarJet, проведёт оценку и выполнит работу в удобное для вас время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Оставить заявку
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">POLARJET</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Профессиональная чистка гранулами сухого льда. Выезд на объект. Без химии, без воды, без следов.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Выездная служба</p>
                <p>Работаем по всему городу</p>
                <p>Ежедневно 8:00 - 20:00</p>
                <p>+7 (___) ___-__-__</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Чистка автомобилей</p>
                <p>Мотоциклы и мототехника</p>
                <p>Бани и сауны</p>
                <p>Мебель и ковры</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 PolarJet. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
