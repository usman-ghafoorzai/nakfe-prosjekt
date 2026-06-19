import WorkProjectIndexSection from "@/components/WorkProjectIndexSection";
import { workContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(workContent.seo);

export default function WorkPage() {
  return <WorkProjectIndexSection content={workContent.overview} />;
}
