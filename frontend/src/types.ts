import { RefObject } from 'react';

interface ComponentProps {
  setLoading: (arg: boolean | undefined) => void
}

export interface HeaderProps extends ComponentProps {
  ref: RefObject<HTMLDivElement>
}

export interface AboutProps extends ComponentProps {}

export interface HomeProps extends ComponentProps {}

export interface ExperienceProps extends ComponentProps {}

export interface FooterProps extends ComponentProps {}