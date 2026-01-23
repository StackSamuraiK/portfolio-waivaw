
import React from 'react';
import { motion } from 'framer-motion';

const ImageSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SubSection = ({ title, count, startSeed, category }: { title: string, count: number, startSeed: number, category: string }) => (
    <div className="space-y-6" id="work">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{title}</h3>
        <div className="h-[2px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">({category})</span>
      </div>
      <div className={`grid gap-4 ${count === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {Array.from({ length: count }).map((_, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[3/4]"
          >
            <img 
              src={`https://picsum.photos/seed/${startSeed + i}/800/1067`} 
              alt={`${title} shot ${i}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-widest">View Gallery</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="space-y-32"
    >
      <SubSection title="Physique & Stage" count={3} startSeed={550} category="Natural Bodybuilding" />
      <SubSection title="Editorial Works" count={4} startSeed={660} category="Fitness Modeling" />
      <SubSection title="Training & Grits" count={4} startSeed={770} category="Raw Discipline" />
    </motion.section>
  );
};

export default ImageSection;
