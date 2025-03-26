// import React, { useEffect, useRef } from 'react';

// const PageSection = ({ id, children, bgColor = 'bg-white' }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section 
//       id={id} 
//       ref={sectionRef} 
//       className={`section ${bgColor} fade-in`}
//     >
//       <div className="container mx-auto px-4">
//         {children}
//       </div>
//     </section>
//   );
// };

// export default PageSection;