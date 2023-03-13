export interface Theme {
  mode: string;
  primaryColor: string;
  onPrimaryColor: string;
  secondaryColor: string;
  onSecondaryColor: string;
  backgroundColor: string;
  onBackgroundColor: string;
  shadowColor: string;
}

export const lightTheme: Theme = {
  mode: "light",
  primaryColor: '#3C50E0', // nice
  onPrimaryColor: '#fff',
  secondaryColor: '#f1c40f',
  onSecondaryColor: '#000',
  backgroundColor: '#fff',
  onBackgroundColor: '#282828',
  shadowColor: 'grey',
};

export const darkTheme: Theme = {
  mode: "dark",
  primaryColor: '#3C50E0', // nice
  onPrimaryColor: '#fff',
  secondaryColor: '#f1c40f',
  onSecondaryColor: '#000',
  backgroundColor: '#1C2434', // nice
  onBackgroundColor: '#fff', // nice  darker #D9D9D9
  shadowColor: 'grey',
};
