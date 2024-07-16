// import Subscription from "./Subscription";
import Form from "./Form";
import Header from "./Header";
const PostJob = () => {
  return (
    <>
      <Header ispost={true} />
      <main className="mt-40 w-full">
        {/* <Subscription /> */}
        <Form/>
      </main>
    </>
  );
};

export default PostJob;
