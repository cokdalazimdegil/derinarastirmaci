// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import "./src/env.js";

/** @type {import("next").NextConfig} */

// DeerFlow leverages **Turbopack** during development for faster builds and a smoother developer experience.
// However, in production, **Webpack** is used instead.
//
// This decision is based on the current recommendation to avoid using Turbopack for critical projects, as it
// is still evolving and may not yet be fully stable for production environments.

const config = {
  // Geliştirme modunda Turbopack kullanımı
  turbopack: {
    rules: {
      "*.md": {
        loaders: ["raw-loader"], // Markdown dosyalarını raw-loader ile yükle
        as: "*.js", // Markdown dosyasını JavaScript gibi işleme
      },
    },
  },

  // Üretim modunda Webpack kullanımı
  webpack: (config) => {
    // .md uzantılı dosyalar için raw-loader kullan
    config.module.rules.push({
      test: /\.md$/, // Markdown dosyalarını işle
      use: "raw-loader", // raw-loader ile içeriği yükle
    });
    return config; // Yapılandırmayı geri döndür
  },

  // Çevresel doğrulamayı atlamak için `SKIP_ENV_VALIDATION` kullanılabilir.
  // Özellikle Docker kullanırken faydalıdır, çünkü Docker'da çevresel değişkenlerin doğrulama işlemleri bazen hatalı olabilir.
  // Bu özelliği, üretim ortamlarında kullanmaman önerilir.
  env: {
    SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION || false,
  },
};

export default config;
