import { Reveal } from '../../ui/Reveal';

export function Leadership() {
  return (
    <section className="py-section-margin bg-surface-container">
      <div className="max-w-[1440px] mx-auto px-8">
        <span className="eyebrow">Leadership</span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-16">Architects of Vision.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-outline-variant/30 gap-0 mt-12">
          
          <div className="border-r border-b border-outline-variant/30 p-8 md:p-12 hover:bg-accent/[0.01] transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start bg-surface rounded-none">
            <div className="w-full sm:w-[160px] shrink-0 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-outline-variant/20">
              <img 
                alt="Kaushik Jariwala" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNA0orb9dutEdesAXXNWtdZ_a-7G7ESoqUQN0KuLmVlNByS5uBmd3AoPHWLR74pcphuqeho1ZWFmrhdWVRCpg7KWYHM859qfXksEwaFuG6kXHmW-BRcqn--VVEJckX9dyqzwBsQtowIRAlsltyllywydTVMWAlANNy8OL-3K4m14ux6cZAerU4k_WKBrpey5ZSaH8j9lJIuEXWXsxPIKdac9fKywKbmgcpYmeS5WVYsPkeJ2ccTxlECS0h5ZfsZ6RyFQfH09pDvEg"
              />
            </div>
            <div className="flex-1 pt-2">
              <h4 className="font-headline text-2xl font-bold mb-1 text-on-surface">Kaushik Jariwala</h4>
              <p className="font-label-caps text-[11px] text-accent tracking-[0.15em] uppercase mb-4">Founder & Managing Director</p>
              <p className="text-sm text-secondary leading-relaxed mb-6">A pioneer in electrical infrastructure with over three decades of strategic leadership.</p>
              <a className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-accent hover:gap-4 transition-all" href="#">
                BIOGRAPHY <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="border-r border-b border-outline-variant/30 p-8 md:p-12 hover:bg-accent/[0.01] transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start bg-surface rounded-none">
            <div className="w-full sm:w-[160px] shrink-0 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-outline-variant/20">
              <img 
                alt="Lilam Shah" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtmgSKgR2SfTjMkvtHU9BbRy7blL2Z0lsU9PhffKUctZ8hwwR3cVV7HHN9zJMn3lNcKx3A7bGoXouL8QfTELGjsBDKLfeqne4Qm1-3-EfnwVjAOjigsDu-bI9g3PQJBfGLxYPqiLA4eD62zDJwHIVjJjhWgujbFRFjgr-vj9cC7WunTU6hoIoJIXXz-4TrBGbweTQ2IAabmKdX06POFI0UU0XiXogEeRnf-XFO9lkadnWVXcvNyVpDtpjL0wKrFjpxQGPCFi-FOMQ"
              />
            </div>
            <div className="flex-1 pt-2">
              <h4 className="font-headline text-2xl font-bold mb-1 text-on-surface">Lilam Shah</h4>
              <p className="font-label-caps text-[11px] text-accent tracking-[0.15em] uppercase mb-4">Director - Technical</p>
              <p className="text-sm text-secondary leading-relaxed mb-6">Driving technical innovation and ensuring the highest standards across global projects.</p>
              <a className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-accent hover:gap-4 transition-all" href="#">
                BIOGRAPHY <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
