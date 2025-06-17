import { LanguageProvider } from "../contexts/language-context"
import Component from "../landing-page"

export default function Page() {
  return (
    <LanguageProvider>
      <Component />
    </LanguageProvider>
  )
}
