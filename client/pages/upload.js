import React from "react";
import { getSession, useSession } from "next-auth/react";
import Uploadforum from "./Components/Uploadforum";

function Upload() {
  const { data: session } = useSession();
  return (
    <div>
      <Uploadforum session={session} />
    </div>
  );
}

export async function getServerSideProps(context) {

  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    }
  }
}
export default Upload;