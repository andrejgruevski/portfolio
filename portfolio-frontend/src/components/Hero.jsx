import React from "react";
import profileImg from "../assets/profile.JPG";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent px-8 overflow-hidden text-white">
            {/* Лебдечки точки */}
            <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
                {[...Array(40)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Содржина */}
            <div className="z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-6xl gap-16">
                {/* Лева страна - крената погоре */}
                <div className="flex-1 space-y-6 mt-[-7rem] lg:mt-0">
                    <div className="inline-block px-6 py-2 rounded-full bg-white/10 text-white text-sm shadow-md backdrop-blur-md border border-white/20">
                        ⚡ Hello, I'm
                    </div>
                    <h1 className="text-6xl font-bold leading-tight text-white">Andrej</h1>
                    <p className="text-lg text-white/90">Full Stack Developer</p>

                    <div className="flex gap-4 pt-4">
                        <button className="bg-primary/90 text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary transition">
                            View My Work →
                        </button>
                        <button className="border border-white/30 px-6 py-3 rounded-full text-white hover:bg-white/10 transition">
                            Get In Touch ✯
                        </button>
                    </div>
                </div>

                {/* Десна страна со кружен background */}
                <div className="flex-1 flex justify-center items-center relative mt-[-3rem]">
                    <div className="absolute w-96 h-96 bg-gradient-to-br from-accent via-secondary to-primary rounded-full blur-3xl opacity-40 z-0" />
                    <div className="relative p-2 rounded-[2rem] border-4 border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.4)] z-10">
                        <span className="absolute top-0 left-0 w-6 h-6 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <span className="absolute bottom-0 right-0 w-6 h-6 bg-secondary rounded-full translate-x-1/2 translate-y-1/2" />
                        <span className="absolute bottom-0 left-1/2 w-8 h-8 bg-primary/40 rounded-full -translate-x-1/2 translate-y-1/2 blur-sm" />
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-80 h-80 object-cover rounded-[1.5rem]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
