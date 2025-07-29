import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  LanguagesIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const buttonColors = ['blue', 'green', 'red', 'gray', 'yellow'] as const;

function LandingPage() {
  const { t, i18n } = useTranslation('LandingPage');

  const handleChangeLanguage = () => {
    const lang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(lang);
  };

  return (
    <div className='flex flex-col gap-2 p-2'>
      <p>Landing Page</p>
      <div className='flex flex-col gap-2'>
        {buttonColors.map((color) => (
          <div key={color} className='flex flex-row gap-2'>
            <Button color={color}>
              <FolderOpenIcon />
              {t('button')}
            </Button>
            <Button color={color} variant='soft'>
              <FolderIcon />
              {t('button')}
            </Button>
            <Button color={color} disabled>
              {t('button')}
            </Button>
            <Button color={color} loading>
              {t('button')}
            </Button>
            <Button size='icon' variant='filled' color={color}>
              <FolderIcon />
            </Button>
            <Button size='icon' variant='soft' color={color}>
              <FileIcon />
            </Button>
            <Button size='icon' variant='soft' color={color} loading>
              <FileIcon />
            </Button>
          </div>
        ))}
      </div>
      <div className='flex flex-row gap-1 w-xl'>
        <Input placeholder={t('placeholder')} />
        <Button>{t('search_button')}</Button>
      </div>
      <div>
        <Button variant='soft' color='gray' onClick={handleChangeLanguage}>
          <LanguagesIcon />
          {t('change_language_button')}
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
