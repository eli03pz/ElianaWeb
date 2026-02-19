export default function About() {
  return (
    <section className="py-24 px-6 bg-tertiary/10 dark:bg-white/5" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-dark-accent dark:text-neutral relative inline-block w-full">
          About Me
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
        </h2>
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 md:p-12 shadow-xl border border-neutral/20 dark:border-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-neutral dark:bg-gray-800 rounded-2xl overflow-hidden relative group">
                <img alt="Coding workspace setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsKMB9leBipamThwU9dgI2X9e8eMoFYQc1vMiCSYaas150StqqrMYgbE1Wxc8jJQUm0L_lQTGHV4jMaJk8Li8E6pvVzeCl35yY8uqocg-KIyUTrajwlLvIgzhEloJxh7I4aLyloeXFQKWKfD2jIFSgaVTO7uHPjqFRhoA-I0DAqxiho2TuoYHMqMni4cbMPQdnGhidaZZvJo3hjdeM32kvUD9gKZVb1We1stqz_NeVQOLOqJTY8Q2jDI0YX7CDR4zhoPNLzRaKSx9a" />
                <div className="absolute inset-0 bg-dark-accent/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  Developer Life
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl leading-snug text-dark-accent dark:text-white">
                I'm a <span className="text-primary italic">Software Engineering Student</span>
              </h3>
              <p className="text-lg md:text-xl text-dark-accent/80 dark:text-neutral/80 font-light">
                ...and a web developer in my free time.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Passionate about building intuitive and dynamic user experiences. I bridge the gap between engineering logic and creative design to solve real-world problems. Currently exploring new technologies and building projects that matter.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">React</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">Tailwind</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">Node.js</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">UI/UX</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">Java</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">Figma</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">Python</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">HTML5</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">CSS3</span>
                <span className="px-3 py-1 bg-tertiary/20 dark:bg-tertiary/10 text-dark-accent dark:text-tertiary text-xs rounded-full font-medium">Git/GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}