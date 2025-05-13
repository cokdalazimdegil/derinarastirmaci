// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { Bike, Building, Film, Github, Ham, Home, Pizza } from "lucide-react";
import { Bot } from "lucide-react";

import { BentoCard } from "~/components/magicui/bento-grid";

import { SectionHeader } from "../components/section-header";

const caseStudies = [
  {
    id: "eiffel-tower-vs-tallest-building",
    icon: Building,
    title: "Eyfel Kulesi en yüksek binaya göre ne kadar uzundur?",
    description:
      "Araştırmada Eyfel Kulesi ile Burj Khalifa'nın yükseklikleri ve küresel önemleri karşılaştırılıyor ve katları hesaplamak için Python kodu kullanılıyor.",
  },
  {
    id: "github-top-trending-repo",
    icon: Github,
    title: "GitHub'da en çok ilgi gören depolar hangileridir?",
    description:
      "Araştırmada MCP servislerinden yararlanılarak en popüler GitHub depoları belirlendi ve arama motorları kullanılarak detaylı bir şekilde belgelendi.",
  },
  {
    id: "nanjing-traditional-dishes",
    icon: Ham,
    title: "Nanjing'in geleneksel yemekleri hakkında bir makale yaz.",
    description:
      "Çalışmada Nanjing'in ünlü yemekleri zengin içerik ve görsellerle canlı bir şekilde sergileniyor, gizli tarihler ve kültürel önemler ortaya çıkarılıyor.",
  },
  {
    id: "rental-apartment-decoration",
    icon: Home,
    title: "Küçük kiralık daire nasıl dekore edilir?",
    description:
      "Çalışmada, ilham verici görseller eşliğinde, okuyuculara daire dekorasyonu için pratik ve anlaşılır yöntemler sunuluyor.",
  },
  {
    id: "review-of-the-professional",
    icon: Film,
    title: "'Léon: The Professional' filmini tanıt.",
    description:
      "Araştırmada, 'Léon: The Professional' filminin konusu, karakterleri ve temaları da dahil olmak üzere kapsamlı bir giriş sunuluyor.",
  },
  {
    id: "china-food-delivery",
    icon: Bike,
    title: "Çin'deki paket servis savaşını nasıl görüyorsunuz? (Çince)",
    description:
      "Araştırmada JD ile Meituan arasındaki yoğunlaşan rekabet analiz edilerek, şirketlerin stratejileri, teknolojik yenilikleri ve karşılaştıkları zorluklar ortaya konuyor.",
  },
  {
    id: "ultra-processed-foods",
    icon: Pizza,
    title: "Ultra işlenmiş gıdaların sağlıkla bağlantısı var mı?",
    description:
      "Araştırmada, aşırı işlenmiş gıda tüketiminin artmasının sağlık riskleri incelenerek, uzun vadeli etkiler ve bireysel farklılıklar konusunda daha fazla araştırma yapılması çağrısında bulunuluyor.",
  },
  {
    id: "ai-twin-insurance",
    icon: Bot,
    title: '"Yapay zeka ikizinizi sigortalatır mıydınız?" konulu bir makale yazın."',
    description:
      "Araştırmada, yapay zeka ikizlerinin sigortalanması kavramı ele alınıyor; faydalar, riskler, etik hususlar ve gelişen düzenlemeler vurgulanıyor.",
  },
];

export function CaseStudySection() {
  return (
    <section className="relative container hidden flex-col items-center justify-center md:flex">
      <SectionHeader
        anchor="case-studies"
        title="Örnek Çalışmalar"
        description="Tekrarlarla Derin Araştırmacıyı aksiyon halinde izleyin."
      />
      <div className="grid w-3/4 grid-cols-1 gap-2 sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.title} className="w-full p-2">
            <BentoCard
              {...{
                Icon: caseStudy.icon,
                name: caseStudy.title,
                description: caseStudy.description,
                href: `/chat?replay=${caseStudy.id}`,
                cta: "Tekrarı izlemek için tıklayın",
                className: "w-full h-full",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
