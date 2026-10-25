'use client';
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#424769] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#676f9d]/20 to-[#2d3250]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#f9b17a]/20 to-[#676f9d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#2d3250]/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#676f9d]/20 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-[#f9b17a]/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#676f9d]/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f9b17a] to-transparent rotate-45 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#676f9d] to-transparent -rotate-45 origin-bottom-right"></div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-8 px-6 relative z-10">
        <div className="space-y-4">
          {/* Decorative element above title */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#f9b17a] to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#f9b17a] rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-[#ffffff] animate-fadeIn">
            Anh Chau
          </h1>
          <p className="text-2xl md:text-3xl text-[#f9b17a] font-semibold animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer
          </p>
          <p className="text-lg text-[#ffffff]/70 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            React, TypeScript, Node.js and PHP. Web platforms, APIs and data pipelines on AWS.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <a 
            href="/projects" 
            className="group px-8 py-4 bg-[#f9b17a] hover:bg-[#ff9d5c] rounded-xl text-[#2d3250] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f9b17a]/30 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              View Experience
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a 
            href="mailto:anhchau8922@gmail.com" 
            className="px-8 py-4 bg-[#2d3250] border-2 border-[#676f9d] hover:border-[#f9b17a] rounded-xl text-[#ffffff] font-semibold hover:bg-[#676f9d]/20 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex gap-x-6 gap-y-2 justify-center flex-wrap text-[#ffffff]/75 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://linkedin.com/in/anh-kim-chau" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#f9b17a] transition-colors relative group"
          >
            <span>LinkedIn</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f9b17a] group-hover:w-full transition-all duration-300"></span>
          </a>
          <span aria-hidden="true">•</span>
          <a 
            href="mailto:anhchau8922@gmail.com"
            className="hover:text-[#f9b17a] transition-colors relative group"
          >
            <span>Email</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f9b17a] group-hover:w-full transition-all duration-300"></span>
          </a>
          <span aria-hidden="true">•</span>
          <a 
            href="https://github.com/anh-8922" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#f9b17a] transition-colors relative group"
          >
            <span>GitHub</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f9b17a] group-hover:w-full transition-all duration-300"></span>
          </a>
          <span aria-hidden="true">•</span>
          <span>Greater London</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-float {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </main>
  )
}