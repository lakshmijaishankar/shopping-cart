import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValue = async <T>(key: string): Promise<T | undefined> => {
  let value: T;
  try {
    const rawValue = await AsyncStorage.getItem(key);
    if (rawValue) {
      value = JSON.parse(rawValue) as T;
      return value;
    }
  } catch (error) {
    console.error('Error getting the value from the async storage', error);
    return undefined;
  }
};

export const setValue = async <T>(item: T, key: string): Promise<void> => {
  AsyncStorage.setItem(key, JSON.stringify(item));
};
