// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { Bird, Microscope, Podcast, Usb, User } from "lucide-react";

import { BentoCard, BentoGrid } from "~/components/magicui/bento-grid";

import { SectionHeader } from "../components/section-header";

const features = [
  {
    Icon: Microscope,
    name: "Daha Derine Dalın ve Daha Genişe Ulaşın",
    description:
      "Gelişmiş araçlarla daha derin içgörülerin kilidini açın. Güçlü arama + tarama ve Python araçlarımız kapsamlı veriler toplayarak çalışmanızı geliştirmek için derinlemesine raporlar sunar.",
    href: "https://github.com/bytedance/deer-flow/blob/main/src/tools",
    cta: "Daha fazla bilgi edin",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: User,
    name: "Döngüdeki-İnsan",
    description:
      "Araştırma planınızı geliştirin veya odak alanlarınızı basit doğal dil kullanarak ayarlayın.",
    href: "https://github.com/bytedance/deer-flow/blob/main/src/graph/nodes.py",
    cta: "Daha fazla bilgi edin",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Bird,
    name: "Uzun Yığın",
    description:
      "LangChain ve LangGraph çerçevelerini kullanarak güvenle inşa edin.",
    href: "https://www.langchain.com/",
    cta: "Daha fazla bilgi edin",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Usb,
    name: "MCP Entegrasyonu",
    description:
      "Araştırma iş akışınızı güçlendirin ve kusursuz MCP entegrasyonlarıyla araç setinizi genişletin.",
    href: "https://github.com/bytedance/deer-flow/blob/main/src/graph/nodes.py",
    cta: "Daha fazla bilgi edin",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Podcast,
    name: "Podcast Üretimi",
    description:
      "Raporlardan anında podcast'ler oluşturun. Hareket halindeyken öğrenmek veya bulguları zahmetsizce paylaşmak için mükemmel.  ",
    href: "https://github.com/bytedance/deer-flow/blob/main/src/podcast",
    cta: "Daha fazla bilgi edin",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
];

export function CoreFeatureSection() {
  return (
    <section className="relative flex w-full flex-col content-around items-center justify-center">
      <SectionHeader
        anchor="core-features"
        title="Temel Özellikler"
        description="Derin Araştırmacıyı etkili kılan özellikleri öğrenin."
      />
      <BentoGrid className="w-3/4 lg:grid-cols-2 lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}