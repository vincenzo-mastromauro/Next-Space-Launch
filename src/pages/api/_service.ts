import { Launch, LaunchAPIresponse } from "@/types/launchType";

// const BASE_URL = "https://spacelaunchnow.me/api/ll/2.1.0/launch/";
const BASE_URL = "https://fdo.rocketlaunch.live/json/launches/next/5";

//call the api
const getLaunches = async () => {
  console.time("getLaunches");
  const res = await fetch(BASE_URL);
  const data: LaunchAPIresponse = (await res.json()) as LaunchAPIresponse;
  console.log(data);

  const launches: Launch[] = data.result.map((launch) => {
    return {
      id: launch.id,
      name: launch.name,
      slug: launch.slug,
      launch_description: launch.launch_description,
      provider: {
        name: launch.provider.name,
      },
      vehicle: {
        name: launch.vehicle.name,
      },
      pad: {
        name: launch.pad.name,
        location: {
          name: launch.pad.location.name,
          statename: launch.pad.location.statename,
        },
      },
      t0: launch.t0,
    };
  });

  console.timeEnd("getLaunches");
  return launches;
};
export { getLaunches };
