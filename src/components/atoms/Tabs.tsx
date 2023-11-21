import { useState, useEffect, useRef } from 'react';

const Tabs = ({children}:any) => {
 const [activeTab, setActiveTab] = useState(0);
 const iqual = activeTab
 const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

 const handleClick = (index: number) => {
  setActiveTab(index);
 };

 const tabs = [
  {
    index:0,
    text: "Protege a tu Auto"
  },
  {
    index:1,
    text: "Protege a tu Auto 2"
  },
  {
    index:2,
    text: "Protege a tu Auto 3"
  }
]

useEffect(() => {
  tabRefs.current[activeTab]?.focus();
  }, [activeTab]);

 return (
  <div className='tabs__container'>
    <div className="tabs__list">
      {tabs.map((tab, i) => (<button key={i} ref={(ref) => tabRefs.current[tab.index] = ref} onClick={() => handleClick(tab.index)} className={`tabs__list-item `}>{tab.text}</button>))}
    </div>
    <div className="tabs__content">
      {activeTab === iqual && <>{children}</>}
    </div>
  </div>
 );
};

export default Tabs;

