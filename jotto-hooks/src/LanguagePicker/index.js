function LanguagePicker ({ setLanguage }) {
    
    const languages = [
        { code: 'en', symbol: '🌈' },
        { code: 'emoji', symbol: '😊' },
    ]

    const languageIcons = languages.map( lang => 
        <span
            data-test="language-icon"
            key={ lang.code }
            onClick={ () => setLanguage(lang.code) }
            style={{ cursor: 'pointer' }}
        >
            { lang.symbol }
        </span>
    )

    return (
        <div data-test="language-picker">
            { languageIcons }

        </div>
    )
}

export default LanguagePicker
