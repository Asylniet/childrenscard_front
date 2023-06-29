import React from "react";

export const ChooseLanguage: React.FC = () => {
    const languages = ['Рус', 'Қаз'];
    const [activeId, setActiveId] = React.useState(0);
    return (
        <div className='choose-language flex'>
            {languages.map((language, index) => (
                <span 
                    key={index} 
                    className={`languageOption option ${activeId === index ? ' active' : ''}`} onClick={() => setActiveId(index)}>
                    {language}
                </span>
            ))}
        </div>
    )
}