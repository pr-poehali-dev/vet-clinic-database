import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Ветеринарная клиника</h1>
        <p className="text-xl text-muted-foreground">Система управления данными клиники</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>База данных</CardTitle>
            <CardDescription>Просмотр структуры БД клиники</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Оптимизированная база данных для хранения информации о пациентах, владельцах, 
              визитах и других данных ветеринарной клиники.
            </p>
          </CardContent>
          <CardFooter>
            <Link to="/database" className="w-full">
              <Button className="w-full">Просмотреть структуру</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Регистрация пациентов</CardTitle>
            <CardDescription>Управление данными животных</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Регистрация новых пациентов, просмотр и редактирование информации 
              о существующих животных и их владельцах.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled>В разработке</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Расписание приемов</CardTitle>
            <CardDescription>Управление визитами</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Планирование приемов, управление расписанием врачей,
              отслеживание статуса визитов и напоминания.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled>В разработке</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>О проекте</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Данный проект представляет собой систему управления данными для ветеринарной клиники.
            Он включает в себя разработанную базу данных для хранения информации о пациентах (животных),
            их владельцах, приемах, диагнозах, лечении, вакцинациях и счетах.
          </p>
          <p className="text-sm text-muted-foreground">
            База данных спроектирована с учетом основных бизнес-процессов ветеринарной клиники
            и обеспечивает эффективное хранение и доступ к данным. Подробную структуру базы данных
            можно просмотреть в разделе "База данных".
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
