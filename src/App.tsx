import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  LineChart,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Store,
  Target,
  Wrench
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <BarChart3 className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Falak Soft Solution</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
            Get a Free Quote
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/workspace/1920/1080?blur=4')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-slate-50" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Top Digital Marketing Agency in Pakistan
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
              Grow Your Local Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Proven Digital Marketing</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Falak Soft Solution provides affordable digital marketing services for local businesses in Pakistan. From local SEO to website development, we help shops, clinics, and restaurants get more customers online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
                View Pricing Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Digital Marketing Services for Local Businesses</h2>
              <p className="text-lg text-slate-600">We offer everything you need to establish a strong online presence and attract more local customers in Pakistan.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Website Development",
                  description: "Professional website development services in Pakistan. We build fast, mobile-friendly, and conversion-optimized websites for your business.",
                  icon: <MonitorSmartphone className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Local SEO Services",
                  description: "Rank higher on Google for local searches. Our local SEO services in Pakistan ensure customers find you when they search for your services nearby.",
                  icon: <MapPin className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Social Media Marketing",
                  description: "Engaging social media marketing for businesses. We manage your Facebook, Instagram, and LinkedIn to build brand awareness and loyalty.",
                  icon: <Smartphone className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Google Business Profile",
                  description: "Complete Google Business Profile optimization. We help you stand out in Google Maps and local search results with optimized listings and reviews.",
                  icon: <Store className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Website Maintenance",
                  description: "Keep your website secure, updated, and running smoothly with our reliable ongoing website maintenance and support packages.",
                  icon: <Wrench className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Technical SEO",
                  description: "Improve your website's technical health. We fix crawl errors, improve site speed, and ensure search engines can index your site perfectly.",
                  icon: <Settings className="w-6 h-6 text-blue-600" />
                }
              ].map((service, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all group">
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section id="pricing" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Packages</h2>
              <p className="text-lg text-slate-400">Affordable digital marketing agency pricing tailored for local businesses in Pakistan. No hidden fees.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter */}
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Starter Package</h3>
                  <p className="text-slate-400 text-sm h-10">Best for small shops and new businesses starting online.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">Rs 25,000</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Basic Website (Up to 5 Pages)",
                    "Google Business Profile Setup",
                    "Basic Local SEO",
                    "2 Social Media Posts/Week",
                    "Monthly Performance Report"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-colors">
                  Choose Starter
                </a>
              </div>

              {/* Growth */}
              <div className="bg-gradient-to-b from-blue-600 to-indigo-700 rounded-3xl p-8 border border-blue-500 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Growth Package</h3>
                  <p className="text-blue-100 text-sm h-10">Best for clinics, real estate, and growing local businesses.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">Rs 50,000</span>
                  <span className="text-blue-200">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Custom Website (Up to 10 Pages)",
                    "Advanced Local SEO & Citations",
                    "Google Business Profile Optimization",
                    "4 Social Media Posts/Week",
                    "Basic Facebook/Instagram Ads Setup",
                    "Website Maintenance",
                    "Bi-weekly Strategy Calls"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors">
                  Choose Growth
                </a>
              </div>

              {/* Premium */}
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
                  <p className="text-slate-400 text-sm h-10">Best for established restaurants, agencies, and larger companies.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">Rs 90,000</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "E-commerce or Advanced Website",
                    "Comprehensive SEO Strategy",
                    "Daily Social Media Management",
                    "Full Ad Campaign Management",
                    "Content Marketing (2 Blogs/mo)",
                    "Priority 24/7 Support",
                    "Dedicated Account Manager"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-colors">
                  Choose Premium
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Industries */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Falak Soft Solution?</h2>
                <p className="text-lg text-slate-600 mb-8">We are more than just a digital marketing agency; we are your growth partners. We understand the Pakistani market and know exactly what local businesses need to succeed.</p>
                
                <div className="space-y-6">
                  {[
                    { title: "Proven Results", desc: "We focus on ROI and actual business growth, not just vanity metrics.", icon: <LineChart className="w-6 h-6 text-emerald-600" /> },
                    { title: "Local Market Expertise", desc: "Deep understanding of Pakistani consumer behavior and local search trends.", icon: <Target className="w-6 h-6 text-blue-600" /> },
                    { title: "Transparent Reporting", desc: "Clear, honest reporting so you know exactly where your investment is going.", icon: <Search className="w-6 h-6 text-indigo-600" /> },
                    { title: "Dedicated Support", desc: "A team that is always available to answer your questions and adjust strategies.", icon: <ShieldCheck className="w-6 h-6 text-purple-600" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-slate-100 h-fit">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Industries We Help</h2>
                <p className="text-slate-600 mb-8">Tailored digital marketing services for local businesses across various sectors.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Restaurants & Cafes",
                    "Medical Clinics",
                    "Real Estate Agents",
                    "Photographers",
                    "Retail Shops",
                    "Law Firms",
                    "Salons & Spas",
                    "Home Services"
                  ].map((industry, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="font-medium text-slate-700">{industry}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      <img src="https://picsum.photos/seed/user1/100/100" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                      <img src="https://picsum.photos/seed/user2/100/100" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                      <img src="https://picsum.photos/seed/user3/100/100" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">Trusted by 50+ local businesses</div>
                  </div>
                  <p className="text-sm text-slate-600 italic">"Falak Soft Solution transformed our clinic's online presence. We saw a 40% increase in patient inquiries within 3 months." - Dr. Ahmed</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Simple 4-Step Process</h2>
              <p className="text-lg text-slate-600">We make growing your business online straightforward and stress-free.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>
              
              {[
                { step: "01", title: "Consultation", desc: "We discuss your business goals, target audience, and current online presence.", icon: <MessageSquare className="w-6 h-6 text-blue-600" /> },
                { step: "02", title: "Strategy", desc: "We create a custom digital marketing plan tailored to your specific needs and budget.", icon: <Target className="w-6 h-6 text-blue-600" /> },
                { step: "03", title: "Implementation", desc: "Our team executes the strategy, from website development to local SEO.", icon: <Wrench className="w-6 h-6 text-blue-600" /> },
                { step: "04", title: "Growth", desc: "We monitor, optimize, and report on your campaign's success as your business grows.", icon: <LineChart className="w-6 h-6 text-blue-600" /> }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full border-8 border-slate-50 shadow-md flex items-center justify-center mb-6 relative">
                    {item.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Everything you need to know about our digital marketing services.</p>
            </div>

            <div className="space-y-4">
              <FAQItem 
                question="What is included in your local SEO services in Pakistan?" 
                answer="Our local SEO services include Google Business Profile optimization, local citation building, on-page SEO for location-specific keywords, managing online reviews, and creating localized content to help your business rank higher in local search results."
              />
              <FAQItem 
                question="How long does it take to build a website?" 
                answer="For a standard business website (like our Starter or Growth packages), it typically takes 2 to 4 weeks from the initial consultation to launch. E-commerce or highly custom websites may take 6 to 8 weeks."
              />
              <FAQItem 
                question="Do I have to sign a long-term contract?" 
                answer="No, we believe in earning your business every month. Our digital marketing packages are billed month-to-month. However, we recommend committing to at least 3-6 months to see significant results from SEO and marketing efforts."
              />
              <FAQItem 
                question="Why is Google Business Profile optimization important?" 
                answer="A fully optimized Google Business Profile is crucial for local businesses. It's often the first thing customers see when they search for your services on Google Maps or Search. It helps build trust, displays your reviews, and significantly increases local foot traffic and calls."
              />
              <FAQItem 
                question="Are your digital marketing services affordable for small shops?" 
                answer="Yes! As an affordable digital marketing agency, we designed our Starter package specifically for small shops and new businesses. At Rs 25,000/month, it provides the essential tools needed to establish a professional online presence without breaking the bank."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/meeting/1920/1080?blur=4')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Grow Your Local Business?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact Falak Soft Solution today for a free consultation. Let's discuss how our digital marketing services can bring more customers to your door.
            </p>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-left max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                    <input type="text" id="business" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Your Shop/Clinic Name" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="0300 1234567" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested Service</label>
                    <select id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white">
                      <option>Starter Package</option>
                      <option>Growth Package</option>
                      <option>Premium Package</option>
                      <option>Website Development Only</option>
                      <option>Local SEO Only</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                  Get Your Free Consultation
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">No commitment required. We'll get back to you within 24 hours.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">Falak Soft Solution</span>
              </div>
              <p className="text-sm mb-4">Your trusted digital marketing agency for local businesses in Pakistan. We build websites and drive local traffic.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Local SEO Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Marketing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Google Business Profile</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing Packages</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">Our Process</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Pakistan</li>
                <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> hello@falaksoft.com</li>
                <li className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> +92 300 0000000</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Falak Soft Solution. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-slate-900 pr-8">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        )}
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
