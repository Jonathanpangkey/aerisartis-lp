"use client";
import Link from "next/link";
import {ArrowLeft, MapPin, Sparkles, Hammer, Users, Award, Target} from "lucide-react";
import {useLanguage} from "@/context/LanguageContext";

export default function AboutPage() {
  const {dict} = useLanguage();

  if (!dict) return null;

  const highlights = [
    {
      icon: <MapPin className='w-5 h-5' />,
      title: dict.aboutPage.highlights.highlight1.title,
      description: dict.aboutPage.highlights.highlight1.description,
    },
    {
      icon: <Sparkles className='w-5 h-5' />,
      title: dict.aboutPage.highlights.highlight2.title,
      description: dict.aboutPage.highlights.highlight2.description,
    },
    {
      icon: <Hammer className='w-5 h-5' />,
      title: dict.aboutPage.highlights.highlight3.title,
      description: dict.aboutPage.highlights.highlight3.description,
    },
    {
      icon: <Users className='w-5 h-5' />,
      title: dict.aboutPage.highlights.highlight4.title,
      description: dict.aboutPage.highlights.highlight4.description,
    },
    {
      icon: <Award className='w-5 h-5' />,
      title: dict.aboutPage.highlights.highlight5.title,
      description: dict.aboutPage.highlights.highlight5.description,
    },
    {
      icon: <Target className='w-5 h-5' />,
      title: dict.aboutPage.highlights.highlight6.title,
      description: dict.aboutPage.highlights.highlight6.description,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='relative bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <Link href='/' className='inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors mb-8'>
            <ArrowLeft className='w-5 h-5' />
            <span>{dict.aboutPage.back_button}</span>
          </Link>

          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
              {dict.aboutPage.title.part1} <span className='text-accent'>{dict.aboutPage.title.part2}</span>
            </h1>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>{dict.aboutPage.subtitle}</p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-16'>
        {/* Main Description */}
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-2xl border border-gray-200 p-4 md:p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-accent' />
              </div>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>{dict.aboutPage.story_title}</h2>
            </div>

            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-700 leading-relaxed mb-6'>{dict.aboutPage.story_content}</p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className='max-w-6xl mx-auto mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12'>
            {dict.aboutPage.advantages_title.part1} <span className='text-accent'>{dict.aboutPage.advantages_title.part2}</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {highlights.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 group'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors'>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors'>{item.title}</h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center'>
          <div className='bg-white border border-gray-200 rounded-2xl p-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{dict.aboutPage.cta_title}</h2>
            <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>{dict.aboutPage.cta_description}</p>
            <Link href='/#contact'>
              <button className='bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
                {dict.aboutPage.cta_button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
