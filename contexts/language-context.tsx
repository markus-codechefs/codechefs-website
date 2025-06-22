"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "de" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  de: {
    // Header
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.badge": "Individuelle Softwareentwicklung",
    "hero.title": "Transformieren Sie Ihr Unternehmen mit",
    "hero.title.highlight": " massgeschneiderten Lösungen",
    "hero.description":
      "Wir entwickeln massgeschneiderte Webanwendungen, Landing Pages und CRM-Anpassungen, die Ihr Unternehmen voranbringen.",
    "hero.cta.primary": "Jetzt starten",
    "hero.cta.secondary": "Unsere Dienstleistungen",
    "hero.location": "Bern, Schweiz",
    "hero.trusted": "Vertraut von Unternehmen",

    // Services Section
    "services.badge": "Unsere Expertise",
    "services.title": "Umfassende Software-Lösungen",
    "services.description":
      "Von beeindruckenden Landing Pages bis hin zu komplexen Unternehmensanwendungen - wir liefern Lösungen, die mit Ihren Geschäftsanforderungen skalieren.",

    "services.landing.title": "Landing Pages",
    "services.landing.description":
      "Hochkonvertierende, responsive Landing Pages, die Leads erfassen und Conversions fördern.",
    "services.landing.feature1": "Mobile-first responsives Design",
    "services.landing.feature2": "SEO optimiert",
    "services.landing.feature3": "Schnelle Ladezeiten",
    "services.landing.feature4": "Conversion-Tracking",

    "services.webapp.title": "Individuelle Webanwendungen",
    "services.webapp.description":
      "Komplexe, skalierbare Webanwendungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind.",
    "services.webapp.feature1": "Full-Stack-Entwicklung",
    "services.webapp.feature2": "Datenbankdesign & -optimierung",
    "services.webapp.feature3": "API-Integrationen",
    "services.webapp.feature4": "Cloud-Deployment",

    "services.crm.title": "CRM Dynamics 365",
    "services.crm.description": "Expertenanpassungen und Integrationen für Microsoft Dynamics 365 CRM-Systeme.",
    "services.crm.feature1": "Individuelle Workflows",
    "services.crm.feature2": "Drittanbieter-Integrationen",
    "services.crm.feature3": "Datenmigration",
    "services.crm.feature4": "Schulung & Support",

    // Process Section
    "process.badge": "Unser Prozess",
    "process.title": "Von der Idee bis zur Bereitstellung",
    "process.description":
      "Wir folgen einer bewährten Methodik, um sicherzustellen, dass Ihr Projekt pünktlich, im Budget und über den Erwartungen geliefert wird.",
    "process.step1.title": "Analyse & Planung",
    "process.step1.description": "Wir analysieren Ihre Anforderungen und erstellen eine detaillierte Projekt-Roadmap.",
    "process.step2.title": "Design & Entwicklung",
    "process.step2.description": "Unser Team entwickelt Ihre Lösung mit modernen Technologien und bewährten Praktiken.",
    "process.step3.title": "Testing & Launch",
    "process.step3.description": "Rigorose Tests gewährleisten Qualität, bevor wir Ihre Lösung bereitstellen.",

    // Why Choose Us
    "why.badge": "Warum Code Chefs",
    "why.title": "Schweizer Qualität, Globale Standards",
    "why.expert.title": "Expertenteam",
    "why.expert.description":
      "Erfahrene Entwickler mit tiefgreifender Expertise in modernen Web-Technologien und Unternehmenslösungen.",
    "why.fast.title": "Schnelle Lieferung",
    "why.fast.description": "Agiler Entwicklungsprozess gewährleistet schnelle Lieferung ohne Qualitätskompromisse.",
    "why.support.title": "Zuverlässiger Support",
    "why.support.description": "Laufende Wartung und Support, um Ihre Anwendungen reibungslos am Laufen zu halten.",

    // About Section
    "about.badge": "Über Code Chefs",
    "about.title": "Ansässig im schönen Bern",
    "about.description":
      "Im Herzen der Schweiz gelegen, kombiniert Code Chefs GmbH Schweizer Präzision mit modernster Technologie, um aussergewöhnliche Software-Lösungen zu liefern. Wir bedienen Kunden lokal und international und bringen Schweizer Qualitätsstandards in jedes Projekt.",

    // Contact Section
    "contact.badge": "Kontakt aufnehmen",
    "contact.title": "Bereit, Ihr Projekt zu starten?",
    "contact.description":
      "Lassen Sie uns besprechen, wie wir Ihnen helfen können, Ihr Unternehmen mit individuellen Software-Lösungen zu transformieren.",
    "contact.form.firstName": "Vorname",
    "contact.form.lastName": "Nachname",
    "contact.form.email": "E-Mail",
    "contact.form.company": "Unternehmen",
    "contact.form.service": "Service-Interesse",
    "contact.form.service.placeholder": "Service auswählen",
    "contact.form.service.landing": "Landing Pages",
    "contact.form.service.webapp": "Individuelle Webanwendungen",
    "contact.form.service.crm": "CRM Dynamics 365",
    "contact.form.service.consultation": "Allgemeine Beratung",
    "contact.form.message": "Projektdetails",
    "contact.form.message.placeholder": "Erzählen Sie uns von Ihren Projektanforderungen...",
    "contact.form.submit": "Nachricht senden",

    // Projects Section
    "projects.badge": "Unsere Arbeit",
    "projects.title": "Ein Schaufenster unserer Projekte",
    "projects.description": "Hier ist eine Auswahl unserer Arbeiten, die unser Engagement für Qualität und Innovation zeigen.",
    "projects.bkw.title": "CRM Dynamics 365 Customizer / Azure Software Engineer bei BKW",
    "projects.bkw.description":
      "Unser erster freiberuflicher Auftrag. Unser Team arbeitet mit einem Team von Ingenieuren zusammen, um die Verkaufs- und Supportanforderungen der BKW über ihre CRM Dynamics 365 Plattform zu unterstützen.",
    "projects.trachsuch.title": "trachsu.ch - Persönliche-Landing Page",
    "projects.trachsuch.description":
      "Eine von uns entwickelte Landing Page, die uns reichlich Gelegenheit gab, in die Welt von React, Next.js und Vercel einzutauchen.",
    "projects.simpline.title": "Simpline Workflow System",
    "projects.simpline.description":
      "Wir haben ein Webportal mit .NET Core, Orchard.net CMS, Bootstrap und MS-SQL erstellt. Es wurde auf Azure gehostet und mit Azure DevOps bereitgestellt.",
    "projects.immoscout.title": "Erhöhte Deployment-Frequenz bei ImmoScout24",
    "projects.immoscout.description":
      "Durch die Anwendung von DORA-Metriken und modernen Praktiken wie CI/CD haben wir die Deployment-Frequenz von 4 Mal pro Monat auf 200 erhöht!",
    "projects.post.title": "Cloud-Projekt bei Post IT",
    "projects.post.description":
      "Analyse, Design, Implementierung und Test eines App Service, einer Logic App, von Functions und Lambdas. Ziel des Projekts war der Vergleich von Diensten auf AWS und Azure zur Erstellung eines Workflow-Systems.",
    "projects.meisterwerk.title": "Automatisiertes Personal Debtcheck API von Intrum Justitia AG für Meisterwerk GmbH",
    "projects.meisterwerk.description":
      "Analyse, Design, Implementierung und Testen der API. Integration und Automatisierung des Bestellprozesses beim Kunden.",

    // Examples Section
    "examples.analytics.title": "Analytics Dashboards",
    "examples.analytics.description": "Datenvisualisierung und Business Intelligence Lösungen",
    "examples.ecommerce.title": "E-Commerce Plattformen",
    "examples.ecommerce.description": "Vollständige Online-Shop Lösungen mit Zahlungsintegration",
    "examples.crm.title": "CRM Systeme",
    "examples.crm.description": "Kundenbeziehungsmanagement und Workflow-Automatisierung",

    // Showcase Section
    "showcase.badge": "Unsere Projekte",
    "showcase.title": "Erfolgreiche Lösungen in Aktion",
    "showcase.description":
      "Entdecken Sie einige unserer erfolgreich umgesetzten Projekte - von komplexen Datenvisualisierungen bis hin zu vollständigen E-Commerce-Plattformen.",
    "showcase.analytics.title": "Business Intelligence",
    "showcase.analytics.subtitle": "Datengetriebene Entscheidungen",
    "showcase.ecommerce.title": "E-Commerce Excellence",
    "showcase.ecommerce.subtitle": "Vollständige Online-Verkaufslösungen",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Custom Software Development",
    "hero.title": "Transform Your Business with",
    "hero.title.highlight": " Custom Solutions",
    "hero.description":
      "We craft bespoke web applications, landing pages, and CRM customizations that drive your business forward.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Our Services",
    "hero.location": "Bern, Switzerland",
    "hero.trusted": "Trusted by businesses",

    // Services Section
    "services.badge": "Our Expertise",
    "services.title": "Comprehensive Software Solutions",
    "services.description":
      "From stunning landing pages to complex enterprise applications, we deliver solutions that scale with your business needs.",

    "services.landing.title": "Landing Pages",
    "services.landing.description":
      "High-converting, responsive landing pages that capture leads and drive conversions.",
    "services.landing.feature1": "Mobile-first responsive design",
    "services.landing.feature2": "SEO optimized",
    "services.landing.feature3": "Fast loading times",
    "services.landing.feature4": "Conversion tracking",

    "services.webapp.title": "Custom Web Applications",
    "services.webapp.description":
      "Complex, scalable web applications tailored to your specific business requirements.",
    "services.webapp.feature1": "Full-stack development",
    "services.webapp.feature2": "Database design & optimization",
    "services.webapp.feature3": "API integrations",
    "services.webapp.feature4": "Cloud deployment",

    "services.crm.title": "CRM Dynamics 365",
    "services.crm.description": "Expert customizations and integrations for Microsoft Dynamics 365 CRM systems.",
    "services.crm.feature1": "Custom workflows",
    "services.crm.feature2": "Third-party integrations",
    "services.crm.feature3": "Data migration",
    "services.crm.feature4": "Training & support",

    // Process Section
    "process.badge": "Our Process",
    "process.title": "From Concept to Deployment",
    "process.description":
      "We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.",
    "process.step1.title": "Discovery & Planning",
    "process.step1.description": "We analyze your requirements and create a detailed project roadmap.",
    "process.step2.title": "Design & Development",
    "process.step2.description": "Our team crafts your solution using modern technologies and best practices.",
    "process.step3.title": "Testing & Launch",
    "process.step3.description": "Rigorous testing ensures quality before we deploy your solution.",

    // Why Choose Us
    "why.badge": "Why Code Chefs",
    "why.title": "Swiss Quality, Global Standards",
    "why.expert.title": "Expert Team",
    "why.expert.description":
      "Experienced developers with deep expertise in modern web technologies and enterprise solutions.",
    "why.fast.title": "Fast Delivery",
    "why.fast.description": "Agile development process ensures rapid delivery without compromising on quality.",
    "why.support.title": "Reliable Support",
    "why.support.description": "Ongoing maintenance and support to keep your applications running smoothly.",

    // About Section
    "about.badge": "About Code Chefs",
    "about.title": "Based in Beautiful Bern",
    "about.description":
      "Located in the heart of Switzerland, Code Chefs GmbH combines Swiss precision with cutting-edge technology to deliver exceptional software solutions. We serve clients locally and internationally, bringing Swiss quality standards to every project.",

    // Contact Section
    "contact.badge": "Get In Touch",
    "contact.title": "Ready to Start Your Project?",
    "contact.description": "Let's discuss how we can help transform your business with custom software solutions.",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.service": "Service Interest",
    "contact.form.service.placeholder": "Select a service",
    "contact.form.service.landing": "Landing Pages",
    "contact.form.service.webapp": "Custom Web Applications",
    "contact.form.service.crm": "CRM Dynamics 365",
    "contact.form.service.consultation": "General Consultation",
    "contact.form.message": "Project Details",
    "contact.form.message.placeholder": "Tell us about your project requirements...",
    "contact.form.submit": "Send Message",

    // Projects Section
    "projects.badge": "Our Work",
    "projects.title": "A Showcase of Our Projects",
    "projects.description": "Here is a selection of our work, demonstrating our commitment to quality and innovation.",
    "projects.bkw.title": "CRM Dynamics 365 Customizer / Azure Software Engineer at BKW",
    "projects.bkw.description":
      "Our first freelance contract. Our team works with a team of engineers to support the sales and support needs of BKW via their CRM Dynamics 365 Platform.",
    "projects.trachsuch.title": "trachsu.ch - Personal Landing Page",
    "projects.trachsuch.description":
      "A landing page we developed, which gave us ample opportunity to dive into the world of react, nextjs and vercel.",
    "projects.simpline.title": "Simpline Workflow System",
    "projects.simpline.description":
      "We created a web portal using .NET Core, Orchard.net CMS, Bootstrap, and MS-SQL. It was hosted on Azure and deployed with Azure DevOps.",
    "projects.immoscout.title": "Increased Deployment Frequency at ImmoScout24",
    "projects.immoscout.description":
      "Applying the DORA metrics and modern practices like CI/CD we increased the deployment frequency to production from 4 times per month to 200!",
    "projects.post.title": "Cloud Project at Post IT",
    "projects.post.description":
      "Analysis, design, implementation and testing of an App Service, Logic App, Functions and Lambdas. Purpose of the project was to compare services on AWS and Azure creating a Workflow System.",
    "projects.meisterwerk.title": "Automated Personal Debtcheck API from Intrum Justitia AG for Meisterwerk GmbH",
    "projects.meisterwerk.description":
      "Analysis, design, implementation and testing of the API. Integration and automation of the ordering process at the customer.",

    // Examples Section
    "examples.analytics.title": "Analytics Dashboards",
    "examples.analytics.description": "Data visualization and business intelligence solutions",
    "examples.ecommerce.title": "E-Commerce Platforms",
    "examples.ecommerce.description": "Complete online shop solutions with payment integration",
    "examples.crm.title": "CRM Systems",
    "examples.crm.description": "Customer relationship management and workflow automation",

    // Showcase Section
    "showcase.badge": "Our Projects",
    "showcase.title": "Successful Solutions in Action",
    "showcase.description":
      "Discover some of our successfully implemented projects - from complex data visualizations to complete e-commerce platforms.",
    "showcase.analytics.title": "Business Intelligence",
    "showcase.analytics.subtitle": "Data-driven decision making",
    "showcase.ecommerce.title": "E-Commerce Excellence",
    "showcase.ecommerce.subtitle": "Complete online sales solutions",

    // Footer
    "footer.rights": "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de") // German as default

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["de"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
