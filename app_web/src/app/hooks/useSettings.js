import { useContext } from 'react';
import settingsContext from '../contexts/SettingsContext';

const useSettings = () => useContext(settingsContext);

export default useSettings;