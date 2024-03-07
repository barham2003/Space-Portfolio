import { Suspense } from "react";
import EditForm from "./edit-form";
import { Protect } from "@/actions";

export default async function page({ params }: { params: { id: string } }) {
  await Protect();

  return (
    <main>
      <Suspense fallback={null}>
        <EditForm id={+params.id} />
      </Suspense>
    </main>
  );
}
