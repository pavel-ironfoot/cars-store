import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { DropDownMenuProps } from '../../common/types-and-interfaces';

export const DropDownMenu:React.FC<DropDownMenuProps> = ({setTest}) => {
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
    setTest(true);
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
