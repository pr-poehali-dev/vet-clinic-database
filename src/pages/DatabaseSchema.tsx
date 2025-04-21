import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronRight, Database, List, Table } from 'lucide-react';

const DatabaseSchema = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex items-center">
          <Database className="h-6 w-6 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-blue-800">Конфигурация базы данных: Ветеринарная клиника</h1>
        </div>
        <p className="text-blue-700 mt-1">Версия 1.0</p>
      </div>
      
      <div className="flex gap-4 mb-6">
        <div className="w-64 bg-gray-100 border rounded shadow-sm">
          <div className="bg-blue-700 text-white p-2 font-medium flex items-center">
            <List className="h-4 w-4 mr-2" />
            Навигация
          </div>
          <div className="p-1">
            <Button variant="ghost" className="w-full justify-start text-blue-800 font-medium hover:bg-blue-50">
              <ChevronRight className="h-4 w-4 mr-2" />
              Справочники
            </Button>
            <Button variant="ghost" className="w-full justify-start text-blue-800 font-medium hover:bg-blue-50">
              <ChevronRight className="h-4 w-4 mr-2" />
              Документы
            </Button>
            <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-800 font-medium">
              <ChevronRight className="h-4 w-4 mr-2" />
              Таблицы базы данных
            </Button>
            <Button variant="ghost" className="w-full justify-start text-blue-800 font-medium hover:bg-blue-50">
              <ChevronRight className="h-4 w-4 mr-2" />
              Отчеты
            </Button>
          </div>
        </div>
        
        <div className="flex-1">
          <Card className="shadow-sm border-blue-200 mb-6">
            <CardHeader className="bg-blue-50 border-b border-blue-200 pb-3">
              <CardTitle className="text-blue-800 flex items-center">
                <Table className="h-5 w-5 mr-2" />
                Структура таблиц базы данных
              </CardTitle>
              <CardDescription className="text-blue-600">
                Основные сущности и их атрибуты
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <SchemaCard 
                  title="Справочник.Животные" 
                  description="Картотека пациентов клиники"
                  fields={[
                    { name: "Код", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Владелец", type: "СправочникСсылка.Владельцы", constraint: "Не пустой" },
                    { name: "Наименование", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Вид", type: "Строка(50)", constraint: "Не пустой" },
                    { name: "Порода", type: "Строка(100)", constraint: "" },
                    { name: "ДатаРождения", type: "Дата", constraint: "" },
                    { name: "Пол", type: "Строка(10)", constraint: "" },
                    { name: "Вес", type: "Число(5,2)", constraint: "" },
                    { name: "НомерЧипа", type: "Строка(50)", constraint: "Уникальный" },
                    { name: "ДатаРегистрации", type: "Дата", constraint: "Не пустой" },
                  ]}
                />

                <SchemaCard 
                  title="Справочник.Владельцы" 
                  description="Владельцы животных"
                  fields={[
                    { name: "Код", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Имя", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Фамилия", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Телефон", type: "Строка(20)", constraint: "Не пустой" },
                    { name: "ЭлПочта", type: "Строка(100)", constraint: "" },
                    { name: "Адрес", type: "Строка(255)", constraint: "" },
                    { name: "ДатаРегистрации", type: "Дата", constraint: "Не пустой" },
                  ]}
                />

                <SchemaCard 
                  title="Справочник.Сотрудники" 
                  description="Врачи и сотрудники клиники"
                  fields={[
                    { name: "Код", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Имя", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Фамилия", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Должность", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Специализация", type: "Строка(100)", constraint: "" },
                    { name: "Телефон", type: "Строка(20)", constraint: "Не пустой" },
                    { name: "ЭлПочта", type: "Строка(100)", constraint: "" },
                    { name: "ДатаПриема", type: "Дата", constraint: "Не пустой" },
                  ]}
                />

                <SchemaCard 
                  title="Документ.Приемы" 
                  description="Регистрация приема животного"
                  fields={[
                    { name: "Номер", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Пациент", type: "СправочникСсылка.Животные", constraint: "Не пустой" },
                    { name: "Сотрудник", type: "СправочникСсылка.Сотрудники", constraint: "Не пустой" },
                    { name: "Дата", type: "ДатаВремя", constraint: "Не пустой" },
                    { name: "Причина", type: "Строка(255)", constraint: "Не пустой" },
                    { name: "Статус", type: "Строка(20)", constraint: "Не пустой" },
                    { name: "Комментарий", type: "Текст", constraint: "" },
                  ]}
                />

                <SchemaCard 
                  title="Документ.Диагнозы" 
                  description="Поставленные диагнозы"
                  fields={[
                    { name: "Номер", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Прием", type: "ДокументСсылка.Приемы", constraint: "Не пустой" },
                    { name: "НаименованиеДиагноза", type: "Строка(200)", constraint: "Не пустой" },
                    { name: "Описание", type: "Текст", constraint: "" },
                    { name: "Дата", type: "Дата", constraint: "Не пустой" },
                  ]}
                />

                <SchemaCard 
                  title="Документ.Лечение" 
                  description="Назначенное лечение"
                  fields={[
                    { name: "Номер", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Диагноз", type: "ДокументСсылка.Диагнозы", constraint: "Не пустой" },
                    { name: "НаименованиеЛечения", type: "Строка(200)", constraint: "Не пустой" },
                    { name: "Описание", type: "Текст", constraint: "" },
                    { name: "ДатаНачала", type: "Дата", constraint: "Не пустой" },
                    { name: "ДатаОкончания", type: "Дата", constraint: "" },
                    { name: "Комментарий", type: "Текст", constraint: "" },
                  ]}
                />

                <SchemaCard 
                  title="Документ.Медикаменты" 
                  description="Назначенные препараты"
                  fields={[
                    { name: "Номер", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Лечение", type: "ДокументСсылка.Лечение", constraint: "Не пустой" },
                    { name: "Наименование", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Дозировка", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "Частота", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "ДатаНачала", type: "Дата", constraint: "Не пустой" },
                    { name: "ДатаОкончания", type: "Дата", constraint: "" },
                    { name: "Инструкции", type: "Текст", constraint: "" },
                  ]}
                />

                <SchemaCard 
                  title="Документ.Вакцинации" 
                  description="Учет вакцинаций"
                  fields={[
                    { name: "Номер", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Пациент", type: "СправочникСсылка.Животные", constraint: "Не пустой" },
                    { name: "Сотрудник", type: "СправочникСсылка.Сотрудники", constraint: "Не пустой" },
                    { name: "НазваниеВакцины", type: "Строка(100)", constraint: "Не пустой" },
                    { name: "ДатаВакцинации", type: "Дата", constraint: "Не пустой" },
                    { name: "ДатаСледующей", type: "Дата", constraint: "" },
                    { name: "НомерПартии", type: "Строка(50)", constraint: "" },
                    { name: "Комментарий", type: "Текст", constraint: "" },
                  ]}
                />

                <SchemaCard 
                  title="Документ.Счета" 
                  description="Документы оплаты"
                  fields={[
                    { name: "Номер", type: "Число(10)", constraint: "Первичный ключ" },
                    { name: "Прием", type: "ДокументСсылка.Приемы", constraint: "Не пустой" },
                    { name: "Владелец", type: "СправочникСсылка.Владельцы", constraint: "Не пустой" },
                    { name: "Сумма", type: "Число(10,2)", constraint: "Не пустой" },
                    { name: "ДатаСоздания", type: "Дата", constraint: "Не пустой" },
                    { name: "СрокОплаты", type: "Дата", constraint: "Не пустой" },
                    { name: "Статус", type: "Строка(20)", constraint: "Не пустой" },
                    { name: "СпособОплаты", type: "Строка(50)", constraint: "" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-blue-200 mb-6">
            <CardHeader className="bg-blue-50 border-b border-blue-200 pb-3">
              <CardTitle className="text-blue-800">Схема взаимосвязей</CardTitle>
              <CardDescription className="text-blue-600">Связи между таблицами конфигурации</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="bg-white border border-blue-200 p-4 rounded-lg overflow-auto">
                <pre className="text-sm whitespace-pre-wrap text-blue-900 font-mono">
                  {`Справочник.Животные (1) ---- (*) Документ.Приемы
Справочник.Владельцы (1) ---- (*) Справочник.Животные
Справочник.Сотрудники (1) ---- (*) Документ.Приемы
Документ.Приемы (1) ---- (*) Документ.Диагнозы
Документ.Диагнозы (1) ---- (*) Документ.Лечение
Документ.Лечение (1) ---- (*) Документ.Медикаменты
Справочник.Животные (1) ---- (*) Документ.Вакцинации
Документ.Приемы (1) ---- (1) Документ.Счета
Справочник.Сотрудники (1) ---- (*) Документ.Вакцинации`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-blue-200">
            <CardHeader className="bg-blue-50 border-b border-blue-200 pb-3">
              <CardTitle className="text-blue-800">Примечания по использованию</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2 text-blue-900">
                <li>Конфигурация разработана для ведения учета пациентов, приемов и медицинских данных в ветеринарной клинике</li>
                <li>Рекомендуется использовать индексацию для полей поиска (Код, Номер, Наименование)</li>
                <li>Настроены ссылочные поля с контролем целостности данных</li>
                <li>Для удаления записей используется механизм пометки на удаление</li>
                <li>Права доступа к данным настраиваются через роли пользователей</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

type SchemaField = {
  name: string;
  type: string;
  constraint: string;
}

type SchemaCardProps = {
  title: string;
  description: string;
  fields: SchemaField[];
}

const SchemaCard = ({ title, description, fields }: SchemaCardProps) => {
  return (
    <Card className="shadow-sm border-blue-200 mb-4">
      <CardHeader className="bg-blue-50 border-b border-blue-200 py-2 px-3">
        <CardTitle className="text-blue-800 text-sm font-medium">{title}</CardTitle>
        <CardDescription className="text-blue-600 text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left font-medium py-1 px-3 text-blue-700 text-xs border-b border-blue-200">Реквизит</th>
                <th className="text-left font-medium py-1 px-3 text-blue-700 text-xs border-b border-blue-200">Тип</th>
                <th className="text-left font-medium py-1 px-3 text-blue-700 text-xs border-b border-blue-200">Ограничения</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-1 px-3 text-blue-800 text-xs border-b border-gray-100">{field.name}</td>
                  <td className="py-1 px-3 text-blue-800 text-xs border-b border-gray-100">{field.type}</td>
                  <td className="py-1 px-3 text-blue-800 text-xs border-b border-gray-100">{field.constraint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DatabaseSchema;
