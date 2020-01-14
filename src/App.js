import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { getDimensions, scrollTo } from './utils';

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const partARef = useRef(null);
  const partBRef = useRef(null);
  const partCRef = useRef(null);

  const sectionRefs = [
    { section: 'partA', ref: partARef },
    { section: 'partB', ref: partBRef },
    { section: 'partC', ref: partCRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className="App">
      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${visibleSection === 'partA' ? 'selected' : ''}`}
              onClick={() => {
                scrollTo(partARef.current);
              }}
            >
              Part A
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === 'partB' ? 'selected' : ''}`}
              onClick={() => {
                scrollTo(partBRef.current);
              }}
            >
              Part B
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === 'partC' ? 'selected' : ''}`}
              onClick={() => {
                scrollTo(partCRef.current);
              }}
            >
              Part C
            </button>
          </div>
        </div>
        <div className="section" id="partA" ref={partARef} />
        <div className="section" id="partB" ref={partBRef} />
        <div className="section" id="partC" ref={partCRef} />
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}

export default App;

// import React, { useRef, useEffect, useState } from 'react';
// import './App.css';
// import { getDimensions, scrollTo } from './utils';

// function App() {
//   const [visibleSection, setVisibleSection] = useState();

//   const headerRef = useRef(null);
//   const headerSidebarRef = useRef(null);
//   const partARef = useRef(null);
//   const partBRef = useRef(null);
//   const partCRef = useRef(null);

//   const sectionRefs = [
//     { section: 'partA', ref: partARef },
//     { section: 'partB', ref: partBRef },
//     { section: 'partC', ref: partCRef },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       let headerHeight;
//       if (headerRef && headerRef.current) {
//         const { height: headerHeight } = getDimensions(headerRef.current);
//       } else {
//         const { height: headerHeight } = getDimensions(headerSidebarRef.current);
//       }

//       const scrollPosition = window.scrollY + headerHeight;

//       const selected = sectionRefs.find(({ section, ref }) => {
//         const ele = ref.current;
//         if (ele) {
//           const { offsetBottom, offsetTop } = getDimensions(ele);
//           return scrollPosition > offsetTop && scrollPosition < offsetBottom;
//         }
//       });
//       if (selected && selected.section !== visibleSection) {
//         setVisibleSection(selected.section);
//       }
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [visibleSection]);

//   return (
//     <div className="App">
//       <div className="sticky">
//         <div className="header_sidebar" ref={headerSidebarRef}>
//           <button
//             type="button"
//             className={`header_link`}
//             onClick={() => {
//               scrollTo(partARef.current);
//             }}
//           >
//             Part A
//           </button>
//           <button
//             type="button"
//             className={`header_link`}
//             onClick={() => {
//               scrollTo(partBRef.current);
//             }}
//           >
//             Part B
//           </button>
//           <button
//             type="button"
//             className={`header_link`}
//             onClick={() => {
//               scrollTo(partCRef.current);
//             }}
//           >
//             Part C
//           </button>
//         </div>
//       </div>
//       <div>
//         <div className="section" id="partA" ref={partARef} />
//         <div className="section" id="partB" ref={partBRef} />
//         <div className="section" id="partC" ref={partCRef} />
//       </div>
//     </div>
//   );
// }

// export default App;
