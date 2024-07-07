import { useState } from 'react'

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en-UK')

  const changeLanguage = (e) => {
    setLanguage(e.target.value)
    // Implement your language change logic here
  }

  return (
    <div className="relative  md:inline-block text-left">
      <select
        value={language}
        onChange={changeLanguage}
        className="inline-flex justify-center w-full rounded-md border border-none shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        id="language-select"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <option value="en-UK">English (UK)</option>
        <option value="am">Amharic</option>
        <option value="om">Oromo</option>
      </select>
    </div>
  )
}

export default LanguageSelector
