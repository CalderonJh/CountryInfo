type ValidRoutes = 'name' | 'capital' | 'region' | 'alpha';

export interface RadioButton {
  title: string;
  link: string;
  route: ValidRoutes;
}
