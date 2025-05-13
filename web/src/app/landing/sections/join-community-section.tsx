// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { GithubFilled } from "@ant-design/icons";
import Link from "next/link";

import { AuroraText } from "~/components/magicui/aurora-text";
import { Button } from "~/components/ui/button";

import { SectionHeader } from "../components/section-header";

export function JoinCommunitySection() {
  return (
    <section className="flex w-full flex-col items-center justify-center pb-12">
      <SectionHeader
        anchor="join-community"
        title={
          <AuroraText colors={["#60A5FA", "#A5FA60", "#A560FA"]}>
            Derin Araştırmacı Topluluğuna Katılın
          </AuroraText>
        }
        description="Derin Araştırmacının geleceğini şekillendirmek için parlak fikirler sunun. İş birliği yapın, yenilik yapın ve etki yaratın."
      />
      <Button className="text-xl" size="lg" asChild>
        <Link href="https://github.com/bytedance/deer-flow" target="_blank">
          <GithubFilled />
          şimdi katkıda bulun
        </Link>
      </Button>
    </section>
  );
}
