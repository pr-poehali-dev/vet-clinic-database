import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const DatabaseSchema = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">База данных ветеринарной клиники</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <SchemaCard 
          title="Животные (patients)" 
          description="Информация о пациентах клиники"
          fields={[
            { name: "patient_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "owner_id", type: "INTEGER", constraint: "FOREIGN KEY (owners)" },
            { name: "name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "species", type: "VARCHAR(50)", constraint: "NOT NULL" },
            { name: "breed", type: "VARCHAR(100)", constraint: "" },
            { name: "date_of_birth", type: "DATE", constraint: "" },
            { name: "gender", type: "VARCHAR(10)", constraint: "" },
            { name: "weight", type: "DECIMAL(5,2)", constraint: "" },
            { name: "microchip_id", type: "VARCHAR(50)", constraint: "UNIQUE" },
            { name: "registration_date", type: "DATE", constraint: "NOT NULL" },
          ]}
        />

        <SchemaCard 
          title="Владельцы (owners)" 
          description="Владельцы животных"
          fields={[
            { name: "owner_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "first_name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "last_name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "phone", type: "VARCHAR(20)", constraint: "NOT NULL" },
            { name: "email", type: "VARCHAR(100)", constraint: "" },
            { name: "address", type: "VARCHAR(255)", constraint: "" },
            { name: "registration_date", type: "DATE", constraint: "NOT NULL" },
          ]}
        />

        <SchemaCard 
          title="Сотрудники (staff)" 
          description="Врачи и другие сотрудники клиники"
          fields={[
            { name: "staff_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "first_name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "last_name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "position", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "specialization", type: "VARCHAR(100)", constraint: "" },
            { name: "phone", type: "VARCHAR(20)", constraint: "NOT NULL" },
            { name: "email", type: "VARCHAR(100)", constraint: "" },
            { name: "hire_date", type: "DATE", constraint: "NOT NULL" },
          ]}
        />

        <SchemaCard 
          title="Приемы (appointments)" 
          description="Запись о приеме животного"
          fields={[
            { name: "appointment_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "patient_id", type: "INTEGER", constraint: "FOREIGN KEY (patients)" },
            { name: "staff_id", type: "INTEGER", constraint: "FOREIGN KEY (staff)" },
            { name: "appointment_date", type: "DATETIME", constraint: "NOT NULL" },
            { name: "reason", type: "VARCHAR(255)", constraint: "NOT NULL" },
            { name: "status", type: "VARCHAR(20)", constraint: "NOT NULL" },
            { name: "notes", type: "TEXT", constraint: "" },
          ]}
        />

        <SchemaCard 
          title="Диагнозы (diagnoses)" 
          description="Диагнозы, поставленные животным"
          fields={[
            { name: "diagnosis_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "appointment_id", type: "INTEGER", constraint: "FOREIGN KEY (appointments)" },
            { name: "condition_name", type: "VARCHAR(200)", constraint: "NOT NULL" },
            { name: "description", type: "TEXT", constraint: "" },
            { name: "diagnosis_date", type: "DATE", constraint: "NOT NULL" },
          ]}
        />

        <SchemaCard 
          title="Лечение (treatments)" 
          description="Назначенное лечение"
          fields={[
            { name: "treatment_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "diagnosis_id", type: "INTEGER", constraint: "FOREIGN KEY (diagnoses)" },
            { name: "treatment_name", type: "VARCHAR(200)", constraint: "NOT NULL" },
            { name: "description", type: "TEXT", constraint: "" },
            { name: "start_date", type: "DATE", constraint: "NOT NULL" },
            { name: "end_date", type: "DATE", constraint: "" },
            { name: "notes", type: "TEXT", constraint: "" },
          ]}
        />

        <SchemaCard 
          title="Медикаменты (medications)" 
          description="Назначенные медикаменты"
          fields={[
            { name: "medication_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "treatment_id", type: "INTEGER", constraint: "FOREIGN KEY (treatments)" },
            { name: "name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "dosage", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "frequency", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "start_date", type: "DATE", constraint: "NOT NULL" },
            { name: "end_date", type: "DATE", constraint: "" },
            { name: "instructions", type: "TEXT", constraint: "" },
          ]}
        />

        <SchemaCard 
          title="Вакцинации (vaccinations)" 
          description="История вакцинаций"
          fields={[
            { name: "vaccination_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "patient_id", type: "INTEGER", constraint: "FOREIGN KEY (patients)" },
            { name: "staff_id", type: "INTEGER", constraint: "FOREIGN KEY (staff)" },
            { name: "vaccine_name", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "vaccination_date", type: "DATE", constraint: "NOT NULL" },
            { name: "expiry_date", type: "DATE", constraint: "" },
            { name: "batch_number", type: "VARCHAR(50)", constraint: "" },
            { name: "notes", type: "TEXT", constraint: "" },
          ]}
        />

        <SchemaCard 
          title="Счета (invoices)" 
          description="Выставленные счета"
          fields={[
            { name: "invoice_id", type: "INTEGER", constraint: "PRIMARY KEY" },
            { name: "appointment_id", type: "INTEGER", constraint: "FOREIGN KEY (appointments)" },
            { name: "owner_id", type: "INTEGER", constraint: "FOREIGN KEY (owners)" },
            { name: "amount", type: "DECIMAL(10,2)", constraint: "NOT NULL" },
            { name: "issue_date", type: "DATE", constraint: "NOT NULL" },
            { name: "due_date", type: "DATE", constraint: "NOT NULL" },
            { name: "status", type: "VARCHAR(20)", constraint: "NOT NULL" },
            { name: "payment_method", type: "VARCHAR(50)", constraint: "" },
          ]}
        />
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Диаграмма связей</CardTitle>
          <CardDescription>Основные связи между таблицами</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg overflow-auto">
            <pre className="text-sm whitespace-pre-wrap">
              {`Patients (1) ---- (*) Appointments
Owners (1) ---- (*) Patients
Staff (1) ---- (*) Appointments
Appointments (1) ---- (*) Diagnoses
Diagnoses (1) ---- (*) Treatments
Treatments (1) ---- (*) Medications
Patients (1) ---- (*) Vaccinations
Appointments (1) ---- (1) Invoices
Staff (1) ---- (*) Vaccinations`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Примечания по использованию</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>База данных спроектирована для отслеживания пациентов, владельцев, приемов и связанных медицинских данных</li>
            <li>Используйте индексы для полей, по которым часто выполняется поиск (patient_id, owner_id, appointment_date и т.д.)</li>
            <li>Рекомендуется настроить внешние ключи с каскадным обновлением (ON UPDATE CASCADE)</li>
            <li>Для удаления лучше использовать подход "мягкого удаления" - добавьте поле is_active или deleted_at в таблицы</li>
          </ul>
        </CardContent>
      </Card>
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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left font-medium pb-2">Поле</th>
                  <th className="text-left font-medium pb-2">Тип</th>
                  <th className="text-left font-medium pb-2">Ограничения</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field, index) => (
                  <tr key={index} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-mono text-xs">{field.name}</td>
                    <td className="py-2 pr-4 font-mono text-xs">{field.type}</td>
                    <td className="py-2 font-mono text-xs">{field.constraint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DatabaseSchema;
