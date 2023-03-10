import React, { createContext, useState, useEffect } from 'react';

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
  primaryColor: 'purple',
  onPrimaryColor: '#fff',
  secondaryColor: '#f1c40f',
  onSecondaryColor: '#000',
  backgroundColor: '#fff',
  onBackgroundColor: '#282828',
  shadowColor: 'grey',
};

export const darkTheme: Theme = {
  mode: "dark",
  primaryColor: '#4d2177',
  onPrimaryColor: '#fff',
  secondaryColor: '#f1c40f',
  onSecondaryColor: '#000',
  backgroundColor: '#282828',
  onBackgroundColor: '#fff',
  shadowColor: 'grey',
};
