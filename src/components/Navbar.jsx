export default function Navbar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 py-6 px-8 backdrop-blur-md bg-white/30 dark:bg-black/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-wider uppercase text-primary">EP</div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-dark-accent/80 dark:text-neutral/80">
          <a className="hover:text-primary transition-colors" href="#hero">Principal</a>
          <a className="hover:text-primary transition-colors" href="#about">About</a>
          <a className="hover:text-primary transition-colors" href="#projects">Portfolio</a>
          <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        
        <button 
          aria-label="Toggle dark mode" 
          className="p-2 rounded-full hover:bg-neutral/20 dark:hover:bg-neutral/10 transition-colors" 
          onClick={toggleDarkMode}
        >
          <span className="material-icons-outlined block dark:hidden text-dark-accent">dark_mode</span>
          <span className="material-icons-outlined hidden dark:block text-secondary">light_mode</span>
        </button>
      </div>
    </nav>
  );
}