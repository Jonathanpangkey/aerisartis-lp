"use client";
import {Wallet, FileCheck, Hammer, Search, Truck, CheckCircle, X, Info} from "lucide-react";
import {useState} from "react";
import {useLanguage} from "@/context/LanguageContext";

export const HowToOrder = () => {
  const {dict} = useLanguage();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  if (!dict) return null;

  const steps = [
    {
      icon: <FileCheck className='w-8 h-8' />,
      title: dict.howToOrder.steps.step1.title,
      description: dict.howToOrder.steps.step1.description,
      gradientFrom: "#b85c2e",
      gradientTo: "#d46e3d",
    },
    {
      icon: <Wallet className='w-8 h-8' />,
      title: dict.howToOrder.steps.step2.title,
      description: dict.howToOrder.steps.step2.description,
      gradientFrom: "#c97846",
      gradientTo: "#b85c2e",
    },
    {
      icon: <Hammer className='w-8 h-8' />,
      title: dict.howToOrder.steps.step3.title,
      description: dict.howToOrder.steps.step3.description,
      gradientFrom: "#d46e3d",
      gradientTo: "#c97846",
    },
    {
      icon: <Search className='w-8 h-8' />,
      title: dict.howToOrder.steps.step4.title,
      description: dict.howToOrder.steps.step4.description,
      gradientFrom: "#c97846",
      gradientTo: "#b85c2e",
    },
    {
      icon: <CheckCircle className='w-8 h-8' />,
      title: dict.howToOrder.steps.step5.title,
      description: dict.howToOrder.steps.step5.description,
      gradientFrom: "#b85c2e",
      gradientTo: "#d46e3d",
    },
    {
      icon: <Truck className='w-8 h-8' />,
      title: dict.howToOrder.steps.step6.title,
      description: dict.howToOrder.steps.step6.description,
      gradientFrom: "#d46e3d",
      gradientTo: "#c97846",
    },
  ];

  const policies = [
    {
      title: dict.howToOrder.policies.policy1.title,
      description: dict.howToOrder.policies.policy1.description,
    },
    {
      title: dict.howToOrder.policies.policy2.title,
      description: dict.howToOrder.policies.policy2.description,
    },
    {
      title: dict.howToOrder.policies.policy3.title,
      description: dict.howToOrder.policies.policy3.description,
    },
    {
      title: dict.howToOrder.policies.policy4.title,
      description: dict.howToOrder.policies.policy4.description,
    },
  ];

  return (
    <section id='how-to-order' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-[#c97846]/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <p className='text-[#c97846] text-sm font-semibold tracking-wider uppercase mb-4'>{dict.howToOrder.subtitle}</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            {dict.howToOrder.title.part1} <span className='text-[#c97846]'>{dict.howToOrder.title.part2}</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>{dict.howToOrder.description}</p>
        </div>

        <div className='relative mb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={index} className='relative group'>
                <div className='relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl p-6 hover:border-[#c97846]/50 transition-all duration-300 h-full flex flex-col'>
                  <div
                    className='absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'
                    style={{background: `linear-gradient(to bottom right, #c97846, #b85c2e)`}}>
                    {index + 1}
                  </div>

                  <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg'
                    style={{background: `linear-gradient(to bottom right, ${step.gradientFrom}, ${step.gradientTo})`}}>
                    <div className='text-white'>{step.icon}</div>
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#c97846] transition-colors'>{step.title}</h3>
                  <p className='text-white/60 text-sm leading-relaxed grow'>{step.description}</p>

                  {index === 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPaymentModal(true);
                      }}
                      className='relative z-10 mt-2 flex items-center gap-2 text-accent hover:text-primary transition-colors text-[12px] font-semibold cursor-pointer'>
                      <Info className='w-4 h-4' />
                      {dict.howToOrder.payment_terms_button}
                    </button>
                  )}

                  <div className='absolute inset-0 border-2 border-[#c97846] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-6'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              {dict.howToOrder.policies_title.part1} <span className='text-[#c97846]'>{dict.howToOrder.policies_title.part2}</span>
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>{dict.howToOrder.policies_description}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {policies.map((policy, index) => (
              <div
                key={index}
                className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-xl p-6 hover:border-[#c97846]/30 transition-all'>
                <div className='flex items-start gap-4'>
                  <div className='w-2 h-2 bg-[#c97846] rounded-full mt-2 shrink-0'></div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>{policy.title}</h4>
                    <p className='text-white/60 text-sm leading-relaxed'>{policy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[#1c1917]/50 backdrop-blur-sm border border-[#c97846]/20 rounded-2xl p-8 mb-16'>
          <h4 className='text-white font-bold text-lg mb-4 flex items-center gap-3'>
            <span className='text-[#c97846]'>ℹ</span> {dict.howToOrder.important_notes.title}
          </h4>
          <ul className='space-y-3 text-white/70 text-sm'>
            <li className='flex items-start gap-3'>
              <span className='text-[#c97846] mt-1'>•</span>
              <span>{dict.howToOrder.important_notes.note1}</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#c97846] mt-1'>•</span>
              <span>{dict.howToOrder.important_notes.note2}</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#c97846] mt-1'>•</span>
              <span>{dict.howToOrder.important_notes.note3}</span>
            </li>
          </ul>
        </div>
      </div>

      {showPaymentModal && (
        <div
          className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'
          onClick={() => setShowPaymentModal(false)}>
          <div
            className='bg-[#1c1917] border border-[#c97846]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}>
            <div className='sticky top-0 bg-[#1c1917] border-b border-[#292524] p-6 flex items-center justify-between'>
              <h3 className='text-2xl font-bold text-white flex items-center gap-3'>
                <Wallet className='w-6 h-6 text-[#c97846]' />
                {dict.howToOrder.modal.title}
              </h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#292524] transition-colors'>
                <X className='w-5 h-5 text-white/70' />
              </button>
            </div>

            <div className='p-6 space-y-6'>
              <div className='space-y-4'>
                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    {dict.howToOrder.modal.ready_stock.title}
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>{dict.howToOrder.modal.ready_stock.description}</p>
                </div>

                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    {dict.howToOrder.modal.custom_order.title}
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>{dict.howToOrder.modal.custom_order.description}</p>
                </div>

                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    {dict.howToOrder.modal.payment_settlement.title}
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>{dict.howToOrder.modal.payment_settlement.description}</p>
                </div>

                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    {dict.howToOrder.modal.bulk_discount.title}
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>{dict.howToOrder.modal.bulk_discount.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowToOrder;
