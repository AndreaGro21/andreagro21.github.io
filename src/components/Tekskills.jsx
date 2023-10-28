import React, { useState } from 'react';

const tagImages = require.context('../assets/tag-img');
const imageList = tagImages.keys().map(image => tagImages(image));

const tooltips = [
  "JavaScript",
  "css",
  "React",
  "Redux",
  "Bootstrap",
  "Sass",
  "Html",
  "Node",
  "Git",
  "Figma",
  "GitHub",
];

export default function TekSkills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <article className="tec-skills">
      {imageList.map((image, index) => (
        <div key={index} className="rotating-image" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
          <img key={index} src={image} alt={`langage-${image}`} />
          {hoveredIndex === index && (
            <p className="tooltip">
              {tooltips[index]}
            </p>
          )}
        </div>
      ))}
    </article>
  );
}
