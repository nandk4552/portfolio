import { PageInfo } from "../typings";
// frontend call

export const fetchpageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

  const data = await res.json();
  // type checking
  const pageInfo: PageInfo = await data.pageInfo;

  // console.log("fetching", pageInfo);
  return pageInfo;
};
