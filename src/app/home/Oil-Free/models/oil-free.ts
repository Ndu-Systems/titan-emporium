
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
export class OilFree {
  id: string;
  heading?: string;
  headerImage?: string;
  headerPoints?: Array<string>;
  tables?: Array<TableData>;

}
