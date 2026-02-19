export default function Footer() {
  return (
    <footer className="bg-neutral/30 dark:bg-black/20 pt-20 pb-10 px-6 mt-12 border-t border-dark-accent/10 dark:border-white/5" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-10 md:p-16 shadow-lg border border-neutral/20 dark:border-white/5 mb-16 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-dark-accent dark:text-white">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            I am available for professional inquiries, collaborations, or any questions regarding my projects. Feel free to reach out via email.
          </p>
          <a className="inline-block px-8 py-4 bg-dark-accent text-white dark:bg-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg" href="mailto:elianapinargote3@outlook.es">
            Send Email
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-dark-accent/10 dark:border-white/10 pt-10">
          <div className="mb-6 md:mb-0 text-left">
            <h4 className="font-display font-bold text-xl text-dark-accent dark:text-white">Eliana Pinargote</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Software Engineer Student at EPN</p>
          </div>
          
          <div className="flex space-x-6">
            <a className="text-dark-accent/70 hover:text-primary dark:text-white/70 dark:hover:text-primary transition-colors transform hover:-translate-y-1 block p-2 bg-white dark:bg-white/10 rounded-full shadow-sm" 
            href="https://www.linkedin.com/in/eliana-pinargote/"
            target="_blank" 
            rel="noopener noreferrer"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
              </svg>
            </a>
            
            <a 
              className="text-dark-accent/70 hover:text-primary dark:text-white/70 dark:hover:text-primary transition-colors transform hover:-translate-y-1 block p-2 bg-white dark:bg-white/10 rounded-full shadow-sm" 
              href="https://github.com/eli03pz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
              </svg>
            </a>

          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400 dark:text-gray-600">
          © 2026 Eliana Pinargote. All rights reserved.
        </div>
      </div>
    </footer>
  );
}