interface PageProps {
  url: string | string[] | undefined;
}

const Page = ({ params }: { params: PageProps }) => {
  console.log(params);
};
export default Page;
