import eliFoto from '../assets/CV-Eli.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden" id="hero">
      <div className="absolute top-20 right-0 w-96 h-96 bg-tertiary/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 dark:bg-secondary/10 text-dark-accent dark:text-secondary text-xs font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-dark-accent dark:text-neutral">
            Eliana <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pinargote</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-accent/70 dark:text-neutral/70 max-w-md mx-auto md:mx-0 font-light italic">
            Crafting digital experiences with code and creativity.
          </p>
          <div className="pt-6 flex justify-center md:justify-start gap-4">
            <a className="group relative px-6 py-3 bg-primary text-white rounded-full overflow-hidden shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:-translate-y-1" href="#projects">
              <span className="relative z-10 font-medium">View Work</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a className="px-6 py-3 border border-dark-accent/20 dark:border-neutral/20 rounded-full hover:bg-dark-accent/5 dark:hover:bg-neutral/5 transition-colors" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-full">
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-tertiary to-primary rounded-full float-animation shadow-xl opacity-80 z-20"></div>
            <div className="absolute -left-6 bottom-12 w-16 h-16 bg-secondary rounded-lg rotate-12 float-animation shadow-lg z-20" style={{ animationDelay: '1s' }}></div>
            <div className="w-full h-full bg-neutral dark:bg-card-dark rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white dark:border-gray-700 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out">
              <img alt="Eliana Pinargote Profile" className="w-full h-full object-cover" src={eliFoto}/>
            </div>
            <div className="absolute -bottom-10 -right-4 bg-white dark:bg-card-dark p-4 rounded-xl shadow-lg z-30 max-w-[150px] transform rotate-3">
              <p className="text-xs font-handwriting text-dark-accent dark:text-neutral">Software Engineer in progress ✨</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}