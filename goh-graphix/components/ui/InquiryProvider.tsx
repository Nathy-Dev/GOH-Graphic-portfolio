"use client";

import { createContext, useContext, useState, type ComponentProps, type ReactNode } from "react";
import type { ContactService } from "@/lib/site";

interface InquiryContextValue {
  service: ContactService | "";
  setService: (service: ContactService | "") => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState<ContactService | "">("");

  return (
    <InquiryContext.Provider value={{ service, setService }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) throw new Error("useInquiry must be used within InquiryProvider");
  return context;
}

type ServiceLinkProps = Omit<ComponentProps<"a">, "href"> & { service: ContactService };

export function ServiceLink({ service, onClick, children, ...props }: ServiceLinkProps) {
  const { setService } = useInquiry();

  return (
    <a
      {...props}
      href="#contact"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setService(service);
      }}
    >
      {children}
    </a>
  );
}
