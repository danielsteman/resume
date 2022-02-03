interface ComponentProps {
  setLoading: (arg: boolean | undefined) => void
}

export interface HeaderProps extends ComponentProps {
  refs: RefMap
  handleRef: (ref: any) => void
}

export interface AboutProps extends ComponentProps {}

export interface HomeProps extends ComponentProps {}

export interface ExperienceProps extends ComponentProps {}

export interface FooterProps extends ComponentProps {}

export interface SpotifyProjectProps extends ComponentProps {
  projectsRef: React.RefObject<HTMLDivElement>
}

export interface SpotifyPIProps extends ComponentProps {}

export interface SpotifyPDProps extends ComponentProps {}

export interface SocialsProps extends ComponentProps {}

export interface RefMap {
  [key: string]: React.RefObject<HTMLDivElement>;
}

interface NavigationItemProps {
  navigation: Array<string | undefined>
}

export interface NavigationProps {
  items: NavigationItemProps
  handleRef: (ref: any) => void
  refs: RefMap
}
