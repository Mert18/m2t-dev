import { usePathname } from 'next/navigation'

const useLanguage = () => {
  const pathname = usePathname()

  if (pathname.includes('/tr')) {
    return 'tr';
  }

  if (pathname.includes('/en')) {
    return 'en';
  }

  return 'tr';
};

export default useLanguage;