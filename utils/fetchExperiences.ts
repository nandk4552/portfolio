import { Experience } from "../typings";
// frontend call

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  const data = await res.json();
  // type checking
  const experiences: Experience[] = data.experiences;

  //   console.log("fetching", Experience);
  return experiences;
};
