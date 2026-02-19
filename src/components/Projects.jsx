import magnusVideo from '../assets/Magnus.mp4';
import disaccortVideo from '../assets/Disaccort.mp4';

export default function Projects() {
  return (
    <section className="py-24 px-6 relative" id="projects">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-dark-accent dark:text-neutral">Featured Projects</h2>
        </div>

        {/* Project 1 */}
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-tertiary/30 to-neutral/30 dark:from-tertiary/10 dark:to-neutral/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-card-light dark:bg-card-dark border border-neutral/30 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="h-px flex-1 bg-primary"></span>
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">01</span>
                </div>
                <h3 className="font-display text-4xl font-bold text-dark-accent dark:text-white">Magnus Audit</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Development of the digital presence for Magnus Audit, an auditing and financial services firm. The project involved creating their official website, implementing an optimized structure to enhance online visibility and strengthen client communication through modern web tools.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="material-icons-outlined text-primary text-sm mr-2">check_circle</span>
                    Figma Design & Interactive Prototyping
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="material-icons-outlined text-primary text-sm mr-2">check_circle</span>
                    WordPress Development & Deployment
                  </li>
                </ul>
                <div className="pt-4">
                  <a className="inline-flex items-center text-dark-accent dark:text-white font-medium hover:text-primary dark:hover:text-primary transition-colors" href="https://www.magnusauditec.com/">
                    View Live Project <span className="material-icons-outlined ml-2 text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 group-hover:translate-y-[-5px] transition-transform duration-500">
                <div className="aspect-video w-full relative rounded-t-2xl overflow-hidden bg-black">
                  <video 
                    className="w-full h-full object-cover"
                    src={magnusVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>

                <div className="bg-gray-900/5 dark:bg-white/5 p-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-500">magnus-audit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-l from-secondary/30 to-tertiary/30 dark:from-secondary/10 dark:to-tertiary/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="bg-card-light dark:bg-card-dark border border-neutral/30 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Contenedor del Video */}
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg bg-black group-hover:translate-y-[-5px] transition-transform duration-500">
                <div className="aspect-video w-full relative">
                  <video 
                    className="w-full h-full object-cover"
                    src={disaccortVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
                
                {/* Barra superior estilo navegador */}
                <div className="bg-gray-900/5 dark:bg-white/5 p-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-500">disaccort.app</div>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-secondary font-bold text-sm uppercase tracking-wider">02</span>
                  <span className="h-px flex-1 bg-secondary"></span>
                </div>
                <h3 className="font-display text-4xl font-bold text-dark-accent dark:text-white">Disaccort</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Disaccort specializes in the installation of a wide variety of curtains and window treatments, offering elegant and functional solutions for any space. We designed their website to showcase their expertise and commitment to quality, building trust and assuring clients they are working with true industry professionals.
                </p>
                <div className="pt-4">
                  <a 
                    className="inline-flex items-center text-dark-accent dark:text-white font-medium hover:text-secondary dark:hover:text-secondary transition-colors" 
                    href="https://jhairzp27.github.io/Disaccort/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project <span className="material-icons-outlined ml-2 text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}