import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Icon name="Smile" className="text-primary" size={32} />
                <div>
                  <h1 className="text-2xl font-bold">Улыбка</h1>
                  <p className="text-xs text-muted-foreground">стоматологический центр</p>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('main')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('doctors')} className="text-sm hover:text-primary transition-colors">Врачи</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г.Пенза, ул.Московская, 54А</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Icon name="Phone" size={16} />
                  <span className="font-semibold">8(008)45-67-89</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Mail" size={16} />
                <span>info@smilePenza.ru</span>
              </div>
              <div className="text-xs text-muted-foreground">
                ежедневно • 9:00 до 21:00
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Icon name="Send" size={16} />
                Telegram
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="main" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="p-6 relative overflow-hidden bg-white border-2 hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                <h3 className="font-semibold text-lg mb-2">Хирургическая<br />стоматология</h3>
              </Card>
              <Card className="p-6 relative overflow-hidden bg-white border-2 hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                <h3 className="font-semibold text-lg mb-2">Терапевтическая<br />стоматология</h3>
              </Card>
              <Card className="p-6 relative overflow-hidden bg-white border-2 hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                <h3 className="font-semibold text-lg mb-2">Ортопедическая<br />стоматология</h3>
              </Card>
              <Card className="p-6 relative overflow-hidden bg-white border-2 hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                <h3 className="font-semibold text-lg mb-2">Лечение кариеса</h3>
              </Card>
            </div>

            <Button 
              variant="outline" 
              className="w-full py-6 text-base font-medium flex items-center justify-between group hover:bg-muted"
              onClick={() => scrollToSection('services')}
            >
              <span>Все услуги стоматологии</span>
              <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <section id="prices" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Популярные услуги</h2>
                <h3 className="text-xl mb-8">стоматологического<br />центра «Улыбка»</h3>
                <img 
                  src="https://cdn.poehali.dev/files/ff82e5c8-b3f4-429e-ad69-5fe2011e2f6f.png" 
                  alt="Стоматологическое кресло" 
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-[2] space-y-3">
                {[
                  { name: 'Профессиональная чистка зубов', price: '6 900 - 13 800 ₽' },
                  { name: 'Лечение кариеса зубов', price: 'от 7 900 ₽' },
                  { name: 'Удаление зубов', price: 'от 3 200 ₽' },
                  { name: 'Реставрация зубов', price: 'от 8 100 ₽' },
                  { name: 'Отбеливание зубов системой ZOOM4', price: '33 000 ₽' },
                  { name: 'Протезирование на имплантах', price: 'от 30 000 ₽' },
                  { name: 'Коронки', price: 'от 25 000 ₽' },
                  { name: 'Установки брекетов', price: 'от 200 000 ₽' },
                  { name: 'Внутрикостная дентальная имплантация зубов', price: 'от 40 000 ₽' },
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-base">{service.name}</span>
                    <span className="font-semibold text-lg whitespace-nowrap ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Users', title: 'Более 10 тысяч довольных клиентов', text: '' },
                { icon: 'Award', title: 'Гарантия от 1 до 10 лет*', text: '* распространяется на определенные виды услуг' },
                { icon: 'Star', title: 'Команда - один из лучших докторов в Пензе', text: '' },
                { icon: 'Building2', title: 'Все виды стоматологического лечения в одной клинике', text: '' },
                { icon: 'TrendingUp', title: 'Современные прогрессивные методы лечения без боли', text: '' },
                { icon: 'CheckCircle2', title: 'Полный цикл стоматологических услуг: от рентген-диагностики до здоровой улыбки', text: '' },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 relative overflow-hidden bg-white border-2 hover:shadow-lg transition-all">
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                  <Icon name={item.icon as any} className="text-foreground mb-4" size={48} />
                  <h3 className="font-semibold text-base mb-2 leading-tight">{item.title}</h3>
                  {item.text && <p className="text-sm text-muted-foreground">{item.text}</p>}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="doctors" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold">Наши врачи</h2>
              <Button variant="outline" className="rounded-full" onClick={() => scrollToSection('services')}>
                Все врачи
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: 'Филиппов Игорь Александрович', 
                  specialty: 'Врач стоматолог-хирург, имплантолог, ортопед',
                  image: 'https://cdn.poehali.dev/files/775a88ad-7134-451e-8ada-5c33f8b64928.png'
                },
                { 
                  name: 'Ларина Анастасия Павловна', 
                  specialty: 'Врач стоматолог-терапевт',
                  image: 'https://cdn.poehali.dev/files/775a88ad-7134-451e-8ada-5c33f8b64928.png'
                },
                { 
                  name: 'Ломов Сергей Ильич', 
                  specialty: 'Врач стоматолог',
                  image: 'https://cdn.poehali.dev/files/775a88ad-7134-451e-8ada-5c33f8b64928.png'
                },
              ].map((doctor, idx) => (
                <Card key={idx} className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Отзывы</h2>
            
            <Card className="bg-green-50 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Написать отзыв о Стоматология «Улыбка»</h3>
              <Button className="bg-primary hover:bg-primary/90 mb-4">Оставить отзыв</Button>
              <p className="text-lg font-semibold mb-4">234 отзыва</p>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="font-semibold mb-2">Пациент +7 903 32XXXXX</p>
                <p className="mb-4">Был кариес на передних зубах, болели зубы.</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Plus" className="text-primary" size={20} />
                  </div>
                  <p className="text-sm">
                    Очень хорошее отношение к пациентам, всегда спрашивали, больно ли, если да, то докалывали, очень чувствовался профессионализм врача, прекрасная атмосфера, музыка приятная - в принципе клиника оставляет очень хорошее впечатление.😍😍
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon name="Minus" className="text-gray-500" size={20} />
                  </div>
                  <p className="text-sm">Нет.</p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-semibold mb-2">Представитель клиники</p>
                  <p className="text-sm mb-4">
                    Здравствуйте! Большое спасибо за такой теплый и положительный отзыв! Мы очень рады, что вам понравилось наше отношение к пациентам и внимание к вашим ощущениям. Для нас важно, чтобы каждый визит был максимально комфортным и безболезненным, поэтому мы всегда тщательно следим за тем, чтобы наши пациенты чувствовали заботу и поддержку.
                  </p>
                  <p className="text-sm mb-4">
                    Спасибо за ваши добрые слова и высокую оценку – они вдохновляют нас становиться еще лучше. Мы всегда рады видеть вас в нашей клинике и продолжать заботиться о вашем здоровье и улыбке!
                  </p>
                  <p className="text-sm">С уважением, команда стоматологического центра "Улыбка"</p>
                </div>
              </div>
              
              <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
                Читать все отзывы
              </Button>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold">Стоматология Улыбка</h3>
                  <p className="text-sm text-muted-foreground">Яндекс карты</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-bold">5,0</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />)}
                  </div>
                  <p className="text-sm text-muted-foreground">122 отзыва, 156 оценок</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-semibold">Поставьте нам оценку</span>
                  <Button className="bg-primary hover:bg-primary/90">Оставить отзыв</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="p-4 bg-white border">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <Icon name="User" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Наталья Швецова</p>
                      <p className="text-sm text-muted-foreground">3 февраля</p>
                      <div className="flex gap-1 my-2">
                        {[1,2,3,4,5].map(i => <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />)}
                      </div>
                      <p className="text-sm">
                        Если можно бы поставить 10, поставила бы!!! Все замечательно! Комфорт и внимательность, начиная со входа и администраторов, заканчивая мед.персоналом! Идеальная чистота! Новейшее оборудование...
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Отзывы о клинике</h3>
              <div className="flex gap-4 mb-6">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="ChevronLeft" />
                </Button>
                <Button variant="default" size="icon" className="rounded-full bg-primary">
                  <Icon name="ChevronRight" className="text-white" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white">
                  <p className="text-sm mb-4">
                    Я обратился в клинику.Мне помогли.Назначили день, провели диагностику. С врачом сразу отговорили план лечения. Лечение провели. Мне очень понравилось.Очень удобное расположение клиники.Минимум времени врача и администратора.Вежливый и добрый персонал. Слаженная работа врача и ассистента. Спасибо большое.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Вадим</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">13.10.2025</p>
                </Card>
                <Card className="p-6 bg-white">
                  <p className="text-sm mb-4">
                    Обратилась в клинику по рекомендации друзей и нисколько не пожалела об этом. Все врачи клиники очень компетентны и действительно профессионалы своего дела. На одном из приемов даже удалось попасть во время лечения зуба, мой доктор сказала, что это лучший комплимент для стоматолога. Нравится интерьер клиники, приятно и комфортно находиться. 😁
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Екатерина</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">31.07.25</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold">Галерея фото</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="ChevronLeft" />
                </Button>
                <Button variant="default" size="icon" className="rounded-full bg-primary">
                  <Icon name="ChevronRight" className="text-white" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="https://cdn.poehali.dev/files/5d760431-6769-4139-9fcb-7c414a48f17e.png" 
                alt="Кабинет 1" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/5d760431-6769-4139-9fcb-7c414a48f17e.png" 
                alt="Кабинет 2" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="contacts" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p>г.Пенза, ул.Московская, 54А</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p>8(008)45-67-89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@smilePenza.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">График работы</p>
                    <p>Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Яндекс.Карты</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smile" className="text-primary" size={32} />
                <div>
                  <h3 className="text-xl font-bold">Улыбка</h3>
                  <p className="text-xs text-gray-400">стоматологический центр</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Современная стоматология с лучшими специалистами Пензы
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Хирургическая стоматология</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Терапевтическая стоматология</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Ортопедическая стоматология</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Лечение кариеса</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('main')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('doctors')} className="hover:text-primary transition-colors">Врачи</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                  <span>г.Пенза, ул.Московская, 54А</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="flex-shrink-0" />
                  <a href="tel:80084567-89" className="hover:text-primary transition-colors">8(008)45-67-89</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="flex-shrink-0" />
                  <a href="mailto:info@smilePenza.ru" className="hover:text-primary transition-colors">info@smilePenza.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="flex-shrink-0" />
                  <span>Ежедневно 9:00-21:00</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:border-primary hover:bg-primary/10">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:border-primary hover:bg-primary/10">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 Стоматологический центр «Улыбка». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;