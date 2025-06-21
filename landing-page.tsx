"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Settings, MapPin, Mail, CheckCircle, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./contexts/language-context"
import { LanguageSwitcher } from "./components/language-switcher"

export default function Component() {
  const { t } = useLanguage()

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
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.projects")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline">
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
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit mx-auto lg:mx-0">
                    {t("hero.badge")}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                    <span className="text-primary">{t("hero.title.highlight")}</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">{t("hero.description")}</p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="#contact">{t("hero.cta.primary")}</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">{t("hero.cta.secondary")}</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{t("hero.location")}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center order-first lg:order-last">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl"></div>
                  <Image
                    src="/images/bern-switzerland.png"
                    width="600"
                    height="400"
                    alt="Beautiful Bern, Switzerland cityscape"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge variant="outline">{t("services.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("services.title")}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("services.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 py-16 lg:grid-cols-3 lg:gap-8">
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle>{t("services.landing.title")}</CardTitle>
                  <CardDescription>{t("services.landing.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.landing.feature1")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.landing.feature2")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.landing.feature3")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.landing.feature4")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Code className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle>{t("services.webapp.title")}</CardTitle>
                  <CardDescription>{t("services.webapp.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.webapp.feature1")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.webapp.feature2")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.webapp.feature3")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.webapp.feature4")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Settings className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle>{t("services.crm.title")}</CardTitle>
                  <CardDescription>{t("services.crm.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.crm.feature1")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.crm.feature2")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.crm.feature3")}
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {t("services.crm.feature4")}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge variant="outline">{t("projects.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("projects.title")}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("projects.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 py-16 lg:grid-cols-2 lg:gap-8">
              <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t("projects.bkw.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("projects.bkw.description")}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t("projects.trachsuch.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("projects.trachsuch.description")}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t("projects.simpline.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("projects.simpline.description")}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t("projects.immoscout.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("projects.immoscout.description")}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t("projects.post.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("projects.post.description")}</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t("projects.meisterwerk.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("projects.meisterwerk.description")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge variant="outline">{t("process.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("process.title")}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("process.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 py-16 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="grid gap-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{t("process.step1.title")}</h3>
                    <p className="text-muted-foreground">{t("process.step1.description")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{t("process.step2.title")}</h3>
                    <p className="text-muted-foreground">{t("process.step2.description")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{t("process.step3.title")}</h3>
                    <p className="text-muted-foreground">{t("process.step3.description")}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl"></div>
                <Image
                  src="/images/data-visualization.png"
                  width="550"
                  height="400"
                  alt="Data visualization and system charts"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge variant="outline">{t("why.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("why.title")}</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 py-16 lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col items-center space-y-6 text-center p-6 rounded-lg hover:bg-white/50 transition-colors">
                <div className="p-4 rounded-full bg-primary/10">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("why.expert.title")}</h3>
                <p className="text-muted-foreground">{t("why.expert.description")}</p>
              </div>
              <div className="flex flex-col items-center space-y-6 text-center p-6 rounded-lg hover:bg-white/50 transition-colors">
                <div className="p-4 rounded-full bg-primary/10">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("why.fast.title")}</h3>
                <p className="text-muted-foreground">{t("why.fast.description")}</p>
              </div>
              <div className="flex flex-col items-center space-y-6 text-center p-6 rounded-lg hover:bg-white/50 transition-colors">
                <div className="p-4 rounded-full bg-primary/10">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("why.support.title")}</h3>
                <p className="text-muted-foreground">{t("why.support.description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr] items-center">
              <div className="relative order-first lg:order-last">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl"></div>
                <Image
                  src="/images/team-collaboration.png"
                  width="550"
                  height="400"
                  alt="CodeChefs team collaboration in Bern"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6 order-last lg:order-first">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">{t("about.badge")}</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("about.title")}</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("about.description")}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{t("hero.location")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium">info@codechefs.ch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge variant="outline">{t("contact.badge")}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-16">
              <div className="text-center">
                <Button size="lg" asChild className="mx-auto hover:scale-105 transition-transform">
                  <a href="mailto:info@codechefs.ch">
                    <Mail className="mr-2 h-4 w-4" />
                    {t("contact.form.submit")}
                  </a>
                </Button>
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
          <a href="mailto:info@codechefs.ch" className="text-xs text-muted-foreground hover:underline">
            info@codechefs.ch
          </a>
        </div>
      </footer>
    </div>
  )
}
