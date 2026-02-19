import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 py-6 px-8 backdrop-blur-md bg-white/30 dark:bg-black/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-wider uppercase text-primary">
          EP
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-dark-accent/80 dark:text-neutral/80">
          <a className="hover:text-primary transition-colors" href="#hero">
            {t("nav_home")}
          </a>
          <a className="hover:text-primary transition-colors" href="#about">
            {t("nav_about")}
          </a>
          <a className="hover:text-primary transition-colors" href="#projects">
            {t("nav_portfolio")}
          </a>
          <a className="hover:text-primary transition-colors" href="#contact">
            {t("nav_contact")}
          </a>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-xs font-bold border border-dark-accent dark:border-white rounded-full hover:bg-dark-accent hover:text-white transition-all mr-4"
          >
            {i18n.language === "en" ? "ES ES" : "EN US"}
          </button>

          <button
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-neutral/20 dark:hover:bg-neutral/10 transition-colors"
            onClick={toggleDarkMode}
          >
            <span className="material-icons-outlined block dark:hidden text-dark-accent">
              dark_mode
            </span>
            <span className="material-icons-outlined hidden dark:block text-secondary">
              light_mode
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
