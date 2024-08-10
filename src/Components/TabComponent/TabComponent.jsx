import React, { useState, useEffect } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openAccordionTab, setOpenAccordionTab] = useState(null);

  const tabs = [
    { id: 1, name: 'BASIN AREA', content: [
        {
            subheading: 'WASHBASINS',
            items: [
              'Vessel Basin',
              'Undercounter Basin',
              'Wall Mount Basin',
              'Semi Recessed Basin',
              'Vanity Top Basin'
            ]
          },
          {
            subheading: 'FAUCETS',
            items: [
              'Single Control Faucets',
              'Tall Faucets',
              'Wall-Mount Faucets',
              'Widespread Faucets',
              'Bathtub Faucets'
            ]
          },
          {
            subheading: 'BATHROOM MIRRORS & CABINETS',
            items: [
              'Lighted Mirror',
              'Lighted Mirror Cabinet',
              'Non Lighted Mirror',
              'Non- Lighted Mirror Cabinet'
            ]
          }
      ] 
    },
    { id: 2, name: 'SHOWERING AREA', content: [
        {
            subheading: 'SHOWER DOORS',
            items: [
              'Pivot Shower Doors',
              'Sliding Shower Doors',
              'Bathscreen Shower Doors'
            ]
          },
          {
            subheading: 'SHOWERS',
            items: [
              'Rainpanels',
              'Rainheads',
              'Showerheads',
              'Hand showers',
              'Body Spray'
            ]
          },
          {
            subheading: 'DIVERTERS & TRIMS',
            items: [
              'Digital Control',
              'Manual Control',
              'Exposed Wall mixer'
            ]
          },
          {
            subheading: 'SHOWER FITTINGS',
            items: [
              'Handshower Hose',
              'Handshower Bracket',
              'Supply Elbow',
              'Slidebar',
              'Shower Arm',
              'Floor Drain'
            ]
          }
      ] 
    },
    { id: 3, name: 'TOILET AREA', content: [
        {
          subheading: 'SMART TOILETS',
          items: ['Floor Mount']
        },
        {
          subheading: 'TOILETS',
          items: [
            'Smart Toilet',
            'Wall Hung Toilets',
            'One Piece',
            'Two Piece',
            'Wall Hung With Exposed Tank'
          ]
        },
        {
          subheading: 'TOILET SEATS & BIDET SEATS',
          items: [
            'Electronic Bidet Seats',
            'Manual Bidet Seats',
            'Toilet Seats',
            'Bidet Attachment'
          ]
        },
        {
          subheading: 'CISTERNS & FLUSHING SOLUTIONS',
          items: [
            'Cisterns',
            'Face Plates',
            'Flush Valve'
          ]
        }
      ]
    },
    { id: 4, name: 'WELLNESS', content: [
        { subheading: 'STEAM', items: ['Steam Basin','Steam Bath'] },
        { subheading: 'BATHTUBS', items: ['Freestanding Bathtubs', 'Drop in Bathtubs', 'Alcove Bathtubs'] },
        { subheading: 'BATHTUB FILLERS', items: ['Freestanding', 'Deck Mount', 'Wall mount'] }
      ] 
    },
    { id: 5, name: 'BATHROOM ACCESSORIES', content: [
        { subheading: 'All Bathroom Accessories', items: ['Toilet Paper Holders', 'Robe Hooks', 'Towel Bars','Towel Rings', 'Soap dispensers', 'Shelves','Soap Dish', 'Grab bars', 'Brush Holder','Towel Shelf', 'Tumbler Holder'] },
        
      ] 
    },
    { id: 6, name: 'KITCHEN', content:[
        {subheading: 'Faucets',items: ['Deck Mount', 'Wall Mount', 'Pulldown'] },
    ] 
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (id) => {
    if (isMobile) {
      if (openAccordionTab === id) {
        setOpenAccordionTab(null); // Close the tab if it is already open
      } else {
        setOpenAccordionTab(id); // Open the clicked tab
      }
    } else {
      setSelectedTab(id);
    }
  };

  return (
    <div className="tab-component">
      <div className="toggle-bar" onClick={handleToggle}>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="tabs-container">
          {isMobile ? (
            tabs.map((tab) => (
              <div key={tab.id} className="accordion-tab">
                <div
                  className={`tab ${openAccordionTab === tab.id ? 'selected' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.name}
                  <span className="accordion-toggle-icon">
                    {openAccordionTab === tab.id ? '-' : '+'}
                  </span>
                </div>
                {openAccordionTab === tab.id && (
                  <div className="accordion-content">
                    <div className="subheading-container">
                      {tab.content.map((section, index) => (
                        <div key={index} className="subheading-section">
                          <h3>{section.subheading}</h3>
                          <ul>
                            {section.items.map((item, idx) => (
                              <li key={idx}>
                                <a href="#">{item}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <>
              <div className="tabs">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab ${selectedTab === tab.id ? 'selected' : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.name}
                  </div>
                ))}
              </div>
              {selectedTab !== null && (
                <div className="tab-content">
                  <div className="subheading-container">
                    {tabs.find((tab) => tab.id === selectedTab).content.map((section, index) => (
                      <div key={index} className="subheading-section">
                        <h3>{section.subheading}</h3>
                        <ul>
                          {section.items.map((item, idx) => (
                            <li key={idx}>
                              <a href="#">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TabComponent;
