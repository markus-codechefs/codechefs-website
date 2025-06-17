"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Settings, MapPin, Mail, CheckCircle, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./contexts/language-context"
import { LanguageSwitcher } from "./components/language-switcher"
import { useState } from 'react';

export default function Component() {
  const { t } = useLanguage()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string|null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id || e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFeedback('Thank you for your message! We will get back to you soon.');
        setForm({ firstName: '', lastName: '', email: '', company: '', service: '', message: '' });
      } else {
        setFeedback('Sorry, there was an error sending your message. Please try again later.');
      }
    } catch {
      setFeedback('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Code className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">Code Chefs</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.services")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.about")}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    {t("hero.badge")}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                    <span className="text-primary">{t("hero.title.highlight")}</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contact">{t("hero.cta.primary")}</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">{t("hero.cta.secondary")}</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{t("hero.location")}</span>
                  </div>
                  <div className="flex items-center gap-1"></div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/bern-switzerland.png"
                  width="600"
                  height="400"
                  alt="Beautiful Bern, Switzerland cityscape"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">{t("services.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("services.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("services.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("services.landing.title")}</CardTitle>
                  <CardDescription>{t("services.landing.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.landing.feature1")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.landing.feature2")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.landing.feature3")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.landing.feature4")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("services.webapp.title")}</CardTitle>
                  <CardDescription>{t("services.webapp.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.webapp.feature1")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.webapp.feature2")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.webapp.feature3")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.webapp.feature4")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Settings className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("services.crm.title")}</CardTitle>
                  <CardDescription>{t("services.crm.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.crm.feature1")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.crm.feature2")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("services.crm.feature3")}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            {/* Service Examples */}
            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <Image
                    src="/images/analytics-dashboard.png"
                    width="400"
                    height="300"
                    alt="Analytics Dashboard"
                    className="rounded-lg shadow-lg object-cover w-full h-48"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{t("examples.analytics.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("examples.analytics.description")}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Image
                    src="/images/ecommerce-dashboard.png"
                    width="400"
                    height="300"
                    alt="E-commerce Platform"
                    className="rounded-lg shadow-lg object-cover w-full h-48"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{t("examples.ecommerce.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("examples.ecommerce.description")}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Image
                    src="/images/crm-interface.png"
                    width="400"
                    height="300"
                    alt="CRM System Interface"
                    className="rounded-lg shadow-lg object-cover w-full h-48"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{t("examples.crm.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("examples.crm.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline">{t("showcase.badge")}</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("showcase.title")}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{t("showcase.description")}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/analytics-dashboard.png"
                    width="600"
                    height="400"
                    alt="Advanced Analytics Dashboard"
                    className="object-cover w-full h-64 transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{t("showcase.analytics.title")}</h3>
                    <p className="text-sm opacity-90">{t("showcase.analytics.subtitle")}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/ecommerce-dashboard.png"
                    width="600"
                    height="400"
                    alt="E-commerce Management Platform"
                    className="object-cover w-full h-64 transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{t("showcase.ecommerce.title")}</h3>
                    <p className="text-sm opacity-90">{t("showcase.ecommerce.subtitle")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline">{t("process.badge")}</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("process.title")}</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("process.description")}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("process.step1.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("process.step1.description")}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("process.step2.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("process.step2.description")}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("process.step3.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("process.step3.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/images/data-visualization.png"
                width="550"
                height="400"
                alt="Data visualization and system charts"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">{t("why.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("why.title")}</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{t("why.expert.title")}</h3>
                <p className="text-muted-foreground">{t("why.expert.description")}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{t("why.fast.title")}</h3>
                <p className="text-muted-foreground">{t("why.fast.description")}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{t("why.support.title")}</h3>
                <p className="text-muted-foreground">{t("why.support.description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <Image
                src="/images/team-collaboration.png"
                width="550"
                height="400"
                alt="CodeChefs team collaboration in Bern"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline">{t("about.badge")}</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("about.title")}</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("about.description")}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{t("hero.location")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium">markus@codechefs.ch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">{t("contact.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.form.title")}</CardTitle>
                  <CardDescription>{t("contact.form.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          {t("contact.form.firstName")}
                        </label>
                        <Input id="firstName" value={form.firstName} onChange={handleChange} placeholder={t("contact.form.firstName")}
                          required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          {t("contact.form.lastName")}
                        </label>
                        <Input id="lastName" value={form.lastName} onChange={handleChange} placeholder={t("contact.form.lastName")}
                          required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t("contact.form.email")}
                      </label>
                      <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder={t("contact.form.email")}
                        required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        {t("contact.form.company")}
                      </label>
                      <Input id="company" value={form.company} onChange={handleChange} placeholder={t("contact.form.company")} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        {t("contact.form.service")}
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">{t("contact.form.service.placeholder")}</option>
                        <option value="landing-pages">{t("contact.form.service.landing")}</option>
                        <option value="web-apps">{t("contact.form.service.webapp")}</option>
                        <option value="crm-dynamics">{t("contact.form.service.crm")}</option>
                        <option value="consultation">{t("contact.form.service.consultation")}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t("contact.form.message.placeholder")}
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Sending...' : t("contact.form.submit")}
                    </Button>
                    {feedback && <div className="text-center text-sm mt-2">{feedback}</div>}
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">{t("contact.direct")}</p>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:markus@codechefs.ch" className="text-primary hover:underline font-medium">
                    markus@codechefs.ch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Code Chefs GmbH. {t("footer.rights")}
          </p>
        </div>
        <div className="sm:ml-auto flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{t("hero.location")}</span>
          </div>
          <a href="mailto:markus@codechefs.ch" className="text-xs text-muted-foreground hover:underline">
            markus@codechefs.ch
          </a>
        </div>
      </footer>
    </div>
  )
}
