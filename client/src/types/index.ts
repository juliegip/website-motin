import { MapComponent } from '@/components/mapComponent/MapComponent';
import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  href?: string;
  type?: "url" | "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface BaseProps {
  lat: number;
  lng: number;
  nom: string;
  adresse: string;
  tel: string;
  fax?: string;
  email: string;
  photo: string;
  horaires: string;
  agent: boolean;
}

export interface BaseListProps {
  bases: BaseProps[];
  onMarkerHover: (index: number | null) => void;
  highlightedBase: number | null;
}

export interface ActusListProps {
  actus: any[];
  onActuDeleted: () => void;
}

export interface RecrutementListProps {
  recrutements: any[];
  onRecrutementDeleted: () => void;
}

export interface ContactEmailProps {
  name: string;
  phone: string;
  email: string;
  company: string;
  town: string;
  title: string;
  message: string;
}

export interface NewsProps {
  id: string;
  media: string;
  title: string;
  category: string;
  date: string;
  content: string;
}

export interface NewsCardProps {
  news: NewsProps;
}
export interface HideOnScrollProps {
  children: React.ReactElement;
}

export interface LoadingProps {
  open: boolean;
}

export interface MapComponentProps {
  geoData: { lat: number; lng: number };
  highlightedBase: number | null;
  onMarkerHover: (index: number | null) => void;
}

export interface LocationCardProps {
  locationName: string;
  locationAdress: string;
  locationPhone: string;
  locationImage: string;
  GMapsURL: string;
  mail: string;
}
