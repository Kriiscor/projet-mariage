import React, { useState, useEffect } from 'react';

interface CalendarProps {
  selectedDates: Date[];
  onChange: (dates: Date[]) => void;
  minDate?: Date;
  maxDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDates,
  onChange,
  minDate = new Date(),
  maxDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(minDate || new Date());
  const [calendarDays, setCalendarDays] = useState<(Date | null)[]>([]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentMonth]);

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Premier jour du mois
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay() || 7; // 0 (dimanche) devient 7

    // Dernier jour du mois
    const lastDay = new Date(year, month + 1, 0);

    const daysArray: (Date | null)[] = [];

    // Jours du mois précédent pour compléter la première semaine
    for (let i = 1; i < firstDayOfWeek; i++) {
      daysArray.push(null);
    }

    // Jours du mois courant
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(year, month, i));
    }

    setCalendarDays(daysArray);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isDateSelected = (date: Date | null): boolean => {
    if (!date) return false;
    return selectedDates.some(
      (selectedDate) =>
        selectedDate.getDate() === date.getDate() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear()
    );
  };

  const isDateDisabled = (date: Date | null): boolean => {
    if (!date) return true;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Vérifier si la date est avant la date minimale
    if (minDate && date < minDate) return true;

    // Vérifier si la date est après la date maximale
    if (maxDate && date > maxDate) return true;

    return false;
  };

  const handleDateClick = (date: Date | null) => {
    if (!date || isDateDisabled(date)) return;

    const dateExists = selectedDates.some(
      (selectedDate) =>
        selectedDate.getDate() === date.getDate() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear()
    );

    let newSelectedDates: Date[];

    if (dateExists) {
      // Supprimer la date si elle est déjà sélectionnée
      newSelectedDates = selectedDates.filter(
        (selectedDate) =>
          !(
            selectedDate.getDate() === date.getDate() &&
            selectedDate.getMonth() === date.getMonth() &&
            selectedDate.getFullYear() === date.getFullYear()
          )
      );
    } else {
      // Ajouter la date
      newSelectedDates = [...selectedDates, date];
    }

    // Trier les dates
    newSelectedDates.sort((a, b) => a.getTime() - b.getTime());

    onChange(newSelectedDates);
  };

  const formatMonth = (date: Date): string => {
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  };

  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="flex justify-between items-center p-3 border-b border-gray-200">
        <button
          onClick={prevMonth}
          className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
          aria-label="Mois précédent"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h3 className="text-sm font-medium text-gray-700 capitalize">
          {formatMonth(currentMonth)}
        </h3>
        <button
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
          aria-label="Mois suivant"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-7 gap-1 mb-1">
          {weekDays.map((day) => (
            <div key={day} className="text-xs text-center text-gray-500 font-medium">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={isDateDisabled(date)}
              className={`
                h-8 w-full text-xs rounded-md flex items-center justify-center
                ${!date ? 'invisible' : ''}
                ${isDateSelected(date) ? 'bg-primary-500 text-white' : 'hover:bg-gray-100'}
                ${
                  isDateDisabled(date)
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-700 cursor-pointer'
                }
              `}
            >
              {date ? date.getDate() : ''}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
