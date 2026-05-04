import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// 1. Data-Driven Approach: Manage skills in an array. Much cleaner!
const skillsData = [
  { id: 1, name: 'HTML', src: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png' },
  { id: 2, name: 'JavaScript', src: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png' },
  { id: 3, name: 'CSS', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png' },
  { id: 4, name: 'React', src: 'http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png' },
  { id: 5, name: 'Node.js', src: 'https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png' },
  { id: 6, name: 'GSAP', src: 'https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png' },
  { id: 7, name: 'MongoDb', src: 'https://miro.medium.com/v2/resize:fit:1200/1*ty8m8Y3dzgD6P5Xc17gbYw.jpeg' },
  { id: 8, name: 'Python', src: 'https://1.bp.blogspot.com/-bJapstoiThM/XtpvkGBHPKI/AAAAAAAAAqE/Ume0qNfFwk0JSwXZ9qjnB3WKN9dSofeCgCK4BGAsYHg/s1280/language-2024210_1280.png' }, // Replace with actual Tailwind logo URL
  { id: 9, name: 'Tailwind CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042' },
  { id: 10, name: 'Flutter', src: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/flutter_logo-freelogovectors.net_.png' },
];

const Skills = () => {
    const containerRef = useRef();
useGSAP(() => {
    const skillItems = gsap.utils.toArray('.skill-card');
    
    gsap.set(skillItems, { y: 100, opacity: 0 });
    gsap.to(skillItems, {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 30%', 
        }
    });
    const leftItems = skillItems.filter((_, index) => index <5);
    const rightItems = skillItems.filter((_, index) => index >=5);

    const exitScrollTrigger = {
         defaults: {
            immediateRender: false     },
        trigger: containerRef.current,
        start: "bottom 50%",
        end: "+=300",
        scrub: 1,
    };

    gsap.to(leftItems, {
        x: -1500,
        opacity: 1,
        duration : 1,
       
        scrollTrigger: exitScrollTrigger
    });

    gsap.to(rightItems, {
        x: 1500,
        opacity: 1,
        duration : 2,
       
        scrollTrigger: exitScrollTrigger
    }, "<");

}, { scope: containerRef });

    return (
        <div>
            <div className="flex items-center bg-scroll h-24 w-full justify-center bg-[url('https://png.pngtree.com/background/20230425/original/pngtree-closeup-of-a-wood-texture-picture-image_2473004.jpg')]">
                <h1 className='text-white text-4xl font-bold'>My Skills</h1>
            </div>
            
            <div ref={containerRef} className="bg-[url('./assets/strange.png')] bg-cover bg-fixed min-h-screen w-full pt-80 px-4">
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-10 max-w-6xl mx-auto'>
                    {skillsData.map(skill => (
                        <div key={skill.id} className="skill-card flex flex-col items-center text-center">
                            <div className="
                                w-24 h-24 lg:w-32 lg:h-32 
                                bg-transparent 
                                rounded-full
                                border-double
                                border-2 border-amber-500 
                                shadow-lg shadow-amber-600/20
                                flex items-center justify-center
                                transition-transform duration-300 hover:scale-110 hover:shadow-amber-400/50
                            ">
                                <img 
                                    src={skill.src} 
                                    alt={`${skill.name} icon`}
                                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                                />
                            </div>
                            {/* 4. Text Label */}
                            <p className="text-white font-semibold mt-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;