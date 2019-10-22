export interface Valve {

  id: string;
  name?: string;
  secondaryHeading?: string;
  imageUrl?: string;
  imageName?: string;
  details?: Array<string>;
  tableHeadings?: Array<string>;
  tableRows?: any[][];
  tableAbbrevations?: string;
}

export interface ProductGroup {
  name: string;
  data: Array<Valve>;
}
