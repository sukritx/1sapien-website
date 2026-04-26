export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  isTitle?: boolean;
  submenu?: Menu[];
};
