import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Home": "Home",
            "Find Job": "Find Job",
            "Find Employers": "Find Employers",
            "Dashboard": "Dashboard",
            "Job Alerts": "Job Alerts",
            "Customer Supports": "Customer Supports"
        }
    },
    am: {
        translation: {
            "Home": "ቤት",
            "Find Job": "ስራ ፈልግ",
            "Find Employers": "አማራጭ እንድር",
            "Dashboard": "ዳሽቦርድ",
            "Job Alerts": "ስራ መልእክት",
            "Customer Supports": "ደንበኞች ድጋፍ"
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;
