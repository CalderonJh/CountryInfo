type ValidRoutes = 'name' | 'capital' | 'region' | 'alpha' | 'subregion';

export interface RadioButton {
  title: string;
  link: string;
  route: ValidRoutes;
}
