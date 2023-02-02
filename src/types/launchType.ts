export interface LaunchAPIresponse {
  count: number;
  next: string;
  previous: string;
  result: Launch[];
}

//launch type
export interface Launch {
  id: number;
  name: string;
  slug: string;
  launch_description: string;
}
