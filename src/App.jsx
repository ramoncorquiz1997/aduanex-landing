import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Layers,
  FileCheck,
  MousePointerClick,
  FastForward,
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Activity,
  Clock3,
  FolderKanban,
  FileText,  Mail,
  Phone,
  Building2,
  MessageCircle,
} from 'lucide-react';

const navItems = [
  { key: 'solucion', label: 'Solucion' },
  { key: 'cumplimiento', label: 'Cumplimiento' },
  { key: 'operacion', label: 'Operacion' },
  { key: 'expedientes', label: 'Expedientes' },];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('solucion');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToPage = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Logo = ({ variant = 'header' }) => (
    <div className="flex items-center">
      <img
        src="/horizontal_nofondo.png"
        alt="Logo Aduanex"
        className={
          variant === 'footer'
            ? 'w-[240px] sm:w-[300px] lg:w-[340px] h-auto object-contain'
            : 'w-[170px] sm:w-[210px] lg:w-[240px] h-auto object-contain'
        }
      />
    </div>
  );

  const navLinkClass = (page) =>
    `font-bold transition-colors ${
      activePage === page ? 'text-[#3B6334]' : 'text-slate-600 hover:text-[#3B6334]'
    }`;

  const renderSolucion = () => (
    <>
      <section className="pt-32 lg:pt-48 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#3B6334] text-xs font-black uppercase tracking-widest shadow-sm">
              <MousePointerClick size={14} />
              <span>Control Operativo Total</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#1A1C2E] leading-[1.1] tracking-tight">
              Simplifica tu operacion aduanal de <span className="text-[#3B6334]">Punta a Punta.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Elimina cuellos de botella, estandariza procesos y recupera el control de tus expedientes con una plataforma logica y facil de usar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => goToPage('contacto')}
                className="w-full sm:w-auto px-10 py-4 bg-[#1A1C2E] text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1"
              >
                Solicita tu demo <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => goToPage('operacion')}
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#1A1C2E] border-2 border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
              >
                Conoce el flujo
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative">
            <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Aduanex Dashboard</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-black text-[#1A1C2E] text-lg">Referencia: REF-AD-2024</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Importacion Definitiva</p>
                  </div>
                  <span className="px-4 py-1.5 bg-green-100 text-[#3B6334] text-xs font-black rounded-xl flex items-center gap-1.5 uppercase border border-green-200">
                    <CheckCircle2 size={14} /> Validado
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 shadow-inner">
                    <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase mb-2">
                      <span>Progreso del Despacho</span>
                      <span className="text-[#3B6334]">75%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3B6334] w-[75%]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col gap-1">
                      <span className="text-[10px] font-black text-blue-600 uppercase">Estatus Actual</span>
                      <span className="text-sm font-bold text-blue-900">Modulacion</span>
                    </div>
                    <div className="p-4 bg-green-50/50 rounded-2xl border border-green-100 flex flex-col gap-1">
                      <span className="text-[10px] font-black text-[#3B6334] uppercase">Expediente</span>
                      <span className="text-sm font-bold text-green-900">Completo (12/12)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100/50 to-blue-50/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[#3B6334] font-black tracking-[0.2em] uppercase text-sm italic">Cero Complicaciones</h2>
            <p className="text-4xl md:text-5xl font-black text-[#1A1C2E] tracking-tight">La simplificacion que necesitas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FastForward size={32} />,
                title: 'Flujos Logicos',
                desc: 'Disenado para seguir el orden real de la operacion aduanera, evitando recapturas innecesarias y redundancia de datos.',
              },
              {
                icon: <FileCheck size={32} />,
                title: 'Validacion por Paso',
                desc: 'El sistema asegura la integridad del Anexo 22 antes de permitir avanzar al siguiente modulo.',
              },
              {
                icon: <Layers size={32} />,
                title: 'Expediente Digital',
                desc: 'Documentacion centralizada, indexada y accesible para auditorias rapidas y eficientes.',
              },
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border-2 border-transparent hover:border-green-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#1A1C2E] shadow-sm mb-8 group-hover:bg-[#3B6334] group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#1A1C2E] mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderCumplimiento = () => (
    <section className="pt-32 lg:pt-44 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#3B6334] text-xs font-black uppercase tracking-widest shadow-sm">
            <ShieldCheck size={14} />
            <span>Cumplimiento Aduanero</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1C2E] leading-tight">Valida antes de despachar y reduce riesgos operativos.</h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">Centraliza reglas de negocio, checklist documental y trazabilidad por expediente para evitar multas y retrasos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <ClipboardCheck className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Checklist por etapa</h3>
            <p className="text-slate-500">Validaciones obligatorias por modulo para no avanzar con datos incompletos.</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <AlertTriangle className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Alertas preventivas</h3>
            <p className="text-slate-500">Deteccion temprana de inconsistencias antes de que afecten el despacho.</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <FileCheck className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Evidencia auditable</h3>
            <p className="text-slate-500">Historial de cambios, responsables y soporte documental listo para auditoria.</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderOperacion = () => (
    <section className="pt-32 lg:pt-44 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <Activity size={14} />
            <span>Operacion diaria</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1C2E] leading-tight">Control operativo en tiempo real.</h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">Visualiza prioridades del dia, cuellos de botella y avance por modulo desde un solo tablero.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <Clock3 className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Tiempos y SLA</h3>
            <p className="text-slate-500">Medicion por etapa para detectar retrasos y priorizar lo urgente.</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <Activity className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Semaforos de riesgo</h3>
            <p className="text-slate-500">Indicadores visuales para actuar rapido en operaciones sensibles.</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <CheckCircle2 className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Seguimiento por responsable</h3>
            <p className="text-slate-500">Claridad sobre quien tiene cada tarea y que falta por cerrar.</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderExpedientes = () => (
    <section className="pt-32 lg:pt-44 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <FolderKanban size={14} />
            <span>Expedientes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1C2E] leading-tight">Expediente digital completo y ordenado.</h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">Concentra documentos, evidencia y validaciones en un solo lugar con busqueda rapida por referencia.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <FileText className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Documentos centralizados</h3>
            <p className="text-slate-500">Toda la documentacion del despacho en un expediente unico.</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <ClipboardCheck className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Checklist completo</h3>
            <p className="text-slate-500">Control de requisitos por tipo de operacion y aduana.</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <ShieldCheck className="text-[#3B6334] mb-4" size={28} />
            <h3 className="text-2xl font-black text-[#1A1C2E] mb-2">Trazabilidad total</h3>
            <p className="text-slate-500">Versionado y registro de cambios para auditoria interna y externa.</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContacto = () => (
    <section className="pt-32 lg:pt-44 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-10 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1C2E] leading-tight">Solicita tu demo</h1>
          <p className="mt-4 text-lg text-slate-500">Cuéntanos tu operacion y te mostramos una demo enfocada en tu flujo real.</p>

          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Nombre" className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#3B6334]" />
            <input type="email" placeholder="Correo empresarial" className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#3B6334]" />
            <input type="text" placeholder="Empresa" className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#3B6334]" />
            <textarea rows="4" placeholder="Cuéntanos tu necesidad" className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#3B6334]"></textarea>
            <button type="button" className="w-full bg-[#1A1C2E] text-white py-3.5 rounded-xl font-bold hover:bg-[#3B6334] transition-colors">
              Agendar demo
            </button>
            <a
              href="https://wa.me/526461093694?text=Hola%20Aduanex%2C%20quiero%20agendar%20una%20demo."
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold hover:bg-[#20ba5a] transition-colors"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
          </form>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <Mail className="text-[#3B6334] mb-3" size={24} />
            <p className="text-sm uppercase tracking-widest text-slate-400 font-bold">Correo</p>
            <p className="text-lg font-bold text-[#1A1C2E]">contacto@aduanex.app</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <Phone className="text-[#3B6334] mb-3" size={24} />
            <p className="text-sm uppercase tracking-widest text-slate-400 font-bold">Telefono</p>
            <p className="text-lg font-bold text-[#1A1C2E]">+52 646 109 3694</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <Building2 className="text-[#3B6334] mb-3" size={24} />
            <p className="text-sm uppercase tracking-widest text-slate-400 font-bold">Cobertura</p>
            <p className="text-lg font-bold text-[#1A1C2E]">Operaciones en Mexico y comercio exterior</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderActivePage = () => {
    if (activePage === 'cumplimiento') return renderCumplimiento();
    if (activePage === 'operacion') return renderOperacion();
    if (activePage === 'expedientes') return renderExpedientes();
    if (activePage === 'contacto') return renderContacto();
    return renderSolucion();
  };

  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC] text-slate-900 overflow-x-hidden transition-colors duration-300">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
          <button onClick={() => goToPage('solucion')} className="text-left" aria-label="Ir a solucion">
            <Logo />
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => goToPage(item.key)} className={navLinkClass(item.key)}>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goToPage('contacto')}
              className="bg-[#1A1C2E] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#3B6334] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/10"
            >
              Solicita tu demo
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-[#1A1C2E] rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-3 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => goToPage(item.key)}
                className="text-lg font-bold text-left text-slate-700 p-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goToPage('contacto')}
              className="bg-[#1A1C2E] text-white py-4 rounded-2xl font-black text-lg mt-2 active:scale-95 transition-transform"
            >
              Solicita tu demo
            </button>
          </div>
        )}
      </nav>

      {renderActivePage()}

      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
          <Logo variant="footer" />
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => goToPage(item.key)}
                className="text-sm font-bold text-slate-400 hover:text-[#1A1C2E] uppercase tracking-widest transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goToPage('contacto')}
              className="text-sm font-bold text-slate-400 hover:text-[#1A1C2E] uppercase tracking-widest transition-colors"
            >
              Contacto
            </button>
          </nav>
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">{new Date().getFullYear()} ADUANEX. Simplificacion Aduanal Inteligente.</p>
            <p className="text-slate-300 text-[9px] font-bold">Hecho en Mexico para el mundo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

