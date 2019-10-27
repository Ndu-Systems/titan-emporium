

// modelled after Valve
export class ScrewMachinesModel {
  id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  imageName?: string;
  details?: string;
  tableHeadings?: Array<string>;
  tableRows?: any[][];
  tableAbbreviations?: string;
  points?: Array<string>;
}

export class FiniScrew {
  id: string;
  heading?: string;
  headerImage?: string;
  tables?: Array<ScrewMachinesModel>;
}
