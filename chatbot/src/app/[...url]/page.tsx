interface PageProps {
  url: string | string[] | undefined;
}

const Page = ({ params }: { params: PageProps }) => {
    const reconstructedUrl = reconstructUrl(url: params.url as string[]);
  console.log(params);
  await ragChat.context.add({
    type: "html",
    source: 
  })


return 

};
export default Page;
