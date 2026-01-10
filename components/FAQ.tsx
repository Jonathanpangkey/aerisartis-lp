"use client";
import {useState} from "react";
import {Plus, Minus} from "lucide-react";
import {useLanguage} from "@/context/LanguageContext";

export const FAQ = () => {
  const {dict} = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!dict) return null;

  const faqs = [
    {
      question: dict.faq.items.item1.question,
      answer: dict.faq.items.item1.answer,
    },
    {
      question: dict.faq.items.item2.question,
      answer: dict.faq.items.item2.answer,
    },
    {
      question: dict.faq.items.item3.question,
      answer: dict.faq.items.item3.answer,
    },
    {
      question: dict.faq.items.item4.question,
      answer: dict.faq.items.item4.answer,
    },
    {
      question: dict.faq.items.item5.question,
      answer: dict.faq.items.item5.answer,
    },
    {
      question: dict.faq.items.item6.question,
      answer: dict.faq.items.item6.answer,
    },
    {
      question: dict.faq.items.item7.question,
      answer: dict.faq.items.item7.answer,
    },
    {
      question: dict.faq.items.item8.question,
      answer: dict.faq.items.item8.answer,
    },
    {
      question: dict.faq.items.item9.question,
      answer: dict.faq.items.item9.answer,
    },
    {
      question: dict.faq.items.item10.question,
      answer: dict.faq.items.item10.answer,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 left-1/5 w-96 h-96 bg-primary-background/8 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 right-1/5 w-96 h-96 bg-[#b85c2e]/8 rounded-full blur-3xl'></div>

      <div className='relative max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>{dict.faq.subtitle}</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {dict.faq.title.part1} <span className='text-accent'>{dict.faq.title.part2}</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>{dict.faq.description}</p>
        </div>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='group relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300'>
              <button onClick={() => toggleFAQ(index)} className='w-full flex items-center justify-between p-6 text-left'>
                <h3 className='text-lg font-semibold text-white pr-8 group-hover:text-accent transition-colors'>{faq.question}</h3>
                <div
                  className={`
                  shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index ? "bg-accent rotate-180" : "group-hover:bg-accent/20"}
                `}>
                  {openIndex === index ? <Minus className='w-5 h-5 text-accent' /> : <Plus className='w-5 h-5 text-accent' />}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}>
                <div className='px-6 pb-6'>
                  <div className='pt-2 border-t border-[#292524]'>
                    <p className='text-white/70 leading-relaxed mt-4'>{faq.answer}</p>
                  </div>
                </div>
              </div>

              <div className='absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
