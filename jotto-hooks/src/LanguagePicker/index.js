function LanguagePicker ({ setLanguage }) {
    const languages = [
        { code: 'en', symbol: '🇺🇸' },
        { code: 'emoji', symbol: '😊' },
    ]

    const languageIcons = languages.map( lang => 
        <span
            data-test="language-icon"
            key={ lang.code }
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