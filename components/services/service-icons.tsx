import {
  Building2,
  Columns3,
  DoorOpen,
  Layers,
  LayoutGrid,
  Paintbrush,
  PanelTop,
  Square,
  type LucideIcon,
} from "lucide-react";

import type { ServiceSlug } from "@/types/services";

export const SERVICE_ICONS: Record<ServiceSlug, LucideIcon> = {
  "aluminium-windows": Square,
  "sliding-doors": DoorOpen,
  "glass-partitions": Columns3,
  "acp-cladding": Layers,
  "structural-glazing": Building2,
  "office-partitions": LayoutGrid,
  "false-ceiling": PanelTop,
  "interior-work": Paintbrush,
};

export function getServiceIcon(slug: ServiceSlug): LucideIcon {
  return SERVICE_ICONS[slug];
}
