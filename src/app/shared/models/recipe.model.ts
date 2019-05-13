export interface RecipeModel {
  id?: number;
  author?: string;
  title: string;
  desc: string;
  components: Array<string>;
}
