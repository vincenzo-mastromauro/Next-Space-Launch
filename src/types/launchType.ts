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
  provider: {
    name: string;
  };
  vehicle: {
    name: string;
  };
  pad: {
    name: string;
    location: {
      name: string;
      statename: string;
    };
  };
  t0: string;
}
