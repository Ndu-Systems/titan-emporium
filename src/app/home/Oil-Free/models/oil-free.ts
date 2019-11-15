
export class TableData {
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

export class Item {
  subHeader?: string;
  text?: Array<string>;
}

export class Section {
  header?: string;
  items?: Array<Item>;
  images?: Array<string>;
}
export class OilFree {
  id: string;
  heading?: string;
  headerImage?: string;
  headerPoints?: Array<string>;
  tables?: Array<TableData>;
  section?: Array<Section>;
  images?: Array<string>;
}
