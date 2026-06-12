"use client";

import { ChevronDown } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openId: string | null;
  toggle: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

type AccordionProps = {
  children: ReactNode;
  className?: string;
  defaultOpenId?: string;
};

function Accordion({ children, className, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <AccordionContext.Provider value={{ openId, toggle }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  id: string;
  question: string;
  answer: string;
  className?: string;
};

function AccordionItem({
  id,
  question,
  answer,
  className,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  const baseId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = `${baseId}-panel`;
  const buttonId = `${baseId}-button`;

  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  const isOpen = context.openId === id;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const items = Array.from(
      document.querySelectorAll<HTMLButtonElement>(
        '[data-slot="accordion-trigger"]',
      ),
    );
    const currentIndex = items.findIndex((item) => item === buttonRef.current);

    if (currentIndex === -1) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <div
      data-slot="accordion-item"
      className={cn(
        "border-brand-light-grey overflow-hidden rounded-xl border bg-white",
        className,
      )}
    >
      <h3>
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          data-slot="accordion-trigger"
          className={cn(
            "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
            "font-heading text-brand-charcoal text-base font-medium",
            "hover:bg-brand-light-grey/50 duration-normal transition-colors",
            "focus-visible:ring-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          )}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => context.toggle(id)}
          onKeyDown={handleKeyDown}
        >
          {question}
          <ChevronDown
            className={cn(
              "text-brand-teal duration-normal size-5 shrink-0 transition-transform",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={cn(
          "text-muted-foreground px-6 pb-5 text-sm leading-relaxed",
          !isOpen && "hidden",
        )}
      >
        {answer}
      </div>
    </div>
  );
}

type AccordionListProps = {
  items: { id: string; question: string; answer: string }[];
  className?: string;
  defaultOpenId?: string;
};

function AccordionList({
  items,
  className,
  defaultOpenId,
}: AccordionListProps) {
  return (
    <Accordion className={className} defaultOpenId={defaultOpenId}>
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </Accordion>
  );
}

export { Accordion, AccordionItem, AccordionList, type AccordionItemProps };
