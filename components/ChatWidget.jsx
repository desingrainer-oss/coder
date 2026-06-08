"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useChat } from "./ChatContext";
import Icon from "./Icon";

const initialOptions = [
  { label: "Agendar una consultoría", icon: "calendar-days", action: "calendar" },
  { label: "Conocer soluciones Salesforce", icon: "light-bulb", action: "solutions" },
  { label: "Ver casos de éxito", icon: "chart-bar", action: "cases" },
  { label: "Hablar con un experto", icon: "chat-bubble", action: "expert" },
];

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00",
];

function getNextDays(count = 5) {
  const days = [];
  const labels = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  for (let i = 1; i <= count; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    days.push({
      key: d.toISOString().slice(0, 10),
      label: `${labels[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`,
    });
    if (days.length >= count) break;
  }
  return days.slice(0, 5);
}

export default function ChatWidget() {
  const { isOpen, mode, toggleChat, closeChat } = useChat();
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy Agentforce, el asistente IA de Coders Solution. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [input, setInput] = useState("");
  const [calendarStep, setCalendarStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", company: "" });
  const bodyRef = useRef(null);
  const calendarInitRef = useRef(false);
  const days = getNextDays();

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, showOptions, calendarStep]);

  useEffect(() => {
    if (isOpen && mode === "calendar" && !calendarInitRef.current) {
      calendarInitRef.current = true;
      setShowOptions(false);
      setCalendarStep(1);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Perfecto, agendemos tu consultoría gratuita. Selecciona un día disponible:" },
      ]);
    }
    if (!isOpen) {
      calendarInitRef.current = false;
    }
  }, [isOpen, mode]);

  const addMessage = (text, from) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleSelect = (option) => {
    setShowOptions(false);
    addMessage(option.label, "user");

    if (option.action === "calendar") {
      setTimeout(() => {
        setCalendarStep(1);
        addMessage("Selecciona un día disponible para tu consultoría:", "bot");
      }, 500);
      return;
    }

    if (option.action === "cases") {
      setTimeout(() => {
        addMessage("Estos son algunos de nuestros casos de éxito destacados. Puedes verlos todos en la sección de casos:", "bot");
        addMessage("cases-link", "bot");
        setShowOptions(true);
      }, 600);
      return;
    }

    setTimeout(() => {
      addMessage(
        "Perfecto. Para ayudarte mejor, ¿puedes indicarme tu nombre y empresa? También puedes agendar directamente una consultoría.",
        "bot"
      );
      setShowOptions(true);
    }, 600);
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.key);
    addMessage(day.label, "user");
    setCalendarStep(2);
    setTimeout(() => {
      addMessage("¿Qué horario prefieres?", "bot");
    }, 400);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    addMessage(time, "user");
    setCalendarStep(3);
    setTimeout(() => {
      addMessage("Completa tus datos para confirmar la cita:", "bot");
    }, 400);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) return;
    addMessage(`${bookingForm.name} – ${bookingForm.email}`, "user");
    setCalendarStep(0);
    setTimeout(() => {
      addMessage(
        `¡Listo! Tu consultoría está agendada para el ${days.find((d) => d.key === selectedDate)?.label} a las ${selectedTime}. Un especialista de Coders Solution te enviará la confirmación a ${bookingForm.email}.`,
        "bot"
      );
      setBookingForm({ name: "", email: "", company: "" });
      setSelectedDate("");
      setSelectedTime("");
      setShowOptions(true);
    }, 700);
  };

  const handleSend = () => {
    const msg = input.trim();
    if (!msg) return;
    addMessage(msg, "user");
    setInput("");
    setTimeout(() => {
      addMessage(
        "Gracias. Un especialista de Coders Solution se pondrá en contacto muy pronto. ¿Quieres agendar una consultoría directamente?",
        "bot"
      );
      setShowOptions(true);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2.5">
      <div
        className={`bg-white rounded-[14px] w-[320px] shadow-chat border-[1.5px] border-border flex-col overflow-hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="bg-navy py-3.5 px-4 flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-blue to-[#00b4d8] flex items-center justify-center shrink-0">
            <Icon name="sparkles" className="w-4 h-4 text-white" />
          </div>
          <div>
            <h5 className="text-[13px] font-bold text-white">Agentforce · Coders Solution</h5>
            <span className="text-[10.5px] text-green flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green inline-block" /> En línea ahora
            </span>
          </div>
          <button
            type="button"
            className="ml-auto bg-transparent border-none text-white/60 cursor-pointer leading-none p-1"
            onClick={closeChat}
          >
            <Icon name="xmark" className="w-4 h-4" />
          </button>
        </div>

        <div ref={bodyRef} className="p-3.5 flex-1 flex flex-col gap-2 max-h-80 overflow-y-auto">
          {messages.map((msg, i) => {
            if (msg.text === "cases-link") {
              return (
                <Link
                  key={i}
                  href="/casos-de-exito"
                  className="text-[12px] font-semibold text-blue bg-bg border border-border rounded-lg py-2 px-3 hover:bg-[#e8f1fd] flex items-center gap-1.5"
                  onClick={closeChat}
                >
                  <Icon name="chart-bar" className="w-4 h-4" />
                  Ver todos los casos de éxito →
                </Link>
              );
            }
            return (
              <div
                key={i}
                className={`py-2 px-[11px] rounded-[10px] text-[12.5px] leading-snug max-w-[90%] ${
                  msg.from === "bot" ? "bg-bg2 text-text" : "bg-blue text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            );
          })}

          {calendarStep === 1 && (
            <div className="flex flex-wrap gap-1.5">
              {days.map((day) => (
                <button
                  key={day.key}
                  type="button"
                  onClick={() => handleDateSelect(day)}
                  className="bg-bg border-[1.5px] border-border rounded-lg py-1.5 px-2.5 text-[11px] font-medium cursor-pointer hover:border-blue hover:text-blue"
                >
                  {day.label}
                </button>
              ))}
            </div>
          )}

          {calendarStep === 2 && (
            <div className="flex flex-wrap gap-1.5">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className="bg-bg border-[1.5px] border-border rounded-lg py-1.5 px-2.5 text-[11px] font-medium cursor-pointer hover:border-blue hover:text-blue"
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          {calendarStep === 3 && (
            <form onSubmit={handleBookingSubmit} className="flex flex-col gap-2">
              <input
                placeholder="Nombre *"
                value={bookingForm.name}
                onChange={(e) => setBookingForm((f) => ({ ...f, name: e.target.value }))}
                className="border-[1.5px] border-border rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-blue"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                value={bookingForm.email}
                onChange={(e) => setBookingForm((f) => ({ ...f, email: e.target.value }))}
                className="border-[1.5px] border-border rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-blue"
                required
              />
              <input
                placeholder="Empresa"
                value={bookingForm.company}
                onChange={(e) => setBookingForm((f) => ({ ...f, company: e.target.value }))}
                className="border-[1.5px] border-border rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-blue"
              />
              <button type="submit" className="btn btn-blue text-xs py-2">
                Confirmar cita →
              </button>
            </form>
          )}

          {showOptions && calendarStep === 0 && (
            <div className="flex flex-col gap-[5px]">
              {initialOptions.map((opt) => (
                <button
                  key={opt.action}
                  type="button"
                  className="bg-bg border-[1.5px] border-border rounded-lg py-[7px] px-[11px] text-xs font-medium text-gray-700 cursor-pointer text-left transition-all hover:bg-[#e8f1fd] hover:border-blue hover:text-blue flex items-center gap-2"
                  onClick={() => handleSelect(opt)}
                >
                  <Icon name={opt.icon} className="w-4 h-4 shrink-0" />
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {calendarStep === 0 && (
          <div className="py-2.5 px-3 border-t-[1.5px] border-border flex gap-[7px]">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border-[1.5px] border-border rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-blue"
            />
            <button
              type="button"
              onClick={handleSend}
              className="bg-blue text-white border-none rounded-lg w-[30px] h-[30px] text-sm cursor-pointer flex items-center justify-center"
            >
              →
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={toggleChat}
        className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-blue to-[#00b4d8] border-none cursor-pointer shadow-chat-btn flex items-center justify-center text-white transition-transform hover:scale-105 relative"
      >
        {isOpen ? (
          <Icon name="xmark" className="w-6 h-6" />
        ) : (
          <Icon name="chat-bubble" className="w-6 h-6" solid />
        )}
        {!isOpen && (
          <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green rounded-full border-2 border-white" />
        )}
      </button>
    </div>
  );
}
