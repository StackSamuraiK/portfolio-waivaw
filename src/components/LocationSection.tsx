
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Mail } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="location">
      {/* Map Illustration */}
      <div className="relative group order-2 md:order-1">
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-12 overflow-hidden shadow-2xl">
          {/* Simple Stylized SVG Map of India */}
          <svg viewBox="0 0 500 600" className="w-full h-auto opacity-20 dark:opacity-10 fill-slate-900 dark:fill-white">
            <path d="M124.6,442.2c-5.4-0.9-10.9-1.8-16.3-2.6c-4.4-0.7-8.9-1.3-13.3-2c-3.7-0.6-7.4-1.1-11.1-1.7c-4.6-0.7-9.3-1.4-13.9-2.1c-2.8-0.4-5.5-0.8-8.3-1.3c-2.4-0.4-4.8-0.7-7.2-1.1l-2.4-0.4l-2.4-0.4c-4.4-0.7-8.8-1.4-13.2-2.1l-1.6-0.3l-1.6-0.3c-2.5-0.4-5.1-0.9-7.6-1.4C19.9,425.8,15,425,10.2,424.3l-0.2,0c-1.3-0.2-2.5-0.4-3.8-0.6c-0.2,0-0.4-0.1-0.6-0.1l-3.2-0.6l3.2-1.6l1.6-0.8c2.4-1.3,4.8-2.5,7.2-3.8c4-2.1,8.1-4.2,12.1-6.3c1.9-1,3.8-2,5.7-3.1c4.5-2.5,9.1-5.1,13.6-7.7c3.9-2.2,7.7-4.4,11.5-6.6c1.2-0.7,2.4-1.4,3.5-2.1c1.4-0.8,2.8-1.6,4.2-2.4c3.3-1.9,6.7-3.9,10-5.8c2.4-1.4,4.9-2.8,7.3-4.3c3.1-1.8,6.2-3.7,9.3-5.5c4-2.4,8-4.8,12-7.2c3.4-2.1,6.8-4.1,10.2-6.2c0.2-0.1,0.4-0.2,0.6-0.3l2-1.2l1-0.6l1-0.6l2-1.2c4.1-2.5,8.2-5.1,12.3-7.6c3.2-1.9,6.3-3.9,9.5-5.9l1-0.6l1-0.6l2.1-1.3c3.4-2.1,6.8-4.2,10.2-6.3c3.6-2.2,7.2-4.5,10.8-6.7c3.1-2,6.3-4,9.4-6c3.1-2,6.3-4.1,9.4-6.1c0.1-0.1,0.2-0.1,0.3-0.2l1.6-1c2.1-1.4,4.2-2.7,6.3-4.1c3.1-2,6.1-4.1,9.2-6.1l1.5-1l1.5-1c3.1-2.1,6.2-4.2,9.3-6.3c3.1-2.1,6.1-4.1,9.2-6.2l1.5-1l1.5-1c3.1-2,6.1-4.1,9.2-6.1c2.1-1.4,4.1-2.8,6.2-4.2l1.5-1.1c2.1-1.4,4.1-2.8,6.2-4.2l1.5-1.1c2.1-1.4,4.1-2.8,6.1-4.2l1.5-1.1c2-1.4,4.1-2.8,6.1-4.2c3-2.1,6.1-4.2,9.1-6.3c3-2.1,6-4.2,9.1-6.3l1.5-1l1.5-1.1c3.1-2.1,6.1-4.2,9.2-6.4c2.8-1.9,5.5-3.9,8.3-5.8c3.1-2.2,6.2-4.3,9.3-6.5c3.1-2.1,6.1-4.3,9.2-6.4c3.1-2.2,6.1-4.3,9.2-6.5c3.1-2.2,6.1-4.3,9.2-6.5c3.1-2.1,6.1-4.3,9.2-6.5c3.1-2.2,6.1-4.3,9.2-6.5c2.9-2,5.8-4.1,8.6-6.1c2.2-1.6,4.4-3.1,6.6-4.7l0.8-0.6l0.8-0.6c2.2-1.6,4.4-3.1,6.6-4.7l0.8-0.6l0.8-0.6c2.1-1.5,4.3-3.1,6.4-4.6c2.4-1.7,4.8-3.4,7.2-5.1c3.5-2.5,7-5.1,10.6-7.6c3.2-2.3,6.3-4.6,9.5-6.9c3.2-2.3,6.4-4.6,9.5-7c3.1-2.3,6.2-4.5,9.3-6.8c3-2.2,6-4.4,9-6.6c3.1-2.3,6.2-4.6,9.3-6.9c1.5-1.1,3.1-2.3,4.6-3.4l0.8-0.6l0.8-0.6c2.3-1.7,4.6-3.4,6.9-5.1c3.5-2.6,7.1-5.3,10.6-7.9c1.3-1,2.6-1.9,3.9-2.9c1.1-0.8,2.2-1.7,3.3-2.5c4.7-3.5,9.4-7,14.2-10.6c3.5-2.6,7.1-5.3,10.6-7.9c2.3-1.7,4.6-3.5,6.9-5.2c4.1-3.1,8.3-6.2,12.4-9.3c3.6-2.7,7.2-5.4,10.8-8.1c4.5-3.4,9-6.8,13.6-10.2l1.6-1.2l1.6-1.2c3.5-2.7,7.1-5.3,10.6-8c3.2-2.4,6.4-4.8,9.5-7.3c3-2.3,6-4.6,9.1-6.9c2.7-2.1,5.5-4.2,8.2-6.3c3.1-2.4,6.3-4.7,9.4-7.1c3.1-2.3,6.2-4.7,9.3-7.1l1.5-1.1l1.5-1.1c3.1-2.4,6.2-4.7,9.3-7.1c3.1-2.4,6.2-4.7,9.2-7.1l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3-2.3,6-4.6,9-6.9c2.8-2.1,5.5-4.2,8.3-6.4c3.1-2.4,6.1-4.7,9.2-7.1c3-2.3,6-4.6,9-7c3-2.3,6-4.6,9-6.9c3.1-2.4,6.2-4.7,9.3-7.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.2-4.7,9.3-7.1l1.5-1.2l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3-2.3,6.1-4.7,9.1-7c2.8-2.1,5.6-4.3,8.4-6.4c3.1-2.4,6.2-4.7,9.3-7.1c3-2.3,6.1-4.7,9.1-7c2.8-2.1,5.5-4.2,8.3-6.4c3.1-2.4,6.1-4.7,9.2-7.1l1.5-1.1l1.5-1.1l3.1-2.4c1-0.8,2.1-1.6,3.1-2.4l1.5-1.2l1.5-1.2l3.1-2.4l1.5-1.2l1.5-1.2c3-2.4,6.1-4.7,9.1-7.1c2.8-2.2,5.6-4.3,8.4-6.5c3.1-2.4,6.1-4.7,9.2-7.1l1.5-1.2l1.5-1.2l3.1-2.4l1.5-1.2l1.5-1.2c3-2.4,6.1-4.7,9.1-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.2c3.1-2.4,6.1-4.7,9.2-7.1c3-2.4,6.1-4.7,9.1-7.1l1.5-1.2l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.2c3-2.4,6.1-4.7,9.1-7.1l1.5-1.2l1.5-1.2c3-2.4,6.1-4.7,9.1-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1l1.5-1.2l1.5-1.1l3.1-2.4l1.5-1.2l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2l1.5-1.1l1.5-1.1l3.1-2.4l1.5-1.1l1.5-1.1c3.1-2.4,6.1-4.7,9.2-7.1c3.1-2.4,6.1-4.7,9.2-7.2" />
            <rect x="340" y="320" width="120" height="150" className="fill-blue-500/20" />
          </svg>
          
          {/* Pulsing Pin on Kolkata */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-2/3 right-1/4"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -inset-2 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
              <div className="relative p-3 bg-blue-500 text-white rounded-full shadow-lg">
                <MapPin size={24} />
              </div>
            </div>
          </motion.div>
          
          <div className="absolute bottom-10 left-10">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1">Elite Training HQ</div>
            <div className="text-2xl font-black uppercase tracking-tighter">Kolkata, WB</div>
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="space-y-8 order-1 md:order-2">
        <div className="space-y-4">
          <h2 className="text-5xl font-black leading-[0.9] uppercase tracking-tighter">Born & Trained in <br /><span className="text-blue-500 italic">The City of Joy.</span></h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            From the local gyms of Kolkata to international platforms, my journey is rooted in the discipline of my hometown. I offer specialized coaching and professional modeling globally from this base.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Navigation size={20} />
            </div>
            <div>
              <div className="font-bold uppercase text-xs tracking-widest">Available</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Campaigns & Contests</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-bold uppercase text-xs tracking-widest">Connect</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">athlete@arunava.fit</div>
            </div>
          </div>
        </div>

        <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-2xl hover:-translate-y-1 transition-all">
          Book Sponsorship
        </button>
      </div>
    </section>
  );
};

export default LocationSection;
