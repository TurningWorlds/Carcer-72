import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Target, Clock, Award } from 'lucide-react';

const timeline = [
  { year: "2022", event: "Server concept developed", description: "The vision for an authentic 1970s Carcer City experience begins." },
  { year: "2023", event: "Alpha launch", description: "First players enter the streets of Carcer City." },
  { year: "2023", event: "Major faction system update", description: "Complete overhaul of gang territories and faction mechanics." },
  { year: "2024", event: "Full release", description: "Carcer '72 officially launches with 50+ districts." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.p 
            className="text-amber-500 tracking-[0.3em] uppercase text-xs mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our Story
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-amber-500">Carcer '72</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Born from a passion for authentic roleplay and the gritty atmosphere of 1970s America, 
            Carcer '72 brings the infamous city to life like never before.
          </motion.p>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-amber-500 tracking-[0.3em] uppercase text-xs mb-4">The Vision</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A World That Feels <span className="text-amber-500">Real</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                While other servers focus on modern settings and fast-paced action, we chose a different path. 
                Carcer '72 is built on the foundation of deep, meaningful roleplay where every interaction matters.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Set in 1972, players experience a world without cell phones, without surveillance cameras, 
                without modern forensics. A world where deals are sealed with handshakes, where reputation 
                is everything, and where the streets have long memories.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our development team consists of history enthusiasts, roleplay veterans, and talented scripters 
                who share a singular vision: creating the most immersive 1970s experience possible.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80"
                alt="1970s City Street"
                className="w-full grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "247+", label: "Discord Members" },
              { icon: MapPin, value: "15+", label: "Unique Districts" },
              { icon: Clock, value: "99.8%", label: "Server Uptime" },
              { icon: Award, value: "#1", label: "Immersive RP" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-6 bg-white/[0.02] border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* The Setting */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.3em] uppercase text-xs mb-4">The Setting</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Carcer City, <span className="text-amber-500">1972</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Economy",
                description: "Nixon's price controls, Vietnam war spending, and the oil crisis loom. Work hard or work dirty—those are your options."
              },
              {
                title: "The Politics",
                description: "Corruption runs deep. City Hall is owned by the mob, the police are on payroll, and elections are bought and sold."
              },
              {
                title: "The Streets",
                description: "Ethnic tensions, gang warfare, and urban decay define daily life. Every block has its own rules and rulers."
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-8 bg-white/[0.02] border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-white text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
