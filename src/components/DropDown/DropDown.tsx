import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

interface DropDownMenuProps {
  setLanguage:(value:string)=>void;
}
export const DropDownMenu:React.FC<DropDownMenuProps> = ({setLanguage}) => {
  const [selectedOption, setSelectedOption] = useState<string>(() => {
    const storedOption = localStorage.getItem('carsLanguage');
    return storedOption || 'en';
  });

  const { t, i18n } = useTranslation();

  const handleOptionChange = (newOption: string) => {
    setSelectedOption(newOption);
    i18n.changeLanguage(newOption);
    localStorage.setItem('carsLanguage', newOption);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedOption);
    setLanguage(selectedOption)
    console.log('use effect useeeeeeeeeeeeee');
  }, [selectedOption, i18n]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {selectedOption === 'en' ? 'EN' : 'UA'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionChange('en')}>EN</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionChange('ua')}>UA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
