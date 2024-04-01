import React, { useState } from 'react';
import "./Recommended.css";
import ProductButtons from '../components/ProductButtons';

function Recommended({ handleRecommendedClick }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (company) => {
    setSelectedOption(company);
    handleRecommendedClick(company);
  };

  return (
    <div>
      <h2 className="recommended-title" style={{color:'#34495E', fontSize:'2rem'}}>
        Recommended
      </h2>
      <div className="recommended-flex">
        <ProductButtons 
          onClickHandler={() => handleClick('')} 
          value="" 
          title="All" 
          selected={selectedOption === ""}
        />
        <ProductButtons 
          onClickHandler={() => handleClick('Bonkers')} 
          value="Bonkers" 
          title="Bonkers" 
          selected={selectedOption === "Bonkers"} 
        />
        <ProductButtons 
          onClickHandler={() => handleClick('Blitz')} 
          value="Blitz" 
          title="Blitz" 
          selected={selectedOption === "Blitz"} 
        />
        <ProductButtons 
          onClickHandler={() => handleClick('Pedigree')} 
          value="Pedigree" 
          title="Pedigree" 
          selected={selectedOption === "Pedigree"} 
        />
        <ProductButtons 
          onClickHandler={() => handleClick('Eimeli')} 
          value="Eimeli" 
          title="Eimeli" 
          selected={selectedOption === "Eimeli"} 
        />
      </div>
    </div>
  );
}

export default Recommended;
